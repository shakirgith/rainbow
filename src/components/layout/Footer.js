import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <>  
    <footer className='footer'>
    <div class="securesction">
      <div class="container">

          <ul class="row securelist">
              <li class="col-12 col-sm-4 col-lg-4"> 
                    <div className="box">
                      <div className="mb-4"><i class="fas fa-award"></i> </div>
                      <h5>Services Excellence</h5>
                      <p>A real live person will always answer our phones. We do not use auto attendants during business hours.</p>
                    </div>
              </li>

              <li class="col-12 col-sm-4 col-lg-4"> 
                  <div className="box">
                      <div className="mb-4"><i class="fa-regular fa-thumbs-up"></i></div>
                      <h5>100% CUSTOMER GUARANTEE</h5>
                      <p>We promise that you will love our products and services or we will make it right. Since 2014 we have been delivering on our promise.</p>
                    </div>
              </li>

              <li class="col-12 col-sm-4 col-lg-4"> 
                  <div className="box">
                      <div className="mb-4"><i class="fa-regular fa-credit-card"></i></div>
                      {/* <h3>NEED HELP? (800) 462-8379</h3>
                      <p>Monday to Saturday</p>
                      <p>9:00 am to 7:00 pm</p>
                      <p>Closed Saturday and Sunday</p>   */}
                      <h5>Secure Payments</h5>
                      <p>Your Payment information is not stored in any of our systems and we do not have access to it.</p>
                    </div>
              </li>
            
          </ul>

      </div>
    </div>




    <div class="container">
    <div class="newsletter">

    <div class="col1">
      <span className='newslettertext'>10% Discount on Subscribe to our Newsletter!</span>
    </div>


    <div class="col1">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button class="btn btn-outline-secondary my-button" type="button" id="button-addon2">Subscribe</button>
      </div>
  </div>

    </div>
  </div>


    <div class="container text-center text-md-start mt-5">

      <div class="row mt-3">

        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
          <img className="img-fluid flogo" src={'assets/images/trp-logo.png'} alt="logo" />
          </h6>

          <div class="me-5 d-none d-lg-block mb-2">
            <span>Get connected with us:</span>
          </div>

          <div>
            <a href="" class="me-4 link-secondary">
              <i class="fab fa-2x fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 link-secondary">
              <i class="fab fa-2x fa-twitter"></i>
            </a>
            <a href="" class="me-4 link-secondary">
              <i class="fab fa-2x fa-instagram"></i>
            </a>
            <a href="" class="me-4 link-secondary">
              <i class="fab fa-2x fa-linkedin"></i>
            </a>

          </div>
          
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
            Help
          </h6>
          <ul className='footer-menu'>
            <li> <NavLink to="/" class="text-reset">Order By Email</NavLink></li>
            <li> <NavLink to="/" class="text-reset">Why Choose us</NavLink></li>
            <li> <NavLink to="/" class="text-reset">FAQs</NavLink></li>
          </ul>
         
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
          Policies
          </h6>
          <ul className='footer-menu'>
            
            <li> <NavLink to="/" class="text-reset">Privacy Policy</NavLink></li>
            <li> <NavLink to="/" class="text-reset">Delivery & Return Policy</NavLink></li>
            <li> <NavLink to="/" class="text-reset">Terms & Conditions</NavLink></li>
          </ul>
          
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <h6 class="text-uppercase fw-bold mb-4">Contact Info</h6>

          <ul className='footer-menu'>
            <li><i class="fas fa-home me-2 text-secondary"></i>133 Jhotwara, Jaipur, India</li>
            <li> <a href="mailto:info@example.com" class="text-reset"><i class="fas fa-envelope me-2 text-secondary"></i> info@example.com</a></li>
            <li className='d-block mt-2'><strong> Call or whatsapp </strong><a href="tel:+91-9588997889" class="text-reset d-block mt-1"><i class="fas fa-phone me-2 text-secondary"></i>+91-9588997889</a></li>
          </ul>
        </div>

      </div>

    </div>



















        <div className='copyright'>Copyright © 2014-2023 The Rainbow Print. All Rights Reserved.</div>
    </footer>
    </>
    
  )
}
