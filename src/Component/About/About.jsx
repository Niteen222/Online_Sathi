import React from 'react';
import "../About/About.css";
import ceo from "../About/Naresh-Sijapati.jpeg";
import about from "../About/about-2.webp";
import about1 from "../About/about-5.webp";

function About() {
    return (
        <>
        <br />
            <section id="about" className="about section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4 align-items-center justify-content-between">
                        <br />
                        <h1 className='mt-5 mb-4' style={{
                            fontSize: window.innerWidth < 768 ? "34px" : "52px",
                            fontWeight: "700",
                            width: '100%',
                            color: '#000',
                            textAlign: 'center'
                        }}>
                            <span>About</span>
                            <span style={{ color: '#0077FF' }}> Us</span>
                        </h1>
                        <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
                            <h2 className="about-title">Transforming Access and Opportunities for India’s Informal Workforce</h2>
                            <p className="about-description">A <b style={{color:'#0077FF',fontSize:'19px'}}>tech-driven network</b> bridging the gap for informal workers to access essential services, social welfare schemes, safe job opportunities, and on-demand services like banking, insurance, and travel and E-governance services.</p>
                            <div className="row feature-list-wrapper">
                                <div className="col-md-">
                                <p className="about-description">Online Saathi connects rural and migrant workers with crucial services, empowering communities through a <b style={{color:'#0077FF',fontSize:'19px'}}>network of dedicated agents.</b></p>
                                </div>
                            </div>

                            <div className="info-wrapper">
                                <div className="row gy-">
                                    <div className="col-lg-5 border rounded">
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
                                                <p className="contact-number">+91 909 900 5251</p>
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
                                <div className="experience-badge floating" style={{ background: '#0077FF' }}>
                                    <h3 className='text-white fw-bold'>7+ <span>Years</span></h3>
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