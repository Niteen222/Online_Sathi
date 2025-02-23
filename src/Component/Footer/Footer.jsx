import React from 'react';
import "../Footer/Footer.css";
import { useMediaQuery } from 'react-responsive';
import gpoglepay from "../Footer/googleplay.png";
import apple from "../Footer/appstore.png";

function Footer() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

    return (
        <>
            <div style={{ background: '#018BD3', height:isMobile? '' : isTablet? '' : '70px', display: 'flex', alignItems: 'center',padding:'10px' }}>
                <div className='container' style={{ display: 'flex', justifyContent:isMobile? 'center' : isTablet? 'center' : 'space-between',flexDirection:isMobile? 'column' : isTablet? 'column' : '' }}>
                    <h3 style={{ fontWeight: '700', color: '#fff' }}>Become a Saathi Partner and earn upto 20k per Month</h3>
                    <div style={{ background: '#078507', gap: '8px', height: isMobile ? '30px' : '40px', borderRadius: '30px', display: 'flex', alignItems: 'center', cursor: 'pointer', width: isMobile ? '100px' : '130px', justifyContent: 'center' }}>
                        <span data-bs-toggle="modal" data-bs-target="#loginModal" style={{ fontWeight: '700', fontSize: isMobile ? '12px' : '14px', color: '#FFFFFF', }}><i class="fa-solid fa-user"></i> Apply Now</span>
                    </div>
                </div>
            </div>
            <footer id="footer" className="footer">
                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <a href="#" style={{ textDecoration: 'none' }} className="logo d-flex align-items-center">
                                <span className="sitename text-white ">Download Application</span>
                            </a>
                            <div className="footer-contact pt-3">
                                <p><img src={gpoglepay} style={{ height: '50px' }} alt="" /></p>
                                <p><img src={apple} style={{ height: '50px', marginTop: '10px' }} alt="" /></p>

                            </div>
                            <div className="social-links d-flex mt-4">
                                <a href=""><i className="bi bi-twitter-x"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4 className='text-white'>Important Links</h4>
                            <ul>
                                <li><a href="#" className='text-white'>Home</a></li>
                                <li><a href="#" className='text-white'>About us</a></li>
                                <li><a href="#" className='text-white'>Partner</a></li>
                                <li><a href="#" className='text-white'>Network</a></li>
                                <li><a href="#" className='text-white'>Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-3 footer-links">
                            <h4 className='text-white'>Our Services</h4>
                            <ul>
                                <li><a href="#" className='text-white'>Safe Job Connect</a></li>
                                <li><a href="#" className='text-white'>Social Welfare Schemes</a></li>
                                <li><a href="#" className='text-white'>On Demand Services</a></li>
                                <li><a href="#" className='text-white'>PAN Card Center</a></li>
                                <li><a href="#" className='text-white'>Insurance</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-3 footer-links">
                            <h4 className='text-white'>Get In Touch</h4>
                            <ul>
                                <li><a href="#" className='text-white'>309 3th Floor The Atlanta Business Hub, Nana Chiloda, Ahmedabad, Gujarat 302330</a></li>
                                <li><a href="#" className='text-white'>+91 909 900 5251</a></li>
                                <li><a href="#" className='text-white'>support@onlinesaathi.org</a></li>
                            </ul>
                        </div>


                    </div>
                </div>

                <div className="container copyright text-center mt-4">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">iLanding</strong> <span>All Rights Reserved</span></p>
                </div>

            </footer>
        </>
    )
}

export default Footer