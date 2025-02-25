import React, { useState } from 'react';
import "../Home/Home.css";
import "swiper/css";
import "swiper/css/pagination";
import { useMediaQuery } from 'react-responsive';
import worker from "../Home/Workers Image.png";
import homeimg2 from "../Home/Homeimg2.png";
import homeimg3 from "../Home/homeimg3.png";
import homeimg4 from "../Home/homeimg4.png";
import sol1 from "../Home/sol1.gif";
import sol2 from "../Home/sol2.gif";
import sol3 from "../Home/sol3.gif";
import sol4 from "../Home/sol4.gif";
import demand from "../Home/on-demand-service.png";
import freelance from "../Home/freelance.png";
import governance from "../Home/governance.png";
import community from "../Home/community.png";
import img0 from "../Home/image 6.png";
import img1 from "../Home/image 7.png";
import img2 from "../Home/image 8.png";
import img3 from "../Home/image 9.png";
import img4 from "../Home/image 10.png";
import img5 from "../Home/image 11.png";
import strength from "../Home/strengthimg.png";
import become from "../Home/become.png";
import india from "../Home/india logo.png";

function Home() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                {/* Indicators */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"
                        aria-label="Slide 1" aria-current="true"
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            border: '2px solid white',
                            margin: '5px',
                            transform: 'scale(1.2)',
                            transition: 'background-color 0.3s, transform 0.3s'
                        }}>
                    </button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            border: '2px solid white',
                            margin: '5px',
                            transition: 'background-color 0.3s, transform 0.3s'
                        }}>
                    </button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            border: '2px solid white',
                            margin: '5px',
                            transition: 'background-color 0.3s, transform 0.3s'
                        }}>
                    </button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            border: '2px solid white',
                            margin: '5px',
                            transition: 'background-color 0.3s, transform 0.3s'
                        }}>
                    </button>
                </div>

                {/* Carousel Items */}
                <div className="carousel-inner">
                    {/* img section 1 */}
                    <div className="carousel-item active" style={{ position: "relative" }}>
                        <img src={worker} alt="" style={{ height: '90vh', width: '100%', objectFit: 'cover' }} />

                        {/* Full Black Transparent Overlay */}
                        <div className="overlay"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "rgba(0, 0, 0, 0.5)",
                                display: "flex",
                                alignItems: window.innerWidth < 768 ? "flex-start" : "center", // Align content to top on mobile
                                justifyContent: "center",
                                padding: window.innerWidth < 768 ? "10% 5%" : "20px",
                                flexDirection: "column"
                            }}>

                            <div className="carousel-caption"
                                style={{
                                    position: "absolute",
                                    top: window.innerWidth < 768 ? "40%" : "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: "white",
                                    width: "90%",
                                    maxWidth: "1200px",
                                    textAlign: window.innerWidth < 768 ? "center" : "left",
                                }}>

                                {/* Title */}
                                <h1 style={{
                                    fontSize: window.innerWidth < 768 ? "24px" : "62px",
                                    fontWeight: "700",
                                    width: '100%',
                                    marginBottom: "10px"
                                }}>
                                    Bridging Gaps for India's Unorganized Workforce
                                </h1>

                                {/* Description */}
                                <p style={{
                                    fontSize: window.innerWidth < 768 ? "16px" : "22px",
                                    lineHeight: "1.5",
                                    fontWeight: '600',
                                    width: '100%',
                                    textAlign: window.innerWidth < 768 ? "center" : "left",
                                    marginBottom: "20px"
                                }}>
                                    Online Saathi has provided personalized job-matching services, helping over 12,500 individuals find work.
                                </p>

                                {/* Stats and CTA Section */}
                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "repeat(4, 1fr)",
                                    gap: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    marginTop: isMobile ? '' : isTablet ? '' : '100px'
                                }}>
                                    {/* Stats Boxes */}
                                    {[
                                        { value: "20", label: "Company" },
                                        { value: "800", label: "Job Offer" },
                                        { value: "1200", label: "Government Scheme" }
                                    ].map((item, index) => (
                                        <div key={index} style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                            padding: "10px",
                                            borderRadius: "8px",
                                        }}>
                                            <p style={{
                                                display: "flex",
                                                alignItems: "center",
                                                color: "#fff",
                                                fontSize: window.innerWidth < 768 ? "28px" : "40px",
                                                fontWeight: "700",
                                                margin: 0
                                            }}>
                                                {item.value}
                                                <span style={{
                                                    fontSize: window.innerWidth < 768 ? "18px" : "30px",
                                                    fontWeight: "600",
                                                    marginLeft: "5px"
                                                }}>+</span>
                                            </p>
                                            <p style={{
                                                fontSize: window.innerWidth < 768 ? "18px" : "20px",
                                                color: "#fff",
                                                marginTop: "5px",
                                                lineHeight: "1.2"
                                            }}>
                                                {item.label}
                                            </p>
                                        </div>
                                    ))}

                                    {/* CTA Button */}
                                    <div style={{
                                        backgroundColor: "#3C82F6",
                                        height: window.innerWidth < 768 ? "auto" : "156px",
                                        color: "white",
                                        padding: "10px 20px",
                                        borderRadius: "10px",
                                        display: "flex",
                                        flexDirection: window.innerWidth < 768 ? "column" : "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "10px",
                                        cursor: "pointer",
                                        transition: "0.3s",
                                        fontSize: window.innerWidth < 768 ? "15px" : "18px",
                                        fontWeight: "500",
                                        textAlign: "center"
                                    }}>
                                        Become a Saathi and earn up to 20k
                                        <button style={{
                                            backgroundColor: "white",
                                            color: "#3C82F6",
                                            border: "none",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            fontWeight: "bold",
                                            cursor: "pointer"
                                        }}>
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* img section 2 */}
                    <div className="carousel-item" style={{ position: "relative" }}>
                        <img src={homeimg2} alt="" style={{ height: '90vh', width: '100%', objectFit: 'cover' }} />

                        {/* Full Black Transparent Overlay */}
                        <div className="overlay"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "rgba(0, 0, 0, 0.5)",
                                display: "flex",
                                alignItems: window.innerWidth < 768 ? "flex-start" : "center", // Align content to top on mobile
                                justifyContent: "center",
                                padding: window.innerWidth < 768 ? "10% 5%" : "20px",
                                flexDirection: "column"
                            }}>

                            <div className="carousel-caption"
                                style={{
                                    position: "absolute",
                                    top: window.innerWidth < 768 ? "40%" : "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: "white",
                                    width: "90%",
                                    maxWidth: "1200px",
                                    textAlign: window.innerWidth < 768 ? "center" : "left",
                                }}>

                                {/* Title */}
                                <h1 style={{
                                    fontSize: window.innerWidth < 768 ? "24px" : "62px",
                                    fontWeight: "700",
                                    width: '100%',
                                    marginBottom: "10px"
                                }}>
                                    Personalized Guidance from  Saathi Agents
                                </h1>

                                {/* Description */}
                                <p style={{
                                    fontSize: window.innerWidth < 768 ? "16px" : "22px",
                                    lineHeight: "1.5",
                                    fontWeight: '600',
                                    width: '100%',
                                    textAlign: window.innerWidth < 768 ? "center" : "left",
                                    marginBottom: "20px"
                                }}>
                                    With the dedicated assistance of over 1,200 Saathi agents, workers receive one-on-one guidance for job applications, resume building, and interview preparation.
                                </p>

                                {/* Stats and CTA Section */}
                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "repeat(4, 1fr)",
                                    gap: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    marginTop: isMobile ? '' : isTablet ? '' : '100px'
                                }}>
                                    {/* Stats Boxes */}
                                    {[
                                        { value: "20", label: "Company" },
                                        { value: "800", label: "Job Offer" },
                                        { value: "1200", label: "Government Scheme" }
                                    ].map((item, index) => (
                                        <div key={index} style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                            padding: "10px",
                                            borderRadius: "8px",
                                        }}>
                                            <p style={{
                                                display: "flex",
                                                alignItems: "center",
                                                color: "#fff",
                                                fontSize: window.innerWidth < 768 ? "28px" : "40px",
                                                fontWeight: "700",
                                                margin: 0
                                            }}>
                                                {item.value}
                                                <span style={{
                                                    fontSize: window.innerWidth < 768 ? "18px" : "30px",
                                                    fontWeight: "600",
                                                    marginLeft: "5px"
                                                }}>+</span>
                                            </p>
                                            <p style={{
                                                fontSize: window.innerWidth < 768 ? "18px" : "20px",
                                                color: "#fff",
                                                marginTop: "5px",
                                                lineHeight: "1.2"
                                            }}>
                                                {item.label}
                                            </p>
                                        </div>
                                    ))}

                                    {/* CTA Button */}
                                    <div style={{
                                        backgroundColor: "#3C82F6",
                                        height: window.innerWidth < 768 ? "auto" : "156px",
                                        color: "white",
                                        padding: "10px 20px",
                                        borderRadius: "10px",
                                        display: "flex",
                                        flexDirection: window.innerWidth < 768 ? "column" : "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "10px",
                                        cursor: "pointer",
                                        transition: "0.3s",
                                        fontSize: window.innerWidth < 768 ? "15px" : "18px",
                                        fontWeight: "500",
                                        textAlign: "center"
                                    }}>
                                        Become a Saathi and earn up to 20k
                                        <button style={{
                                            backgroundColor: "white",
                                            color: "#3C82F6",
                                            border: "none",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            fontWeight: "bold",
                                            cursor: "pointer"
                                        }}>
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* img section 3 */}
                    <div className="carousel-item" style={{ position: "relative" }}>
                        <img src={homeimg3} alt="" style={{ height: '90vh', width: '100%', objectFit: 'cover' }} />

                        {/* Full Black Transparent Overlay */}
                        <div className="overlay"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "rgba(0, 0, 0, 0.5)",
                                display: "flex",
                                alignItems: window.innerWidth < 768 ? "flex-start" : "center", // Align content to top on mobile
                                justifyContent: "center",
                                padding: window.innerWidth < 768 ? "10% 5%" : "20px",
                                flexDirection: "column"
                            }}>

                            <div className="carousel-caption"
                                style={{
                                    position: "absolute",
                                    top: window.innerWidth < 768 ? "40%" : "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: "white",
                                    width: "90%",
                                    maxWidth: "1200px",
                                    textAlign: window.innerWidth < 768 ? "center" : "left",
                                }}>

                                {/* Title */}
                                <h1 style={{
                                    fontSize: window.innerWidth < 768 ? "24px" : "62px",
                                    fontWeight: "700",
                                    width: '100%',
                                    marginBottom: "10px"
                                }}>
                                    Collaborating with Trusted Service Providers
                                </h1>

                                {/* Description */}
                                <p style={{
                                    fontSize: window.innerWidth < 768 ? "16px" : "22px",
                                    lineHeight: "1",
                                    fontWeight: '600',
                                    width: '100%',
                                    textAlign: window.innerWidth < 768 ? "center" : "left",
                                    marginBottom: "20px"
                                }}>
                                    By collaborating with multiple service providers, Online Saathi has expanded access to diverse job opportunities across various industries, connecting workers with roles suited to their expertise.
                                </p>

                                {/* Stats and CTA Section */}
                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "repeat(4, 1fr)",
                                    gap: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    marginTop: isMobile ? '' : isTablet ? '' : '100px'
                                }}>
                                    {/* Stats Boxes */}
                                    {[
                                        { value: "20", label: "Company" },
                                        { value: "800", label: "Job Offer" },
                                        { value: "1200", label: "Government Scheme" }
                                    ].map((item, index) => (
                                        <div key={index} style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                            padding: "10px",
                                            borderRadius: "8px",
                                        }}>
                                            <p style={{
                                                display: "flex",
                                                alignItems: "center",
                                                color: "#fff",
                                                fontSize: window.innerWidth < 768 ? "28px" : "40px",
                                                fontWeight: "700",
                                                margin: 0
                                            }}>
                                                {item.value}
                                                <span style={{
                                                    fontSize: window.innerWidth < 768 ? "18px" : "30px",
                                                    fontWeight: "600",
                                                    marginLeft: "5px"
                                                }}>+</span>
                                            </p>
                                            <p style={{
                                                fontSize: window.innerWidth < 768 ? "18px" : "20px",
                                                color: "#fff",
                                                marginTop: "5px",
                                                lineHeight: "1.2"
                                            }}>
                                                {item.label}
                                            </p>
                                        </div>
                                    ))}

                                    {/* CTA Button */}
                                    <div style={{
                                        backgroundColor: "#3C82F6",
                                        height: window.innerWidth < 768 ? "auto" : "156px",
                                        color: "white",
                                        padding: "10px 20px",
                                        borderRadius: "10px",
                                        display: "flex",
                                        flexDirection: window.innerWidth < 768 ? "column" : "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "10px",
                                        cursor: "pointer",
                                        transition: "0.3s",
                                        fontSize: window.innerWidth < 768 ? "15px" : "18px",
                                        fontWeight: "500",
                                        textAlign: "center"
                                    }}>
                                        Become a Saathi and earn up to 20k
                                        <button style={{
                                            backgroundColor: "white",
                                            color: "#3C82F6",
                                            border: "none",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            fontWeight: "bold",
                                            cursor: "pointer"
                                        }}>
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* img section 4 */}
                    <div className="carousel-item" style={{ position: "relative" }}>
                        <img src={homeimg4} alt="" style={{ height: '90vh', width: '100%', objectFit: 'cover' }} />

                        {/* Full Black Transparent Overlay */}
                        <div className="overlay"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "rgba(0, 0, 0, 0.5)",
                                display: "flex",
                                alignItems: window.innerWidth < 768 ? "flex-start" : "center", // Align content to top on mobile
                                justifyContent: "center",
                                padding: window.innerWidth < 768 ? "10% 5%" : "20px",
                                flexDirection: "column"
                            }}>

                            <div className="carousel-caption"
                                style={{
                                    position: "absolute",
                                    top: window.innerWidth < 768 ? "40%" : "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: "white",
                                    width: "90%",
                                    maxWidth: "1200px",
                                    textAlign: window.innerWidth < 768 ? "center" : "left",
                                }}>

                                {/* Title */}
                                <h1 style={{
                                    fontSize: window.innerWidth < 768 ? "24px" : "62px",
                                    fontWeight: "700",
                                    width: '100%',
                                    marginBottom: "10px"
                                }}>
                                    Fostering a Thriving Worker Community
                                </h1>

                                {/* Description */}
                                <p style={{
                                    fontSize: window.innerWidth < 768 ? "16px" : "22px",
                                    lineHeight: "1",
                                    fontWeight: '600',
                                    width: '100%',
                                    textAlign: window.innerWidth < 768 ? "center" : "left",
                                    marginBottom: "20px"
                                }}>
                                    The platform has fostered a thriving community of workers and supporters, creating a network where individuals can grow, share experiences, and continuously improve their career prospects.
                                </p>

                                {/* Stats and CTA Section */}
                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "repeat(4, 1fr)",
                                    gap: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    marginTop: isMobile ? '' : isTablet ? '' : '100px'
                                }}>
                                    {/* Stats Boxes */}
                                    {[
                                        { value: "20", label: "Company" },
                                        { value: "800", label: "Job Offer" },
                                        { value: "1200", label: "Government Scheme" }
                                    ].map((item, index) => (
                                        <div key={index} style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                            padding: "10px",
                                            borderRadius: "8px",
                                        }}>
                                            <p style={{
                                                display: "flex",
                                                alignItems: "center",
                                                color: "#fff",
                                                fontSize: window.innerWidth < 768 ? "28px" : "40px",
                                                fontWeight: "700",
                                                margin: 0
                                            }}>
                                                {item.value}
                                                <span style={{
                                                    fontSize: window.innerWidth < 768 ? "18px" : "30px",
                                                    fontWeight: "600",
                                                    marginLeft: "5px"
                                                }}>+</span>
                                            </p>
                                            <p style={{
                                                fontSize: window.innerWidth < 768 ? "18px" : "20px",
                                                color: "#fff",
                                                marginTop: "5px",
                                                lineHeight: "1.2"
                                            }}>
                                                {item.label}
                                            </p>
                                        </div>
                                    ))}

                                    {/* CTA Button */}
                                    <div style={{
                                        backgroundColor: "#3C82F6",
                                        height: window.innerWidth < 768 ? "auto" : "156px",
                                        color: "white",
                                        padding: "10px 20px",
                                        borderRadius: "10px",
                                        display: "flex",
                                        flexDirection: window.innerWidth < 768 ? "column" : "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "10px",
                                        cursor: "pointer",
                                        transition: "0.3s",
                                        fontSize: window.innerWidth < 768 ? "15px" : "18px",
                                        fontWeight: "500",
                                        textAlign: "center"
                                    }}>
                                        Become a Saathi and earn up to 20k
                                        <button style={{
                                            backgroundColor: "white",
                                            color: "#3C82F6",
                                            border: "none",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            fontWeight: "bold",
                                            cursor: "pointer"
                                        }}>
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Navigation Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container">
                <h1 className='mt-5' style={{
                    fontSize: window.innerWidth < 768 ? "34px" : "52px",
                    fontWeight: "700",
                    width: '100%',
                    color: '#000',
                    textAlign: 'center'
                }}>
                    <span>Overcoming Challenges in the </span>
                    <br />
                    <span style={{ color: '#0077FF' }}>Unorganized Sector</span>
                </h1>
                <br />
                <p className='text-center' style={{ fontSize: '27px', color: '#000000' }}>The Reality for India’s Invisible Workforce India’s informal workforce faces significant barriers in accessing essential welfare schemes and services. Despite the government’s investment of ₹2 lakh crore in welfare programs, over 83% of these workers earn less than ₹1.2 lakh annually. They encounter challenges such as:</p>
                {/* Overcoming challenge */}
                <div className="album py-5">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div className="hover-card-container">
                                <div className="hover-card">
                                    {/* Default Text (Visible when NOT hovered) */}
                                    <div className="card-text">Limited Access to Essential Services</div>
                                    {/* Hover Text (Visible when hovered) */}
                                    <div className="hover-text">
                                        Informal workers often <strong>miss out on banking, insurance, and welfare services</strong> due to
                                        limited documentation and awareness.
                                    </div>
                                </div>
                            </div>
                            <div className="hover-card-container">
                                <div className="hover-card">
                                    {/* Default Text (Visible when NOT hovered) */}
                                    <div className="card-text">Lack of Sustainable Income Opportunities</div>
                                    {/* Hover Text (Visible when hovered) */}
                                    <div className="hover-text second-text">
                                        With few formal job opportunities available locally, people often rely on low-paying, irregular work or
                                        <strong> face the difficult choice of migrating</strong> to cities <strong>in search of income</strong>,
                                        leaving behind their families and communities.
                                    </div>
                                </div>
                            </div>
                            <div className="hover-card-container">
                                <div className="hover-card">
                                    {/* Default Text (Visible when NOT hovered) */}
                                    <div className="card-text">Barriers to Growth and Financial Stability </div>
                                    {/* Hover Text (Visible when hovered) */}
                                    <div className="hover-text third-text">
                                        Without access to credit, training, and formal support, members of the informal workforce
                                        <strong> find it challenging to achieve economic stability</strong> or build a career path
                                        that allows for personal and professional growth.
                                    </div>
                                </div>
                            </div>
                            <div className="hover-card-container">
                                <div className="hover-card">
                                    {/* Default Text (Visible when NOT hovered) */}
                                    <div className="card-text">Lack of Awareness and Access  </div>
                                    {/* Hover Text (Visible when hovered) */}
                                    <div className="hover-text third-text">
                                        Many informal workers are <strong>unaware of available welfare schemes </strong>
                                        or lack the means to access them due to complicated processes and minimal
                                        digital literacy.
                                    </div>
                                </div>
                            </div>
                            <div className="hover-card-container">
                                <div className="hover-card">
                                    {/* Default Text (Visible when NOT hovered) */}
                                    <div className="card-text">Complex Processes</div>
                                    {/* Hover Text (Visible when hovered) */}
                                    <div className="hover-text third-text">
                                        Government schemes involve extensive documentation, challenging
                                        timelines, and <strong>lack of clarity</strong>, deterring informal
                                        workers from fully utilizing available resources.
                                    </div>
                                </div>
                            </div>
                            <div className="hover-card-container">
                                <div className="hover-card">
                                    {/* Default Text (Visible when NOT hovered) */}
                                    <div className="card-text">Information and Usage Gaps </div>
                                    {/* Hover Text (Visible when hovered) */}
                                    <div className="hover-text third-text">
                                        Even when informal workers gain access to a scheme, understanding how to
                                        effectively utilize benefits remains a hurdle. This{" "}
                                        <strong>lack of guidance</strong> often results in{" "}
                                        <strong>underutilization of resources</strong>, such as the high number
                                        of inactive Jan Dhan accounts.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our Solution */}
                <h1 className='mt-5' style={{
                    fontSize: window.innerWidth < 768 ? "34px" : "52px",
                    fontWeight: "700",
                    width: '100%',
                    color: '#000',
                    textAlign: 'center'
                }}>
                    <span>Our </span>
                    <span style={{ color: '#0077FF' }}>Solution</span>
                </h1>
                <br />
                <br />
                <div class="album py-5">
                    <div class="container">

                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-4 g-3">
                            <div class="col">
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                    <div className="card text-center border-primary p-4 shadow-sm" style={{ width: "18rem", borderRadius: "10px", height: '250px' }}>
                                        <h5 className="fw-bold">TRUST</h5>
                                        <p className="mb-2">built through community connections</p>
                                        <div className="my-3">
                                            <img src={sol1} style={{ height: '70px' }} alt="" />
                                        </div>
                                    </div>
                                    <button className="btn btn-light  border shadow" style={{ borderRadius: '0 0 20px 20px', height: '40px', background: 'transpatrent' }}>
                                        <i className="fas fa-chevron-down fs-4"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col">
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                    <div className="card text-center border-primary p-4 shadow-sm" style={{ width: "18rem", borderRadius: "10px", height: '250px' }}>
                                        <h5 className="fw-bold">TRANSACTIONS </h5>
                                        <p className="mb-2">Empowered</p>
                                        <p></p>
                                        <div className="my-3">
                                            <img src={sol2} style={{ height: '70px' }} alt="" />
                                        </div>
                                    </div>
                                    <button className="btn btn-light  border shadow" style={{ borderRadius: '0 0 20px 20px', height: '40px', background: 'transpatrent' }}>
                                        <i className="fas fa-chevron-down fs-4"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col">
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                    <div className="card text-center border-primary p-4 shadow-sm" style={{ width: "18rem", borderRadius: "10px", height: '250px' }}>
                                        <h5 className="fw-bold">TECHNOLOGY</h5>
                                        <p className="mb-2">Made Accessible</p>
                                        <p></p>
                                        <div className="my-3">
                                            <img src={sol3} style={{ height: '70px' }} alt="" />
                                        </div>
                                    </div>
                                    <button className="btn btn-light  border shadow" style={{ borderRadius: '0 0 20px 20px', height: '40px', background: 'transpatrent' }}>
                                        <i className="fas fa-chevron-down fs-4"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col">
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                    <div className="card text-center border-primary p-4 shadow-sm" style={{ width: "18rem", borderRadius: "10px", height: '250px' }}>
                                        <h5 className="fw-bold">TRENDS Tracked </h5>
                                        <p className="mb-2">for continuous improvement</p>
                                        <p></p>
                                        <div className="my-3">
                                            <img src={sol4} style={{ height: '70px' }} alt="" />
                                        </div>
                                    </div>
                                    <button className="btn btn-light  border shadow" style={{ borderRadius: '0 0 20px 20px', height: '40px', background: 'transpatrent' }}>
                                        <i className="fas fa-chevron-down fs-4"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Innovation */}
                <h1 className='mt-5' style={{
                    fontSize: window.innerWidth < 768 ? "34px" : "52px",
                    fontWeight: "700",
                    width: '100%',
                    color: '#000',
                    textAlign: 'center'
                }}>
                    <span>Our </span>
                    <span style={{ color: '#0077FF' }}>Innovation</span>
                    <span> and </span>
                    <span style={{ color: '#0077FF' }}>Services</span>
                </h1>
                <br />
                <br />

                <div class="album py-5">
                    <div class="container">

                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-4 g-3">
                            <div class="col">
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                    <div className="card text-center border-primary p-4 shadow-sm" style={{ width: "18rem", borderRadius: "10px", height: '250px' }}>
                                        <h5 className="fw-bold">On-Demand Services</h5>
                                        <p></p>
                                        <div className="my-3">
                                            <img src={demand} style={{ height: '70px' }} alt="" />
                                        </div>
                                    </div>
                                    <button className="btn btn-light  border shadow" style={{ borderRadius: '0 0 20px 20px', height: '40px', background: 'transpatrent' }}>
                                        <i className="fas fa-chevron-down fs-4"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col">
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                    <div className="card text-center border-primary p-4 shadow-sm" style={{ width: "18rem", borderRadius: "10px", height: '250px' }}>
                                        <h5 className="fw-bold">Jobs Connect</h5>
                                        <p className="mb-2"></p>
                                        <p></p>
                                        <div className="my-3">
                                            <img src={freelance} style={{ height: '70px' }} alt="" />
                                        </div>
                                    </div>
                                    <button className="btn btn-light  border shadow" style={{ borderRadius: '0 0 20px 20px', height: '40px', background: 'transpatrent' }}>
                                        <i className="fas fa-chevron-down fs-4"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col">
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                    <div className="card text-center border-primary p-4 shadow-sm" style={{ width: "18rem", borderRadius: "10px", height: '250px' }}>
                                        <h5 className="fw-bold">Goverment Shemes</h5>
                                        <p className="mb-2"></p>
                                        <p></p>
                                        <div className="my-3">
                                            <img src={governance} style={{ height: '70px' }} alt="" />
                                        </div>
                                    </div>
                                    <button className="btn btn-light  border shadow" style={{ borderRadius: '0 0 20px 20px', height: '40px', background: 'transpatrent' }}>
                                        <i className="fas fa-chevron-down fs-4"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col">
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                    <div className="card text-center border-primary p-4 shadow-sm" style={{ width: "18rem", borderRadius: "10px", height: '250px' }}>
                                        <h5 className="fw-bold">Localized Community</h5>
                                        <p className="mb-2"></p>
                                        <p></p>
                                        <div className="my-3">
                                            <img src={community} style={{ height: '70px' }} alt="" />
                                        </div>
                                    </div>
                                    <button className="btn btn-light  border shadow" style={{ borderRadius: '0 0 20px 20px', height: '40px', background: 'transpatrent' }}>
                                        <i className="fas fa-chevron-down fs-4"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Our strenght */}
                <h1 className='mt-5 mb-4' style={{
                    fontSize: window.innerWidth < 768 ? "34px" : "52px",
                    fontWeight: "700",
                    width: '100%',
                    color: '#000',
                    textAlign: 'center',
                }}>
                    <span>Our Strength and </span>
                    <span style={{ color: '#0077FF' }}>Assurance</span>
                </h1>
                <br />
                <br />
                <div className="row featurette align-items-center p-2">
                    <div className="col-md-7">
                        <h2 className="featurette-heading " style={{ display: 'flex', justifyContent: 'space-between', width: isMobile ? '100%' : isTablet ? '100%' : '70%', cursor: 'pointer' }}>
                            <span>Online Saathi Tech </span>
                            <span><i className="fa-solid fa-angle-up"></i></span>
                        </h2>
                        <br />
                        <h2 className="featurette-heading " style={{ display: 'flex', justifyContent: 'space-between', width: isMobile ? '100%' : isTablet ? '100%' : '70%', cursor: 'pointer' }}>
                            <span>Sewa Sathi Network </span>
                            <span><i className="fa-solid fa-angle-up"></i></span>
                        </h2>
                        <br />
                        <h2 className="featurette-heading mb-2" style={{ display: 'flex', justifyContent: 'space-between', width: isMobile ? '100%' : isTablet ? '100%' : '70%', cursor: 'pointer' }}>
                            <span>Services Provider </span>
                            <span><i className="fa-solid fa-angle-up"></i></span>
                        </h2>
                    </div>
                    <div className="col-md-5">
                        <img src={strength} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="700" alt="" />
                    </div>
                </div>
                {/* Become a sathi */}
                <h1 className='mt-5 mb-4' style={{
                    fontSize: window.innerWidth < 768 ? "34px" : "52px",
                    fontWeight: "700",
                    width: '100%',
                    color: '#000',
                    textAlign: 'center'
                }}>
                    <span>Become a</span>
                    <span style={{ color: '#0077FF' }}> Saathi</span>
                </h1>
                <br />
                <br />
                <div className="container" style={{ background: '#9D91E6', height: isMobile ? '100%' : '100%', borderRadius: '10px', marginTop: '20px' }}>
                    <div >
                        {/* img section */}
                        <div className="row featurette " style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: isMobile ? 'column' : isTablet ? 'column' : '' }}>
                            <div className="col-md-7" style={{ padding: isMobile ? '' : '40px', width: isTablet ? '100%' : '' }}>
                                <h1 className="featurette-heading">
                                    <span style={{ color: '#fff', fontWeight: '700', fontSize: isMobile ? '18px' : isTablet ? '20px' : '20px' }}>Who are Saathi's?</span>
                                </h1>

                                <br />
                                <h1 className="featurette-heading">
                                    <span style={{ color: '#fff', fontWeight: '500', fontSize: isMobile ? '16px' : isTablet ? '16px' : '19px', lineHeight: '0' }}>Saathi agents are dedicated guides who assist workers in navigating the job search process. They provide personalized support through skill assessments, job matching, and hands-on help with applications, resumes, and interview preparation.</span>
                                </h1>
                            </div>
                            <div className="col-md-5 text-end" style={{ display: 'flex', alignItems: 'baseline', width: isTablet ? '100%' : '' }}>
                                <img src={become} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ height: isMobile ? '100%' : '496px', objectFit: 'cover', bottom: '0' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* why become a saathi  */}
                <h1 className='mt-5 mb-4' style={{
                    fontSize: window.innerWidth < 768 ? "34px" : "52px",
                    fontWeight: "700",
                    width: '100%',
                    color: '#000',
                    textAlign: 'center'
                }}>
                    <span> Why Become a</span>
                    <span style={{ color: '#0077FF' }}> Saathi?</span>
                </h1>
                <br />
                <div className="album py-5">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-3 g-3" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="hover-card-container">
                                <div className="hover-card">
                                    {/* Default Text (Visible when NOT hovered) */}
                                    <div className="card-text">Create Local Opportunities and Earn a stable Income</div>
                                    {/* Hover Text (Visible when hovered) */}
                                    <div className="hover-text">
                                        As a Saathi, you are empowered to generate multiple income streams within your village. By offering services like government scheme access, financial transactions, assisted commerce, and product deliveries, you become a central resource for your community, providing convenient and essential services while building a sustainable income.
                                    </div>
                                </div>
                            </div>
                            <div className="hover-card-container">
                                <div className="hover-card">
                                    {/* Default Text (Visible when NOT hovered) */}
                                    <div className="card-text">Be a Catalyst for Economic Growth in Your Community</div>
                                    {/* Hover Text (Visible when hovered) */}
                                    <div className="hover-text">
                                        Through Online Saathi, you help transform the lives of the informal workforce by making critical services accessible. By bringing opportunities directly to their doorstep, you enable your community members to thrive without having to migrate for work, fostering local economic growth and stability.
                                    </div>
                                </div>
                            </div>
                            <div className="hover-card-container">
                                <div className="hover-card">
                                    {/* Default Text (Visible when NOT hovered) */}
                                    <div className="card-text">Build Social Capital and Community Trust</div>
                                    {/* Hover Text (Visible when hovered) */}
                                    <div className="hover-text">
                                        As a Saathi, you earn respect and trust within your community, becoming a leader people can rely on for assistance with complex services. Your role as a Saathi gives you pride and a sense of purpose, as you support your community members in building a dignified life.
                                    </div>
                                </div>
                            </div>
                            <div className="hover-card-container">
                                <div className="hover-card">
                                    {/* Default Text (Visible when NOT hovered) */}
                                    <div className="card-text">Gain Skills and Growth Opportunities</div>
                                    {/* Hover Text (Visible when hovered) */}
                                    <div className="hover-text">
                                        Online Saathi offers comprehensive digital and professional training through our Saathi Academy, ensuring you are well-prepared within 24 hours of onboarding. You also have access to tools for building credit history and expanding your services, helping you grow both personally and professionally.
                                    </div>
                                </div>
                            </div>
                            <div className="hover-card-container">
                                <div className="hover-card">
                                    {/* Default Text (Visible when NOT hovered) */}
                                    <div className="card-text">Be Part of a Mission to Empower India's Informal Workforce</div>
                                    {/* Hover Text (Visible when hovered) */}
                                    <div className="hover-text">
                                        Over 1 million youth join the workforce each month, but less than 10% find formal jobs. By becoming a Saathi, you are part of a solution that provides meaningful, sustainable work within local communities, supporting India’s vast informal workforce in achieving financial independence and stability.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <button type="button" class="btn btn-primary fs-4 mb-4">Enroll Now</button>
                </div>
                {/* our prasence  */}
                <h1 className='mt-5 mb-4' style={{
                    fontSize: window.innerWidth < 768 ? "34px" : "52px",
                    fontWeight: "700",
                    width: '100%',
                    color: '#000',
                    textAlign: 'center'
                }}>
                    <span>Our</span>
                    <span style={{ color: '#0077FF' }}> Presence</span>
                </h1>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={india} style={{ height: isMobile ? '300px' : '600px' }} alt="" />
                </div>
                {/* img scroll */}
                <h1 className='mt-5' style={{
                    fontSize: window.innerWidth < 768 ? "34px" : "52px",
                    fontWeight: "700",
                    width: '100%',
                    color: '#000',
                    textAlign: 'center'
                }}>
                    <span>Our </span>
                    <span style={{ color: '#0077FF' }}>Partners</span>
                </h1>
                <br />
                <br />
                <div className="py-2 mb-5">
                    <div className="scroll-container">
                        <div className="scroll-content">
                            {/* 🔥 SINGLE image-row repeated twice for seamless effect */}
                            <div className="image-row">
                                <img src={img0} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img1} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img2} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img3} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img4} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img5} className="img-fluid" id="second-marks" alt="companyLogo" />

                                {/* 🔥 Duplicate same row (for infinite seamless scroll) */}
                                <img src={img0} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img1} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img2} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img3} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img4} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img5} className="img-fluid" id="second-marks" alt="companyLogo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
