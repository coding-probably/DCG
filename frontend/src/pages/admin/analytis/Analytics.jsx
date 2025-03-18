import BinCapacityUtilization from '../../graphs/BinCapacityUtilization'
import CollectionEfficiency from '../../graphs/CollectionEfficiency'
import WasteCollectionTrends from '../../graphs/WasteCollectionTrends'
import WasteComposition from '../../graphs/WasteComposition'
import './Analytics.css'
import { NavLink } from 'react-router-dom'


const Analytics = () => {




    return (
        <>
            <div className="container">
                {/* Sidebar */}
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

                {/* Main Content */}
                <div className="main-content">
                    {/* Header */}
                    <div className="header">
                        <div className="search-bar">
                            <i className="fas fa-search" style={{ color: 'var(--gray-light)' }}></i>
                            <input type="text" placeholder="Search analytics, reports..." />
                        </div>
                        <div className="user-profile">
                            
                        </div>
                    </div>

                    {/* Page Title */}
                    <h1 className="page-title"><i className="fas fa-chart-bar"></i> Waste Analytics</h1>

                    {/* Analytics Filters */}
                    <div className="analytics-filters">
                        <div className="filter-group">
                            <label htmlFor="date-range">Date Range</label>
                            <select id="date-range">
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                                <option selected>Last 3 Months</option>
                                <option>Last 6 Months</option>
                                <option>Last Year</option>
                                <option>Custom Range</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label htmlFor="area">Area</label>
                            <select id="area">
                                <option>All Areas</option>
                                <option>Downtown</option>
                                <option>Commercial District</option>
                                <option>Residential North</option>
                                <option>Residential South</option>
                                <option>Industrial Zone</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label htmlFor="bin-type">Bin Type</label>
                            <select id="bin-type">
                                <option>All Types</option>
                                <option>General Waste</option>
                                <option>Recyclables</option>
                                <option>Organic Waste</option>
                                <option>Hazardous Waste</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <button className="apply-filters">Apply Filters</button>
                        </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="key-metrics">
                        <div className="metric-card">
                            <div className="metric-header">
                                <span className="metric-title">Total Waste Collected</span>
                                <div className="metric-icon">
                                    <i className="fas fa-weight-scale"></i>
                                </div>
                            </div>
                            <div className="metric-value">1,247 tons</div>
                            <div className="metric-change positive">
                                <i className="fas fa-arrow-up"></i> 12.3% vs last period
                            </div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-header">
                                <span className="metric-title">Avg. Collection Rate</span>
                                <div className="metric-icon">
                                    <i className="fas fa-tachometer-alt"></i>
                                </div>
                            </div>
                            <div className="metric-value">42 tons/day</div>
                            <div className="metric-change positive">
                                <i className="fas fa-arrow-up"></i> 5.2% vs last period
                            </div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-header">
                                <span className="metric-title">Recycling Rate</span>
                                <div className="metric-icon">
                                    <i className="fas fa-recycle"></i>
                                </div>
                            </div>
                            <div className="metric-value">34.8%</div>
                            <div className="metric-change positive">
                                <i className="fas fa-arrow-up"></i> 3.1% vs last period
                            </div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-header">
                                <span className="metric-title">Collection Efficiency</span>
                                <div className="metric-icon">
                                    <i className="fas fa-percent"></i>
                                </div>
                            </div>
                            <div className="metric-value">89.5%</div>
                            <div className="metric-change negative">
                                <i className="fas fa-arrow-down"></i> 1.2% vs last period
                            </div>
                        </div>
                    </div>

                    {/* Charts */}
                    <div className="chart-grid">
                        <div className="chart-card">
                            <div className="chart-header">
                                <h3 className="chart-title">Waste Collection Trends</h3>
                                <div className="chart-actions">
                                    <button className="chart-action" title="Download">
                                        <i className="fas fa-download"></i>
                                    </button>
                                    <button className="chart-action" title="Fullscreen">
                                        <i className="fas fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="chart-container">
                                <WasteCollectionTrends/>
                            </div>
                        </div>
                        <div className="chart-card">
                            <div className="chart-header">
                                <h3 className="chart-title">Waste Composition</h3>
                                <div className="chart-actions">
                                    <button className="chart-action" title="Download">
                                        <i className="fas fa-download"></i>
                                    </button>
                                    <button className="chart-action" title="Fullscreen">
                                        <i className="fas fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="chart-container">
                                <WasteComposition/>
                            </div>
                        </div>
                        <div className="chart-card">
                            <div className="chart-header">
                                <h3 className="chart-title">Collection Efficiency by Area</h3>
                                <div className="chart-actions">
                                    <button className="chart-action" title="Download">
                                        <i className="fas fa-download"></i>
                                    </button>
                                    <button className="chart-action" title="Fullscreen">
                                        <i className="fas fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="chart-container">
                                <CollectionEfficiency/>
                            </div>
                        </div>
                        <div className="chart-card">
                            <div className="chart-header">
                                <h3 className="chart-title">Bin Capacity Utilization</h3>
                                <div className="chart-actions">
                                    <button className="chart-action" title="Download">
                                        <i className="fas fa-download"></i>
                                    </button>
                                    <button className="chart-action" title="Fullscreen">
                                        <i className="fas fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="chart-container">
                                <BinCapacityUtilization/>
                            </div>
                        </div>
                        {/*<div className="chart-card large-chart">
                            <div className="chart-header">
                                <h3 className="chart-title">Collection Route Optimization Impact</h3>
                                <div className="chart-actions">
                                    <button className="chart-action" title="Download">
                                        <i className="fas fa-download"></i>
                                    </button>
                                    <button className="chart-action" title="Fullscreen">
                                        <i className="fas fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="chart-container">
                                <img src="/api/placeholder/1200/300" alt="Route Optimization Impact Chart" />
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>









        </>
    )
}

export default Analytics