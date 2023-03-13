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
    nav: false,
    dots: true,
    autoplay: false,
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
                    <h5>Akash Hogan </h5>
                    <p><i class="fa-solid fa-quote-left"></i> Perfect for both programmers and designers. It is great for prototyping and also creating production-ready solutions on an enterprise scale.</p>
                </div>

                <div className="item">
                    <div className="usericon rounded-circle"><i class="fa-regular fa-user"></i></div>
                    <h5>Akash Hogan </h5>
                    <p><i class="fa-solid fa-quote-left"></i> Perfect for both programmers and designers. It is great for prototyping and also creating production-ready solutions on an enterprise scale.</p>
                </div>

                <div className="item">
                    <div className="usericon rounded-circle"><i class="fa-regular fa-user"></i></div>
                    <h5>Akash Hogan </h5>
                    <p><i class="fa-solid fa-quote-left"></i> Perfect for both programmers and designers. It is great for prototyping and also creating production-ready solutions on an enterprise scale.</p>
                </div>

            </OwlCarousel>



        </>
    )
}
