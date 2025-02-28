import { useContext, useState } from "react"
import { Header, Navbar } from "../../component/navbar"
import AuthContext from "../../context/AuthContext"
import '../../css/style.css'
import { Footer } from "../../component/footer"
import { Link } from "react-router-dom"

import fndHelp1 from '../../img/facility.jpg'
import findHelp2 from '../../img/findHelp1.jpg'
import FindHelp3 from '../../img/findHelp2.jpg'
import findHelp4 from '../../img/findHelp3.jpg'
import findHelp5 from '../../img/findHelp4.jpg'
import why1  from '../../img/doctor-icon.png'
import why2 from '../../img/emergency-icon.png'
import why3 from '../../img/share-love-icon.png'
import why4 from '../../img/safe-earth-icon.png'
import features3 from '../../img/features3.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faRibbon } from "@fortawesome/free-solid-svg-icons"
import HotLineDetails from "../../component/hotlineDetails"
import WhyChooseUs from "../../component/whyChooseUs"

export const FindHelp = () =>{
  const { 
    OnbodyClick, 
    navOverlay,

  } = useContext(AuthContext)


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

  return(
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div className="position-sticky1">
          <Navbar />
        </div>

        <div onClick={OnbodyClick} className={`${navOverlay ? 'kl' : ""}`}>
          <div>
            <div className="light-background2 mb-5">
              <div className="py-5 container-lg">
                <div className="d-flex justify-content-center text-center">
                  <div>
                    <p className="site-primary-text md-text font-bold">Find Help</p>
                    <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Help <i class="ri-arrow-right-fill"></i>Find Help</p>
                  </div>
                  
                </div>
              </div>
            </div>


            <section className="site-section-container">
              <div className="container-lg">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                    <div className="text-center">
                      <p className="site-header font-bold pb-3">You are not alone—help is available.</p>
                      <p className="light-text-2">Seeking help for mental health challenges is a courageous and important step toward healing. Whether you're experiencing stress, anxiety, depression, or a crisis, Springfield Mental Health Services provides access to professional care, support groups, and crisis intervention.</p>
                      <div className="pt-4">
                        <Link to='' className="site-btn px-5">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

            </section>


            <section className="site-section-container">
              <p className="site-primary-text sm-text font-bold text-center pb-5 mb-5"> Types of Mental Health Support Available</p>
              <div className="container-lg">
                <div className="row gx-4 gy-5">

                  <div className="col-12 d-block d-md-none">
                    <img width='100%' src={fndHelp1} alt="" />
                  </div> 

                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold pb-3"> Professional Mental Health Services</p>
                      <p className="font-bold">What it is:</p>
                      <p className="light-text-2 italic-text py-2">Licensed professionals provide clinical support and treatment for various mental health conditions.</p> 
                      <p className="light-text-2 font-bold">Where to find professional help:</p>

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Psychologists & Therapists – Offer counseling and psychotherapy.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Psychiatrists – Provide medical evaluations and prescribe medication.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Counselors & Social Workers – Offer emotional support and guidance.</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 d-none d-md-block">
                    <div>
                      <img width='100%' src={fndHelp1} alt="" />
                    </div>  
                  </div>


                  <div className="col-md-6">
                    <div>
                      <img width='100%' src={findHelp2} alt="" />
                    </div>  
                  </div>

                  

                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold pb-3">Support Groups & Peer Counseling</p>
                      <p className="font-bold">What it is:</p>
                      <p className="light-text-2 italic-text py-2">Group settings where individuals share experiences, provide encouragement, and learn coping strategies.</p> 
                      <p className="light-text-2 font-bold">Examples of support groups:</p>

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Anxiety & Depression Support Groups</p>
                        </div>

                        <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Addiction & Substance Use Recovery Groups</p>
                        </div>

                        <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Grief & Loss Counseling Groups</p>
                        </div>

                        <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Trauma & PTSD Recovery Groups</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-12 d-block d-md-none">
                    <img width='100%' src={FindHelp3} alt="" />
                  </div> 

                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold pb-3">Crisis Hotlines & Immediate Help</p>
                      <p className="font-bold">What it is:</p>
                      <p className="light-text-2 italic-text py-2">If you or someone you know is in crisis, immediate help is available through 24/7 helplines.</p> 
                      <p className="light-text-2 font-bold">Important Hotlines:</p>

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Disaster Distress Helpline – 1-800-985-5990 (for disaster-related mental health support)</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Crisis Text Line – Text HOME to 741741 (for free crisis support)</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Nigeria Suicide Prevention Helpline – Call 0806 210 6493, 0803 200 0776</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Nigeria Mental Health Crisis Line – Call 0909 555 2288</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 d-none d-md-block">
                    <div>
                      <img width='100%' src={FindHelp3} alt="" />
                    </div>   
                  </div>


                  <div className="col-md-6">
                    <div>
                      <img width='100%' src={findHelp4} alt="" />
                    </div>   
                  </div>


                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold pb-3"> Online & Virtual Therapy</p>
                      <p className="font-bold">What it is:</p>
                      <p className="light-text-2 italic-text py-2">Accessible mental health services through online platforms, video calls, and chat-based therapy.</p> 
                      <p className="light-text-2 font-bold">Where to find online help:</p>

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Teletherapy services with licensed professionals</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Online counseling and mental health apps</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Virtual support groups</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 d-block d-md-none">
                    <img width='100%' src={findHelp5} alt="" />
                  </div> 


                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold pb-3"> Self-Help & Wellness Resources</p>
                      <p className="font-bold">What it is:</p>
                      <p className="light-text-2 italic-text py-2">Personal mental health tools that help individuals manage stress, anxiety, and emotions.</p> 
                      <p className="light-text-2 font-bold">Examples:</p>

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Meditation & mindfulness apps (e.g., Headspace, Calm)</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Self-help books & mental health podcasts</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Journaling & emotional tracking apps</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 d-none d-md-block">
                    <div>
                      <img width='100%' src={findHelp5} alt="" />
                    </div>  
                  </div>


                </div>


              </div>

            </section>

            <section className="site-section-container">
              <div className="container-lg">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="boxes-shadow border-radius-10px p-4">
                      <p className="site-header pb-3">When Should You Seek Help?</p>
                      <p className="light-text-2">Mental health support is beneficial in many situations. You should seek help if you or someone you know:</p>


                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Feels overwhelmed by daily life and responsibilities</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Experiences persistent feelings of sadness, anxiety, or hopelessness</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Struggles with substance use or addiction</p>
                        </div>


                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Has difficulty managing stress, relationships, or emotions</p>
                        </div>


                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">   Has experienced trauma, grief, or loss</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">struggling with self-harm or suicidal thoughts</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="boxes-shadow border-radius-10px p-4">
                      <p className="site-header pb-3">How to Take the First Step</p>


                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Step 1: Recognize that you need help—it’s okay to reach out.</p>
                        </div>
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Step 2: Identify the type of support that fits your needs (therapy, peer support, crisis intervention).</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Step 3: Contact a professional or hotline for immediate assistance.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Step 4: Build a support system with family, friends, and mental health professionals.</p>
                        </div>


                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Step 5: Stay committed to your mental well-being by following treatment plans and self-care routines.</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>

              </div>


            </section>
            
            <section>
              <WhyChooseUs />
            </section>
            


            <section className="site-section-container">
              <div className="container-lg">
                <div className="row justify-content-center">
                  <div className="text-center  col-lg-8 col-md-10">
                    <p className="site-primary-text font-bold">FAQ</p>
                    <p className="site-header pb-4 font-bold">Need More Clarity on Finding Help</p>
                    <p className="light-text-2">If you have more questions about Mental health, feel free to contact our customer support team that will gladly answer any questions you may have about enhancing a goood mental</p>
                  </div>
                </div>

                <div className="pt-5">
                  <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep1}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5">How do I know if I need professional help for my mental health?</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={` dropdown-content  ${step1Dropdown ? "slide-in" : "slide-out"}`}>
                      <p className="ps-5 pt-4">If your emotions, thoughts, or behaviors are affecting your daily life, relationships, or ability to function, seeking help is a good idea. Even if you're unsure, talking to a mental health professional can provide clarity.</p>
                    </div>
                  </div>

                  <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep2}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5">   Are there free or low-cost mental health support options?</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={` dropdown-content  ${step2Dropdown ? "slide-in" : "slide-out"}`}>
                      <p className="ps-5 pt-4">Yes! Many hotlines, peer support groups, and community mental health programs offer free or affordable services. Some therapy providers also offer sliding-scale fees based on income.</p>
                    </div>
                  </div>

                  <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep3}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5"> Can I get help for someone else who is struggling?</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={` dropdown-content  ${step3Dropdown ? "slide-in" : "slide-out"}`}>
                      <p className="ps-5 pt-4">Yes! If you’re concerned about a loved one, encourage them to seek help and provide them with crisis hotline numbers. If they are in immediate danger, seek emergency assistance.</p>
                    </div>
                  </div>
                </div>

              </div>


            </section>







            <div>
              <HotLineDetails />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
     
}