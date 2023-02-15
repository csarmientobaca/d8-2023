import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => (
    <footer>
        <Container>
            <Row className="text-center mt-5">
                <Col xs={6} className="offset-3">
                    <Row>
                        <Col xs={12} className="text-left mb-2">
                            <FaFacebook className="footer-icon" />
                            <FaInstagram className="footer-icon" />
                            <FaTwitter className="footer-icon" />
                            <FaYoutube className="footer-icon" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} className="footer-links">
                            <p>
                                <a href="#" alt="footer link">Audio and Subtitles</a>
                            </p>
                            <p>
                                <a href="#" alt="footer link">Media Center</a>
                            </p>
                            <p>
                                <a href="#" alt="footer link">Privacy</a>
                            </p>
                            <p>
                                <a href="#" alt="footer link">Contact us</a>
                            </p>
                        </Col>
                        <Col xs={6} className="footer-links">
                            <p>
                                <a href="#" alt="footer link">Audio Description</a>
                            </p>
                            <p>
                                <a href="#" alt="footer link">Investor Relations</a>
                            </p>
                            <p>
                                <a href="#" alt="footer link">Legal Notices</a>
                            </p>
                        </Col>
                        <Col xs={6} className="footer-links">
                            <p>
                                <a href="#" alt="footer link">Help Center</a>
                            </p>
                            <p>
                                <a href="#" alt="footer link">Jobs</a>
                            </p>
                            <p>
                                <a href="#" alt="footer link">Cookie Preferences</a>
                            </p>
                        </Col>
                        <Col xs={6} className="footer-links">
                            <p>
                                <a href="#" alt="footer link">Gift Cards</a>
                            </p>
                            <p>
                                <a href="#" alt="footer link">Terms of Use</a>
                            </p>
                            <p>
                                <a href="#" alt="footer link">Corporate Information</a>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="text-left mb-2">
                            <Button variant="sm" className="footer-button rounded-0 mt-3">
                                Service Code
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="text-left mb-2 mt-2 copyright">

                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </footer>
)
export default Footer