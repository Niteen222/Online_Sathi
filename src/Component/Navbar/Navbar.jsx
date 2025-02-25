import React from 'react';
import logo from "../Navbar/logo.png";
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { Home } from 'lucide-react';


function Navbar() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return (
        <>
            <div className=' bg-white shadow'>
                <div className="container ">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="https://online-sathi.vercel.app/">
                                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                    <img src={logo} style={{ height: isMobile ? '40px' : '50px' }} alt="" />
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        <span style={{ color: '#F80000', fontSize: isMobile ? '22px' : '33px', fontWeight: '700' }}>Online</span>
                                        <span style={{ color: '#0BA811', fontSize: isMobile ? '22px' : '33px', fontWeight: '700' }}>Sathi</span>
                                    </div>
                                </div>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                </ul>
                                <form className="d-flex" role="search">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: 'flex', alignItems: isMobile ? '' : isTablet ? '' : 'center', gap: isMobile ? '' : isTablet ? '' : '20px' }}>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#" style={{ fontSize: '17px', color: '#000000', fontWeight: '600' }}>
                                                <NavLink
                                                    to="partner"
                                                    className={({ isActive }) =>
                                                        `nav-item nav-link  ${isActive ? "active" : ""
                                                        }`
                                                    }
                                                >
                                                    Partner
                                                </NavLink>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#" style={{ fontSize: '17px', color: '#000000', fontWeight: '600' }}>
                                                <NavLink
                                                    to="sathi"
                                                    className={({ isActive }) =>
                                                        `nav-item nav-link  ${isActive ? "active" : ""
                                                        }`
                                                    }
                                                >
                                                    Saathi
                                                </NavLink>
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style={{ fontSize: '17px', color: '#000000', fontWeight: '600' }}>
                                                Services
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="#" style={{ fontSize: '16px', color: '#000000', fontWeight: '600' }}>All Services</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="#" style={{ fontSize: '16px', color: '#000000', fontWeight: '600' }}>Safe Jobs Connect</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="#" style={{ fontSize: '16px', color: '#000000', fontWeight: '600' }}>Social Welfare Schemes</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="#" style={{ fontSize: '16px', color: '#000000', fontWeight: '600' }}>Our Technology</a>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="#" id="nestedDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '16px', color: '#000000', fontWeight: '600' }}>
                                                        Our Community
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#" style={{ fontSize: '17px', color: '#000000', fontWeight: '600' }}>
                                                <NavLink
                                                    to="tech"
                                                    className={({ isActive }) =>
                                                        `nav-item nav-link  ${isActive ? "active" : ""
                                                        }`
                                                    }
                                                >
                                                    Technology
                                                </NavLink>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#" style={{ fontSize: '17px', color: '#000000', fontWeight: '600' }}>
                                                <NavLink
                                                    to="contact"
                                                    className={({ isActive }) =>
                                                        `nav-item nav-link  ${isActive ? "active" : ""
                                                        }`
                                                    }
                                                >
                                                    Contact Us
                                                </NavLink>
                                            </a>
                                        </li>
                                        <li className="nav-item mb-4 mt-3">
                                            <div style={{ background: '#0077FF', gap: '8px', height: isMobile ? '38px' : '48px', borderRadius: '30px', display: 'flex', alignItems: 'center', cursor: 'pointer', width: isMobile ? '100px' : '130px', justifyContent: 'center' }}>
                                                <span data-bs-toggle="modal" data-bs-target="#loginModal" style={{ fontWeight: '700', fontSize: isMobile ? '15px' : '17px', color: '#FFFFFF', }}>Login</span>
                                            </div>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </nav>
                    {/* Login Modal */}
                    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title " id="loginModalLabel" style={{ color: 'rgba(75, 85, 99, 1)', fontWeight: '600', fontSize: '22px' }}>Login to Online Sathi</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="container my-2 d-flex flex-column justify-content-center align-items-center">
                                        <div className="col-12">
                                            <label htmlFor="loginEmail" className="form-label" style={{ color: 'rgba(75, 85, 99, 1)', fontWeight: '600', fontSize: '18px' }}>Email</label>
                                            <input type="email" className="form-control" id="loginEmail" placeholder="Enter Your Email" />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="col-12">
                                            <br />
                                            <label htmlFor="loginPassword" className="form-label" style={{ color: 'rgba(75, 85, 99, 1)', fontWeight: '600', fontSize: '18px' }}>Password</label>
                                            <input type="password" className="form-control" id="loginPassword" placeholder="Enter Your Password" />
                                            <small id="passwordHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
                                        </div>
                                        <br />
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="loginCheck" />
                                                <label className="form-check-label" htmlFor="loginCheck">
                                                    I accept all terms $ consitions
                                                </label>
                                            </div>
                                            <br />
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn " style={{ background: '#FFFFFF', color: 'rgba(255, 255, 255, 1)', width: '100%', fontSize: '18px' }}>Login</button>
                                        </div>
                                        <br />
                                        <div className="col-12 text-center">
                                            <span>Don't have an account? </span>
                                            <span data-bs-toggle="modal" data-bs-target="#signupModal" style={{ color: 'blue', cursor: 'pointer', fontSize: '18px', textDecoration: 'underline' }}>Signup</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn " style={{ background: '#0077FF', color: 'rgba(255, 255, 255, 1)', fontSize: '18px' }} data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Signup Modal */}
                    <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title" id="signupModalLabel" style={{ color: 'rgba(75, 85, 99, 1)', fontWeight: '600', fontSize: '22px' }}>Create your Online Sathi Account</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="container my-2 d-flex flex-column justify-content-center align-items-center">
                                        <div className="col-12">
                                            <label htmlFor="signupName" className="form-label" style={{ color: 'rgba(75, 85, 99, 1)', fontWeight: '600', fontSize: '18px' }}>Name</label>
                                            <input type="text" className="form-control" id="signupName" placeholder="Enter Your Name" />
                                        </div>
                                        <div className="col-12">
                                            <br />
                                            <label htmlFor="signupPhone" className="form-label" style={{ color: 'rgba(75, 85, 99, 1)', fontWeight: '600', fontSize: '18px' }}>Phone Number</label>
                                            <input type="number" className="form-control" id="signupPhone" placeholder="Enter Your Mobile Number" />
                                        </div>
                                        <div className="col-12">
                                            <br />
                                            <label htmlFor="signupEmail" className="form-label" style={{ color: 'rgba(75, 85, 99, 1)', fontWeight: '600', fontSize: '18px' }}>Email</label>
                                            <input type="email" className="form-control" id="signupEmail" placeholder="Enter Your Email" />
                                        </div>
                                        <div className="col-12">
                                            <br />
                                            <label htmlFor="signupPassword" className="form-label" style={{ color: 'rgba(75, 85, 99, 1)', fontWeight: '600', fontSize: '18px' }}>Password</label>
                                            <input type="password" className="form-control" id="signupPassword" placeholder="Enter Your Password" />
                                        </div>
                                        <div className="col-12">
                                            <br />
                                            <label htmlFor="signupConfirmPassword" className="form-label" style={{ color: 'rgba(75, 85, 99, 1)', fontWeight: '600', fontSize: '18px' }}>Confirm Password</label>
                                            <input type="password" className="form-control" id="signupConfirmPassword" placeholder="Enter Your Confirm Password" />
                                        </div>
                                        <br />
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="loginCheck" />
                                                <label className="form-check-label" htmlFor="loginCheck">
                                                    I accept all terms $ consitions
                                                </label>
                                            </div>
                                            <br />
                                        </div>
                                        <br />
                                        <div className="col-12 ">
                                            <button type="submit" className="btn" style={{ background: '#0077FF', color: 'rgba(255, 255, 255, 1)', width: '100%', fontSize: '18px' }}>Create Account</button>
                                        </div>
                                        <br />
                                        <div className="col-12 text-center">
                                            <span>Already have an account? </span>
                                            <span data-bs-toggle="modal" data-bs-target="#loginModal" style={{ color: 'blue', cursor: 'pointer', fontSize: '18px', textDecoration: 'underline' }}>Login</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn" style={{ background: '#0077FF', color: 'rgba(255, 255, 255, 1)', fontSize: '18px' }} data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar