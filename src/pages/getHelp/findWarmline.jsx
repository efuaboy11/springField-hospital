import { useContext, useState } from "react"
import { Header, Navbar } from "../../component/navbar"
import AuthContext from "../../context/AuthContext"
import '../../css/style.css'
import { Footer } from "../../component/footer"
import { Link } from "react-router-dom"

import warmline1 from '../../img/warmline1.jpg'
import warmline2 from '../../img/warmline2.jpg'
import warmline3 from '../../img/warmline3.jpg'
import warmline4 from '../../img/warmline4.jpg'
import warmline5 from '../../img/warmline5.jpg'
import why1  from '../../img/doctor-icon.png'
import why2 from '../../img/emergency-icon.png'
import why3 from '../../img/share-love-icon.png'
import why4 from '../../img/safe-earth-icon.png'
import features3 from '../../img/features3.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faRibbon } from "@fortawesome/free-solid-svg-icons"
import HotLineDetails from "../../component/hotlineDetails"
import WhyChooseUs from "../../component/whyChooseUs"

export const FindWarmline = () =>{
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
                    <p className="site-primary-text md-text font-bold">Find Warmline</p>
                    <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Help <i class="ri-arrow-right-fill"></i>Find Warmline</p>
                  </div>
                  
                </div>
              </div>
            </div>


            <section className="site-section-container">
              <div className="container-lg">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                    <div className="text-center">
                      <p className="site-header font-bold pb-3">Get a Listening Ear - No Judgement.</p>
                      <p className="light-text-2">Sometimes, you just need someone to talk to. Warmlines provide free, confidential, and non-judgmental support for individuals who need emotional support but are not in immediate crisis.
                        Whether you're feeling overwhelmed, stressed, or just need to be heard, trained peer supporters are available to listen and help.</p>
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
                <div className="row gx-4 gy-5">

                  <div className="col-12 d-block d-md-none">
                    <img width='100%' src={warmline1} alt="" />
                  </div> 

                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold pb-3"> What is a Warmline?</p>
                      <p className="light-text-2 italic-text py-2">A warmline is a mental health support service where individuals can talk to a trained peer who has lived experience with mental health challenges. Unlike crisis hotlines, warmlines are for non-emergency emotional support and can help with:</p> 

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Daily stress and emotional struggles</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">   Anxiety, depression, or feelings of loneliness</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Relationship or family concerns</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">   Connecting to mental health resources</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 d-none d-md-block">
                    <div>
                      <img width='100%' src={warmline1} alt="" />
                    </div>  
                  </div>


                  <div className="col-md-6">
                    <div>
                      <img width='100%' src={warmline2} alt="" />
                    </div>  
                  </div>

                  

                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold pb-3">When Should You Call a Warmline?</p>
                      <p className="light-text-2 italic-text py-2">You can call a warmline when:</p> 

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">You feel stressed, anxious, or overwhelmed</p>
                        </div>

                        <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  You need someone to talk to without judgment</p>
                        </div>

                        <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> You're struggling with emotional ups and downs</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">You're dealing with loss, isolation, or uncertainty</p>
                        </div>


                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">You need guidance on mental health resources</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> You want support from someone with similar experiences</p>
                        </div>
                       
                      </div>

                      <p className="light-text-2 italic-text"><span className="font-bold">Note: </span>If you are experiencing suicidal thoughts, self-harm urges, or a crisis, you should call a crisis hotline instead. Warmlines are for emotional support, not emergency intervention. For urgent situations, call 911 or a crisis helpline immediately.</p>
                    </div>
                  </div>


                  <div className="col-12 d-block d-md-none">
                    <img width='100%' src={warmline3} alt="" />
                  </div> 

                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold pb-3">How do Warmline Work</p>

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Step 1: Call or text the warmline of your choice.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Step 2: Talk to a trained peer who will listen and support you.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Step 3: Receive emotional support, encouragement, and helpful resources.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Step 4: Call back anytime you need ongoing support.</p>
                        </div>
                       
                      </div>

                      <p className="light-text-2 italic-text">Warmlines are a safe space to share your feelings without fear of judgment.</p>
                    </div>
                  </div>

                  <div className="col-md-6 d-none d-md-block">
                    <div>
                      <img width='100%' src={warmline3} alt="" />
                    </div>   
                  </div>


                  <div className="col-md-6">
                    <div>
                      <img width='100%' src={warmline4} alt="" />
                    </div>   
                  </div>


                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold pb-3"> Warmline Numbers & Resources</p>
                      <p className="font-bold"> National & International Warmlines</p>

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-phone-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">SAMHSA National Helpline (U.S.) – 1-800-662-HELP (4357)</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-phone-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Mental Health America Warmline Directory –  <Link to='https://www.mhanational.org/'>Find a warmline near you</Link></p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-phone-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Crisis Text Line (Global) – Text HOME to 741741</p>
                        </div>

                        <p className="font-bold pb-3"> Nigeria-Specific Warmlines</p>

                        <div className="d-flex pb-3">
                          <i class="ri-phone-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Nigeria Mental Health Support Line – 0909 555 2288</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-phone-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Nigeria Suicide Prevention Helpline – 0806 210 6493, 0803 200 0776</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-phone-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">She Writes Woman Mental Health Support – 0708 646 2943</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 d-block d-md-none">
                    <img width='100%' src={warmline5} alt="" />
                  </div> 


                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold pb-3"> Benefits of Using a Warmline</p>

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Emotional Relief – Talk about your feelings without pressure or judgment.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Peer Support – Speak with someone who understands mental health challenges.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">   Confidential & Anonymous – Share your struggles in a safe space.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">   Free or Low-Cost Help – Get support without financial burden.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Resource Guidance – Find local mental health services and programs.</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 d-none d-md-block">
                    <div>
                      <img width='100%' src={warmline5} alt="" />
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