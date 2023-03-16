import React from 'react'

export const Homeslider = () => {
  return (
    <>

<div id="carouselExampleDark" className="carousel carousel-dark slide d-none" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <img className="d-block w-100" src={"assets/images/slider1.jpeg"} alt="icon" /> 
      <div className="carousel-caption">
        <div className='col-md-6 col-md-offset-1'>
        <h1>Trusted Printing Services <span className='d-block'>for Art and Business</span></h1>
        <p>Design helps us to stand out, It tells a story
about us and what we stand for.</p>
        </div>
      </div>
    </div>
    

    <div className="carousel-item" data-bs-interval="2000">
    <img className="d-block w-100" src={"assets/images/slider2.jpeg"} alt="icon" /> 
      <div className="carousel-caption">
      <div className='col-md-6 col-md-offset-1'>
        <h1>Excellence in Graphic Design & Print Service</h1>
        <p>We've been printing it ahead of the schedule and
under the budget for years!</p>
      </div>
      </div>
     
    </div>

    <div className="carousel-item">
    <img className="d-block w-100" src={"assets/images/slider3.jpeg"} alt="icon" /> 
      <div className="carousel-caption">
      <div className='col-md-6 col-md-offset-1'>
        <h1>The Power of Printing</h1>
        <p> Traditional printing (offset and screen printing) and new data-driven print technologies (digital printing) are driving online and offline sales, helping your business to be seen in a new way!</p>
      </div>
      </div>
    </div>
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>


    </>
  )
}
