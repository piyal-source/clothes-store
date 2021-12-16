import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../footer.css';
function Footer() {
    return (

        <footer id="footer">

            <div className="section">

                <div className="container">

                    <div className="row" id="bottom-footer">
                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">About Us</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                                <ul className="footer-links" style={{ listStyleType: "none" }} >
                                    <li> 1734 Stonecoal Road</li>
                                    <li>+021-95-51-84</li>
                                    <li>email@email.com</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Categories</h3>
                                <ul className="footer-links" style={{ listStyleType: "none" }}>
                                    <li>Hot deals</li>
                                    <li>Laptops</li>
                                    <li>Smartphones</li>
                                    <li>Cameras</li>
                                    <li>Accessories</li>
                                </ul>
                            </div>
                        </div>



                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Information</h3>
                                <ul className="footer-links" style={{ listStyleType: "none" }}>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                    <li>Orders and Returns</li>
                                    <li>Terms & Conditions</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-6">
                            <div className="footer">
                                <h3 className="footer-title">Service</h3>
                                <ul className="footer-links" style={{ listStyleType: "none" }}>
                                    <li>My Account</li>
                                    <li>View Cart</li>
                                    <li>Wishlist</li>
                                    <li>Track My Order</li>
                                    <li>Help</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>





        </footer>


    );
}

export default Footer;