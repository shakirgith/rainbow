import React from "react";
import { NavLink } from "react-router-dom";
import { CategorySlider } from "./CategorySlider";
import { Homeslider } from "./Homeslider";
import { OwlTestimonial } from "./Testimonial";

const Home = () => {
  return (
    <>
<div class="hero-area pt-145 pb-75 rel z-1">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="hero-content rmb-55 wow fadeInUp delay-0-2s animated">
                            <span class="sub-title mb-15">Printing Comapny</span>
                            <h1>We’re Pixel Perfect Printing Company</h1>
                            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized</p>
                            <ul class="list-style-one pt-10 wow fadeInUp delay-0-3s animated p-0">
                                <li>Quality Services Provider</li>
                                <li>Printing, Designing and Transportation</li>
                            </ul>
                            <div class="hero-btns pt-25 wow fadeInUp delay-0-4s animated">
                            <NavLink to="/contact" className="theme-btn my-button">Talk With Us <i class="fas fa-long-arrow-right"></i></NavLink>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="hero-images wow fadeInLeft delay-0-2s animated">
                            <img class="w-100" src={"assets/images/hero-right.jpeg"} alt="Hero Image" />
                            <img class="image-one wow fadeInRight delay-0-6s animated" src={"assets/images/hero-1.png"} alt="Hero Image" />
                            <img class="image-two wow fadeInDown delay-0-8s animated" src={"assets/images/hero-2.png"} alt="Hero Image" />
                            <div class="circle-shapes">
                                <div class="shape-inner">
                                    <span class="dot-one"></span>
                                    <span class="dot-two"></span>
                                    <span class="dot-three"></span>
                                    <span class="dot-four"></span>
                                    <span class="dot-five"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


      <Homeslider />

      <section className="what-we-provide bgc-lighter pt-75">
        <div className="container">

        <div className="heading text-center">
                <span className="subtitle d-block text-center">What We Provide</span>
                <h2>
                Best Category <span> For Printing</span>
                </h2>
                <span className="dot1"></span> <span className="dot1"></span>
                <span className="dot1"></span>
                <span className="dot"></span>
              </div>

        


        <div className="mb-0">

        <CategorySlider />



          </div>
          </div>
          </section>


          <section className="overview">
          <div className="container">
          <div className="row g-lg-5 g-md-5">
          <div className="col-sm-12 col-lg-6">
              <img
                className="img-fluid rounded-3"
                src={"assets/images/img.webp"}
                alt="logo"
              />
            </div>

            <div className="col-sm-12 col-lg-6 text-left">
              <div className="heading">
                <span className="subtitle">About us</span>
                <h2>
                  Welcome to <br />
                  <span>The Rainbow Print</span>
                </h2>
                <span className="dot1"></span> <span className="dot1"></span>
                <span className="dot1"></span>
                <span className="dot"></span>
              </div>

              <p>
                The Rainbow Print mission is to be everyone’s, anyone’s one stop
                printing service in the city!   </p>
                <p> We aim to bring any idea, any project you task us with to its
                visual, printed form. Ordering our services will allow you to
                experience the luxury of high quality printed materials, and
                reliable staff, with affordable prices.</p> 
                <p>At TRP, we
                will implement quality procedure at every stage - from the
                inception of design to delivery, making sure that everything is
                perfect!
              </p>
            </div>
          </div>


         



        </div>
      </section>



      <section className="offerby services-area">
          <div className="container">
              {/* <div className="row">
              <div className="col-sm-6 col-lg-3">
                  <div className="heading">
                    <span className="subtitle">Our Services</span>
                    <h2 className="text-white">
                      Most Popular <br />
                      <span>Printing</span>
                    </h2>
                    <span className="dot1"></span> <span className="dot1"></span>
                    <span className="dot1"></span>
                    <span className="dot"></span>
                  </div>
                  <p className="text-white">At The Rainbow Print, we will implement quality procedure at every stage - from the inception of design to delivery, making sure that everything is perfect!</p>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="features mb-5">
                      <div className="icon-circle"><img className="img-icon" src={"assets/images/svgs/regular/user.svg"} alt="icon" /> </div>
                      <h3>Print</h3>
                      <p>It’s not just ink on paper to us. Your company relies on the quality of the items that we produce. Your prospects and homeowners will see that you are a professional service provider. You’ll look your very best with our high-value products.</p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="features mb-5">
                      <div className="icon-circle"><img className="img-icon" src={"assets/images/svgs/regular/user.svg"} alt="icon" /> </div>
                      <h3>Copy</h3>
                      <p>Curabitur eget turpis iaculis eleifend. Curabitur consectetur fermentum ante</p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="features mb-5">
                      <div className="icon-circle"><img className="img-icon" src={"assets/images/svgs/regular/user.svg"} alt="icon" /> </div>
                      <h3>Branding</h3>
                      <p>Curabitur eget turpis iaculis eleifend. Curabitur consectetur fermentum ante</p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="features mb-5">
                      <div className="icon-circle"><img className="img-icon" src={"assets/images/svgs/regular/user.svg"} alt="icon" /> </div>
                      <h3>Stationery</h3>
                      <p>Curabitur eget turpis iaculis eleifend. Curabitur consectetur fermentum ante</p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="features mb-5">
                      <div className="icon-circle"><img className="img-icon" src={"assets/images/svgs/regular/user.svg"} alt="icon" /> </div>
                      <h3>Business Card</h3>
                      <p>Curabitur eget turpis iaculis eleifend. Curabitur consectetur fermentum ante</p>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <div className="features mb-5">
                      <div className="icon-circle"><img className="img-icon" src={"assets/images/svgs/regular/user.svg"} alt="icon" /> </div>
                      <h3>Labels & Stickers</h3>
                      <p>Curabitur eget turpis iaculis eleifend. Curabitur consectetur fermentum ante</p>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <div className="features">
                      <div className="icon-circle"><img className="img-icon" src={"assets/images/svgs/regular/user.svg"} alt="icon" /> </div>
                      <h3>T-Shirt Printing</h3>
                      <p>Curabitur eget turpis iaculis eleifend. Curabitur consectetur fermentum ante</p>
                    </div>
                </div>

              </div> */}

                <div class="services-inner text-white bgc-black">
                    <div class="row align-items-center">
                        <div class="col-xl-4 col-lg-7">
                     

                            <div class="service-content position-relative p-100 py-130 rpb-100 wow fadeInUp delay-0-2s animated">
                            <div className="heading">
                              <span className="subtitle">Our Services</span>
                              <h2 className="text-white">
                                Most Popular <br />
                                <span>Printing</span>
                              </h2>
                              <span className="dot1"></span> <span className="dot1"></span>
                              <span className="dot1"></span>
                              <span className="dot"></span>
                            </div>
                                <p className="text-white">At The Rainbow Print, we will implement quality procedure at every stage - from the inception of design to delivery, making sure that everything is perfect!</p>
                                <NavLink to="/services" className="theme-btn hover-two mt-20 my-button">Learn More <i class="fas fa-long-arrow-right"></i></NavLink>
                                <div class="circle-shapes no-animation">
                                    <div class="shape-inner">
                                        <span class="dot-one"></span>
                                        <span class="dot-two"></span>
                                        <span class="dot-three"></span>
                                        <span class="dot-four"></span>
                                        <span class="dot-five"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8">
                            <div class="row no-gap">
                                <div class="col-md-6">
                                    <div class="service-item wow fadeInDown delay-0-4s animated">
                                        <div class="icon">
                                            <i class="flaticon-print"></i>
                                        </div>
                                        <h3>Printing Services</h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque</p>
                                        <NavLink to="/services"  className="read-more">Read More <i class="fas fa-long-arrow-right"></i></NavLink>
                                        <div className="bg-image"></div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="service-item wow fadeInDown delay-0-4s animated">
                                        <div class="icon">
                                            <i class="flaticon-3d-printer"></i>
                                        </div>
                                        <h3>3D Printing Service</h3>
                                        <p>On the other hand, we denounce with rigteous indignation and dislike demoralized</p>
                                        <NavLink to="/services"  className="read-more">Read More <i class="fas fa-long-arrow-right"></i></NavLink>
                                        <div className="bg-image"></div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="service-item wow fadeInUp delay-0-6s animated">
                                        <div class="icon">
                                            <i class="flaticon-print-1"></i>
                                        </div>
                                        <h3>Offest Printing</h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque</p>
                                        <NavLink to="/services"  className="read-more">Read More <i class="fas fa-long-arrow-right"></i></NavLink>
                                        <div className="bg-image"></div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="service-item wow fadeInUp delay-0-6s animated">
                                        <div class="icon">
                                            <i class="flaticon-focus"></i>
                                        </div>
                                        <h3>Design &amp; Branding</h3>
                                        <p>On the other hand, we denounce with rigteous indignation and dislike demoralized</p>
                                        <NavLink to="/services" className="read-more">Read More <i class="fas fa-long-arrow-right"></i></NavLink>
                                        <div className="bg-image"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
       


          </div>

      </section>



      <section className="secure">
          <div className="container">
          <div className="heading text-center">
                <span className="subtitle">Features</span>
                <h2>
                  Print 
                  <span> Catagories</span>
                </h2>
                <span className="dot1"></span> <span className="dot1"></span>
                <span className="dot1"></span>
                <span className="dot"></span>
              </div>


              <div className="row">
                <div className="col-12 col-sm-3  mb-5">
                    <div className="catImg">
                      <img className="img-fluid mb-4" src={"assets/images/Brochure.jpeg"} alt="image" /> 
                      <h4>Brochure Printing</h4>
                    </div>
                </div>

                <div className="col-12 col-sm-3  mb-5">
                    <div className="catImg">
                      <img className="img-fluid mb-4" src={"assets/images/Brochure.jpeg"} alt="image" /> 
                      <h4>Business Card</h4>
                    </div>
                </div>

                <div className="col-12 col-sm-3  mb-5">
                    <div className="catImg">
                      <img className="img-fluid mb-4" src={"assets/images/Brochure.jpeg"} alt="image" /> 
                      <h4>T-shirt Printing</h4>
                    </div>
                </div>

                <div className="col-12 col-sm-3  mb-5">
                    <div className="catImg">
                      <img className="img-fluid mb-4" src={"assets/images/Brochure.jpeg"} alt="image" /> 
                      <h4>Brochure Printing</h4>
                    </div>
                </div>

                <div className="col-12 col-sm-3  mb-5">
                    <div className="catImg">
                      <img className="img-fluid mb-4" src={"assets/images/Brochure.jpeg"} alt="image" /> 
                      <h4>Brochure Printing</h4>
                    </div>
                </div>

                <div className="col-12 col-sm-3  mb-5">
                    <div className="catImg">
                      <img className="img-fluid mb-4" src={"assets/images/Brochure.jpeg"} alt="image" /> 
                      <h4>Business Card</h4>
                    </div>
                </div>

                <div className="col-12 col-sm-3  mb-5">
                    <div className="catImg">
                      <img className="img-fluid mb-4" src={"assets/images/Brochure.jpeg"} alt="image" /> 
                      <h4>T-shirt Printing</h4>
                    </div>
                </div>

                <div className="col-12 col-sm-3  mb-5">
                    <div className="catImg">
                      <img className="img-fluid mb-4" src={"assets/images/Brochure.jpeg"} alt="image" /> 
                      <h4>Brochure Printing</h4>
                    </div>
                </div>
                

              </div>
          </div>
      </section>


      <section className="testimonial">
        <div className="container">

              <div className="heading text-center">
                <span className="subtitle">Testimonial</span>
                <h2>
                What They 
                  <span> Say</span>
                </h2>
                <span className="dot1"></span> <span className="dot1"></span>
                <span className="dot1"></span>
                <span className="dot"></span>
              </div>

            <div className="testwrap text-center">
            <OwlTestimonial />
            </div>

            <div className="client-pic">
              <img className="img-fluid" src={"assets/images/testi-avatar-1.jpeg"} alt="testimonial image" /> 
            </div>
            <div className="client-pic2">
            <img className="img-fluid" src={"assets/images/testi-avatar-2.jpeg"} alt="testimonial image" /> 
            </div>
            <div className="client-pic3">
            <img className="img-fluid" src={"assets/images/testi-avatar-3.jpeg"} alt="testimonial image" /> 
            </div>
            <div className="client-pic4">
            <img className="img-fluid" src={"assets/images/testi-avatar-4.jpeg"} alt="testimonial image" /> 
            </div>
            <div className="client-pic5">
            <img className="img-fluid" src={"assets/images/testi-avatar-5.jpeg"} alt="testimonial image" /> 
            </div>
        </div>
      </section>


    </>
  );
};

export default Home;
