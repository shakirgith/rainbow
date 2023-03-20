import React from "react";
import { CategorySlider } from "./CategorySlider";
import { Homeslider } from "./Homeslider";
import { OwlTest } from "./OwlCarousel";

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
                                <a href="team.html" class="theme-btn">Talk With Us <i class="fas fa-long-arrow-right"></i></a>
                                <a href="contact.html" class="theme-btn style-three">Latest Projects <i class="fas fa-long-arrow-right"></i></a>
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


        <div className="mb-5">

        <CategorySlider />

{/* 
        <div className="col-sm-6 col-lg-3">
                <div class="what-we-provide-item wow fadeInUp delay-0-2s slick-slide animated slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide50">
                        <i class="flaticon-t-shirt"></i>
                        <h6><a href="service-details.html" tabindex="0">T-Shart Print</a></h6>
               </div>
            </div>


        <div className="col-sm-6 col-lg-3">
        <div class="what-we-provide-item wow fadeInUp delay-0-3s slick-slide slick-cloned animated" data-slick-index="-6" id="" aria-hidden="true" tabindex="-1">
                        <i class="flaticon-logo"></i>
                        <h6><a href="service-details.html" tabindex="-1">Logo Design</a></h6>
                    </div>
            </div>



            <div className="col-sm-6 col-lg-3">
            <div class="what-we-provide-item wow fadeInUp delay-0-4s slick-slide slick-cloned animated" data-slick-index="-5" id="" aria-hidden="true" tabindex="-1" >
                        <i class="flaticon-banner"></i>
                        <h6><a href="service-details.html" tabindex="-1">Banner Print</a></h6>
                    </div>
            </div>



            <div className="col-sm-6 col-lg-3">
            <div class="what-we-provide-item wow fadeInUp delay-0-5s slick-slide slick-cloned animated" data-slick-index="-4" id="" aria-hidden="true" tabindex="-1">
                        <i class="flaticon-reading-book"></i>
                        <h6><a href="service-details.html" tabindex="-1">Books Print</a></h6>
                    </div>
            </div>


            <div className="col-sm-6 col-lg-3">
            <div class="what-we-provide-item wow fadeInUp delay-0-6s slick-slide slick-cloned animated" data-slick-index="-3" id="" aria-hidden="true" tabindex="-1" >
                        <i class="flaticon-debit-card"></i>
                        <h6><a href="service-details.html" tabindex="-1">Card Print</a></h6>
                    </div>
            </div>


            <div className="col-sm-6 col-lg-3">
            <div class="what-we-provide-item wow fadeInUp delay-0-7s slick-slide slick-cloned animated" data-slick-index="-2" id="" aria-hidden="true" tabindex="-1" >
                        <i class="flaticon-award"></i>
                        <h6><a href="service-details.html" tabindex="-1">Trophy Print</a></h6>
                    </div>
            </div>


            <div className="col-sm-6 col-lg-3">
            <div class="what-we-provide-item wow fadeInUp delay-0-8s slick-slide slick-cloned animated" data-slick-index="-1" id="" aria-hidden="true" tabindex="-1" >
                        <i class="flaticon-banner"></i>
                        <h6><a href="service-details.html" tabindex="-1">Banner Print</a></h6>
                    </div>
            </div>

            <div className="col-sm-6 col-lg-3">
            <div class="what-we-provide-item wow fadeInUp delay-0-3s slick-slide animated slick-active" data-slick-index="1" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide51" >
                        <i class="flaticon-logo"></i>
                        <h6><a href="service-details.html" tabindex="0">Logo Design</a></h6>
                    </div>
            </div> */}






            {/* <div className="col-sm-6 col-lg-3">
                <div className="features red-color">
                  <div className="icon-circle"><img className="img-icon" src={"assets/images/svgs/regular/user.svg"} alt="icon" /> </div>
                  <h3>The Lowest Cost of Printing </h3>
                  <p>Curabitur eget turpis iaculis eleifend. Curabitur consectetur fermentum ante</p>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="features perple-color">
                  <div className="icon-circle"><img className="img-icon" src={"assets/images/svgs/regular/user.svg"} alt="icon" /> </div>
                  <h3>Graphic Designers</h3>
                  <p>A great marketing plan combined with an effective print design are the secret to your success. Our Creative Designers are top-level experts when it comes to marketing to homeowners for HVAC, plumbing and electrical services.</p>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="features yellow-color">
                  <div className="icon-circle"><img className="img-icon" src={"assets/images/svgs/regular/user.svg"} alt="icon" /> </div>
                  <h3>High Resolution Grade Quality</h3>
                  <p>Curabitur eget turpis iaculis eleifend. Curabitur consectetur fermentum ante</p>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="features teal-color">
                  <div className="icon-circle"><img className="img-icon" src={"assets/images/svgs/regular/user.svg"} alt="icon" /> </div>
                  <h3>Fast & Free Delivery</h3>
                  <p>Curabitur eget turpis iaculis eleifend. Curabitur consectetur fermentum ante</p>
                </div>
            </div> */}



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



      <section className="offerby">
          <div className="container">
              <div className="row">
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
                <h2 className="text-white">
                What They 
                  <span> Say</span>
                </h2>
                <span className="dot1"></span> <span className="dot1"></span>
                <span className="dot1"></span>
                <span className="dot"></span>
              </div>

            <div className="testwrap text-center">
            <OwlTest />
            </div>
        </div>
      </section>


    </>
  );
};

export default Home;
