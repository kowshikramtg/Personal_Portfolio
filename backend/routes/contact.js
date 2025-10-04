const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Create transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// POST route to handle contact form submission
router.post('/submit', async (req, res) => {
  try {
    const { name, email, role, wantMeet, date, time, description } = req.body;

    // Validation
    if (!name || !email || !role || !wantMeet || !description) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Additional validation for meeting requests
    if (wantMeet === 'yes' && (!date || !time)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide date and time for the meeting' 
      });
    }

    // Create new contact entry
    const newContact = new Contact({
      name,
      email,
      role,
      wantMeet,
      date: wantMeet === 'yes' ? new Date(date) : null,
      time: wantMeet === 'yes' ? time : null,
      description
    });

    // Save to database
    const savedContact = await newContact.save();

    // Send email notification
    const transporter = createTransporter();
    
    const meetingInfo = wantMeet === 'yes' ? `
      Meeting Requested: Yes
      Preferred Date: ${date}
      Preferred Time: ${time}
    ` : 'Meeting Requested: No';

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Meeting Request:</strong> ${wantMeet === 'yes' ? 'Yes' : 'No'}</p>
        ${wantMeet === 'yes' ? `
          <p><strong>Preferred Date:</strong> ${date}</p>
          <p><strong>Preferred Time:</strong> ${time}</p>
        ` : ''}
        <p><strong>Message/Description:</strong></p>
        <p>${description}</p>
        <hr>
        <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully!',
      data: savedContact
    });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
});

// GET route to fetch all contacts (for admin use)
router.get('/all', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;