import './ComplaintManagement.css'
import React, { useState, useEffect } from 'react';








//--------------------------------------------------------------------------------->
const NewComplaintModal = ({ onClose, onSubmit }) => {
    const [location, setLocation] = useState('');
    const [issueType, setIssueType] = useState('');
    const [binId, setBinId] = useState('');
    const [reportedBy, setReportedBy] = useState('');
    const [contact, setContact] = useState('');
    const [priority, setPriority] = useState('high');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        const newComplaint = {
            location,
            issueType,
            binId,
            reportedBy,
            contact,
            priority,
            description,
        };
        onSubmit(newComplaint);
    };

    return (
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
                        <label htmlFor="issueType">Issue Type</label>
                        <select
                            className="form-control"
                            id="issueType"
                            value={issueType}
                            onChange={(e) => setIssueType(e.target.value)}
                        >
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
                        <label htmlFor="reportedBy">Reported By</label>
                        <input
                            type="text"
                            className="form-control"
                            id="reportedBy"
                            value={reportedBy}
                            onChange={(e) => setReportedBy(e.target.value)}
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Contact</label>
                        <input
                            type="text"
                            className="form-control"
                            id="contact"
                            value={contact}
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
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
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
    );
};














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
        setShowNewComplaintModal(true);
    };

    // Close the New Complaint Modal
    const closeNewComplaintModal = () => {
        setShowNewComplaintModal(false);
    };

    // Handle new complaint submission (you can manage this as needed, e.g., by saving it to a state or sending to a backend)
    const handleNewComplaintSubmit = (complaint) => {
        console.log('New Complaint Submitted:', complaint);
        closeNewComplaintModal(); // Close the modal after submission
    };



    return (


        <>
            <div className="container">
                <div className="sidebar">
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

                    <ul className="sidebar-menu">
                        <li>
                            <a href="/admin-dashboard" className="active">
                                <i className="fas fa-tachometer-alt"></i> Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-map-marker-alt"></i> Map View
                            </a>
                        </li>

                        <li>
                            <a href="#">
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
                            <div className="stat-value">18</div>
                            <div className="stat-label">Active Complaints</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon yellow-bg">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="stat-value">12</div>
                            <div className="stat-label">Pending</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon blue-bg">
                                <i className="fas fa-spinner"></i>
                            </div>
                            <div className="stat-value">6</div>
                            <div className="stat-label">In Progress</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon green-bg">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="stat-value">42</div>
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
                                {complaints.map((complaint) => (
                                    <tr key={complaint.id}>
                                        <td>{complaint.id}</td>
                                        <td>{complaint.location}</td>
                                        <td>{complaint.issue}</td>
                                        <td>{complaint.reported}</td>
                                        <td>{complaint.updated}</td>
                                        <td>
                                            <span className={`status-badge ${complaint.status.toLowerCase().replace(' ', '-')}`}>
                                                {complaint.status}
                                            </span>
                                        </td>
                                        <td className="action-cell">
                                            <button className="action-btn" onClick={() => handleViewComplaint(complaint.id)}>
                                                <i className="fas fa-eye"></i> View
                                            </button>
                                            <button className="action-btn">
                                                <i className="fas fa-edit"></i> Edit
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

                    <div className="modal" id="newComplaintModal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>Create New Complaint</h3>
                                <button className="close-btn" id="closeNewModalBtn">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="location">Location</label>
                                    <input type="text" className="form-control" id="location" placeholder="Enter location" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="issueType">Issue Type</label>
                                    <select className="form-control" id="issueType">
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
                                    <input type="text" className="form-control" id="binId" placeholder="Enter bin ID" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="reportedBy">Reported By</label>
                                    <input type="text" className="form-control" id="reportedBy" placeholder="Enter name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact">Contact</label>
                                    <input type="text" className="form-control" id="contact" placeholder="Enter phone number or email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="priority">Priority</label>
                                    <select className="form-control" id="priority">
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high" selected>High</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea className="form-control" id="description" placeholder="Describe the issue in detail..."></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" id="cancelNewModalBtn">Cancel</button>
                                <button className="btn btn-primary">Submit Complaint</button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Render the New Complaint Modal if it's visible */}
                {showNewComplaintModal && (
                    <NewComplaintModal onClose={closeNewComplaintModal} onSubmit={handleNewComplaintSubmit} />
                )}

            </div>


        </>
    )
}

//export default ComplaintManagement



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
                            <input type="text" className="form-control" id="location" placeholder="Enter location" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="issueType">Issue Type</label>
                            <select className="form-control" id="issueType">
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
                            <input type="text" className="form-control" id="binId" placeholder="Enter bin ID" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reportedBy">Reported By</label>
                            <input type="text" className="form-control" id="reportedBy" placeholder="Enter name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Contact</label>
                            <input type="text" className="form-control" id="contact" placeholder="Enter phone number or email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="priority">Priority</label>
                            <select className="form-control" id="priority">
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high" selected>High</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" placeholder="Describe the issue in detail..."></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={closeNewComplaintModal} id="cancelNewModalBtn">Cancel</button>
                        <button className="btn btn-primary">Submit Complaint</button>
                    </div>
                </div>
            </div>
        </div>



    </>



   /* <NewComplaintModal onClose={closeNewComplaintModal} onSubmit={handleNewComplaintSubmit} />
*/     )}