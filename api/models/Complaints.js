const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema(
  {
    complaintId: {
      type: String,
      required: true,
      unique: true,
      // Generate a unique complaint ID (e.g., COMP-20250314-001)
      default: () => `COMP-${new Date().toISOString().slice(0, 10)}-${Math.floor(1000 + Math.random() * 9000)}`
    },
    binId: {
      type: String,
      required: [true, 'Bin ID is required'],
      trim: true
    },
    complaintType: {
      type: String,
      required: [true, 'Complaint type is required'],
      enum: [
        'overflow', 
        'damage', 
        'missed', 
        'odor',
        'other'
      ]
    },
    description: {
      type: String,
      required: [true, 'Complaint description is required'],
      trim: true
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'resolved', 'cancelled'],
      default: 'pending'
    },
    priority:{
        type: String,
        enum : ['Low', 'Medium', 'High'],
        default : 'Low'
    },
    contactInfo: {
        type : String,
        default: ''
    },
    location:{
        type : String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Complaint', complaintSchema);