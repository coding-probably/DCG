import './ComplaintManagement.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';

//--------------------------------------------------------------------------------->
const ComplaintModal = ({ complaint, onClose }) => {

    const [complaintId, setComplaintId] = useState(complaint._id);
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle complaint ID change
  const handleComplaintIdChange = (e) => {
    setComplaintId(e.target.value);
  };

  // Handle status change
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!complaintId || !status) {
      setMessage('Please provide both complaint ID and status');
      return;
    }
    setLoading(true);
    try {
      // Make API request to update complaint status
      const response = await axios.put(
        `http://localhost:5000/api/complaints/${complaintId}`, // Replace with your backend URL
        { status } // Send status in the request body
      );
      setMessage('Complaint status updated successfully!');
      console.log(response.data); // Log the response data
      onClose();
    } catch (error) {
      console.error('Error updating complaint status:', error);
      setMessage('Failed to update complaint status. Please try again.');
    } finally {
      setLoading(false);
    }
  };






    return (<>
        <div className="complaint-modal-1">
        <div style={{width: "600px"}} className="complaint-modal" id="complaintModal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Complaint Details - {complaint._id}</h3>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <div className="complaint-details">
                        <div className="details-grid">
                            <div className="detail-item">
                                <div className="detail-label">Location</div>
                                <div className="detail-value">{complaint.location}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">Complaint Type</div>
                                <div className="detail-value">{complaint.complaintType}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">Bin ID</div>
                                <div className="detail-value">{complaint.binId}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">Contact</div>
                                <div className="detail-value">{complaint.contactInf}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">Reported Date</div>
                                <div className="detail-value">{complaint.createdAt}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">Priority</div>
                                <div className="detail-value">{complaint.priority}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label">Status</div>
                                <div className="detail-value"><span className={`status-badge ${complaint.status.toLowerCase()}`}>{complaint.status}</span></div>
                            </div>
                        </div>
                        <div className="detail-item" style={{ marginTop: '20px' }}>
                            <div className="detail-label">Description</div>
                            <div className="detail-value">{complaint.description}</div>
                        </div>
                    </div>


                    <h4 style={{ margin: '25px 0 15px 0' }}>Update Status</h4>
                    <div className="form-group">
                        <label htmlFor="statusUpdate">New Status</label>
                        <select className="form-control" id="statusUpdate" value={status}
            onChange={handleStatusChange}>
                            <option value="cancelled">Cancelled</option>
                            <option value="pending">Pending</option>
                            <option value="in-progress">In Progress</option>
                            <option value="resolved">Resolved</option>
                        </select>
                    </div>
                   {/* <div className="form-group">
                        <label htmlFor="updateNote">Note</label>
                        <textarea className="form-control" id="updateNote" placeholder="Add a note about this status update..."></textarea>
                    </div>*/}
                </div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
                    <button className="btn btn-primary" onClick={handleSubmit}>Update Status</button>
                </div>
            </div>
        </div>
        </div></>
    );
};







