import { useContext, useState } from "react"
import { Header, Navbar } from "../../../component/navbar"
import AuthContext from "../../../context/AuthContext"
import '../../../css/style.css'
import { Footer } from "../../../component/footer"
import { Link } from "react-router-dom"
import '../../../css/informationCss/getInformation.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faRibbon } from "@fortawesome/free-solid-svg-icons"
import HotLineDetails from "../../../component/hotlineDetails"
import { Helmet } from "react-helmet-async"

export const Psychosis = () =>{
  const { 
    OnbodyClick, 
    navOverlay,

  } = useContext(AuthContext)

  const [step1Dropdown, setStep1Dropdown] = useState(false)
  const [step2Dropdown, setStep2Dropdown] = useState(false)
  const [step3Dropdown, setStep3Dropdown] = useState(false)
  const [step4Dropdown, setStep4Dropdown] = useState(false)
  const [step5Dropdown, setStep5Dropdown] = useState(false)
  const [step6Dropdown, setStep6Dropdown] = useState(false)
  const [step7Dropdown, setStep7Dropdown] = useState(false)
  const [step8Dropdown, setStep8Dropdown] = useState(false)


  const toggleStep1 = () =>{
    setStep1Dropdown(!step1Dropdown)
    setStep2Dropdown(false)
    setStep3Dropdown(false)
    setStep4Dropdown(false)
    setStep5Dropdown(false)
    setStep6Dropdown(false)
    setStep7Dropdown(false)
    setStep8Dropdown(false)

    
  }

  const toggleStep2 = () =>{
    setStep2Dropdown(!step2Dropdown)
    setStep1Dropdown(false)
    setStep3Dropdown(false)
    setStep4Dropdown(false)
    setStep5Dropdown(false)
    setStep6Dropdown(false)
    setStep7Dropdown(false)
    setStep8Dropdown(false)

  }

  const toggleStep3 = () =>{
    setStep3Dropdown(!step3Dropdown)
    setStep1Dropdown(false)
    setStep2Dropdown(false)
    setStep4Dropdown(false)
    setStep5Dropdown(false)
    setStep6Dropdown(false)
    setStep7Dropdown(false)
    setStep8Dropdown(false)
  }


  const toggleStep4 = () =>{
    setStep4Dropdown(!step4Dropdown)
    setStep1Dropdown(false)
    setStep2Dropdown(false)
    setStep3Dropdown(false)
    setStep5Dropdown(false)
    setStep6Dropdown(false)
    setStep7Dropdown(false)
    setStep8Dropdown(false)
  }

  const toggleStep5 = () =>{
    setStep5Dropdown(!step5Dropdown)
    setStep1Dropdown(false)
    setStep2Dropdown(false)
    setStep4Dropdown(false)
    setStep3Dropdown(false)
    setStep6Dropdown(false)
    setStep7Dropdown(false)
    setStep8Dropdown(false)
  }

  const toggleStep6 = () =>{
    setStep6Dropdown(!step6Dropdown)
    setStep1Dropdown(false)
    setStep2Dropdown(false)
    setStep4Dropdown(false)
    setStep5Dropdown(false)
    setStep3Dropdown(false)
    setStep7Dropdown(false)
    setStep8Dropdown(false)
  }

  const toggleStep7 = () =>{
    setStep7Dropdown(!step7Dropdown)
    setStep1Dropdown(false)
    setStep2Dropdown(false)
    setStep4Dropdown(false)
    setStep5Dropdown(false)
    setStep3Dropdown(false)
    setStep6Dropdown(false)
    setStep8Dropdown(false)
  }

  const toggleStep8 = () =>{
    setStep8Dropdown(!step8Dropdown)
    setStep1Dropdown(false)
    setStep2Dropdown(false)
    setStep4Dropdown(false)
    setStep5Dropdown(false)
    setStep3Dropdown(false)
    setStep6Dropdown(false)
    setStep7Dropdown(false)
  }

  return(
    <div>
      <Helmet>
        <title>Psychosis | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Learn about psychosis, its symptoms, causes, and treatment options at Springfield Mental Health and Psychosocial Services." />
        <meta name="keywords" content="Psychosis, Hallucinations, Delusions, Schizophrenia, Mental Health, Therapy for Psychosis, Springfield Psychosocial Services" />
        <meta property="og:title" content="Psychosis | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Understand psychosis, its impact on mental health, and explore effective management and treatment options." />
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
                    <p className="site-primary-text md-text font-bold">Psychosis</p>
                    <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Information <i class="ri-arrow-right-fill"></i>Mental Health Condition <i class="ri-arrow-right-fill"></i>Psychosis</p>
                  </div>
                  
                </div>
              </div>
            </div>

            <section className="site-section-container">
              <div className="container-lg">
                <div>
                  <div className="row">
                    <div className="col-md-7">
                      <p className="site-header pb-3">Psychosis</p>
                      <p className="sm-text font-bold pb-2">What is Psychosis?</p>
                      <p className="light-text-2 pb-4">Psychosis is a condition where a person loses touch with reality and has difficulty distinguishing what is real from what is not. It is not a disorder on its own but rather a symptom of an underlying condition.</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2"> Hallucinations – Seeing, hearing, or feeling things that are not real.</p>
                    </div>

                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2">Delusions – Strong, false beliefs that persist despite evidence against them.</p>
                    </div>

                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2">Disorganized Thinking & Speech – Difficulty organizing thoughts, jumping between unrelated topics.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="get-information-psychosis">
              <div className="img">
                <div className="container-lg">
                <div className="pt-5 pb-4">
                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4 " onClick={toggleStep1}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Causes</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step1Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Psychosis can be caused by biological, psychological, and environmental factors:</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1. Mental Health Conditions:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Schizophrenia – A severe disorder that includes persistent psychotic symptoms.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Bipolar Disorder – During manic or depressive episodes, some individuals experience psychosis.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Severe Depression (Psychotic Depression) – In rare cases, depression can cause hallucinations or delusions.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">2. Medical & Neurological Conditions:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Brain injuries, epilepsy, or stroke.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Dementia (e.g., Alzheimer’s disease).</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Infections that affect the brain (e.g., HIV, syphilis).</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3.   Substance Use & Withdrawal:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Drugs like cannabis, LSD, cocaine, methamphetamine, or alcohol abuse.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Withdrawal from alcohol or certain medications.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">4.   Substance Use & Withdrawal:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Severe emotional distress or PTSD.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Childhood abuse or neglect.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Loss of a loved one or major life changes.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">5.   Genetic & Brain Chemistry Factors:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Family history of psychosis or mental illness.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Imbalances in dopamine and serotonin, affecting brain function</p>
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep3}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Common Symptoms of Psychosis</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step3Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">The symptoms of psychosis can vary but typically include:</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1.  Hallucinations:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Hearing voices that others don’t hear.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Seeing people, objects, or lights that are not real.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Feeling sensations that have no physical cause.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">2. Delusions:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Believing in false ideas (e.g., thinking someone is spying on them).</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Feeling detached from reality (derealization).</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Believing they are being controlled by an external force.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3.  Disorganized Thinking & Behavior:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Talking in a way that doesn’t make sense to others.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Jumping between unrelated thoughts and ideas.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Withdrawing from social activities and struggling to complete tasks.</p>
                              </div>
                            </div>


                            <div className="pb-3">
                              <p className="font-bold sm-text">4.   Mood & Emotional Changes:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Extreme suspicion or paranoia.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Feeling emotionally detached or flat.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>


                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep4}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Treatment Options for Psychosis</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step4Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Early treatment is key to managing psychosis and preventing worsening symptoms.</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1.  Medication</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Antipsychotics: Help reduce hallucinations, delusions, and disorganized thinking.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Mood Stabilizers: Used in cases related to bipolar disorder.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Antidepressants: If psychosis is linked to severe depression.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">2. Psychotherapy (Talk Therapy)</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">   Cognitive Behavioral Therapy (CBT): Helps manage negative thoughts and behaviors.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Exposure Therapy: Gradual exposure to feared situations reduces avoidance behavior.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3. Lifestyle Changes & Self-Care:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">   Regular exercise (yoga, walking, jogging) to manage stress.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Breathing exercises and mindfulness techniques.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Limiting caffeine, alcohol, and stimulants that trigger panic attacks.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Getting enough sleep to regulate emotional balance.</p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>

                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep7}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">When to Seek Help for Panic Psychosis?</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step7Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Seek immediate medical help if you or someone you know:</p>

                          <div className="pt-4">
                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Has frequent hallucinations or delusions.</p>
                            </div>

                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Shows signs of paranoia or extreme confusion.</p>
                            </div>


                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text"><p className="light-text">Feels disconnected from reality.</p>                              </p>
                            </div>

                            
                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">  Talks about harming themselves or others (emergency intervention needed).</p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>

                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep8}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text"> Coping Strategies for Psychosis</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step8Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>

                          <div className="pt-4">
                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Stay Connected: Talk to trusted family or friends about your experiences.</p>
                            </div>

                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Follow Medication & Therapy Plans: Stopping medication abruptly can lead to relapses.</p>
                            </div>

                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text"> Keep a Journal: Track symptoms, triggers, and progress.</p>
                            </div>


                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Use Reality-Checking Strategies: Ask a trusted person if they experience the same things.</p>
                            </div>

                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Avoid Isolation: Engage in community activities and hobbies.</p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>


                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep5}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Helplines & Resources</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step5Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <p className="font-bold light-text"> Nigeria Depression Helplines</p>
                          <div className="light-text pt-4">
                              <div className="d-flex pb-2">
                                <i class="ri-phone-line sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> Nigeria Suicide Prevention Helpline: 0806 210 6493, 0803 200 0776</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-phone-line sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> Nigeria Mental Health Support Line: 0909 555 2288</p>
                              </div>


                              <div className="d-flex pb-2">
                                <i class="ri-phone-line sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> She Writes Woman Mental Health Support: 0708 646 2943</p>
                              </div>

                              <p className="font-bold pb-2">Global Helplines</p>
                              <div className="d-flex pb-2">
                                <i class="ri-phone-line sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Crisis Text Line (Global): Text HOME to 741741</p>
                              </div>

                              <div className="d-flex pb-3">
                                <i class="ri-phone-line sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Samaritans Helpline (UK): 116 123</p>
                              </div>

                              

                              <div className="d-flex pb-2">
                                <i class="ri-phone-line sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> National Suicide Prevention Lifeline (U.S.): 988</p>
                              </div>

                            </div>
                      </div>
                    </div>
                    
                  </div>

                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep6}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Frequently Asked Questions (FAQs) About  Psychosis</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step6Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <p className="font-bold light-text"> </p>
                        <div className="light-text pt-4">
                            <div className="pb-3">
                              <p className="font-bold pb-3">Q1: Is psychosis the same as schizophrenia?</p>
                              <p>Without treatment, No. Psychosis is a symptom, while schizophrenia is a mental disorder that includes psychotic symptoms.</p>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold pb-3">Q2: Can drug use cause psychosis?</p>
                              <p>Yes. Certain substances like cannabis, LSD, or methamphetamine can trigger psychotic episodes.</p>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold pb-3">Q3:  Can psychosis be cured?</p>
                              <p>Psychosis can be managed effectively with medication, therapy, and support, but some people may experience recurring episodes.</p>
                            </div>
                            

                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
                </div>
                

              </div>
            </section>


            <section>
              <HotLineDetails/>
            </section>

          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
     
}