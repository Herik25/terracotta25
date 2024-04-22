import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import './Footer.css'

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
        </div>
      </div>
      <div className=" footer-content">
        <div className=" footer-input-section">
          <div className=" subscribe">SUBSCRIBE NOW!</div>
          <div className=" input">
            <input type="text" placeholder="Your email" />
            <div className=" subscribeBtn">
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className="icons">
            <div className=" facebook">
              <FaFacebook style={{ color: "white" }} size="20px" />
            </div>
            <div className=" instagram">
              <FaInstagram style={{ color: "white" }} size="20px" />
            </div>
            <div className=" tiktok">
              <FaTiktok style={{ color: "white" }} size="20px" />
            </div>
            <div className=" snapchat">
              <FaSnapchat style={{ color: "white" }} size="20px" />
            </div>
            <div className=" twitter">
              <FaTwitter style={{ color: "white" }} size="20px" />
            </div>
          </div>
        </div>
        <div className=" company-info">
          <div className="our-company">
            <div className=" company-info-title">OUR COMPANY</div>
            <p>Personal Info</p>
            <p>Orders</p>
            <p>Credit Slips</p>
            <p>Content</p>
            <p>Addresses</p>
          </div>
          <div className=" our-products">
            <div className=" company-info-title">PRODUCTS</div>
            <p>Product-1</p>
            <p>Product-2</p>
            <p>Product-3</p>
            <p>Product-4</p>
            <p>Product-5</p>
          </div>
          <div className="about-us">
            <div className=" company-info-title">About us</div>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>New Products</p>
            <p>Best Sales</p>
          </div>
          <div className="your-acc">
            <div className=" company-info-title">YOUR ACCOUNT</div>
            <p>Login</p>
            <p>Forgot Password</p>
            <p>My Account</p>
            <p>Registration</p>
          </div>
        </div>
        <div className="copyright">
          <div style={{ color: "#555f5f" }}>
            © 2023, TerraCotta Sectioned Shopify Theme
          </div>
          <div className=" cards">
            <div>
                <img src="https://logodownload.org/wp-content/uploads/2019/09/apple-pay-logo-0.png" height="50px" width="50px" alt="card" />
            </div>
            <div>
              <img src="https://static.vecteezy.com/system/resources/previews/017/221/782/non_2x/google-pay-logo-transparent-free-png.png" height="50px" width="50px" alt="card" />
            </div>
            <div>
              <img src="https://th.bing.com/th/id/R.e1c08ee82680b977435ce532eddd4e16?rik=v1Pwr8gDe5lrEw&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2017%2f04%2fVisa-logo.png&ehk=qIZIg9FgR13cA8GuriQJA08iBENw05br%2fN54qs9k%2ftU%3d&risl=&pid=ImgRaw&r=0" height="20px" width="50px" alt="card" />
            </div>
            <div>
              <img src="https://www.pngmart.com/files/22/Mastercard-Logo-PNG-HD.png" height="30px" width="50px" alt="card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
