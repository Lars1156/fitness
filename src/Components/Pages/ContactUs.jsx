import React  from "react";
import {Container , Row  , Col , Form , Button} from "react-bootstrap";

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
             </Row>
        </Container>
   
   </>)
}

export default ContactUs