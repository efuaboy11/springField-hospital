import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import why1  from '../img/doctor-icon.png'
import why2 from '../img/emergency-icon.png'
import why3 from '../img/share-love-icon.png'
import why4 from '../img/safe-earth-icon.png'
import features3 from '../img/features3.png'

const WhyChooseUs = () =>{

  return(
    <div>
      <section className="site-section-container">
        <div className="light-background2">
          <div className="container-lg py-5">
            <div className="text-center">
              <p className="sm-text font-bold site-primary-text uppercase">. Why Choose Us for Mental Health Treatment?</p>
              <p className="light-text-2">Our goal at springfield to improve mental health of our patients</p>
            </div>

            <div className="responsive-centralized-text pt-5">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="boxes-shadow white-background border-radius-5px p-4 special-box-container">
                    <div className="d-md-flex">
                      <div className="me-4 mb-4">
                        <img width="80px" src={why1} alt="" />
                      </div>
                      <div>
                        <p className="sm-text font-bold pb-2">Experienced and Licensed Professionals</p>
                        <p className="light-text-2">
                          Our team consists of highly trained and certified mental health professionals, including psychiatrists, psychologists, and therapists, ensuring expert care and evidence-based treatment.
                        </p>
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="special-box-overlay">
                      <div>
                        <div className="mb-4 text-center">
                          <Link className="me-3 light-link sm-text"><i class="ri-facebook-circle-fill"></i></Link>
                          <Link className="me-3 light-link sm-text"><i class="ri-whatsapp-line"></i></Link>
                          <Link className="me-3 light-link sm-text"><i class="ri-instagram-line"></i></Link>
                          <Link className="me-3 light-link sm-text"><i class="ri-twitter-x-line"></i></Link>

                        </div>
                        <Link className="special-box-btn">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="boxes-shadow white-background border-radius-5px p-4 special-box-container">
                    <div className="d-md-flex">
                      <div className="me-4 mb-4">
                        <img width="80px" src={why4} alt="" />
                      </div>
                      <div>
                        <p className="sm-text font-bold pb-2">Safe and Judgment-Free Environment</p>
                        <p className="light-text-2">
                          We provide a compassionate and confidential space where individuals can openly discuss their struggles without fear of stigma or discrimination.
                        </p>
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="special-box-overlay">
                      <div>
                        <div className="mb-4 text-center">
                          <Link className="me-3 light-link sm-text"><i class="ri-facebook-circle-fill"></i></Link>
                          <Link className="me-3 light-link sm-text"><i class="ri-whatsapp-line"></i></Link>
                          <Link className="me-3 light-link sm-text"><i class="ri-instagram-line"></i></Link>
                          <Link className="me-3 light-link sm-text"><i class="ri-twitter-x-line"></i></Link>

                        </div>
                        <Link className="special-box-btn">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-lg-4 col-md-6">
                  <div className="boxes-shadow white-background border-radius-5px p-4 special-box-container">
                    <div className="d-md-flex">
                      <div className="me-4 mb-4">
                        <img width="80px" src={features3} alt="" />
                      </div>
                      <div>
                        <p className="sm-text font-bold pb-2">Personalized Treatment Plans</p>
                        <p className="light-text-2">
                          Each patient receives a customized treatment approach tailored to their unique needs, whether through therapy, medication, or holistic interventions.
                        </p>
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="special-box-overlay">
                      <div>
                        <div className="mb-4 text-center">
                          <Link className="me-3 light-link sm-text"><i class="ri-facebook-circle-fill"></i></Link>
                          <Link className="me-3 light-link sm-text"><i class="ri-whatsapp-line"></i></Link>
                          <Link className="me-3 light-link sm-text"><i class="ri-instagram-line"></i></Link>
                          <Link className="me-3 light-link sm-text"><i class="ri-twitter-x-line"></i></Link>

                        </div>
                        <Link className="special-box-btn">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-lg-4 col-md-6">
                  <div className="boxes-shadow white-background border-radius-5px p-4 special-box-container">
                    <div className="d-md-flex">
                      <div className="me-4 mb-4">
                        <img width="80px" src={why2} alt="" />
                      </div>
                      <div>
                        <p className="sm-text font-bold pb-2">24/7 Emergency Support</p>
                        <p className="light-text-2">
                          Mental health crises can happen at any time, which is why we offer round-the-clock support to ensure immediate assistance and crisis intervention when needed.
                        </p>
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="special-box-overlay">
                      <div>
                        <div className="mb-4 text-center">
                          <Link className="me-3 light-link sm-text"><i class="ri-facebook-circle-fill"></i></Link>
                          <Link className="me-3 light-link sm-text"><i class="ri-whatsapp-line"></i></Link>
                          <Link className="me-3 light-link sm-text"><i class="ri-instagram-line"></i></Link>
                          <Link className="me-3 light-link sm-text"><i class="ri-twitter-x-line"></i></Link>

                        </div>
                        <Link className="special-box-btn">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-lg-4 col-md-6">
                  <div className="boxes-shadow white-background border-radius-5px p-4 special-box-container">
                    <div className="d-md-flex">
                      <div className="me-4 mb-4">
                        <img width="80px" src={why3} alt="" />
                      </div>
                      <div>
                        <p className="sm-text font-bold pb-2">Community Support and Aftercare Programs</p>
                        <p className="light-text-2">
                          We offer ongoing support through group therapy, peer support networks, and follow-up care to help individuals maintain long-term mental wellness and prevent relapse.
                        </p>
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="special-box-overlay">
                      <div>
                        <div className="mb-4 text-center">
                          <Link className="me-3 light-link sm-text"><i class="ri-facebook-circle-fill"></i></Link>
                          <Link className="me-3 light-link sm-text"><i class="ri-whatsapp-line"></i></Link>
                          <Link className="me-3 light-link sm-text"><i class="ri-instagram-line"></i></Link>
                          <Link className="me-3 light-link sm-text"><i class="ri-twitter-x-line"></i></Link>

                        </div>
                        <Link className="special-box-btn">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  )

}

export default WhyChooseUs;