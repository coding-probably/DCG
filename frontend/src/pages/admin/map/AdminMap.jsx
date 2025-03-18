import MapComponent from '../../MapComponent';
import './AdminMap.css';




const AdminMap = () => {



    return (

        <>
            <div className="container">
                {/* Sidebar */}
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


                {/* Main Content */}
                <div className="main-content">
                    {/* Header */}
                    <div className="header">
                        <div className="search-bar">
                            <i className="fas fa-search" style={{ color: 'var(--gray-light)' }}></i>
                            <input type="text" placeholder="Search bins, routes, or areas..." />
                        </div>
                        <div className="user-profile">
                            
                            
                        </div>
                    </div>

                    {/* Map Content */}
                    <div className="map-content">
                        {/*<div className="map-controls">
                            <div className="control-group">
                                <label>Area</label>
                                <select className="form-control">
                                    <option>All Areas</option>
                                    <option>Downtown</option>
                                    <option>Residential Districts</option>
                                    <option>Commercial Zone</option>
                                    <option>Industrial Area</option>
                                </select>
                            </div>
                            <div className="control-group">
                                <label>Bin Type</label>
                                <select className="form-control">
                                    <option>All Types</option>
                                    <option>General Waste</option>
                                    <option>Recyclable</option>
                                    <option>Organic</option>
                                    <option>Hazardous</option>
                                </select>
                            </div>
                            <div className="control-group">
                                <label>Status</label>
                                <div className="filter-buttons">
                                    <button className="filter-button active">All</button>
                                    <button className="filter-button">Available</button>
                                    <button className="filter-button">Filling Up</button>
                                    <button className="filter-button">Critical</button>
                                </div>
                            </div>
                            <div className="control-group">
                                <label>Last Collection</label>
                                <select className="form-control">
                                    <option>Any Time</option>
                                    <option>Today</option>
                                    <option>Last 3 Days</option>
                                    <option>Last Week</option>
                                    <option>Over a Week</option>
                                </select>
                            </div>
                        </div>*/}

                        <div className="map-view">
                            <div className="map-tools">
                                <button className="map-tool" title="Zoom In"><i className="fas fa-plus"></i></button>
                                <button className="map-tool" title="Zoom Out"><i className="fas fa-minus"></i></button>
                                <button className="map-tool" title="Reset View"><i className="fas fa-sync-alt"></i></button>
                                <button className="map-tool" title="Show Heatmap"><i className="fas fa-fire"></i></button>
                                <button className="map-tool" title="Print Map"><i className="fas fa-print"></i></button>
                            </div>

                            <div className="map-overlay">
                                <div className="legend">
                                    <div className="legend-item">
                                        <div className="legend-color" style={{ backgroundColor: 'var(--success)' }}></div>
                                        <span>Available (0-60%)</span>
                                    </div>
                                    <div className="legend-item">
                                        <div className="legend-color" style={{ backgroundColor: 'var(--warning)' }}></div>
                                        <span>Filling Up (61-80%)</span>
                                    </div>
                                    <div className="legend-item">
                                        <div className="legend-color" style={{ backgroundColor: 'var(--danger)' }}></div>
                                        <span>Critical (81-100%)</span>
                                    </div>
                                    <div className="legend-item">
                                        <div className="legend-color" style={{ backgroundColor: 'var(--gray)' }}></div>
                                        <span>Offline</span>
                                    </div>
                                </div>
                            </div>

                            <div className="map-info-card" id="binInfoCard">
                                <div className="info-card-header">
                                    <h3>Bin Information</h3>
                                    <button className="close-info"><i className="fas fa-times"></i></button>
                                </div>
                                <div className="info-card-content">
                                    <div className="info-row">
                                        <span>Bin ID:</span>
                                        <span className="info-value">#1045</span>
                                    </div>
                                    <div className="info-row">
                                        <span>Location:</span>
                                        <span className="info-value">Sector 7, North Avenue</span>
                                    </div>
                                    <div className="info-row">
                                        <span>Type:</span>
                                        <span className="info-value">General Waste</span>
                                    </div>
                                    <div className="info-row">
                                        <span>Capacity:</span>
                                        <span className="info-value">95% (Critical)</span>
                                    </div>
                                    <div className="info-row">
                                        <span>Last Collection:</span>
                                        <span className="info-value">3 days ago</span>
                                    </div>
                                    <div className="info-row">
                                        <span>Battery:</span>
                                        <span className="info-value">72%</span>
                                    </div>
                                    <div className="info-row">
                                        <span>Temperature:</span>
                                        <span className="info-value">24°C (Normal)</span>
                                    </div>
                                    <div className="info-actions">
                                        <button className="info-btn info-btn-primary">Schedule Pickup</button>
                                        <button className="info-btn info-btn-secondary">View History</button>
                                    </div>
                                </div>
                            </div>

                            
                            <div className='map-img'>
                                <MapComponent/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>








        </>
    )
}


export default AdminMap