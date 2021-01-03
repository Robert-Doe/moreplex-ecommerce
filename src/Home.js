import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';


const home=()=> {

    const style={
        fontFamily:'Lato'
    }
    return (
        <section style={{backgroundColor:'#fafafa'}}>
            {/*{<h1 style={style}>Home Page</h1>}*/}
            <main id="main">

                <section id="about">
                    <div className="container">
                        <div className="row about-container">

                            <div className="col-lg-6 content order-lg-1 order-2">
                                <h2 className="title">Few Words About Us</h2>
                                <p>
                                    <strong><em>MorePlex Company Ltd.</em></strong> is a company known for its
                                    affordable quality chemical products
                                </p>

                                <div className="icon-box wow fadeInUp">
                                    <div className="icon"><i className="fa fa-bullseye"></i></div>
                                    <h4 className="title"><a href="">Our Mission</a></h4>
                                    <p className="description">Contribute to the renaissance of women empowerment by
                                        training and empowering women in soap making and to produce standard but cheap
                                        soap product and household chemicals this can compete in both local and
                                        international market.</p>
                                </div>

                                <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="icon"><i className="fa fa-eye"></i></div>
                                    <h4 className="title"><a href="">Our Vision</a></h4>
                                    <p className="description">To establish the standard of a Soap Production Company
                                        whose product will not only be sold in Ghana, but also throughout the world</p>
                                </div>

                            </div>

                            <div className="col-lg-6 background order-lg-2 order-1 wow fadeInRight"></div>
                        </div>

                    </div>
                </section>




                <section id="services">
                    <div className="container wow fadeIn">
                        <div className="section-header">
                            <h3 className="section-title">Services</h3>
                            <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="box">
                                    <div className="icon"><a href=""><i className="fa fa-cubes"></i></a></div>
                                    <h4 className="title"><a href="">Production</a></h4>
                                    <p className="description">We product reliable detergent to battle tough stains as
                                        well as take care of stubborn stench.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="box">
                                    <div className="icon"><a href=""><i className="fas fa-user-graduate"></i></a></div>
                                    <h4 className="title"><a href="">Training</a></h4>
                                    <p className="description">We offer training to willing locals in order to enable
                                        them make a living.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="box">
                                    <div className="icon"><a href=""><i className="fa fa-paper-plane"></i></a></div>
                                    <h4 className="title"><a href="">Marketing</a></h4>
                                    <p className="description">We make available enormous quantity of goods for both
                                        wholesale and retail distributors.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>




                <section id="contact">
                    <div className="container wow fadeInUp">
                        <div className="section-header">
                            <h3 className="section-title">Contact</h3>
                            <p className="section-description">Do use the following means to reach us</p>
                        </div>
                    </div>


                    <div className="container wow fadeInUp mt-5">
                        <div className="row justify-content-center">

                            <div className="col-lg-3 col-md-4">

                                <div className="info">
                                    <div>
                                        <i className="fa fa-map-marker"></i>
                                        <p>Bekwai Nkwanta<br/>Ash Town</p>
                                    </div>

                                    <div>
                                        <i className="fa fa-envelope"></i>
                                        <p>wingstoflyenterprise@gmail.com</p>
                                    </div>

                                    <div>
                                        <i className="fa fa-phone"></i>
                                        <p>0501651613 | 0557848787</p>
                                    </div>
                                </div>

                                <div className="social-links">
                                    <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                    <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                                </div>

                            </div>

                            <div className="col-lg-5 col-md-8">
                                <div className="form">
                                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                                    <div id="errormessage"></div>
                                    <form action="" method="post" role="form" className="contactForm">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" id="name"
                                                   placeholder="Your Name" data-rule="minlen:4"
                                                   data-msg="Please enter at least 4 chars"/>
                                            <div className="validation"></div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" id="email"
                                                   placeholder="Your Email" data-rule="email"
                                                   data-msg="Please enter a valid email"/>
                                            <div className="validation"></div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="subject" id="subject"
                                                   placeholder="Subject" data-rule="minlen:4"
                                                   data-msg="Please enter at least 8 chars of subject"/>
                                            <div className="validation"></div>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" rows="5"
                                                      data-rule="required" data-msg="Please write something for us"
                                                      placeholder="Message"></textarea>
                                            <div className="validation"></div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


            </main>

        </section>
    );
}

export default home;