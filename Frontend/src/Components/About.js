import React from 'react'
import Navbar from './Navbar.js';
import Footer from './Footer.js';

function About() {
  return (
    <>
    <Navbar/>
    <div className="site-section"  data-aos="fade">
      <div className="container-fluid">

        <div className="row justify-content-center">

          <div className="col-md-7">
            <div className="row mb-5">
              <div className="col-12 ">
                <h2 className="site-section-heading text-center">A little bit About Us !</h2>
              </div>
            </div>
          </div>

        </div>
        
        <div className="row mb-5">
          <div className="col-md-7">
            <img src="images/img_2.jpg" alt="Images" className="img-fluid"/>
          </div>
          <div className="col-md-5 ml-auto">
            <h3 className="text-white">Our Mission</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel tenetur explicabo necessitatibus, ad soluta consectetur illo qui voluptatem. Quis soluta maiores eum. Iste modi voluptatum in repudiandae fugiat suscipit dolorum harum, porro voluptate quis? Alias repudiandae dicta doloremque voluptates soluta repellendus, unde laborum quo nam, ullam facere voluptatem similique.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor architecto excepturi aliquid minus nostrum dicta labore iusto obcaecati fugit cupiditate.</p>
          </div>
        </div>


        <div className="row site-section" id="about-here">
          <div className="col-md-6 col-lg-6 col-xl-4  text-center mb-5">
            <img src="images/person_1.jpg" alt="Image" className="img-fluid w-50 rounded-circle mb-4"/>
            <h2 className="text-white font-weight-light mb-4">Ishita Bhalodia</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?</p>
            <p>
              <a href="#" className="pl-0 pr-3"><span className="icon-twitter"></span></a>
              <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
              <a href="#" className="pl-3 pr-3"><span className="icon-facebook"></span></a>
            </p>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4 text-center mb-5">
            <img src="images/person_2.jpg" alt="Image" className="img-fluid w-50 rounded-circle mb-4"/>
            <h2 className="text-while font-weight-light mb-4">Dhruv Thummer</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?</p>
            <p>
              <a href="#" className="pl-0 pr-3"><span className="icon-twitter"></span></a>
              <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
              <a href="#" className="pl-3 pr-3"><span className="icon-facebook"></span></a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About;