//--------------------------------------------------------------------------------->
const NewComplaintModal = ({ onClose, onSubmit }) => {


    const [location, setLocation] = useState("");
    const [complaintType, setIssueType] = useState("");
    const [binId, setBinId] = useState("");
    const [contactInfo, setContact] = useState("");
    const [priority, setPriority] = useState("high");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Data object for API call
        const complaintData = {
            location,
            complaintType,
            binId,
            contactInfo,
            priority,
            description,
        };

        try {
            // Making the API call to create the complaint using axios
            const response = await axios.post("http://localhost:5000/api/complaints/", complaintData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Check for successful response
            if (response.status === 200) {
                // Successfully created complaint, pass the data back to the parent
                onSuccess(response.data);
                onClose(); // Close the modal
                alert("sucess");
            } else {
                throw new Error("Failed to create complaint");
            }

        } catch (error) {
            setError(error.response ? error.response.data.message : error.message);

        };







        return (
            <>
                <div style={{ height: "200px", width: "200px", backgroundColor: "white" }}>
                    {/*<div className="madalmodal">
                    <div className="modal" id="newComplaintModal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>Create New Complaint</h3>
                                <button className="close-btn" onClick={onClose}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="location">Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="location"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="Enter location"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="complaintType">Issue Type</label>
                                    <select
                                        className="form-control"
                                        id="complaintType"
                                        value={complaintType}
                                        onChange={(e) => setIssueType(e.target.value)}
                                        
                                    >
                                        <option value="" selected>Select an issue type</option>
                                        <option value="overflow">Overflowing Bin</option>
                                        <option value="damage">Damaged Bin</option>
                                        <option value="odor">Foul Odor</option>
                                        <option value="missed">Missed Collection</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="binId">Bin ID (if applicable)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="binId"
                                        value={binId}
                                        onChange={(e) => setBinId(e.target.value)}
                                        placeholder="Enter bin ID"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contactInfo">Contact</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contactInfo"
                                        value={contactInfo}
                                        onChange={(e) => setContact(e.target.value)}
                                        placeholder="Enter phone number or email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="priority">Priority</label>
                                    <select
                                        className="form-control"
                                        id="priority"
                                        value={priority}
                                        onChange={(e) => setPriority(e.target.value)}
                                    >
                                        <option value="Low" selected>Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Describe the issue in detail..."
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
                                <button className="btn btn-primary" onClick={handleSubmit}>Submit Complaint</button>
                            </div>
                        </div>
                    </div>
                </div>*/}
                </div>
            </>
        );
    };


}











//----------------------------------------------------------------------------------------------------------------->

