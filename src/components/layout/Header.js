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
        <div class="container container-1570">
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



        <nav class="navbar style-one navbar-area navbar-expand-lg py-20">
            <div class="container container-1570">

            <div class="responsive-mobile-menu">
                    <button  className={`menu toggle-btn d-block d-lg-none ${isActive ? "active" : ""}`}  data-target="#Iitechie_main_menu"   onClick={handleClick} aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-left"></span>
                        <span class="icon-right"></span>
                    </button>
                </div>
                <div class="logo">
                <NavLink className="navbar-brand" to="/">
                <img className="img-fluid" src={'assets/images/trp-logo.png'} alt="logo" />
                </NavLink>
                </div>

                <div class="nav-right-part nav-right-part-mobile">
                    <button class="search-bar-btn" href="#">
                        <i class="fas fa-search"></i>
                    </button>
                </div>


          <div
            id="Iitechie_main_menu"
            className={`collapse navbar-collapse ${
              isActive ? "active" : ""
            }`}
          >
            <ul className="navbar-nav menu-open text-lg-end">
              <li>
                <NavLink activeClassName="active"
                  aria-current="page"
                  to="/"
                  onClick={handleClick}>
                  Home
                </NavLink>
              </li>


              <li className="menu-item-has-children">
                  <NavLink 
                  activeClassName="active"
                  to="/about"
                  onClick={handleClick}>
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

               




              </div>
            </div>
          </div> 
        </li>











              <li>
                <NavLink
                  activeClassName="active"
                  to="/graphicdesign"
                  onClick={handleClick} 
                >
                   Graphic Design & Printing
                </NavLink>

                </li>

                <li class="menu-item-has-children">
                <NavLink activeClassName="active"
                  to="/stetionery"
                  onClick={handleClick}> Stationery
                </NavLink>


                  <ul class="sub-menu">
                        <li>
                        <NavLink activeClassName="active"
                          to="/stetionery"
                          onClick={handleClick}>
                          Business Cards
                        </NavLink>
                      </li>
                     
                  <li>
                  <NavLink
                    activeClassName="active"
                    to="/stetionery"
                    onClick={handleClick}
                  >
                    Business Cards
                  </NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active"
                    to="/stetionery"
                    onClick={handleClick}
                  >
                    Letterheads
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    activeClassName="active"
                    to="/stetionery"
                    onClick={handleClick}
                  >
                    Envelopes
                  </NavLink>
                </li>

                <li>
                  <NavLink
                   
                    activeClassName="active"
                    to="/stetionery"
                    onClick={handleClick}
                  >
                    Bill Book / Invoice
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    activeClassName="active"
                    to="/stetionery"
                    onClick={handleClick}
                  >
                    Notebook / Diaries
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    activeClassName="active"
                    to="/stetionery"
                    onClick={handleClick}
                  >
                    ID Cards
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    activeClassName="active"
                    to="/stetionery"
                    onClick={handleClick}
                  >
                    Lanyards / Ribbon 
                  </NavLink>
                </li>
               
                </ul>
              </li>

             
             
              <li class="menu-item-has-children">
                <NavLink
                  activeClassName="active"
                  to="/labelstickers"
                  onClick={handleClick}
                >
                  Labels & Stickers
                </NavLink>




                <ul class="sub-menu">
                  <li>
                  <NavLink
                    activeClassName="active"
                    to="/labelstickers"
                    onClick={handleClick}
                  >
                    Business Cards
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    activeClassName="active"
                    to="/labelstickers"
                    onClick={handleClick}
                  >
                    Letterheads
                  </NavLink>
                </li>

                <li>
                  <NavLink
                  
                    activeClassName="active"
                    to="/labelstickers"
                    onClick={handleClick}
                  >
                    Envelopes
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    activeClassName="active"
                    to="/labelstickers"
                    onClick={handleClick}
                  >
                    Bill Book / Invoice
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    activeClassName="active"
                    to="/labelstickers"
                    onClick={handleClick}
                  >
                    Notebook / Diaries
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    activeClassName="active"
                    to="/labelstickers"
                    onClick={handleClick}
                  >
                    ID Cards
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    activeClassName="active"
                    to="/labelstickers"
                    onClick={handleClick}
                  >
                    Lanyards / Ribbon 
                  </NavLink>
                </li>
               
                </ul>
              </li>


              <li>
                <NavLink
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

              {/* <li className="nav-item d-none">
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
              </li> */}

            </ul>
          </div>


          <div class="nav-right-part nav-right-part-desktop">
                    <button class="search-bar-btn">
                        <i class="fas fa-search"></i>
                    </button>
                    <button>
                        <i class="fas fa-shopping-basket"></i>
                    </button>
                    <button>
                        <i class="fas fa-heart"></i>
                    </button>
                    <NavLink
                  className="btn my-button online"
                  activeClassName="active"
                  to="/contact"
                >
                  Order Now <i class="fas fa-long-arrow-right"></i>
                </NavLink>
               
                    <div class="menu-sidebar">
                        <button>
                            <i class="fas fa-ellipsis-h"></i>
                            <i class="fas fa-ellipsis-h"></i>
                            <i class="fas fa-ellipsis-h"></i>
                        </button>
                    </div>
                </div>




        </div>
      </nav>
    </>
  );
};

export default Header;
