import React from 'react'
import Navbar from './Navbar.js';
import Footer from './Footer.js';

function Services() {
  return (
    <>
    <Navbar/>
    <div className="site-section"  data-aos="fade">
    <div className="container-fluid">

      <div className="row justify-content-center">

        <div className="col-md-7">
          <div className="row mb-5">
            <div className="col-12 ">
              <h2 className="site-section-heading text-center">Our Services</h2>
            </div>
          </div>
        </div>

      </div>
      
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xl-4 text-center mb-5 mb-lg-5">
          <div className="h-100 p-4 p-lg-5 site-block-feature-7">
            <span className="icon flaticon-camera display-3 text-primary mb-4 d-block"></span>
            <h3 className="text-white h4">Blog</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</p>
            <p><strong className="font-weight-bold text-primary">$29</strong></p>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4 text-center mb-5 mb-lg-5">
          <div className="h-100 p-4 p-lg-5 site-block-feature-7">
            <span className="icon flaticon-picture display-3 text-primary mb-4 d-block"></span>
            <h3 className="text-white h4">Photography</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</p>
            <p><strong className="font-weight-bold text-primary">$46</strong></p>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4 text-center mb-5 mb-lg-5">
          <div className="h-100 p-4 p-lg-5 site-block-feature-7">
            <span className="icon flaticon-sheep display-3 text-primary mb-4 d-block"></span>
            <h3 className="text-white h4">Animal</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</p>
            <p><strong className="font-weight-bold text-primary">$24</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default Services;