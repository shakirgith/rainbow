import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    items:5,
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        768: {
            items: 4
        },
        1000: {
            items: 5
        },
       
    },
}


export const CategorySlider = () => {
    return (
        <>

            <OwlCarousel className='owl-theme' {...options} >

            <div className="item">
                <div class="what-we-provide-item wow fadeInUp delay-0-2s slick-slide animated slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide50">
                        <i class="flaticon-t-shirt"></i>
                        <h6><a href="service-details.html" tabindex="0">T-Shart Print</a></h6>
               </div>
            </div>


        <div className="item">
                    <div class="what-we-provide-item wow fadeInUp delay-0-3s slick-slide slick-cloned animated" data-slick-index="-6" id="" aria-hidden="true" tabindex="-1">
                        <i class="flaticon-logo"></i>
                        <h6><a href="service-details.html" tabindex="-1">Logo Design</a></h6>
                    </div>
            </div>



            <div className="item">
                    <div class="what-we-provide-item wow fadeInUp delay-0-4s slick-slide slick-cloned animated" data-slick-index="-5" id="" aria-hidden="true" tabindex="-1" >
                        <i class="flaticon-banner"></i>
                        <h6><a href="service-details.html" tabindex="-1">Banner Print</a></h6>
                    </div>
            </div>



            <div className="item">
                    <div class="what-we-provide-item wow fadeInUp delay-0-5s slick-slide slick-cloned animated" data-slick-index="-4" id="" aria-hidden="true" tabindex="-1">
                        <i class="flaticon-reading-book"></i>
                        <h6><a href="service-details.html" tabindex="-1">Books Print</a></h6>
                    </div>
            </div>


            <div className="item">
                    <div class="what-we-provide-item wow fadeInUp delay-0-6s slick-slide slick-cloned animated" data-slick-index="-3" id="" aria-hidden="true" tabindex="-1" >
                        <i class="flaticon-debit-card"></i>
                        <h6><a href="service-details.html" tabindex="-1">Card Print</a></h6>
                    </div>
            </div>


            <div className="item">
                    <div class="what-we-provide-item wow fadeInUp delay-0-7s slick-slide slick-cloned animated" data-slick-index="-2" id="" aria-hidden="true" tabindex="-1" >
                        <i class="flaticon-award"></i>
                        <h6><a href="service-details.html" tabindex="-1">Trophy Print</a></h6>
                    </div>
            </div>


            <div className="item">
                    <div class="what-we-provide-item wow fadeInUp delay-0-8s slick-slide slick-cloned animated" data-slick-index="-1" id="" aria-hidden="true" tabindex="-1" >
                        <i class="flaticon-banner"></i>
                        <h6><a href="service-details.html" tabindex="-1">Banner Print</a></h6>
                    </div>
            </div>

            <div className="item">
                    <div class="what-we-provide-item wow fadeInUp delay-0-3s slick-slide animated slick-active" data-slick-index="1" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide51" >
                        <i class="flaticon-logo"></i>
                        <h6><a href="service-details.html" tabindex="0">Logo Design</a></h6>
                    </div>
            </div> 
            

            </OwlCarousel>



        </>
    )
}
