import React  from "react";
import {Container , Row  , Col , Form , Button} from "react-bootstrap";
import '../cssFile/contact.css'
const ContactUs = () =>{
   return(<>
        <Container className="contact-us-section my-5 ">
             <h2 className=" text-center mb-4">
                Contact us 
             </h2>
             <Row>
                <Col md ={6} className="mb-4">
                  <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" required/>
                    </Form.Group>
                    <Form.Group controlId="forEmail" className=" mt-3">
                        <Form.Label>EmailId</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" required/>
                    </Form.Group>
                    <Form.Group controlId="forMessage" className=" mt-4">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="message" placeholder="Enter Your massge" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                      Submit
                    </Button>
                  </Form>
                </Col>
                <Col md={6} className="mb-4">
                 <h4 className="mb-3">OurInformation</h4>
                 <p><strong>LoCation:</strong> 123 Fitness Street, Health City</p>
                 <p><strong>Email:</strong> info@atuoFitnessgamil.com</p>
                 <p><strong>Phone</strong>+919987445564</p>
                 <h5 className="mt-4">Follow Us</h5>
                 <h5 className="mt-4">Follow Us</h5>
                   <div className="contact-social">
                      <a href="https://facebook.com" className="btn btn-outline-primary me-2" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i> Facebook
                      </a>
                      <a href="https://instagram.com" className="btn btn-outline-danger me-2" target="_blank" rel="noopener noreferrer">
                         <i className="fab fa-instagram"></i> Instagram
                      </a>
                      <a href="https://twitter.com" className="btn btn-outline-info me-2" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i> Twitter
                      </a>
                      <a href="https://youtube.com" className="btn btn-outline-danger" target="_blank" rel="noopener noreferrer">
                         <i className="fab fa-youtube"></i> YouTube
                     </a>
                 </div>
                          {/* Google Map Embed */}
                      <div className="mt-4">
                            <h5>Our Location</h5>
                           <iframe
                             title="Gym Location"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509379!2d144.95373631531662!3d-37.816279742021785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43bf68cbf9%3A0xb1b8c9f1d9a58d71!2sFitness%20Club!5e0!3m2!1sen!2sus!4v1632554165050!5m2!1sen!2sus"
                               width="100%"
                               height="250"
                               style={{ border: 0 }}
                               allowFullScreen=""
                               loading="lazy"
                            ></iframe>
                       </div>
                </Col>
             </Row>
        </Container>
   
   </>)
}

export default ContactUs