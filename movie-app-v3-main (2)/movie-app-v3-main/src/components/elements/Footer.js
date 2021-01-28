// Footer - Shows contact info, social media, and address

import React from 'react';

// Determine the current year
const d = new Date();
const year = d.getFullYear();

const Footer = () => {

    return (
        <footer>
            <hr></hr>
            <div className="footer-grid">

                <div className="contact">
                    <h3>Get in Touch</h3>
                </div>

                <div className="contact-info">
                    <h5>Email</h5>
                    <p>mbui14@my.bcit.ca<br></br>vnguyen74@my.bcit.ca</p>
                </div>

                <div className="social">
                    <h5>Social Media</h5>
                    <a href="https://www.instagram.com"><img src="./images/instagram-icon.png" alt="Instagram Icon" id="instagram-icon"></img></a>
                    <a href="https://www.facebook.com"><img src="./images/facebook-icon.png" alt="Facebook Icon" id="facebook-icon"></img></a>
                    <a href="https://www.twitter.com"><img src="./images/twitter-icon.png" alt="Twitter Icon" id="twitter-icon"></img></a>
                </div>

                <div className="location">
                    <h3>Where We Are</h3>
                </div>

                <div className="address">
                    <h5>Address</h5>
                    <p>555 Seymour Street<br></br>Vancouver, BC<br></br>V6B 3HP</p>
                </div>
            </div>

            <div className="copyright">
                <p>&copy; {year} Filmdex</p>
            </div>

        </footer>
    )
}

export default Footer;