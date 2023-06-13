import React from 'react'
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        <header className="site-navbar py-3" role="banner">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-6 col-xl-2" data-aos="fade-down">
                <h1 className="mb-0">
                  <a href="index.html" className="text-white h2 mb-0">
                    {" "}Indelible Era
                    {/* <img src="images/Logo.png" height="60vh" width="250vh" />{" "} */}
                  </a>
                </h1>
              </div>
              <div
                className="col-10 col-md-8 d-none d-xl-block"
                data-aos="fade-down"
              >
                <nav
                  className="site-navigation position-relative text-right text-lg-center"
                  role="navigation"
                >
                  <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                    <li className="active">
                    <NavLink className="" to="/">Home</NavLink>
                    </li>
                    <li className="has-children">
                      <a href="single.html">Gallery</a>
                      <ul className="dropdown">
                        <li>
                          <a href="#">Nature</a>
                        </li>
                        <li>
                          <a href="#">Portrait</a>
                        </li>
                        <li>
                          <a href="#">People</a>
                        </li>
                        <li>
                          <a href="#">Architecture</a>
                        </li>
                        <li>
                          <a href="#">Animals</a>
                        </li>
                        <li>
                          <a href="#">Sports</a>
                        </li>
                        <li>
                          <a href="#">Travel</a>
                        </li>
                        <li className="has-children">
                          <a href="#">Sub Menu</a>
                          <ul className="dropdown">
                            <li>
                              <a href="#">Menu One</a>
                            </li>
                            <li>
                              <a href="#">Menu Two</a>
                            </li>
                            <li>
                              <a href="#">Menu Three</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                    <NavLink className="" to="/Blog">Blog</NavLink> 
                    </li>
                    <li>
                    <NavLink className="" to="/Services">Services</NavLink> 
                    </li>
                    <li>
                    <NavLink className="" to="/About">About</NavLink> 
                    </li>
                    <li>
                    <NavLink className="" to="/Contact">Contact</NavLink> 
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="col-6 col-xl-2 text-right" data-aos="fade-down">
                <div className="d-none d-xl-inline-block">
                  <ul
                    className="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0"
                    data-className="social"
                  >
                    <li>
                      
                      <NavLink className="pl-3 pr-3" to="/Login"><span className="icon-user"></span></NavLink> 
                    </li>
                  </ul>
                </div>
                <div
                  className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
                >
                  <a
                    href="#"
                    className="site-menu-toggle js-menu-toggle text-black"
                  >
                    <span className="icon-menu h3"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        </div>
    </>
  )
}

export default Navbar;