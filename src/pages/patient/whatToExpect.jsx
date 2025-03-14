import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import HotLineDetails from "../../component/hotlineDetails"


export const WhatToExpect = () =>{
  const { 
    OnbodyClick, 

  } = useContext(AuthContext)


  return(
    <div>
      <div>
        <Header />
      </div>
      <div className="position-sticky1">
        <Navbar />
      </div>


      <div onClick={OnbodyClick}>
        <div>
          <div className="light-background2 mb-5">
            <div className="py-5 container-lg">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <p className="site-primary-text md-text font-bold">What To Expect</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Patients & Visitior <i class="ri-arrow-right-fill"></i>What To Expect</p>
                </div>
                
              </div>
            </div>
          </div>

          <section className="site-section-container">
              <div className="container-lg">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="text-center">
                      <p className="site-header font-bold pb-3">What to Expect from Our Mental Health Services</p>
                      <p className="light-text-2">At Springfield Mental Health Services, we are committed to providing exceptional care that meets the highest standards of professionalism, compassion, and effectiveness. When you seek mental health support with us, here are the key qualities you can expect from our team and services.</p>
                      <div className="pt-4">
                        <Link to='' className="site-btn px-5">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

          </section>


          <section className="site-section-container">
            <div className="container-lg">
              <div>
                <p className="sm-text font-bold uppercase text-center site-primary-text pb-5 mb-4">We give Our patients the best when it comes to mental health.</p>

                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">01</p>
                        <p className="sm-text font-bold pb-4">Compassionate & Non-Judgmental Care </p>
                        <div>
                            
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Safe & Confidential Environment: We ensure a secure and judgment-free space where you can openly share your feelings and concerns.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Culturally Inclusive & Respectful: We respect all backgrounds, identities, and personal experiences to provide personalized care.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> People facing grief and loss</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">02</p>
                        <p className="sm-text font-bold pb-3">Professional & Licensed Experts </p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Experienced Mental Health Specialists: Our team includes licensed therapists, psychiatrists, counselors, and psychologists with years of experience.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Evidence-Based Treatments: We use scientifically proven approaches, including Cognitive Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT), and Medication Management, to ensure effective results.</p>
                          </div>

  
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">03</p>
                        <p className="sm-text font-bold pb-3">Personalized & Individualized Care </p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Tailored Treatment Plans: We don’t believe in a one-size-fits-all approach. Each patient receives a personalized plan suited to their unique needs and goals.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Holistic & Integrative Methods: Beyond therapy and medication, we incorporate self-care strategies, lifestyle adjustments, and wellness programs to support overall well-being.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">04</p>
                        <p className="sm-text font-bold pb-3"> Accessibility & Convenience</p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Flexible Scheduling: We offer morning, evening, and weekend appointments to accommodate different schedules.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Telehealth & In-Person Options: Choose between face-to-face sessions at our clinic or the convenience of online therapy from your home.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Flexible Scheduling: We offer morning, evening, and weekend appointments to accommodate different schedules.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">05</p>
                        <p className="sm-text font-bold pb-3"> Confidentiality & Trust </p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Strict Privacy Standards: Your personal and medical information is kept 100% confidential, following HIPAA and data protection laws.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Ethical Care: Our team follows the highest ethical standards to ensure your safety, dignity, and rights are always respected.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Safe Space for Expression: We encourage open, honest communication so you can feel truly heard and understood.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">06</p>
                        <p className="sm-text font-bold pb-3">Ongoing Support & Crisis Assistance</p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Follow-Up & Progress Tracking: We monitor your progress, adjust treatments as needed, and provide ongoing support.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">24/7 Crisis Helplines: If you need urgent help, we offer emergency support services and crisis hotlines for immediate assistance.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Community & Peer Support Groups: We connect you with support networks, including group therapy and recovery programs, to help you heal with others.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>


          <section className="site-section-container">
            <div>
              <div className="container-lg p-4">
                <p className="text-center site-primary-text sm-text uppercase font-bold pb-4">We Give The Best</p>
                <div className="row justify-content-center">
                  <div className="col-sm-8 ">
                    <div className="home-what-we-do ps-4">
                      <p className="sm-text light-text-2">At Springfield Mental Health Services, we are dedicated to ensuring you receive compassionate, expert, and personalized mental health care in a safe and welcoming environment. Your mental well-being is our priority, and we are here to support you every step of the way.</p>
                    </div>                     
                  </div>
                  
                </div>
              </div>
            </div>
          </section>

          <section  className="site-section-container">
            <HotLineDetails />
          </section>



        </div>
        <Footer />
      </div>
      
    </div>









      
  )
}