require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

// 1. DB Schema setup
const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  wantMeet: String,
  date: String,
  time: String,
  description: String,
});
const FormModel = mongoose.model('Form', FormSchema);

// 2. DB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(()=>console.log('Mongo Connected'))
  .catch(err=>console.log('DB Error', err));

// 3. Email setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // or use 'smtp' if not gmail
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// 4. API endpoint
app.post('/api/submit', async (req, res) => {
  const formData = req.body;
  try {
    // Store in DB
    await FormModel.create(formData);
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: 'New Meet Submission',
      text: JSON.stringify(formData, null, 2)
    });
    res.status(200).json({success:true});
  } catch(err) {
    res.status(500).json({success:false, error:err.message});
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
