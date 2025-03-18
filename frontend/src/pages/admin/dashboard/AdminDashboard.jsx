import { NavLink } from 'react-router-dom';
import './AdminDashboard.css';
import WasteComposition from '../../graphs/WasteComposition';
import WasteCollectionTrends from '../../graphs/WasteCollectionTrends';
import MapComponent from '../../MapComponent';
import React, {useState, useEffect} from 'react';

const AdminDashboard = () => {

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
                            <input type="text" placeholder="Search bins, routes, or areas..." />
                        </div>
                        <div className="user-profile">
                            
                        </div>
                    </div>


                    <div className="dashboard-cards">
                        <div className="card">
                            <div className="card-header">
                                <h3>Total Bins</h3>
                                <div className="card-icon">
                                    <i className="fas fa-trash-alt"></i>
                                </div>
                            </div>
                            <div className="card-value">1,248</div>
                            <div className="card-subtitle">Active smart bins deployed</div>
                        </div>
                        <div className="card success">
                            <div className="card-header">
                                <h3>Waste Collected</h3>
                                <div className="card-icon">
                                    <i className="fas fa-recycle"></i>
                                </div>
                            </div>
                            <div className="card-value">456 tons</div>
                            <div className="card-subtitle">This month (+12% from last month)</div>
                        </div>
                        <div className="card warning">
                            <div className="card-header">
                                <h3>Bins Near Capacity</h3>
                                <div className="card-icon">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </div>
                            </div>
                            <div className="card-value">42</div>
                            <div className="card-subtitle">Requiring attention within 24h</div>
                        </div>
                        <div className="card danger">
                            <div className="card-header">
                                <h3>Active Complaints</h3>
                                <div className="card-icon">
                                    <i className="fas fa-exclamation-circle"></i>
                                </div>
                            </div>
                            <div className="card-value">18</div>
                            <div className="card-subtitle">5 marked as critical</div>
                        </div>
                    </div>


                    <div className="map-section">
                        <div className="map-container">
                            
                            <div className='map-img'>
                                <MapComponent/>
                            </div>
                            <img src="/api/placeholder/800/400" alt="City Map" className="map-img" />
                        </div>
                        <div className="bin-status">
                            <h3>Critical Bin Status</h3>
                            <div className="bin-list">
                                <div className="bin-item">
                                    <div className="bin-info">
                                        <h4>Bin #1045</h4>
                                        <p>Sector 7, North Avenue</p>
                                    </div>
                                    <div className="bin-status-indicator">
                                        <div className="status-dot full"></div>
                                        <span>95%</span>
                                    </div>
                                </div>
                                <div className="bin-item">
                                    <div className="bin-info">
                                        <h4>Bin #872</h4>
                                        <p>Downtown, Main Street</p>
                                    </div>
                                    <div className="bin-status-indicator">
                                        <div className="status-dot full"></div>
                                        <span>92%</span>
                                    </div>
                                </div>
                                <div className="bin-item">
                                    <div className="bin-info">
                                        <h4>Bin #1124</h4>
                                        <p>East Park, Entrance B</p>
                                    </div>
                                    <div className="bin-status-indicator">
                                        <div className="status-dot partial"></div>
                                        <span>76%</span>
                                    </div>
                                </div>
                                <div className="bin-item">
                                    <div className="bin-info">
                                        <h4>Bin #938</h4>
                                        <p>Hospital Zone, Block C</p>
                                    </div>


                                    <div className="bin-status-indicator">
                                        <div className="status-dot partial"></div>
                                        <span>76%</span>
                                    </div>
                                </div>
                                <div className="bin-item">
                                    <div className="bin-info">
                                        <h4>Bin #938</h4>
                                        <p>Hospital Zone, Block C</p>
                                    </div>
                                    <div className="bin-status-indicator">
                                        <div className="status-dot partial"></div>
                                        <span>82%</span>
                                    </div>
                                </div>
                                <div className="bin-item">
                                    <div className="bin-info">
                                        <h4>Bin #756</h4>
                                        <p>Shopping Mall, Level 2</p>
                                    </div>
                                    <div className="bin-status-indicator">
                                        <div className="status-dot partial"></div>
                                        <span>73%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="charts-section">
                        <div className="chart-container">
                        <div className="chart-header">
                                <h3>Waste Collection Trends</h3>
                            </div>
                            <div className="chart-placeholder">

                                <WasteCollectionTrends/>
                            </div>
                        </div>
                        <div className="chart-container">
                            <div className="chart-header">
                                <h3>Waste Composition</h3>
                            </div>
                            <div className="chart-placeholder">
                                <WasteComposition/>
                            </div>
                        </div>
                    </div>


                    <div className="complaints-section">
                        <div className="complaints-header">
                            <h3>Recent Complaints</h3>
                            <a href="#" className="view-all">View All</a>
                        </div>
                        <table className="complaints-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Location</th>
                                    <th>Issue</th>
                                    <th>Reported</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#C1092</td>
                                    <td>Westside Park</td>
                                    <td>Overflowing bin</td>
                                    <td>2 hours ago</td>
                                    <td><span className="status-badge critical">Critical</span></td>
                                </tr>
                                <tr>
                                    <td>#C1091</td>
                                    <td>Riverfront Walkway</td>
                                    <td>Broken bin lid</td>
                                    <td>Yesterday</td>
                                    <td><span className="status-badge pending">Pending</span></td>
                                </tr>
                                <tr>
                                    <td>#C1090</td>
                                    <td>Central Market</td>
                                    <td>Foul odor</td>
                                    <td>3 days ago</td>
                                    <td><span className="status-badge resolved">Resolved</span></td>
                                </tr>
                                <tr>
                                    <td>#C1089</td>
                                    <td>North Avenue</td>
                                    <td>Missed collection</td>
                                    <td>4 days ago</td>
                                    <td><span className="status-badge resolved">Resolved</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            
        </>
    )
}

export default AdminDashboard;