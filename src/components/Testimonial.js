import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    items:1,
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    // responsive: {
    //     0: {
    //         items: 1
    //     },
    //     600: {
    //         items: 2
    //     },
    //     768: {
    //         items: 3
    //     },
    //     1000: {
    //         items: 4
    //     },
    // },
}


export const OwlTestimonial = () => {
    return (
        <>

            <OwlCarousel className='owl-theme' {...options} >

                <div className="item">
                    <div className="usericon rounded-circle"> <img className="img-fluid" src={"assets/images/testi-avatar-1.jpeg"} alt="testimonial image" /> </div>
                    <span><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> </span>
                    <p><i class="fas fa-double-qoute"></i> Our publishing agency has been using this company book printing services for years, getting tens of thousands of books worked and printed yearly. The quality of the printing they provide is calibrated, precise and outstanding!</p>
                    <h5>Anil Bhargava <span className='d-block'>CEO Book Writer</span></h5>
                </div>

                <div className="item">
                    <div className="usericon rounded-circle"> <img className="img-fluid" src={"assets/images/testi-avatar-2.jpeg"} alt="testimonial image" /> </div>
                    <span><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"> </i>  <i class="fas fa-star-half-stroke"></i></span>
                    <p>Perfect for both programmers and designers. It is great for prototyping and also creating production-ready solutions on an enterprise scale.</p>
                    <h5>Naushad Khan <span className='d-block'>CEO Book Writer</span></h5>
                </div>

                <div className="item">
                    <div className="usericon rounded-circle"> <img className="img-fluid" src={"assets/images/testi-avatar-3.jpeg"} alt="testimonial image" /> </div>
                    <span><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></span>
                   
                    <p>Perfect for both programmers and designers. It is great for prototyping and also creating production-ready solutions on an enterprise scale.</p>
                    <h5>Dharmendra Sharma <span className='d-block'>CEO Book Writer</span></h5>
                </div>

                <div className="item">
                    <div className="usericon rounded-circle"> <img className="img-fluid" src={"assets/images/testi-avatar-4.jpeg"} alt="testimonial image" /> </div>
                    <span><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"> </i>  <i class="fas fa-star-half-stroke"></i></span>
                    <p>Perfect for both programmers and designers. It is great for prototyping and also creating production-ready solutions on an enterprise scale.</p>
                    <h5>Khoobchad Lakhera <span className='d-block'>CEO Book Writer</span></h5>
                </div>

                <div className="item">
                    <div className="usericon rounded-circle"> <img className="img-fluid" src={"assets/images/testi-avatar-5.jpeg"} alt="testimonial image" /> </div>
                    <span><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"> </i>  <i class="fas fa-star-half-stroke"></i></span>
                    <p>Perfect for both programmers and designers. It is great for prototyping and also creating production-ready solutions on an enterprise scale.</p>
                    <h5>Rahul Saksena <span className='d-block'>CEO Book Writer</span></h5>
                </div>

            </OwlCarousel>



        </>
    )
}
