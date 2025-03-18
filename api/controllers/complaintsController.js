const Complaint = require('../models/Complaints');


// @desc    Create new complaint
// @route   POST /api/complaints
// @access  Private
exports.createComplaint = async (req, res) => {
  try {
    const { binId, complaintType, description, priority, contactInfo, location } = req.body;
    
    const complaint = await Complaint.create({
      binId,
      complaintType,
      description,
      priority, contactInfo, location
    });

    res.status(200).json({
      success: true,
      data: complaint
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get all complaints
// @route   GET /api/complaints
// @access  Private/Admin
exports.getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({})
      .sort('-createdAt');
    
    res.status(200).json({
      success: true,
      count: complaints.length,
      data: complaints
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get user complaints
// @route   GET /api/complaints/user
// @access  Private
exports.getUserComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ userId: req.user.id })
      .sort('-createdAt');
    
    res.json({
      success: true,
      count: complaints.length,
      data: complaints
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get complaint by ID
// @route   GET /api/complaints/:id
// @access  Private
exports.getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id)

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: 'Complaint not found'
      });
    }

    res.json({
      success: true,
      data: complaint
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Update complaint
// @route   PUT /api/complaints/:id
// @access  Private/Admin
exports.updateComplaint = async (req, res) => {
  try {
    let complaint = await Complaint.findById(req.params.id);
    const { status } = req.body; 

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: 'Complaint not found'
      });
    }

    // Regular users can only update their own complaints and only certain fields
    /*if (req.user.role !== 'admin' && complaint.userId.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this complaint'
      });
    }
*/
/*
    // If user is not admin, they can only update description
    if (req.user.role !== 'admin') {
      const { description } = req.body;
      complaint = await Complaint.findByIdAndUpdate(
        req.params.id,
        { description },
        { new: true, runValidators: true }
      );
    } else {*/
      // Admins can update all fields
      complaint = await Complaint.findByIdAndUpdate(
        req.params.id,
        { status }, // Only update the status field
        { new: true, runValidators: true }
      );
    

    res.json({
      success: true,
      data: complaint
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Delete complaint
// @route   DELETE /api/complaints/:id
// @access  Private/Admin
exports.deleteComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: 'Complaint not found'
      });
    }

    // Regular users can only delete their own complaints
    await complaint.deleteOne();

    res.json({
      success: true,
      message: 'Complaint removed'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};