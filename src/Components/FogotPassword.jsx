import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './cssFile/forgot.css'; 

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otpError, setOtpError] = useState('');

  // Function to handle sending OTP to email
  const handleSendOTP = (e) => {
    e.preventDefault();
    console.log("Sending OTP to email:", email);
    setOtpSent(true); 
  };
  const handlePasswordReset = (e) => {
    e.preventDefault();
    const otpRegex = /^\d{4}$/;
    if (!otpRegex.test(otp)) {
      setOtpError('OTP must be a 4-digit number');
      return;
    } else {
      setOtpError('');
    }

    // Verify new passwords match
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      console.log("OTP:", otp, "New Password:", newPassword);
    }
  };
  return (
    <Container className="forgot-password-container">
      <h2 className="text-center">Forgot Password</h2>
      {!otpSent ? (
        <Form onSubmit={handleSendOTP}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Send OTP
          </Button>
        </Form>
      ) : (
        <Form onSubmit={handlePasswordReset}>
          <Form.Group controlId="formBasicOTP">
            <Form.Label>Enter OTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter 4-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="4"
              required
            />
            {otpError && <div className="error-text">{otpError}</div>}
          </Form.Group>
          <Form.Group controlId="formBasicNewPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Reset Password
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default ForgotPassword;
