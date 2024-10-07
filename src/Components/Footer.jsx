import React from 'react';
import '../Components/cssFile/footer.css'; // Custom CSS for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About <span>Absolute Fitness Club</span></h3>
          <p>
            Absolute Fitness Club is dedicated to helping you achieve your fitness goals with top-tier equipment, certified trainers, and a supportive community.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/classes">Classes</a></li>
            <li><a href="/trainers">Trainers</a></li>
            <li><a href="/memberships">Memberships</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> 123 Fitness Avenue, City, Country</p>
          <p><i className="fas fa-phone-alt"></i> +123 456 7890</p>
          <p><i className="fas fa-envelope"></i> contact@absolutefitness.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Absolute Fitness Club. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
