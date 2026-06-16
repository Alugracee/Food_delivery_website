import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">

            <div className="footer-content-left">
                <img src="https://i.pinimg.com/736x/0e/43/70/0e4370bd8efadf1dc9108e03c235d142.jpg" alt="company_logo" className="logo"/>
                <p>From tasty appetizers to satisfying main courses, we're passionate about bringing you flavors you'll love. Thank you for choosing us to make every meal special.</p>
                <div className="footer-social-icons">
                    <img className='facebook' src="https://i.pinimg.com/736x/38/17/63/38176372008af40fec8a46aeae0328d4.jpg" alt="facebook"  />
                    <img className='twitter' src="https://i.pinimg.com/1200x/64/1c/ec/641cecefc3e502d1f3b89ac352b5694b.jpg" alt="twitter" />
                    <img className='instagram' src="https://i.pinimg.com/736x/b6/66/09/b666091cda6179641b3a5e6303761261.jpg" alt="instagram" />
                    <img className='linkedIn' src="https://i.pinimg.com/736x/16/05/cd/1605cd36a25c98249cf421b145690992.jpg" alt="linkedIn" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy</li>
                </ul>
            </div>
            
            <div className="footer-content-right">
                <h2>GET IN TOUCH WITH US</h2>
                <ul>
                    <li>+234-806-512-9962</li>
                    <li>alugelohin@gmail.com</li>
                </ul>
            </div>
        </div>

        <hr />
        <p className="footer-copyright">Copyright 2026 &#169; alugelohimgmail.com - All Right Reserved.</p>
        {/* <p className="footer-copyright">Copyright 2026&copy; alugelohimgmail.com - All Right Reserved.</p> */}
      
      
    </div>
  )
}

export default Footer;
