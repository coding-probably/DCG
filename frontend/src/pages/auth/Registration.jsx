import React, { useState } from "react";
import "./Registration.css"; // Import your CSS Module
import { NavLink } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie for managing cookies


const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({});
    const [passwordStrength, setPasswordStrength] = useState({ width: '0%', text: 'Password strength' });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Handle input changes for form fields
    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));

        if (id === 'password') {
            updateStrengthMeter(value);
        }
    };

    // Update password strength meter based on password value
    const updateStrengthMeter = (password) => {
        let strength = 0;
        let status = '';

        if (password.length >= 8) strength += 25;
        if (/[A-Z]/.test(password)) strength += 25;
        if (/[0-9]/.test(password)) strength += 25;
        if (/[^A-Za-z0-9]/.test(password)) strength += 25;

        if (strength <= 25) {
            status = 'Weak';
            setPasswordStrength({ width: '25%', text: status, color: 'red' });
        } else if (strength <= 50) {
            status = 'Fair';
            setPasswordStrength({ width: '50%', text: status, color: 'orange' });
        } else if (strength <= 75) {
            status = 'Good';
            setPasswordStrength({ width: '75%', text: status, color: 'blue' });
        } else {
            status = 'Strong';
            setPasswordStrength({ width: '100%', text: status, color: 'green' });
        }
    };

    // Handle form submission with validation directly in the function
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading state
        let newErrors = {};

        // Validation checks
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
        if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        if (!formData.termsAccepted) newErrors.termsAccepted = 'You must agree to the terms';

        // If errors are found, set error state and stop submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData, {
                headers: { 'Content-Type': 'application/json' },
            });
            // If registration is successful, store the token in a cookie and user data in localStorage
            const { token, _id, name, email, role } = response.data;

            // Store token as a cookie with an expiry of 1 day
            Cookies.set('token', token, { expires: 2 });

            // Store user info in localStorage as an object
            localStorage.setItem('user', JSON.stringify({
                userId: _id,
                name: name,
                email: email,
                role: role
            }));
            setMessage(response.data.message);
            alert('Registration successful! Redirecting...');
            window.location.href = '/'; // Redirect to login page
        } catch (error) {
            setErrors({ server: error.response?.data?.message || 'Registration failed' });
        } finally {
            setLoading(false); // Stop loading state
        }
    };

    /*
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        password: "",
        confirmPassword: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({});
    const [passwordStrength, setPasswordStrength] = useState({ width: "0%", text: "Password strength" });

    // Handle input change
    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === "checkbox" ? checked : value,
        });

        if (id === "password") {
            updateStrengthMeter(value);
        }
    };

    // Password strength meter
    const updateStrengthMeter = (password) => {
        let strength = 0;
        let status = "";

        if (password.length >= 8) strength += 25;
        if (/[A-Z]/.test(password)) strength += 25;
        if (/[0-9]/.test(password)) strength += 25;
        if (/[^A-Za-z0-9]/.test(password)) strength += 25;

        if (strength <= 25) {
            status = "Weak";
            setPasswordStrength({ width: "25%", text: status, color: "red" });
        } else if (strength <= 50) {
            status = "Fair";
            setPasswordStrength({ width: "50%", text: status, color: "orange" });
        } else if (strength <= 75) {
            status = "Good";
            setPasswordStrength({ width: "75%", text: status, color: "blue" });
        } else {
            status = "Strong";
            setPasswordStrength({ width: "100%", text: status, color: "green" });
        }
    };

    // Form validation
    const validateForm = () => {
        let newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
        if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
        if (!formData.termsAccepted) newErrors.termsAccepted = "You must agree to the terms";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked to register", validateForm());
        if (validateForm()) {
            try {
                const response = await axios.post("http://localhost:5000/api/auth/register", formData, {
                    headers: { "Content-Type": "application/json" },
                });
                setMessage(response.data.message);
                alert("Registration successful! Redirecting...");
                window.location.href = "/"; // Redirect to login page
            } catch (error) {
                setErrors({ server: error.response?.data?.message || "Registration failed" });
            } finally {
                setLoading(false);
            }
        }
    };
*/
    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="logo-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                        </svg>
                    </div>
                    <h2>Create an Account</h2>
                </div>

                <div className="auth-body">
                    <form onSubmit={handleSubmit}>


                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className="form-control" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                            {errors.name && <div className="error-message">{errors.name}</div>}
                        </div>





                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                            {errors.email && <div className="error-message">{errors.email}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control" value={formData.password} onChange={handleChange} placeholder="Enter password" />
                            <div className="password-strength">
                                <div className="password-strength-meter" style={{ width: passwordStrength.width, backgroundColor: passwordStrength.color }}></div>
                            </div>
                            <div className="password-strength-text">{passwordStrength.text}</div>
                            {errors.password && <div className="error-message">{errors.password}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm your password" />
                            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
                        </div>

                        <div className="checkbox-container">
                            <input type="checkbox" id="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
                            <label htmlFor="termsAccepted">
                                I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                            </label>
                            {errors.termsAccepted && <div className="error-message">{errors.termsAccepted}</div>}
                        </div>

                        <button type="submit" className="btn btn-primary">Create Account</button>
                    </form>
                </div>

                <div className="auth-footer">
                    <NavLink to="/signin">

                        <p>Already have an account? <a href="login.html">Login</a></p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Registration;
