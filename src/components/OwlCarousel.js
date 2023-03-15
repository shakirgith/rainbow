import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    items:2,
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    navText: ["Prev", "Next"],
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


export const OwlTest = () => {
    return (
        <>

            <OwlCarousel className='owl-theme' {...options} >

                <div className="item">
                    <div className="usericon rounded-circle"><i class="fa-regular fa-user"></i></div>
                    <span><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> </span>
                    <p>Our publishing agency has been using this company book printing services for years, getting tens of thousands of books worked and printed yearly. The quality of the printing they provide is calibrated, precise and outstanding!</p>
                    <h5>Anil Bhargava ...</h5>
                </div>

                <div className="item">
                    <div className="usericon rounded-circle"><i class="fa-regular fa-user"></i></div>
                    <span><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"> </i>  <i class="fas fa-star-half-stroke"></i></span>
                    <p>Perfect for both programmers and designers. It is great for prototyping and also creating production-ready solutions on an enterprise scale.</p>
                    <h5>Naushad Khan ...</h5>
                </div>

                <div className="item">
                    <div className="usericon rounded-circle"><i class="fa-regular fa-user"></i></div>
                    <span><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></span>
                   
                    <p>Perfect for both programmers and designers. It is great for prototyping and also creating production-ready solutions on an enterprise scale.</p>
                    <h5>Dharmendra Sharma ...</h5>
                </div>

                <div className="item">
                    <div className="usericon rounded-circle"><i class="fa-regular fa-user"></i></div>
                    <span><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"> </i>  <i class="fas fa-star-half-stroke"></i></span>
                    <p>Perfect for both programmers and designers. It is great for prototyping and also creating production-ready solutions on an enterprise scale.</p>
                    <h5>Khoobchad Lakhera ...</h5>
                </div>

            </OwlCarousel>



        </>
    )
}
