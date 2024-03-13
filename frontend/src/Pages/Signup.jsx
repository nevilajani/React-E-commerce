import React, { useState } from 'react';
import '../styles/Signup.css';
import { Link, useNavigate } from 'react-router-dom';


const SignupForm = () => {

    let email;
    const navigate = useNavigate();

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
    };

    const [userData, setUserData] = useState({
        name: '',
        city: '',
        contactDetails: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (userData.password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                console.log('user registered successfully!');
                alert('User registered successfully!');
                navigate('/login');
            } else {
                const errorData = await response.json();
                window.alert(errorData.error);
                console.error('Registration failed.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className='container'>
            <div className='center'>
                <h1>Register</h1>
                <form onSubmit={handleSignup}>
                    <div className='txt_field'>
                        <input type="text" name="name" required value={userData.name} onChange={handleChange} />
                        <label>Name</label>
                    </div>
                    <div className='txt_field'>
                        <input type="text" name="city" required value={userData.city} onChange={handleChange} />
                        <label>City</label>
                    </div>
                    <div className='txt_field'>
                        <input type="email" name="email" required value={userData.email} onChange={handleChange} />
                        <label>Email</label>
                    </div>
                    <div className='txt_field'>
                        <input type="text" name="contactDetails" required value={userData.contactDetails} onChange={handleChange} />
                        <label>Contact Details</label>
                    </div>
                    <div className='txt_field'>
                        <input type="password" name="password" required value={userData.password} onChange={handleChange} />
                        <label>Password</label>
                    </div>
                    <Link to="/login" style={linkStyle}>
                        <div className="signup_link">
                            Have an Account ? Login
                        </div>
                    </Link>
                    <center>
                        <button type="submit" className="btn">
                            Signup
                        </button>
                    </center>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
