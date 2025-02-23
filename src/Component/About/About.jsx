import React from 'react';
import "../About/About.css";
import ceo from "../About/Naresh-Sijapati.jpeg";
import about from "../About/about-2.webp";
import about1 from "../About/about-5.webp";

function About() {
    return (
        <>
            <section id="about" className="about section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4 align-items-center justify-content-between">
                        <br />
                        <h1 className="text-center mt-5 mb-4">More About Us</h1>
                        <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
                            <h2 className="about-title">Voluptas enim suscipit temporibus</h2>
                            <p className="about-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                            <div className="row feature-list-wrapper">
                                <div className="col-md-6">
                                    <ul className="feature-list">
                                        <li><i className="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet</li>
                                        <li><i className="bi bi-check-circle-fill"></i> Consectetur adipiscing elit</li>
                                        <li><i className="bi bi-check-circle-fill"></i> Sed do eiusmod tempor</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="feature-list">
                                        <li><i className="bi bi-check-circle-fill"></i> Incididunt ut labore et</li>
                                        <li><i className="bi bi-check-circle-fill"></i> Dolore magna aliqua</li>
                                        <li><i className="bi bi-check-circle-fill"></i> Ut enim ad minim veniam</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="info-wrapper">
                                <div className="row gy-4">
                                    <div className="col-lg-5 border rounded p-1 ">
                                        <div className="profile d-flex align-items-center gap-3">
                                            <img src={ceo} alt="CEO Profile" className="profile-image border" />
                                            <div>
                                                <h4 className="profile-name">Naresh Sijapati</h4>
                                                <p className="profile-position">CEO &amp; Founder</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="contact-info d-flex align-items-center gap-2 border">
                                            <i class="fa-solid fa-phone"></i>
                                            <div>
                                                <p className="contact-label">Call us anytime</p>
                                                <p className="contact-number">+123 456-789</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="image-wrapper">
                                <div className="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                                    <img src={about1} alt="Business Meeting" className="img-fluid main-image rounded-4" />
                                    <img src={about} alt="Team Discussion" className="img-fluid small-image rounded-4" />
                                </div>
                                <div className="experience-badge floating" style={{background:'#0077FF'}}>
                                    <h3 className='text-white fw-bold'>15+ <span>Years</span></h3>
                                    <p className='text-white fw-bold'>Of experience in business service</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About