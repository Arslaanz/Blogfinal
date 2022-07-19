import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img//portfolio/1.jpg'
import img2 from '../../assets/img//portfolio/2.jpg'
import img3 from '../../assets/img//portfolio/3.jpg'
import img4 from '../../assets/img//portfolio/4.jpg'
import img5 from '../../assets/img//portfolio/5.jpg'
import img6 from '../../assets/img//portfolio/6.jpg'
import img7 from '../../assets/img/about/1.jpg'
import img8 from '../../assets/img/about/2.jpg'
import img9 from '../../assets/img/about/3.jpg'
import img10 from '../../assets/img/about/5.jpg'
import img11 from '../../assets/img/about/4.jpg'
import img12 from '../../assets/img/about/7.jpg'
import img13 from '../../assets/img/about/logo.png'
import { getblogs } from '../../actions/uploads';
import UploadsUI from '../dashboard/blog';
const Landing = ({ getblogs ,uploads: { blogs, loadingblogs} }) => {
    useEffect(() => {
        getblogs();
      }, [getblogs]);
      return loadingblogs ? (
        <div>Loading ....</div>
      ) : (
    <div>
         <header class="masthead">
    <div class="container">

        <div class=" masthead-heading masthead-subheading">A food blog with fresh, zesty recipes!</div>
        <div class="masthead-subheading">Come join me in my culinary adventures where we'll be using simple, fresh ingredients and transforming them into sophisticated and elegant meals for the everyday home cook.</div>
        <a class="btn-primaryL btn-xl text-uppercase" href="#services">Join us!</a>
    </div>
</header>
       <section class="page-section" id="services">
       <div class="container gallery-container">
           <div class="col-sm-11 col-md-11" >
       <img className='logoimg' src={img13} alt="..." />
       </div>

<p class="page-description text-center">Welcome to Damn Delicious! My name is Arslan, and I created Damn Delicious to celebrate how nourishing, fun, and delicious cooking with seasonal fruits and vegetables can be. I hope that the recipes here inspire you to try cooking a new vegetable, or try cooking a familiar vegetable in a new way. You’ll find a host of inventive vegetarian recipes for breakfast, lunch, and dinner, but I also want Love and Lemons to be a resource for you. We have guides to working with vegetables ranging from spaghetti squash to asparagus and tips for cooking plant-based basics like quinoa, rice, and lentils.

And after all those veggies, I always save room for dessert! In my opinion, healthy eating is all about balance, so you’ll find recipes for brownies, cakes, cookies, and more here too.</p>

<div class="tz-gallery">

    <div class="row">

        <div class="col-sm-12 col-md-4">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg">
                <img src={img7} alt="Bridge"/>
            </a>
        </div>
        <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg">
            <img src={img8} alt="Bridge"/>
            </a>
        </div>
        <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg">
            <img src={img9} alt="Bridge"/>
            </a>
        </div>
        <div class="col-sm-12 col-md-4">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg">
            <img src={img10} alt="Bridge"/>
            </a>
        </div>
        <div class="col-sm-6 col-md-4 ">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg">
            <img src={img12} alt="Bridge"/>
            </a>
        </div> 
        <div class="col-sm-6 col-md-4 ">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg">
            <img src={img11} alt="Bridge"/>
            </a>
        </div> 
     

    </div>

</div>

</div>
        </section>
      
        <section class="page-section bg-light_pink" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Blogs</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                   
                {' '}
              {blogs.map((uploads) => (
                <UploadsUI key={uploads._id} uploads={uploads} />
              ))}
                     
                   
                </div>
            </div>
        </section>
      
       
        
     
       
   
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Contact Us</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
     
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                            
                                <input class="form-control" id="name" type="email" placeholder="Your Name *" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div class="form-group">
                           
                                <input class="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div class="form-group mb-md-0">
                    
                                <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
               
                                <textarea class="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                    </div>
      
                    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center text-white mb-3">
                            <div class="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
            
                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                
                    <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                </form>
            </div>
        </section>
 
        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">Copyright &copy; Your Website 2021</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div class="col-lg-4 text-lg-end">
                        <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
 
     
    </div>
  );
};

Landing.propTypes = {
    getblogs: PropTypes.func.isRequired,
    uploads: PropTypes.object.isRequired,
  };
  const mapStateToProps = (state) => ({
    uploads: state.uploads,
  });
  export default connect(mapStateToProps, { getblogs })(Landing);
  
