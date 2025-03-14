import { useContext, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import '../../css/componentCss/patient.css'
import appointment1 from "../../img/appointment1.png"
import appointment2 from "../../img/appointment2.png"
import appointment3 from "../../img/appointment3.png"
import appointment4 from "../../img/appointment4.png"
import doctor from "../../img/doctor2.png"
import WhyChooseUs from "../../component/whyChooseUs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import HotLineDetails from "../../component/hotlineDetails"
export const AppointmentScheduling = () =>{
  const { 
    OnbodyClick, 

  } = useContext(AuthContext)


  const [reSchedule, setReSchedule] = useState(true)
  const [cancelPolicy, setCancelPolicy] = useState(false)
  const [noShowPolicy, setNoShowPolicy] = useState(false)


  const [step1Dropdown, setStep1Dropdown] = useState(false)
  const [step2Dropdown, setStep2Dropdown] = useState(false)
  const [step3Dropdown, setStep3Dropdown] = useState(false)


  const toggleStep1 = () =>{
    setStep1Dropdown(!step1Dropdown)
    setStep2Dropdown(false)
    setStep3Dropdown(false)
    
  }

  const toggleStep2 = () =>{
    setStep2Dropdown(!step2Dropdown)
    setStep1Dropdown(false)
    setStep3Dropdown(false)

  }

  const toggleStep3 = () =>{
    setStep3Dropdown(!step3Dropdown)
    setStep1Dropdown(false)
    setStep2Dropdown(false)

  }


  const toggleReSchedule = () =>{
    if(!reSchedule){
      setReSchedule(!reSchedule)
    }
    setCancelPolicy(false)
    setNoShowPolicy(false)
  }

  const toggleCancelPolicy = () =>{
    if(!cancelPolicy){
      setCancelPolicy(!cancelPolicy)
    }
    setReSchedule(false)
    setNoShowPolicy(false)
  }

  const toggleNoShowPolicy = () =>{
    if(!noShowPolicy){
      setNoShowPolicy(!noShowPolicy)
    }
    setReSchedule(false)
    setCancelPolicy(false)
  }


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
                  <p className="site-primary-text md-text font-bold">Appointment & Scheduling</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Patients & Visitors <i class="ri-arrow-right-fill"></i>Appointment & Scheduling</p>
                </div>
                
              </div>
            </div>
          </div>

          <section className="site-section-container">
              <div className="container-lg">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="text-center">
                      <p className="site-header font-bold pb-3">Your Mental Well-Being Matters: Easy & Accessible Care.</p>
                      <p className="light-text-2">At Springfield Mental Health Services, we believe that mental well-being is essential for a fulfilling life. Seeking support is a courageous step, and we are here to make the process as simple, accessible, and stress-free as possible. Whether you're looking for therapy, counseling, or medication management, scheduling an appointment is quick and easy.</p>
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
                <p className="font-bold sm-text text-center uppercase site-primary-text mb-5 pb-3">How to Schedule an Appointment</p>
                <div className="row gx-4 gy-5">
                  <div className="col-md-6 col-lg-4">
                    <div className="d-sm-flex align-center">
                      <div className="pe-5 pb-4">
                        <img width='70px' src={appointment1} alt="" />
                      </div>
                      <div className=" appointment-box-side-line ps-4">
                        <p className="font-bold sm-text pb-2">Online Booking</p>
                        <p className="light-text-2">Patients can book appointment by going to the book appointment portal. FIll in the personal details. A confirmation email and SMS will be sent upon successful booking.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="d-sm-flex align-center">
                      <div className="pe-5 pb-4">
                        <img width='70px' src={appointment2} alt="" />
                      </div>
                      <div className=" appointment-box-side-line ps-4">
                        <p className="font-bold sm-text pb-2">Phone Booking</p>
                        <p className="light-text-2">Patients can can always reach us through our customer hotline <strong className="black-text">(08079022633)</strong> or via email <strong className="black-text">(iseghohimhene@gmail.com)</strong>. We are avalaible 247</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="d-sm-flex align-center">
                      <div className="pe-5 pb-4">
                        <img width='70px' src={appointment3} alt="" />
                      </div>
                      <div className=" appointment-box-side-line ps-4">
                        <p className="font-bold sm-text pb-2">Walk-In Appointments </p>
                        <p className="light-text-2">Patients can come to the mental health facility center to book an appointmen. A mental health specialist will book you an appointment.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="d-sm-flex align-center">
                      <div className="pe-5 pb-4">
                        <img width='70px' src={appointment4} alt="" />
                      </div>
                      <div className=" appointment-box-side-line ps-4">
                        <p className="font-bold sm-text pb-2">Refferal</p>
                        <p className="light-text-2">If a patient is reffered from another hospital. We will need a transfer off your record from the previous hospital, so we can determine your progress.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div className="row align-center">
                <div className="col-lg-6 col-md-7">
                  <div>
                    <p className="site-header pb-4">Rescheduling & Cancellation Policy</p>
                    <p className="light-text-2">At Springfield Mental Health Services, we understand that unexpected situations may arise, requiring you to reschedule or cancel your appointment. Our policies ensure fairness and availability for all patients while respecting the time of our mental health professionals.</p>

                    <div>
                      <div className="border-bottom3 pt-5 non-wrap-text">
                        <div className="row gx-4">
                          <div className='col-4 text-center cursor-pointer' onClick={toggleReSchedule}>
                            <div className={`${reSchedule ? 'appointment-scheduling-active-line-container' : 'd-none'} `}>
                              <div className='appointment-scheduling-active-line'></div>
                            </div>
                            <div className={`pb-3 ${reSchedule ? 'purple-text' : ''}`}>
                              <h6 className="uppercase appointment-scheduling-policy-menu-text ">Rescheduling</h6>
                            </div>
                          </div>

                          <div className='col-4 text-center cursor-pointer' onClick={toggleCancelPolicy}>
                            <div className={`${cancelPolicy ? 'appointment-scheduling-active-line-container' : 'd-none'} `}>
                              <div className='appointment-scheduling-active-line'></div>
                            </div>
                            <div className={`pb-3 ${cancelPolicy ? 'purple-text' : ''}`}>
                              <h6 className="uppercase appointment-scheduling-policy-menu-text ">Cancellation Policy</h6>
                            </div>
                          </div>

                          <div className='col-4 text-center cursor-pointer' onClick={toggleNoShowPolicy}>
                            <div className={`${noShowPolicy ? 'appointment-scheduling-active-line-container' : 'd-none'} `}>
                              <div className='appointment-scheduling-active-line'></div>
                            </div>
                            <div className={`pb-3 ${noShowPolicy ? 'purple-text' : ''}`}>
                              <h6 className="uppercase appointment-scheduling-policy-menu-text ">No-Show Policy</h6>
                            </div>
                          </div>

                          

                         
                        </div>
                      </div>

                      <div className="pt-4">
                        {reSchedule && 
                          <div>
                            <p className="font-bold pb-3">Instructions to follow when rescheduling an appointment</p>
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">   You can reschedule your appointment through our online booking system, by phone, or in person at least 24 hours before your scheduled time.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">  We encourage early rescheduling to secure a convenient time slot that fits your needs.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">   Rescheduling within less than 24 hours may be subject to a late rescheduling fee of 5000NGN due to short-notice adjustments in our schedule.</p>
                            </div>

                            <div className="pt-4 ms-4 ps-1">
                              <Link className="site-btn">Book Appointment</Link>
                            </div>

                          </div>
                        }

                        {cancelPolicy && 
                          <div>
                            <p className="font-bold pb-3">Instructions to follow when Canceling an appointment</p>
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">  Cancellations must be made at least 24-48 hours in advance to avoid fees.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">  If you cancel within less than 24 hours of your appointment, a cancellation fee of 2000NGN will apply.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">  If you repeatedly cancel last-minute, we may require pre-payment for future sessions.</p>
                            </div>

                            <div className="pt-4 ms-4 ps-1">
                              <Link className="site-btn">Book Appointment</Link>
                            </div>

                          </div>
                        }

                        {noShowPolicy && 
                          <div>
                            <p className="font-bold pb-3">When a Patient don't come on appointment day:</p>
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> If you fail to attend your appointment without prior notice, it will be considered a no-show.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> A no-show fee of 54000NGN will be charged, and repeated no-shows may result in restrictions on booking future appointments.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">  If you miss two consecutive appointments without notice, we may require a consultation before scheduling another session.</p>
                            </div>

                            <div className="pt-4 ms-4 ps-1">
                              <Link className="site-btn">Book Appointment</Link>
                            </div>

                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-5">
                  <img width='100%' src={doctor} alt="" />
                </div>
              </div>

            </div>

          </section>

          <section className="site-section-container">
            <WhyChooseUs />
          </section>

          <section className="site-section-container">
              <div className="container-lg">
                <div className="row justify-content-center">
                  <div className="text-center  col-lg-8 col-md-10">
                    <p className="site-primary-text font-bold">FAQ</p>
                    <p className="site-header pb-4 font-bold">Have more questions about Appointment & Schedu;ling?</p>
                    <p className="light-text-2">If you have more questions about Mental health, feel free to contact our customer support team that will gladly answer any questions you may have about enhancing how appointment takes place</p>
                  </div>
                </div>

                <div className="pt-5">
                  <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep1}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5"> Can I book an appointment for someone else?</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={` dropdown-content  ${step1Dropdown ? "slide-in" : "slide-out"}`}>
                      <p className="ps-5 pt-4">Yes !!! You can book appointment for somebody. All You need to do is to is fill in the patients data and specify book for someone else. Go to the Booking portal</p>
                    </div>
                  </div>

                  <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep2}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5">  How do I know which therapist is right for me?</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={` dropdown-content  ${step2Dropdown ? "slide-in" : "slide-out"}`}>
                      <p className="ps-5 pt-4">When you come you will undergo various mental health test in order for us to know which treatment will be suitable for your mental health. These test are going to come in various terms.</p>
                    </div>
                  </div>

                  <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep3}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5"> What if I need to cancel last minute? </p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={` dropdown-content  ${step3Dropdown ? "slide-in" : "slide-out"}`}>
                      <p className="ps-5 pt-4">If an emergency occurs we will reschedule a better time for our patients to continue the session. We always advice our patients to finish the mental health program and also undergo a post mental  health treatment</p>
                    </div>
                  </div>
                </div>

              </div>


          </section>

          <section className="site-section-container">
            <HotLineDetails />
          </section>



        </div>
        <Footer />
      </div>


     
    </div>









      
  )
}