import React from 'react';
import './footer.css'; // Import your CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>About Us</h3>
                        <p>Our company is a leading provider of a comprehensive 1-on-1 video call and chat platform designed to facilitate seamless communication between individuals, businesses, and organizations. With our innovative technology, users can engage in real-time video calls and text-based chat sessions with ease, enabling efficient and effective communication regardless of physical location.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Contact Us</h3>
                        <ul className="contact-list">
                            <li>Email: binect@gmail.com</li>
                            <li>Phone: +37062252123</li>
                            <li>Address: KTU MLab, Kaunas, Lithuania</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <p>&copy; 2024 Binect. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
