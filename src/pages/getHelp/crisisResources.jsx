import { useContext, useState } from "react"
import { Header, Navbar } from "../../component/navbar"
import AuthContext from "../../context/AuthContext"
import '../../css/style.css'
import { Footer } from "../../component/footer"
import { Link } from "react-router-dom"

import crisis1 from '../../img/crisis1.jpg'
import crisis2 from '../../img/crisis2.jpg'
import crisis3 from '../../img/crisis3.jpg'
import crisis4 from '../../img/crisis4.jpg'
import crisis5 from '../../img/crisis5.jpg'
import crisis6 from '../../img/crisis6.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRibbon } from "@fortawesome/free-solid-svg-icons"
import HotLineDetails from "../../component/hotlineDetails"
import { Helmet } from "react-helmet-async"

export const CrisisResources = () =>{
  const { 
    OnbodyClick, 
    navOverlay,

  } = useContext(AuthContext)

  return(
    <div>
      <Helmet>
        <title>Crisis Resources | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Find immediate support and crisis resources for mental health emergencies at Springfield Mental Health and Psychosocial Services." />
        <meta name="keywords" content="Crisis Resources, Mental Health Emergency, Suicide Prevention, Helplines, Mental Health Support, Springfield Psychosocial Services" />
        <meta property="og:title" content="Crisis Resources | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Access urgent mental health crisis resources, helplines, and support services for individuals in need." />
      </Helmet>

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
                    <p className="site-primary-text md-text font-bold">Crisis Resources</p>
                    <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Help <i class="ri-arrow-right-fill"></i>Crisis Resources</p>
                  </div>
                  
                </div>
              </div>
            </div>


            <section className="site-section-container">
              <div className="container-lg">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                    <div className="text-center">
                      <p className="site-header font-bold">You Are Not Alone – Get Immediate Help</p>
                      <p className="light-text-2">If you or someone you know is in distress, experiencing a crisis, or struggling with mental health challenges, help is available. Reach out to professional support services that can provide guidance, emotional support, and immediate assistance.</p>
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
                    <img width='100%' src={crisis1} alt="" />
                  </div> 

                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold"> Immediate Crisis Support – What to Do in an Emergency</p>
                      <p className="light-text-2 italic-text">If you are in danger or experiencing a severe mental health crisis, take the following steps:</p> 

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Call for Emergency Help: Dial 112 or 199 (Nigeria Police Emergency Line) if you or someone else is at risk of harm.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Reach a Crisis Hotline: Contact 0809 111 6264 (Mentally Aware Nigeria Initiative) for confidential mental health support.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Go to a Hospital or Clinic: Visit the nearest psychiatric hospital or mental health center for urgent care.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Stay with Someone Safe: If you are in distress, reach out to a trusted friend, family member, or counselor for immediate support.</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 d-none d-md-block">
                    <div>
                      <img width='100%' src={crisis1} alt="" />
                    </div>  
                  </div>


                  <div className="col-md-6">
                    <div>
                      <img width='100%' src={crisis2} alt="" />
                    </div>  
                  </div>

                  

                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold">  Understanding a Mental Health Crisis</p>
                      <p className="light-text-2 italic-text">A mental health crisis is when a person is struggling with severe distress and may feel unable to cope. Signs of a crisis include:</p> 

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-circle-fill pe-3 failed-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Suicidal thoughts or self-harm</p>
                        </div>

                        <div className="d-flex pb-3">
                        <i class="ri-circle-fill pe-3 failed-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Severe panic attacks or emotional breakdowns</p>
                        </div>

                        <div className="d-flex pb-3">
                        <i class="ri-circle-fill pe-3 failed-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Hearing voices or experiencing hallucinations</p>
                        </div>

                        <div className="d-flex pb-3">
                        <i class="ri-circle-fill pe-3 failed-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Feeling out of control, aggressive, or hopeless</p>
                        </div>

                        <div className="d-flex pb-3">
                        <i class="ri-circle-fill pe-3 failed-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Substance overdose or withdrawal symptoms</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-12 d-block d-md-none">
                    <img width='100%' src={crisis3} alt="" />
                  </div> 

                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold">  Self-Help Resources for Coping with a Crisis</p>
                      <p className="light-text-2 italic-text">While professional help is essential, here are things you can do right now to manage a mental health crisis:</p> 

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Deep Breathing & Grounding Techniques – Take slow, deep breaths and focus on your surroundings. Try the 5-4-3-2-1 technique: Name 5 things you see, 4 you touch, 3 you hear, 2 you smell, and 1 you taste.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Journaling Your Thoughts – Writing down how you feel can help process emotions.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Listening to Calming Music or Guided Meditation – Apps like Calm, Headspace, and YouTube provide guided relaxation exercises.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Exercise or Movement – A short walk, stretching, or yoga can help reduce stress.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Talking to Someone You Trust – Call a friend, family member, or support group for comfort.</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 d-none d-md-block">
                    <div>
                      <img width='100%' src={crisis3} alt="" />
                    </div>   
                  </div>


                  <div className="col-md-6">
                    <div>
                      <img width='100%' src={crisis4} alt="" />
                    </div>   
                  </div>


                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold">   Support for Friends & Family of Someone in Crisis</p>
                      <p className="light-text-2 italic-text">If someone you care about is struggling with a mental health crisis, here’s how you can help:</p> 

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-circle-fill pe-3 sucessfull-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Listen without judgment – Allow them to talk openly about their feelings.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-circle-fill pe-3 sucessfull-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Encourage professional help – Offer to help them find a therapist or crisis service.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-circle-fill pe-3 sucessfull-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Avoid phrases like “Just snap out of it” – Instead, say, “I’m here for you, and we’ll get through this together.”</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-circle-fill pe-3 sucessfull-text sm-text font-bold"></i> 
                          <p className="light-text-2">   Stay with them if they are at immediate risk – Do not leave them alone if they express suicidal thoughts.</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-12 d-block d-md-none">
                    <img width='100%' src={crisis5} alt="" />
                  </div> 


                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold"> Crisis Support for Low-Income Individuals</p>
                      <p className="light-text-2 italic-text">Mental health care should be affordable and accessible to everyone. If financial constraints are preventing you from seeking help, consider:</p> 

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-circle-fill pe-3 site-primary-text  sm-text font-bold"></i> 
                          <p className="light-text-2"> Government Hospitals & Clinics – Many offer low-cost or free counseling services.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-circle-fill pe-3 site-primary-text  sm-text font-bold"></i> 
                          <p className="light-text-2">  University Psychology Departments – Some universities offer therapy by supervised students.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-circle-fill pe-3 site-primary-text  sm-text font-bold"></i> 
                          <p className="light-text-2">  Faith-Based & Community Groups – Churches, mosques, and NGOs often provide free support.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-circle-fill pe-3 site-primary-text  sm-text font-bold"></i> 
                          <p className="light-text-2"> Online Mental Health Forums – Free peer support communities like Reddit’s r/mentalhealth or The Mighty.</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 d-none d-md-block">
                    <div>
                      <img width='100%' src={crisis5} alt="" />
                    </div>  
                  </div>

                  <div className="col-md-6">
                    <div>
                      <img width='100%' src={crisis6} alt="" />
                    </div>  
                  </div>


                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold"> Awareness & Advocacy – Ending the Stigma</p>
                      <p className="light-text-2 italic-text">Mental health struggles are not a weakness. By spreading awareness, we can create a society where everyone feels safe seeking help. Join us in:</p> 

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <FontAwesomeIcon className="pe-3  sm-text font-bold sucessfull-text" icon={faRibbon}/> 
                          <p className="light-text-2">  Educating others about mental health myths vs. facts</p>
                        </div>

                        <div className="d-flex pb-3">
                          <FontAwesomeIcon className="pe-3  sm-text font-bold sucessfull-text" icon={faRibbon}/> 
                          <p className="light-text-2">  Encouraging open conversations about emotional well-being</p>
                        </div>

                        <div className="d-flex pb-3">
                          <FontAwesomeIcon className="pe-3  sm-text font-bold sucessfull-text" icon={faRibbon}/> 
                          <p className="light-text-2">Encouraging open conversations about emotional well-being</p>
                        </div>
                       
                      </div>
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