import React, { useState } from 'react';
import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";

const LoginSign = () => {
    const [action, setAction] = useState("Login");

    // Define inline styles
    const containerStyle = {
        backgroundColor: '#f0f0f0',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const contentStyle = {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        width: '100%',
    };

    return (
        <div style={containerStyle} className="container-fluid">
            <div style={contentStyle} className="container">
                <div className="header text-center">
                    <h1 className="text-primary">{action}</h1>
                    <div className="underline bg-primary"></div>
                </div>
                <div className="inputs">
                    {action === "Login" ? null : (
                        <div className="input" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <img src={user_icon} alt="" style={{ width: '20px', marginRight: '10px' }} />
                            <input type="text" className="form-control" placeholder='Name' />
                        </div>
                    )}

                    <div className="input" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <img src={email_icon} alt="" style={{ width: '20px', marginRight: '10px' }} />
                        <input type="email" className="form-control" placeholder='Email Id' />
                    </div>
                    <div className="input" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <img src={password_icon} alt="" style={{ width: '20px', marginRight: '10px' }} />
                        <input type="password" className="form-control" placeholder='Password' />
                    </div>
                </div>
                {action === "Sign Up" ? null : <div className="forget-password text-center mt-3">Lost Password <span className="text-primary">Click here</span></div>}

                <div className="submit-container d-flex justify-content-center mt-4">
                    <div className={action === "Login" ? "submit btn btn-primary mr-2" : "submit btn btn-secondary"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                    <div className="mx-2"></div> {/* Add a space between the buttons */}
                    <div className={action === "Sign Up" ? "submit btn btn-primary ml-2" : "submit btn btn-secondary"} onClick={() => { setAction("Login") }}>Login</div>
                </div>
            </div>
        </div>
    );
}

export default LoginSign;
