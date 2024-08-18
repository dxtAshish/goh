import React from 'react'
import { Link } from 'react-router-dom'
import pay from "../../img/pay/pay.png"
const Footer = () => {
    return (

        <footer className="section-p1" id='footer'>
            <div className="col logo">
            <div className="flex items-center "><h1 className='' style={{"fontSize":"20px","fontweight":"bold","color":"brown"}}>Guarantee Ornament House</h1>
         </div>
                <p><strong>Contact:</strong> guaranteeornamenthouse@gmail.com</p>
                <p><strong>Address:</strong>121A Chaubeji ka Phatak, Kinari Bazar, Agra -282003</p>
                <p><strong>Sale Depot:</strong> 3/564 Rui ki mandi crossīng shahganj, Agra-282010</p>
                <p><strong>Phone:</strong>(+91)9897037713</p>
                <p><strong>Hours:</strong> 10:00 - 18:00, Mon -Sat</p>
                <div className="follow">
                    <h4>Follow Us</h4>
                    <div className="icon">
                        <a href="https://www.facebook.com/guaranteeornamenthouse"><i className="fab fa-facebook-f"></i></a>
                        {/* <i className="fab fa-twitter"></i> */}
                        <a href="https://www.instagram.com/guaranteeornamenthouse/"><i className="fab fa-instagram"></i></a>
                        {/* <i className="fab fa-pinterest-p"></i> */}
                        {/* <i className="fab fa-youtube"></i> */}
                    </div>
                </div>
            </div>

            <div className="col">
                <Link to={"/about"}><h4>About Us</h4></Link>
                {/* <a href="#">About Us</a> */}
                {/* <a href="#">Delivery Infromation</a> */}
                <Link to={"/privacypolicy"}>Privacy Policy</Link>
                <Link to={"/shippingpolicy"}>Shipping Policy</Link>
                <Link to={"/refundpolicy"}>Cancellation and Refund Policy</Link>
                <Link to={"/termsandconditions"}>Terms And Conditions</Link>
                {/* <a href="#">Terms &amp; Conditions</a> */}
                <Link to={'/contact'} >Contact Us</Link>
            </div>
            <div className="col">
                <h4>My Account</h4>
                <Link to={"/signin"}>Sign In</Link>
                <Link to={"/cart"}>View Cart</Link>
                {/* <a href="#">My Wishlist</a> */}
                {/* <a href="#">Track My Order</a> */}
                {/* <a href="#">Help</a> */}
            </div>

            <div className="col install">
                {/* <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div className="row">
                    <img src="img/pay/app.jpg" alt="" />
                    <img src="img/pay/play.jpg" alt="" />
                </div> */}
                <p>Secured Payment Gateways</p>
                <img src={pay} alt="" />
                <img className="logo w-44 h-44 text-center mx-auto" src="https://res.cloudinary.com/dfmnua4b7/image/upload/v1700721241/houl2fwrhzx8r1e4wpu2.jpg" alt="logo" /> 
            </div>

            <div className="copyright">
                <p>© 2023, Guaranntee Ornament House</p>
            </div>
        </footer>

    )
}

export default Footer
