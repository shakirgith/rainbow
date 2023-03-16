import { React, useState, useEffect, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../contexts/";
import { MetaTitle, MetaDescription } from "../Meta";

// import LogoImage from "../../../public/./public/assets/images/trp-logo.png";

const Header = () => {
  // const [openMenu, setOpenMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();
  const { user, setUser } = useContext(userContext);

  let navigate = useNavigate();

  const LogOut = () => {
    // localStorage.removeItem("email");
    // localStorage.clear();
    // setLoading(true);
    // navigate(`/signin`);
    setUser({});
  };

  //  useEffect(() => {
  //   console.log(count1,count2)
  // }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
    //console.log(pathname)

    MetaTitle(
      pathname === "/"
        ? "Home Page Title"
        : pathname === "/about"
        ? "About New Page Title"
        : pathname === "/contact"
        ? "Contact us New Page Title"
        : pathname === "/hook"
        ? "Hook Page Title"
        : pathname === "/signin"
        ? "Login Page"
        : pathname === "/register"
        ? "Register Page"
        : pathname === "/profile"
        ? "Welcome To My Website {user}"
        : "Unknown Title"
    );
    MetaDescription(
      pathname === "/"
        ? "Home Page Description"
        : pathname === "/about"
        ? "About New Page Description"
        : pathname === "/hook"
        ? "Hook Page Description"
        : pathname === "/contact"
        ? "Contactus New Page Description"
        : pathname === "/signin"
        ? "This is Login Page"
        : pathname === "/register"
        ? "Register Page"
        : pathname === "/profile"
        ? "Welcome To My Website"
        : "Unknown Description"
    );
  }, [pathname]);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  // useEffect(() =>  {
  //   document.addEventListener("mousedown", () => {
  //     setIsActive(false)
  //   });

  // });

  return (
    <>
      <div className="topbar">
        <div class="container-fluid">
          <div className="tobar-content">
          
                    <div class="topbar-left text-lg-start text-center">
                            <span class="off">20% OFF</span>
                            <span> Free Shipping on all U.S. Orders $50+</span>
                        </div>


            <div className="topright">
              <div className="call"></div>
            </div>

            <ul className="topbar-menu">
              <li>
                <NavLink
                  className="nav-link btn-help"
                  activeClassName="active"
                  to="/help"
                >
                  Customer Support
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>

              {/* <li>
              <button type="button" className="btn-primary">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
              </li> */}
              {/* <li>
            
               <button type="button" className="whatsapp-btn">
              <i class="fa-brands fa-whatsapp"></i>
            </button> 
              </li> */}

              {user.fname ? (
                <>
                  <li className="nav-item dropdown">
                  
                  
                    <NavLink
                      className="dropdown-toggle nav-link guest"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ><i className="far fa-user me-2"></i>  
                      <span className="me-0">{user.fname} </span>
                    </NavLink>

                    <ul class="nav-item dropdown-menu">
                      <li>
                        <NavLink className="nav-link" to="/profile">
                          My Account
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="" onClick={LogOut}>
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/signin">
                      <button className="btn p-0">Login / Signup</button>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg bg-dark sticky-top">
        <div class="container-fluid">
          <NavLink className="navbar-brand" to="/">
          <img className="img-fluid" src={'assets/images/trp-logo.png'} alt="logo" />
          </NavLink>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className={`navbar-toggler ${isActive ? "active" : ""}`}
            onClick={handleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            id="navbarSupportedContent"
            className={`collapse navbar-collapse justify-content-center ${
              isActive ? "active" : ""
            }`}
          >
            <ul className="navbar-nav text-white">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                  to="/"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>


              <li className="nav-item dropdown position-static">
                  <NavLink
                  className="nav-link dropdown-toggle position-relative"
                  activeClassName="active"
                  to="/about"
                  onClick={handleClick}
                  id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </NavLink>

          <div class="dropdown-menu megamenu mt-0" aria-labelledby="navbarDropdown">
            <div class="container">
              <div class="row my-4">

                <div class="col-12 mb-3 mb-lg-0">
                  <div class="list-group list-group-flush">
                    <h7 class="mega-menu-heading">All Categories</h7>

                    <ul className="menu-list-group">
                      <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                          activeClassName="active"
                          to="/about"
                          onClick={handleClick}
                        >
                          Book Printing
                        </NavLink>
                      </li>

                      <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                    Book Printing
                  </NavLink>
                </li>

                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                    Brochure Printing
                  </NavLink>
                </li>

                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                   Business Card
                  </NavLink>
                </li>

                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                    Catalogue Printing
                  </NavLink>
                </li>


                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                  Flyer Printing
                  </NavLink>
                </li>


                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                  Folder Printing
                  </NavLink>
                </li>



                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                   Hamper Box
                  </NavLink>
                </li>


                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                  Hang/Product Printing
                  </NavLink>
                </li>


                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                  Invitation Card Printing
                  </NavLink>
                </li>


                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                  Letterhead Printing
                  </NavLink>
                </li>

                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                   Magazine Printing
                  </NavLink>
                </li>

                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                   Newsletter Printing
                  </NavLink>
                </li>

                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                   Digital Printing
                  </NavLink>
                </li>

                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                   Offset Printing
                  </NavLink>
                </li>

                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                   Poster Printing
                  </NavLink>
                </li>

                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                   Digital Printing
                  </NavLink>
                </li>

                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                   Printing & Packaging
                  </NavLink>
                </li>

                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                  Prospectus Printing
                  </NavLink>
                </li>

                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                   Visiting Card Printing
                  </NavLink>
                </li>

                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                  Wall/Table Calendar <br /> Printing
                  </NavLink>
                </li>

                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                   Wedding Gift
                  </NavLink>
                </li>

                <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                    activeClassName="active"
                    to="/about"
                    onClick={handleClick}
                  >
                   T-shirt Printing
                  </NavLink>
                </li>

                    </ul>
                   
                  </div>
                </div>

                {/* <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                  <div class="list-group list-group-flush">
                    <h7 class="mega-menu-heading">Lorem ipsum</h7>

                    <ul className="menu-list-group">
                      <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                          activeClassName="active"
                          to="/about"
                          onClick={handleClick}
                        >
                          Book Printing
                        </NavLink>
                      </li>

                      <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                          activeClassName="active"
                          to="/about"
                          onClick={handleClick}
                        >
                          Book Printing
                        </NavLink>
                      </li>
                      <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                          activeClassName="active"
                          to="/about"
                          onClick={handleClick}
                        >
                          Book Printing
                        </NavLink>
                      </li>

                      <li className="list-group-item">
                        <NavLink
                          className="list-group-item-action"
                          activeClassName="active"
                          to="/about"
                          onClick={handleClick}
                        >
                          Book Printing
                        </NavLink>
                      </li>

                    </ul>
                   
                  </div>
                </div> */}




              </div>
            </div>
          </div>
        </li>











              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/graphicdesign"
                  onClick={handleClick} 
                >
                   Graphic Design & Printing
                </NavLink>

                </li>




              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  activeClassName="active"
                  to="/stetionery"
                  onClick={handleClick}
                  id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"
                >
                  Stationery
                </NavLink>




                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li className="nav-item">
                  <NavLink
                    className="nav-link dropdown-item"
                    activeClassName="active"
                    to="/stetionery"
                    onClick={handleClick}
                  >
                    Business Cards
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link dropdown-item"
                    activeClassName="active"
                    to="/stetionery"
                    onClick={handleClick}
                  >
                    Letterheads
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link dropdown-item"
                    activeClassName="active"
                    to="/stetionery"
                    onClick={handleClick}
                  >
                    Envelopes
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link dropdown-item"
                    activeClassName="active"
                    to="/stetionery"
                    onClick={handleClick}
                  >
                    Bill Book / Invoice
                  </NavLink>
                </li>


                <li className="nav-item">
                  <NavLink
                    className="nav-link dropdown-item"
                    activeClassName="active"
                    to="/stetionery"
                    onClick={handleClick}
                  >
                    Notebook / Diaries
                  </NavLink>
                </li>


                <li className="nav-item">
                  <NavLink
                    className="nav-link dropdown-item"
                    activeClassName="active"
                    to="/stetionery"
                    onClick={handleClick}
                  >
                    ID Cards
                  </NavLink>
                </li>


                <li className="nav-item">
                  <NavLink
                    className="nav-link dropdown-item"
                    activeClassName="active"
                    to="/stetionery"
                    onClick={handleClick}
                  >
                    Lanyards / Ribbon 
                  </NavLink>
                </li>
               
                </ul>
              </li>

             
             
                <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  activeClassName="active"
                  to="/labelstickers"
                  onClick={handleClick}
                  id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"
                >
                  Labels & Stickers
                </NavLink>




                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li className="nav-item">
                  <NavLink
                    className="nav-link dropdown-item"
                    activeClassName="active"
                    to="/labelstickers"
                    onClick={handleClick}
                  >
                    Business Cards
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link dropdown-item"
                    activeClassName="active"
                    to="/labelstickers"
                    onClick={handleClick}
                  >
                    Letterheads
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link dropdown-item"
                    activeClassName="active"
                    to="/labelstickers"
                    onClick={handleClick}
                  >
                    Envelopes
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link dropdown-item"
                    activeClassName="active"
                    to="/labelstickers"
                    onClick={handleClick}
                  >
                    Bill Book / Invoice
                  </NavLink>
                </li>


                <li className="nav-item">
                  <NavLink
                    className="nav-link dropdown-item"
                    activeClassName="active"
                    to="/labelstickers"
                    onClick={handleClick}
                  >
                    Notebook / Diaries
                  </NavLink>
                </li>


                <li className="nav-item">
                  <NavLink
                    className="nav-link dropdown-item"
                    activeClassName="active"
                    to="/labelstickers"
                    onClick={handleClick}
                  >
                    ID Cards
                  </NavLink>
                </li>


                <li className="nav-item">
                  <NavLink
                    className="nav-link dropdown-item"
                    activeClassName="active"
                    to="/labelstickers"
                    onClick={handleClick}
                  >
                    Lanyards / Ribbon 
                  </NavLink>
                </li>
               
                </ul>
              </li>


              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/services"
                  onClick={handleClick}
                >
                  Services
                </NavLink>
              </li>

              {/* <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  activeClassName="active"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                  to="/about"
                >
                   Dropdown button
                </NavLink>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                <NavLink
                  className="dropdown-item"
                  activeClassName="active"
                  to="/about"
                  onClick={handleClick}
                >
                  Visiting Card
                </NavLink>
                </li>

                <li>
                <NavLink
                  className="dropdown-item"
                  activeClassName="active"
                  to="/about"
                  onClick={handleClick}
                >
                  Wedding Card
                </NavLink>
                </li>
               
              </ul>
              </li> */}

              {/* <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/fatchapi"
                  onClick={handleClick}
                >
                  Get Fatch API
                </NavLink>
              </li> */}

              <li className="nav-item d-none">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/hook"
                  onClick={handleClick}
                >
                  Child Counter
                </NavLink>
              </li>

              <li className="nav-item d-none">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/hotel"
                  onClick={handleClick}
                >
                  Hotel/Flight
                </NavLink>
              </li>

              <li className="nav-item d-none">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/mycounter"
                  onClick={handleClick}
                >
                  My Counter
                </NavLink>
              </li>

              <li className="nav-item online my-button">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contact"
                >
                  ONLINE ORDER
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
