const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true
  },
  wantMeet: {
    type: String,
    required: true,
    enum: ['yes', 'no']
  },
  date: {
    type: Date,
    required: function() {
      return this.wantMeet === 'yes';
    }
  },
  time: {
    type: String,
    required: function() {
      return this.wantMeet === 'yes';
    }
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contact', ContactSchema);