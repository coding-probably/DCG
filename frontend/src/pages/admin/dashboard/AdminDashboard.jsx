import { NavLink } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {



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
                            <div className="notification-icon">
                                <i className="fas fa-bell" style={{ color: "var(--gray-light)" }}></i>
                                <div className="notification-badge">3</div>


                                <div className="notification-dropdown">
                                    <div className="notification-header">
                                        <h3>Notifications</h3>
                                        <a href="#">Mark all as read</a>
                                    </div>
                                    <div className="notification-list">
                                        <div className="notification-item">
                                            <div className="notification-icon-container">
                                                <i className="fas fa-trash-alt" style={{ color: "var(--danger)" }}></i>
                                            </div>
                                            <div className="notification-content">
                                                <h4>Bin Capacity Alert</h4>
                                                <p>Bin ID #1045 in Sector 7 has reached 90% capacity.</p>
                                                <span className="notification-time">10 minutes ago</span>
                                            </div>
                                        </div>
                                        <div className="notification-item">
                                            <div className="notification-icon-container">
                                                <i className="fas fa-exclamation-triangle" style={{ color: "var(--warning)" }}></i>
                                            </div>
                                            <div className="notification-content">
                                                <h4>Odor Detection</h4>
                                                <p>Abnormal odor levels detected in Bin ID #872 in Downtown area.</p>
                                                <span className="notification-time">35 minutes ago</span>
                                            </div>
                                        </div>
                                        <div className="notification-item">
                                            <div className="notification-icon-container">
                                                <i className="fas fa-comment-alt" style={{ color: "var(--primary)" }}></i>
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
                            </div>
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
                            <div className="map-overlay">
                                <h3>Waste Bin Distribution</h3>
                                <div className="filter-options">
                                    <button className="active">All Bins</button>
                                    <button>Near Capacity</button>
                                    <button>Dry Waste</button>
                                    <button>Wet Waste</button>
                                    <button>Hazardous</button>
                                </div>
                                <div className="legend">
                                    <div className="legend-item">
                                        <div className="legend-color" style={{ backgroundColor: "var(--success)" }}></div>
                                        <span>Available</span>
                                    </div>
                                    <div className="legend-item">
                                        <div className="legend-color" style={{ backgroundColor: "var(--warning)" }}></div>
                                        <span>Filling Up</span>
                                    </div>
                                    <div className="legend-item">
                                        <div className="legend-color" style={{ backgroundColor: "var(--danger)" }}></div>
                                        <span>Critical</span>
                                    </div>
                                </div>
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
                                <select>
                                    <option>Last 7 Days</option>
                                    <option>Last 30 Days</option>
                                    <option>Last 3 Months</option>
                                    <option>Last Year</option>
                                </select>
                            </div>
                            <div className="chart-placeholder">

                                <img src="/api/placeholder/500/250" alt="Waste Collection Trends Chart" />
                            </div>
                        </div>
                        <div className="chart-container">
                            <div className="chart-header">
                                <h3>Waste Composition</h3>
                                <select>
                                    <option>All Sectors</option>
                                    <option>Residential</option>
                                    <option>Commercial</option>
                                    <option>Industrial</option>
                                </select>
                            </div>
                            <div className="chart-placeholder">

                                <img src="/api/placeholder/500/250" alt="Waste Composition Chart" />
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