import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import '../cssFile/home.css';
import Footer from '../Footer';

const Home = () => {
  return (
    <>
    <div className="homepage">
      <Carousel className="image-slider">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1600x900/?gym"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Absolute Fitness Club</h3>
            <p>Join us to achieve your fitness goals with our expert trainers!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1600x900/?fitness"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Get Fit with Our Classes</h3>
            <p>Choose from a variety of classes tailored to your needs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1600x900/?workout"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Stay Motivated</h3>
            <p>Our community supports you every step of the way!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="button-container">
        <Button variant="primary" className="mx-2" href="/loginPage">Login</Button>
        <Button variant="secondary" className="mx-2" href="/membership">Update Membership</Button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
