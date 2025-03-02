import React from 'react';
import "../Contact/Contact.css"

function Contact() {
    return (
        <>
            <div className="container mt-5">
                <section id="contact" className="contact section light-background">
                    <div className="container section-title" data-aos="fade-up">
                        <h1 className='mt-5 mb-4' style={{
                            fontSize: window.innerWidth < 768 ? "34px" : "52px",
                            fontWeight: "700",
                            width: '100%',
                            color: '#000',
                            textAlign: 'center'
                        }}>
                            <span>Contact</span>
                            <span style={{ color: '#0077FF' }}> Us</span>
                        </h1>
                    </div>
                    <br />

                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row g-4 g-lg-5" >
                            <div className="col-lg-5" style={{ background: '#0077FF', borderRadius: '20px', color: '#fff' }}>
                                <div className="info-box" data-aos="fade-up" data-aos-delay="200">
                                    <h3>Contact Info</h3>
                                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis.</p>

                                    <div className="info-item" data-aos="fade-up" data-aos-delay="300">
                                        <div className="icon-box">
                                            <i class="fa-solid fa-location-dot fs-4"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Our Location</h4>
                                            <p>309 3th Floor The Atlanta Business Hub, Nana</p>
                                            <p>Chiloda, Ahmedabad, Gujarat 302330</p>
                                        </div>
                                    </div>

                                    <div className="info-item" data-aos="fade-up" data-aos-delay="400">
                                        <div className="icon-box">
                                            <i class="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Phone Number</h4>
                                            <p>+91 909 900 5251</p>
                                            <p></p>
                                        </div>
                                    </div>

                                    <div className="info-item" data-aos="fade-up" data-aos-delay="500">
                                        <div className="icon-box">
                                            <i class="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Email Address</h4>
                                            <p>help@onlinesaathi.org</p>
                                            <p>admin@onlinesaathi.org.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 ">
                                <div className="contact-form border" data-aos="fade-up" data-aos-delay="300">
                                    <h3>Get In Touch</h3>
                                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis.</p>

                                    <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                                        <div className="row gy-4">

                                            <div className="col-md-6">
                                                <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                                            </div>

                                            <div className="col-md-6 ">
                                                <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                                            </div>

                                            <div className="col-12">
                                                <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                                            </div>

                                            <div className="col-12">
                                                <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                                            </div>

                                            <div className="col-12 text-center">
                                                <button className="btn btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>

                    </div>

                </section>
            </div>
            <br />
            <br />
        </>
    )
}

export default Contact