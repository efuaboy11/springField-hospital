import React, { useState, useEffect } from "react";
import '../css/swiperContainerCss/homeSwiperCss.css'
import cover1 from '../img/cover-page-1.jpg'
import cover2 from '../img/cover-page-2.jpg'
import cover3 from '../img/cover-page-3.jpg'
import coverIcon1 from '../img/cover-icon1.png'
import coverIcon2 from '../img/cover-icon2.png'
import coverIcon3 from '../img/cover-icon3.png'
import { Link } from "react-router-dom";
const slides = [
  {
    image: cover1,
    title: "Prioritize Your Mental Well-Being",
    text: "Access professional therapy, self-care resources, and expert guidance to nurture your mind.",
    subtitle: "START YOUR HEALING JOURNEY",
  },
  {
    image: cover2,
    title: "Support for Every Step of Your Mental Health Journey",
    subtitle: "Compassionate Care, Anytime",
    text: "From therapy to wellness programs, we’re here to support you in achieving mental balance and resilience.",
  },
  {
    image: cover3,
    title: "Empower Your Mind with Professional Mental Health Support",
    subtitle: "Personalized Care for a Healthier You",
    text: "Explore evidence-based therapies, expert counseling, and holistic approaches for a healthier mind and life.",
  },
];


export const HomeCoverCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div>
        <div className="home-cover-carousel-container">
          <div className="home-cover-carousel-slides">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`home-cover-carousel-slide ${
                  currentIndex === index ? "active" : "inactive"
                } `}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="home-cover-carousel-overlay"></div>
                <div className="home-cover-carousel-content">
                  <div className="home-cover-carousel-content-width">
                    <p className="home-cover-carousel-sub-text site-primary-text">{slide.subtitle}</p>
                    <h1 className="home-cover-carousel-header py-2">{slide.title}</h1>
                    <p className="light-text home-cover-carousel-text-content-width  pb-4">{slide.text}</p>
                    <Link to='/register' className="uppercase site-btn px-4">Book Appointment</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="home-cover-carousel-buttons">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`home-cover-carousel-button ${
                  currentIndex === index ? "active" : ""
                }`}
                onClick={() => handleSlideChange(index)}
              ></button>
            ))}
          </div>
        </div>
        <div className="d-none d-md-block">
          <div className="home-cover-box overflow-hidden">
            <div>
              <div className="row justify-content-center">
                <div className="col-xl-8 col-md-10">
                  <div className="home-box-bg">
                    <div className="row g-3">
                      <div className="col-4">
                        <div className="d-flex">
                          <div className="me-3">
                            <img width='80px' src={coverIcon2} alt="" />
                          </div>
                          <div>
                            <p className="sm-text font-bold pb-2">Therapy</p>
                            <p className="light-text-2">the treatment of mental <br />  conditions</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="d-flex">
                          <div className="me-3">
                            <img width='80px' src={coverIcon3} alt="" />
                          </div>
                          <div>
                            <p className="sm-text font-bold pb-2">Relaxing</p>
                            <p className="light-text-2">affording physical or <br /> mental rest</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="d-flex">
                          <div className="me-3">
                            <img width='80px' src={coverIcon1} alt="" />
                          </div>
                          <div>
                            <p className="sm-text font-bold pb-2">Meditation</p>
                            <p className="light-text-2">enrich daily life through <br /> meditation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>


  );
};

