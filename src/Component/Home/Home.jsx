import React from 'react';
import "../Home/Home.css";
import { useMediaQuery } from 'react-responsive';
import worker from "../Home/Workers Image.png";
import homeimg2 from "../Home/Homeimg2.png";
import homeimg3 from "../Home/homeimg3.png";
import homeimg4 from "../Home/homeimg4.png";


function Home() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

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
                <div className="album py-5 bg-body-tertiary">
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
            </div>
        </>
    )
}

export default Home;
