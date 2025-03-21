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

export const OldAdult = () =>{
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
        <title>Older Adults' Mental Health | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Explore mental health challenges, support, and wellness strategies for older adults at Springfield Mental Health and Psychosocial Services." />
        <meta name="keywords" content="Older Adults Mental Health, Senior Mental Health, Aging and Mental Wellness, Depression in Seniors, Cognitive Health, Springfield Psychosocial Services" />
        <meta property="og:title" content="Older Adults' Mental Health | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Learn about mental health issues affecting older adults and discover resources for support and care." />
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
                    <p className="site-primary-text md-text font-bold">Older Adult Mental Health</p>
                    <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Information <i class="ri-arrow-right-fill"></i>Mental Health Condition <i class="ri-arrow-right-fill"></i>Older Adult Mental Health</p>
                  </div>
                  
                </div>
              </div>
            </div>

            <section className="site-section-container">
              <div className="container-lg">
                <div>
                  <div className="row">
                    <div className="col-md-7">
                      <p className="site-header pb-3">Older Adult Mental Health</p>
                      <p className="sm-text font-bold pb-2"> What Is Older Adult Mental Health?</p>
                      <p className="light-text-2 pb-4">Older adult mental health refers to the emotional, psychological, and cognitive well-being of individuals aged 60 and above. Aging comes with unique challenges, such as retirement, loss of loved ones, chronic illnesses, and social isolation, which can affect mental health.</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2"> Good mental health supports healthy aging, physical health, and longevity.</p>
                    </div>

                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2">Depression and anxiety are common but often overlooked in older adults.</p>
                    </div>

                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2"> With proper care, mental health challenges can be managed effectively.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="get-information-old">
              <div className="img">
                <div className="container-lg">
                <div className="pt-5 pb-4">
                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4 " onClick={toggleStep1}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Common Mental Health Issues in Older Adults</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step1Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Many older adults experience emotional distress, but when symptoms persist, they may indicate a mental health condition. Some of the most common include:</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1. Depression</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Persistent sadness, fatigue, and loss of interest in activities.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Often misdiagnosed as a normal part of aging.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">2.    Anxiety Disorders</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Constant worry, fear, or panic attacks.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Can lead to sleep disturbances and physical health issues.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3.  Dementia & Cognitive Decline</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Memory loss, confusion, and difficulty making decisions.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Includes Alzheimer’s disease and other types of dementia.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">4.  Social Isolation & Loneliness</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Loss of social connections can lead to depression.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Linked to a higher risk of cognitive decline.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">4. Substance Use Disorders</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Misuse of alcohol or prescription medications.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Can be overlooked due to aging-related health conditions.</p>
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep3}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Causes & Risk Factors of Mental Health Issues in Older Adults</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step3Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Mental health challenges in older adults arise from biological, psychological, and social factors.</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1.  Biological Factors</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Brain Chemistry: Changes in neurotransmitters can affect mood.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Chronic Illnesses: Conditions like diabetes, heart disease, and arthritis increase depression risk.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Medication Side Effects: Some drugs can contribute to mood swings or confusion.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">2. Psychological Factors</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Grief & Loss: Losing a spouse, friends, or independence can trigger depression.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Cognitive Decline: Memory problems and dementia affect mental health.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> History of Mental Illness: Pre-existing conditions may worsen with age.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3.  Social & Environmental Factors</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Retirement & Financial Stress: Losing work identity and financial stability can be distressing.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Loneliness & Social Isolation: Limited social interaction increases depression risk.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Caregiver Stress: Taking care of a spouse or family member can lead to emotional burnout.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>


                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep4}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text"> Warning Signs of Mental Health Struggles in Older Adults</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step4Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Mental health conditions in older adults are often overlooked or mistaken for normal aging. Here are some warning signs to watch for:</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1.  Emotional Signs</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Frequent sadness, mood swings, or irritability.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Increased feelings of helplessness or worthlessness.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">2.  Behavioral Signs</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Withdrawal from social activities and loved ones.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Neglecting personal hygiene or self-care.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Changes in appetite or sleeping patterns.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3. Cognitive Signs</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Memory loss, confusion, or difficulty concentrating.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Increased forgetfulness or inability to complete daily tasks.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>

                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep7}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">How to Support Older Adult Mental Health</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step7Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Supporting mental health in older adults requires awareness, compassion, and access to resources.</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1.   Encourage Social Connections</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Help older adults stay connected with family and friends.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Encourage participation in community activities and senior centers.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">2.  Promote Physical Activity</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Exercise boosts mood, reduces stress, and improves brain function.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Walking, yoga, or swimming can be beneficial.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3.  Provide Mental Stimulation</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Encourage puzzles, reading, and lifelong learning to keep the mind active.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Music, art, and hobbies can improve emotional well-being.</p>
                              </div>
                            </div>

                            
                            <div className="pb-3">
                              <p className="font-bold sm-text">4.  Address Physical Health</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Regular medical check-ups to manage chronic conditions.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Monitor medications for side effects impacting mental health.</p>
                              </div>
                            </div>

                            
                            <div className="pb-3">
                              <p className="font-bold sm-text">5.  Seek Professional Help When Needed</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Therapy and counseling can provide emotional support.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Medications may help with depression and anxiety if prescribed by a doctor.</p>
                              </div>
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
                      <p className="ps-5 sm-text">Frequently Asked Questions (FAQs) About Older Adult Mental Health</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step6Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <p className="font-bold light-text"> </p>
                        <div className="light-text pt-4">
                            <div className="pb-3">
                              <p className="font-bold pb-3">Q1:  Is depression a normal part of aging?</p>
                              <p>No, depression is not a normal part of aging. It is a medical condition that can be treated with therapy, medication, and lifestyle changes.</p>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold pb-3">Q2:  How can I help an older loved one with mental health issues?</p>
                              <p>Encourage open conversations, help them stay socially active, and seek professional support if needed.</p>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold pb-3">Q3:  What role does social interaction play in mental health for seniors?</p>
                              <p> Strong social connections reduce feelings of loneliness and improve overall mental health.</p>
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