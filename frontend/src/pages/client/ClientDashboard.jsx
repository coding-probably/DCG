import React, { useState, useEffect } from "react";
import './ClientDashboard.css'
import { NavLink } from "react-router-dom";
import axios from 'axios'
import MapComponent from "../MapComponent";

const ClientDashboard = () => {

    const [isModalActive, setIsModalActive] = useState(false);
    const [notificationVisible, setNotificationVisible] = useState(false);

    const handleComplaintBtnClick = () => {
        setIsModalActive(true);
    };

    const handleCloseModal = () => {
        setIsModalActive(false);
    };


    const [binId, setBinId] = useState('');
  const [complaintType, setIssueType] = useState('');
  const [description, setDescription] = useState('');
  const [contactInfo, setContact] = useState('');

  const handleComplaintSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Prepare the data to send in the API request
    const complaintData = {
      binId,
      complaintType,
      description,
      contactInfo,
    };

    try {
      // Send POST request to the backend API
      const response = await axios.post('http://localhost:5000/api/complaints/', complaintData);

      // Handle the response if successful
      if (response.status === 200) {
        alert('Complaint submitted successfully!');
        handleCloseModal(); // Close the modal after successful submission
      }
    } catch (error) {
      // Handle any errors
      console.error('Error submitting complaint:', error);
      alert('There was an error submitting your complaint. Please try again.');
    }
  };

   
    








    return (
        <><header>
            <div className="client-dash-logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17L3 17L3 7L9 7" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12H7" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 17V21M17 21H13M17 21H21" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 13V14C14 15.1046 14.8954 16 16 16H18C19.1046 16 20 15.1046 20 14V13" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="14" y="7" width="6" height="6" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h1>WasteTrack</h1>
            </div>

            <div className="client-dash-user-panel">
             <button className="client-dash-btn "><a href="/index2.html">Rewards</a></button>
                <button onClick={handleComplaintBtnClick} className="client-dash-btn" id="complaint-btn">Report Issue</button>
                <NavLink to="/"><button className="client-dash-btn client-dash-btn-primary">Home</button>
                </NavLink>
            </div>
        </header>

            <main style={{ marginTop: "100px" }}>
                <div className="client-dash-stats">
                    <div className="client-dash-stat-card">
                        <h3>Total Bins</h3>
                        <p>42</p>
                    </div>
                    <div className="client-dash-stat-card">
                        <h3>Bins Requiring Attention</h3>
                        <p>7</p>
                    </div>
                    <div className="client-dash-stat-card">
                        <h3>Collection Efficiency</h3>
                        <p>86%</p>
                    </div>
                </div>

                <div className="client-dash-dashboard">
                    <div className="client-dash-sidebar">
                        <div className="client-dash-card">
                            <h2>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6H21" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5 6V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V6" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 11V16" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 11V16" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Nearby Bins
                            </h2>

                            <div className="client-dash-search-bar">
                                <input type="text" className="client-dash-form-control" placeholder="Search bins..." />
                                <button className="client-dash-btn client-dash-btn-primary">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="client-dash-dustbin-list">
                                <div className="client-dash-dustbin-item selected">
                                    <div className="client-dash-dustbin-info">
                                        <div>Central Park Bin #1</div>
                                        <div className="client-dash-dustbin-id">ID: BIN-001</div>
                                    </div>
                                    <span className="client-dash-badge client-dash-badge-success">25% Full</span>
                                </div>
                                <div className="client-dash-dustbin-item">
                                    <div className="client-dash-dustbin-info">
                                        <div>Main Street Corner</div>
                                        <div className="client-dash-dustbin-id">ID: BIN-007</div>
                                    </div>
                                    <span className="client-dash-badge client-dash-badge-warning">65% Full</span>
                                </div>
                                <div className="client-dash-dustbin-item">
                                    <div className="client-dash-dustbin-info">
                                        <div>City Hall</div>
                                        <div className="client-dash-dustbin-id">ID: BIN-013</div>
                                    </div>
                                    <span className="client-dash-badge client-dash-badge-danger">90% Full</span>
                                </div>
                                <div className="client-dash-dustbin-item">
                                    <div className="client-dash-dustbin-info">
                                        <div>Market Square</div>
                                        <div className="client-dash-dustbin-id">ID: BIN-018</div>
                                    </div>
                                    <span className="client-dash-badge client-dash-badge-warning">70% Full</span>
                                </div>
                                <div className="client-dash-dustbin-item">
                                    <div className="client-dash-dustbin-info">
                                        <div>Train Station</div>
                                        <div className="client-dash-dustbin-id">ID: BIN-022</div>
                                    </div>
                                    <span className="client-dash-badge client-dash-badge-success">30% Full</span>
                                </div>
                                <div className="client-dash-dustbin-item">
                                    <div className="client-dash-dustbin-info">
                                        <div>Business District</div>
                                        <div className="client-dash-dustbin-id">ID: BIN-025</div>
                                    </div>
                                    <span className="client-dash-badge client-dash-badge-success">15% Full</span>
                                </div>
                            </div>
                        </div>
                        <div className="client-dash-card">
                            <h2>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 17L3 17L3 7L9 7" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 12H7" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17 17V21M17 21H13M17 21H21" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 13V14C14 15.1046 14.8954 16 16 16H18C19.1046 16 20 15.1046 20 14V13" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                System Status
                            </h2>
                            <div className="client-dash-status-card">
                                <div>
                                    <span className="client-dash-status-indicator client-dash-status-success"></span>
                                    Server Status
                                </div>
                                <span>Online</span>
                            </div>
                            <div className="client-dash-status-card">
                                <div>
                                    <span className="client-dash-status-indicator client-dash-status-success"></span>
                                    IoT Gateway
                                </div>
                                <span>Connected</span>
                            </div>
                        </div>
                    </div>
                    <div className="client-dash-main-content">
                        <div className="client-dash-card">
                            <h2>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 7L12 3L21 7V17L12 21L3 17V7Z" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 7L12 11L21 7" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 11V21" stroke="#36F1CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Waste Bin Map
                            </h2>
                            <div className="client-dash-map-container">
                                <div className="client-dash-map">
                                    <div className="map-img">
                                        <MapComponent/>
                                    </div>
                                    
                                </div>
                                {/* Bin markers */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Complaint Modal */}
            {isModalActive && (
                <>
        
        <div className="complaint-modal-1">    
                <div className="client-dash-moda" id="complaint-modal">
                    <div className="client-dash-modal-content">
                        <button className="client-dash-close-btn" onClick={handleCloseModal}>&times;</button>
                        <h2>Report an Issue</h2>
                        <form id="complaint-form" onSubmit={handleComplaintSubmit}>
                            <div className="client-dash-form-group">
                                <label htmlFor="bin-id">Bin ID</label>
                                <select className="client-dash-form-control" id="bin-id" onChange={(e) => setBinId(e.target.value)} required>
                                    <option value="">Select a bin</option>
                                    <option value="BIN-001">BIN-001 (Central Park Bin #1)</option>
                                    <option value="BIN-007">BIN-007 (Main Street Corner)</option>
                                    <option value="BIN-013">BIN-013 (City Hall)</option>
                                    <option value="BIN-018">BIN-018 (Market Square)</option>
                                    <option value="BIN-022">BIN-022 (Train Station)</option>
                                    <option value="BIN-025">BIN-025 (Business District)</option>
                                </select>
                            </div>
                            <div className="client-dash-form-group">
                                <label htmlFor="issue-type">Issue Type</label>
                                <select className="client-dash-form-control" id="issue-type" onChange={(e) => setIssueType(e.target.value)} required>
                                    <option value="">Select issue type</option>
                                    <option value="overflow">Bin Overflow</option>
                                    <option value="damage">Damaged Bin</option>
                                    <option value="sensor">Sensor Malfunction</option>
                                    <option value="cleanliness">Area Cleanliness</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="client-dash-form-group">
                                <label htmlFor="description">Description</label>
                                <textarea className="client-dash-form-control" id="description" onChange={(e) => setDescription(e.target.value)} placeholder="Please describe the issue in detail..." required></textarea>
                            </div>
                            <div className="client-dash-form-group">
                                <label htmlFor="contact">Contact Information (optional)</label>
                                <input type="email" className="client-dash-form-control" id="contact" onChange={(e) => setContact(e.target.value)}
              placeholder="Your email"/>
                            </div>
                            <button type="submit" className="client-dash-btn client-dash-btn-primary" style={{width: "100%"}}>Submit Report</button>
                        </form>
                    </div>
                </div>
                </div>  
                </>
                
            )}


        </>
    )
}

export default ClientDashboard