const ComplaintManagement = () => {

    const complaints = [
        {
            id: '#CR-2023',
            location: 'Westside Park',
            issue: 'Overflowing Bin',
            reported: 'Mar 12, 2025',
            updated: 'Mar 13, 2025',
            status: 'Critical',
        },
        {
            id: '#CR-2022',
            location: 'Downtown Metro',
            issue: 'Damaged Bin',
            reported: 'Mar 10, 2025',
            updated: 'Mar 11, 2025',
            status: 'In Progress',
        },
        {
            id: '#CR-2021',
            location: 'East Village',
            issue: 'Foul Odor',
            reported: 'Mar 9, 2025',
            updated: 'Mar 10, 2025',
            status: 'Pending',
        },
        {
            id: '#CR-2020',
            location: 'North District',
            issue: 'Missed Collection',
            reported: 'Mar 8, 2025',
            updated: 'Mar 9, 2025',
            status: 'Resolved',
        },
        {
            id: '#CR-2019',
            location: 'Riverside Area',
            issue: 'Overflowing Bin',
            reported: 'Mar 7, 2025',
            updated: 'Mar 8, 2025',
            status: 'Pending',
        },
    ];


    // Sample complaints data
    const complaintsData = [
        {
            id: '#CR-2023',
            location: 'Westside Park',
            issue: 'Overflowing Bin',
            reportedDate: 'Mar 12, 2025',
            updatedDate: 'Mar 13, 2025',
            status: 'Critical',
            binId: 'BIN-238',
            reportedBy: 'Sarah Johnson',
            contact: '+1 (555) 123-4567',
            priority: 'High',
            description: 'The bin is completely overflowing with trash spilling onto the pathway. This is causing a bad smell and attracting pests in a busy area of the park near the children\'s playground.',
            timeline: [
                {
                    date: 'Mar 13, 2025 - 10:32 AM',
                    title: 'Status Updated',
                    description: 'Status changed from "Pending" to "Critical" due to health hazard concerns.'
                },
                {
                    date: 'Mar 12, 2025 - 14:15 PM',
                    title: 'Assigned to Team',
                    description: 'Complaint assigned to Westside Collection Team. Schedule for next day pickup.'
                },
                {
                    date: 'Mar 12, 2025 - 08:45 AM',
                    title: 'Complaint Filed',
                    description: 'Complaint received through mobile app with 2 attached photos.'
                }
            ]
        },
        // More complaints data can be added here...
    ];

    const [showComplaintModal, setShowComplaintModal] = useState(false);
    const [selectedComplaint, setSelectedComplaint] = useState(null);

    const [showNewComplaintModal, setShowNewComplaintModal] = useState(false);

    // Show Complaint Modal with selected complaint
    const handleViewComplaint = (complaint) => {
        setSelectedComplaint(complaint);
        setShowComplaintModal(true);
    };

    // Close the Complaint Modal
    const closeComplaintModal = () => {
        setShowComplaintModal(false);
        setSelectedComplaint(null);
    };

    // Show New Complaint Modal
    const handleShowNewComplaintModal = () => {
        console.log("new complaint button pressed");
        setShowNewComplaintModal(true);
    };

    // Close the New Complaint Modal
    const closeNewComplaintModal = () => {
        setShowNewComplaintModal(false);
    };










    //==============
    const [fetchedComplaints, setComplaints] = useState([
        {binId: "BIN-001",
            complaintId :  "COMP-2025-03-15-4996",
            complaintType: "overflow",
            contactInfo: "testcomplaint@gmail.com",
            createdAt: "2025-03-15T18:58:23.897Z",
            description: "this is to inform that this issue is not resolved after notifiying many times",
            location: "new delhi",
            priority:  "high",
            status: "Resolved",
            updatedAt :"2025-03-15T21:27:48.101Z",
            _id : "67d5cdcf0a4ac51df907e1db"}
    ]);  // State to hold fetched complaints
  const [loading, setLoading] = useState(true);      // State for loading indicator
  const [error, setError] = useState(null);          // State for error handling



  const [pendingNo, setPendingNo] = useState(12);
    const [resolvedNo, setResolvedNo] = useState(42);
    const [inProgress, setInProgress] = useState(6);
    const [totalComplaint, setTotalComplaint] = useState(18);






  // Fetch complaints when the component mounts
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        setLoading(true);  // Set loading state to true before the API call

        // Make API call to fetch complaints
        const response = await axios.get('http://localhost:5000/api/complaints/');

        if (response.status === 200) {
            console.log(response.data);
          setComplaints(response.data.data);  // Set the complaints in state
          setTotalComplaint(response.data.count);
        } else {
          setError('Failed to fetch complaints'); // Handle the case when status is not 200
        }
      } catch (err) {
        setError('Error fetching complaints: ' + err.message); // Handle any error that occurs
      } finally {
        setLoading(false);  // Set loading to false after the API call is finished
      }
    };

    fetchComplaints();  // Call the function to fetch complaints
  }, []);  // Em



  //---------> run function and count the status 


  function formatDateAndTime(timestamp) {
    const date = new Date(timestamp);
  
    // Format date (e.g., Mar 8, 2025)
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  
    // Format time (e.g., 9:27 PM)
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  
    return `${formattedDate} ${formattedTime}`;
  }

    //==============



    const [location, setLocation] = useState("");
    const [complaintType, setComplaintType] = useState("");
    const [binId, setBinId] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    const [priority, setPriority] = useState("high");
    const [description, setDescription] = useState("");


    


    //--------------------------------------------------->


    const handleDeleteComplaint = async (complaintId) => {
        try {
          // Send the delete request to the API
          await axios.delete(`http://localhost:5000/api/complaints/${complaintId}`);
          
          // Update the state to remove the deleted complaint
          setComplaints(complaints.filter(complaint => complaint.id !== complaintId));
          alert('Complaint deleted successfully');
        } catch (error) {
          console.error('Error deleting complaint:', error);
          alert('Failed to delete complaint');
        }
      };





















    //--------------------------------------->

    // Handle new complaint submission (you can manage this as needed, e.g., by saving it to a state or sending to a backend)
    const handleNewComplaintSubmit = async (e) => {
        e.preventDefault();
        const complaintData = {
            location,
            complaintType,
            binId,
            contactInfo,
            priority,
            description,
        }
        try {
            // Send POST request to the backend API
            const response = await axios.post('http://localhost:5000/api/complaints/', complaintData);
      
            // Handle the response if successful
            if (response.status === 200) {
              alert('Complaint submitted successfully!');
              console.log('New Complaint Submitted:', response.data);
              setBinId("");
              setLocation("");
              setComplaintType("");
              setContactInfo("");
              setDescription("");
              closeNewComplaintModal(); // Close the modal after submission
            }
          } catch (error) {
            // Handle any errors
            console.error('Error submitting complaint:', error);
          }
    };



    return (


        <>
            <div className="container">
            <div className="sidebar">
            <NavLink to='/'>
                        <div className="sidebar-logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#7928CA" />
                                        <stop offset="100%" stopColor="#00D4FF" />
                                    </linearGradient>
                                </defs>
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <path d="M10 11v6"></path>
                                <path d="M14 11v6"></path>
                            </svg>
                            <h2>SmartWaste</h2>
                        </div>
                    </NavLink>

                    <ul className="sidebar-menu">
                        <li>
                            <a href="/admin-dashboard" className="active">
                                <i className="fas fa-tachometer-alt"></i> Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="/admin-map">
                                <i className="fas fa-map-marker-alt"></i> Map View
                            </a>
                        </li>
                        
                        <li>
                            <a href="/admin-analytics">
                                <i className="fas fa-chart-bar"></i> Analytics
                            </a>
                        </li>
                        
                        <li>
                     
                            <a href="/admin-complaint">
                                <i className="fas fa-exclamation-circle"></i> Complaints
                            </a>
                  
                        </li>
                        
                        
                    </ul>
                </div>

                <div className="main-content">

                    <div className="header">
                        <div className="search-bar">
                            <i className="fas fa-search" style={{ color: "var(--gray-light)" }}></i>
                            <input type="text" placeholder="Search complaints by ID, location, or issue..." />
                        </div>
                        <div className="user-profile">
                            {/*<div className="notification-icon">
                            <i className="fas fa-bell" style="color: var(--gray-light);"></i>
                            <div className="notification-badge">3</div>

                            <div className="notification-dropdown">
                                <div className="notification-header">
                                    <h3>Notifications</h3>
                                    <a href="#">Mark all as read</a>
                                </div>
                                <div className="notification-list">
                                    <div className="notification-item">
                                        <div className="notification-icon-container">
                                            <i className="fas fa-trash-alt" style="color: var(--danger);"></i>
                                        </div>
                                        <div className="notification-content">
                                            <h4>Bin Capacity Alert</h4>
                                            <p>Bin ID #1045 in Sector 7 has reached 90% capacity.</p>
                                            <span className="notification-time">10 minutes ago</span>
                                        </div>
                                    </div>
                                    <div className="notification-item">
                                        <div className="notification-icon-container">
                                            <i className="fas fa-exclamation-triangle" style="color: var(--warning);"></i>
                                        </div>
                                        <div className="notification-content">
                                            <h4>Odor Detection</h4>
                                            <p>Abnormal odor levels detected in Bin ID #872 in Downtown area.</p>
                                            <span className="notification-time">35 minutes ago</span>
                                        </div>
                                    </div>
                                    <div className="notification-item">
                                        <div className="notification-icon-container">
                                            <i className="fas fa-comment-alt" style="color: var(--primary);"></i>
                                        </div>
                                        <div className="notification-content">
                                            <h4>New Complaint Filed</h4>
                                            <p>A resident has reported an overflowing bin in Westside Park.</p>
                                            <span className="notification-time">2 hours ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="notification-actions">
                                    <button>View All Notifications</button>
                                </div>
                            </div>
                        </div>
                        <img src="/api/placeholder/40/40" alt="Admin User" />
                        <div className="user-info">
                            <h4>Admin User</h4>
                            <p>System Administrator</p>
                        </div>*/}
                        </div>
                    </div>

                    <div className="page-title">
                        <h1>Complaints Management</h1>
                        <button onClick={handleShowNewComplaintModal} className="btn btn-primary" id="newComplaintBtn">
                            <i className="fas fa-plus"></i> New Complaint
                        </button>
                    </div>

                    <div className="statistics-cards">
                        <div className="stat-card">
                            <div className="stat-icon red-bg">
                                <i className="fas fa-exclamation-circle"></i>
                            </div>
                            <div className="stat-value">{totalComplaint}</div>
                            <div className="stat-label">Total Complaints</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon yellow-bg">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="stat-value">{pendingNo}</div>
                            <div className="stat-label">Pending</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon blue-bg">
                                <i className="fas fa-spinner"></i>
                            </div>
                            <div className="stat-value">{inProgress}</div>
                            <div className="stat-label">In Progress</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon green-bg">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="stat-value">{resolvedNo}</div>
                            <div className="stat-label">Resolved This Month</div>
                        </div>
                    </div>

                    <div className="filter-panel">
                        <div className="filter-row">
                            <div className="filter-group">
                                <label>Status</label>
                                <select className="filter-control">
                                    <option value="">All Statuses</option>
                                    <option value="critical">Critical</option>
                                    <option value="pending">Pending</option>
                                    <option value="in-progress">In Progress</option>
                                    <option value="resolved">Resolved</option>
                                </select>
                            </div>
                            <div className="filter-group">
                                <label>Issue Type</label>
                                <select className="filter-control">
                                    <option value="">All Issues</option>
                                    <option value="overflow">Overflowing Bin</option>
                                    <option value="damage">Damaged Bin</option>
                                    <option value="odor">Foul Odor</option>
                                    <option value="missed">Missed Collection</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="filter-group">
                                <label>Date Range</label>
                                <select className="filter-control">
                                    <option value="all">All Time</option>
                                    <option value="today">Today</option>
                                    <option value="week">This Week</option>
                                    <option value="month">This Month</option>
                                    <option value="custom">Custom Range</option>
                                </select>
                            </div>
                        </div>
                        <div className="filter-actions">
                            <button className="btn btn-secondary">Reset Filters</button>
                            <button className="btn btn-primary">Apply Filters</button>
                        </div>
                    </div>


                    <div className="complaints-section">
                        <div className="complaints-header">
                            <h3>All Complaints</h3>
                        </div>
                        <table className="complaints-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Location</th>
                                    <th>Issue</th>
                                    <th>Reported</th>
                                    <th>Updated</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fetchedComplaints.map((complaint) => (
                                    <tr key={complaint._id}>
                                        <td>{complaint.complaintId}</td>
                                        <td>{complaint.location}</td>
                                        <td>{complaint.complaintType}</td>
                                        <td>{formatDateAndTime(complaint.createdAt)}</td>
                                        <td>{formatDateAndTime(complaint.updatedAt)}</td>
                                        <td>
                                            <span className={`status-badge ${complaint.status.toLowerCase().replace(' ', '-')}`}>
                                                {complaint.status}
                                            </span>
                                        </td>
                                        <td className="action-cell">
                                            <button className="action-btn" onClick={() => handleViewComplaint(complaint)}>
                                                <i className="fas fa-eye" style={{color: "#4CD464"}}></i>
                                            </button>
                                            <button className="action-btn" onClick={() => handleDeleteComplaint(complaint._id)}>
                                            <i class="fa-solid fa-trash-can" style={{color : "#FF3860"}}></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                        {/*<div className="pagination">
                        <div className="pagination-item"><i className="fas fa-chevron-left"></i></div>
                        <div className="pagination-item active">1</div>
                        <div className="pagination-item">2</div>
                        <div className="pagination-item">3</div>
                        <div className="pagination-item"><i className="fas fa-chevron-right"></i></div>
                    </div>*/}




                    </div>


                    <div className="modal" id="complaintModal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>Complaint Details - #CR-2023</h3>
                                <button className="close-btn" id="closeModalBtn">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="complaint-details">
                                    <div className="details-grid">
                                        <div className="detail-item">
                                            <div className="detail-label">Location</div>
                                            <div className="detail-value">Westside Park</div>
                                        </div>
                                        <div className="detail-item">
                                            <div className="detail-label">Issue Type</div>
                                            <div className="detail-value">Overflowing Bin</div>
                                        </div>
                                        <div className="detail-item">
                                            <div className="detail-label">Bin ID</div>
                                            <div className="detail-value">BIN-238</div>
                                        </div>
                                        <div className="detail-item">
                                            <div className="detail-label">Reported By</div>
                                            <div className="detail-value">Sarah Johnson</div>
                                        </div>
                                        <div className="detail-item">
                                            <div className="detail-label">Contact</div>
                                            <div className="detail-value">+1 (555) 123-4567</div>
                                        </div>
                                        <div className="detail-item">
                                            <div className="detail-label">Reported Date</div>
                                            <div className="detail-value">Mar 12, 2025 - 08:45 AM</div>
                                        </div>
                                        <div className="detail-item">
                                            <div className="detail-label">Priority</div>
                                            <div className="detail-value">High</div>
                                        </div>
                                        <div className="detail-item">
                                            <div className="detail-label">Status</div>
                                            <div className="detail-value"><span className="status-badge critical">Critical</span></div>
                                        </div>
                                    </div>

                                    <div className="detail-item" style={{ marginTop: "20px" }}>
                                        <div className="detail-label">Description</div>
                                        <div className="detail-value">The bin is completely overflowing with trash spilling onto the pathway. This is causing a bad smell and attracting pests in a busy area of the park near the children's playground.</div>
                                    </div>
                                </div>

                                <h4 style={{ marginBottom: "15px" }}>Complaint Timeline</h4>
                                <div className="complaint-timeline">
                                    <div className="timeline-item">
                                        <div className="timeline-date">Mar 13, 2025 - 10:32 AM</div>
                                        <div className="timeline-title">Status Updated</div>
                                        <div className="timeline-description">Status changed from "Pending" to "Critical" due to health hazard concerns.</div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-date">Mar 12, 2025 - 14:15 PM</div>
                                        <div className="timeline-title">Assigned to Team</div>
                                        <div className="timeline-description">Complaint assigned to Westside Collection Team. Schedule for next day pickup.</div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-date">Mar 12, 2025 - 08:45 AM</div>
                                        <div className="timeline-title">Complaint Filed</div>
                                        <div className="timeline-description">Complaint received through mobile app with 2 attached photos.</div>
                                    </div>
                                </div>

                                <h4 style={{ margin: "25px 0 15px 0" }}>Update Status</h4>
                                <div className="form-group">
                                    <label htmlFor="statusUpdate">New Status</label>
                                    <select className="form-control" id="statusUpdate">
                                        <option value="critical" selected>Critical</option>
                                        <option value="pending">Pending</option>
                                        <option value="in-progress">In Progress</option>
                                        <option value="resolved">Resolved</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="updateNote">Note</label>
                                    <textarea className="form-control" id="updateNote" placeholder="Add a note about this status update..."></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" id="cancelModalBtn">Cancel</button>
                                <button className="btn btn-primary">Update Status</button>
                            </div>
                        </div>
                    </div>


                </div>



                {showComplaintModal && selectedComplaint && (
                    <ComplaintModal complaint={selectedComplaint} onClose={closeComplaintModal} />
                )}

                {/* Render the New Complaint Modal if it's visible */}
                {showNewComplaintModal && (
                    <>
                        <div className="complaint-modal-1">
                            <div className="complaint-modal" id="newComplaintModal">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3>Create New Complaint</h3>
                                        <button className="close-btn" onClick={closeNewComplaintModal} id="closeNewModalBtn">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label htmlFor="location">Location</label>
                                            <input type="text" className="form-control" id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="issueType">Issue Type</label>
                                            <select className="form-control" id="contentType" value={complaintType} onChange={(e) => setComplaintType(e.target.value)}>
                                                <option value="">Select an issue type</option>
                                                <option value="overflow">Overflowing Bin</option>
                                                <option value="damage">Damaged Bin</option>
                                                <option value="odor">Foul Odor</option>
                                                <option value="missed">Missed Collection</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="binId">Bin ID (if applicable)</label>
                                            <input type="text" className="form-control" id="binId" value={binId} onChange={(e) => setBinId(e.target.value)} placeholder="Enter bin ID" />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="contact">Contact Info</label>
                                            <input type="text" className="form-control" id="contactInfo" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} placeholder="Enter phone number or email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="priority">Priority</label>
                                            <select className="form-control" id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                                                <option value="Low">Low</option>
                                                <option value="Medium">Medium</option>
                                                <option value="High" selected>High</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe the issue in detail..."></textarea>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-secondary" onClick={closeNewComplaintModal} id="cancelNewModalBtn">Cancel</button>
                                        <button className="btn btn-primary" onClick={handleNewComplaintSubmit}>Submit Complaint</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </>



   /* <NewComplaintModal onClose={closeNewComplaintModal} onSubmit={handleNewComplaintSubmit} />
*/     )}

            </div>


        </>
    )
}

export default ComplaintManagement