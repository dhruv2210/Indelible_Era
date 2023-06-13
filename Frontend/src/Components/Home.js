import React from "react";
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import {NavLink} from "react-router-dom";


function Home() {
  return (
    <>
    <Navbar></Navbar>
        <div className="container-fluid" data-aos="fade" data-aos-delay="500">
          <div className="row">
            <div className="col-lg-4">
              <div className="image-wrap-2">
                <div className="image-info">
                  <h2 className="mb-3">Nature</h2>
                  <a
                    href="single.html"
                    className="btn btn-outline-white py-2 px-4">
                    More Photos
                  </a>
                </div>
                <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="image-wrap-2">
                <div className="image-info">
                  <h2 className="mb-3">Portrait</h2>
                  <NavLink className="btn btn-outline-white py-2 px-4" to="/Single"> 
                    
                    More Photos
                 </NavLink>
                </div>
                <img src="images/img_2.jpg" alt="Image" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="image-wrap-2">
                <div className="image-info">
                  <h2 className="mb-3">People</h2>
                  <a
                    href="single.html"
                    className="btn btn-outline-white py-2 px-4"
                  >
                    More Photosx
                  </a>
                </div>
                <img src="images/img_3.jpg" alt="Image" className="img-fluid" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="image-wrap-2">
                <div className="image-info">
                  <h2 className="mb-3">Architecture</h2>
                  <a
                    href="single.html"
                    className="btn btn-outline-white py-2 px-4"
                  >
                    More Photos
                  </a>
                </div>
                <img src="images/img_4.jpg" alt="Image" className="img-fluid" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="image-wrap-2">
                <div className="image-info">
                  <h2 className="mb-3">Animals</h2>
                  <a
                    href="single.html"
                    className="btn btn-outline-white py-2 px-4"
                  >
                    More Photos
                  </a>
                </div>
                <img src="images/img_5.jpg" alt="Image" className="img-fluid" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="image-wrap-2">
                <div className="image-info">
                  <h2 className="mb-3">Sports</h2>
                  <a
                    href="single.html"
                    className="btn btn-outline-white py-2 px-4"
                  >
                    More Photos
                  </a>
                </div>
                <img src="images/img_6.jpg" alt="Image" className="img-fluid" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="image-wrap-2">
                <div className="image-info">
                  <h2 className="mb-3">Travel</h2>
                  <a
                    href="single.html"
                    className="btn btn-outline-white py-2 px-4"
                  >
                    More Photos
                  </a>
                </div>
                <img src="images/img_7.jpg" alt="Image" className="img-fluid" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="image-wrap-2">
                <div className="image-info">
                  <h2 className="mb-3">People</h2>
                  <a
                    href="single.html"
                    className="btn btn-outline-white py-2 px-4"
                  >
                    More Photos
                  </a>
                </div>
                <img src="images/img_3.jpg" alt="Image" className="img-fluid" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="image-wrap-2">
                <div className="image-info">
                  <h2 className="mb-3">Architecture</h2>
                  <a
                    href="single.html"
                    className="btn btn-outline-white py-2 px-4"
                  >
                    More Photos
                  </a>
                </div>
                <img src="images/img_4.jpg" alt="Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
        
    
    </>
  );
}

export default Home;
