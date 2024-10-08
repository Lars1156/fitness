import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../cssFile/login.css'; // Custom CSS for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <>
    {/* <Button>AdminLogin</Button>
    <Button>TrainerLogin</Button> */}
    <Container className="login-page d-flex justify-content-center align-items-center">
      <div className="login-container">
        <h2 className="text-center">Login to Absolute Fitness Club</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>

        <div className="links-container">
          <Button variant="link" className="forgot-password" href="/forgot-password">
            Forgot Password?
          </Button>
          <p className="text-center">Don't have an account? <a href="/register">Register</a></p>
        </div>
      </div>
    </Container>
    </>
  );
};

export default Login;
