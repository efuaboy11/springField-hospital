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

export const SexualAssault  = () =>{
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
                    <p className="site-primary-text md-text font-bold"> Sexual Assault</p>
                    <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Information <i class="ri-arrow-right-fill"></i>Mental Health Condition <i class="ri-arrow-right-fill"></i> Sexual Assault</p>
                  </div>
                  
                </div>
              </div>
            </div>

            <section className="site-section-container">
              <div className="container-lg">
                <div>
                  <div className="row">
                    <div className="col-md-7">
                      <p className="site-header pb-3"> Sexual Assault</p>
                      <p className="sm-text font-bold pb-2">What is  Sexual Assault?</p>
                      <p className="light-text-2 pb-4">Sexual assault refers to any unwanted sexual act committed without consent. It can include:</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2">Rape or attempted rape</p>
                    </div>

                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2"> Unwanted sexual touching or groping</p>
                    </div>


                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2"> Sexual harassment</p>
                    </div>


                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2"> Sexual coercion or manipulation</p>
                    </div>

                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2"> Forced or non-consensual sexual acts</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="get-information-sexual-assault">
              <div className="img">
                <div className="container-lg">
                <div className="pt-5 pb-4">
                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4 " onClick={toggleStep1}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Mental Health Effects of Sexual Assault</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step1Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Survivors of sexual assault may experience long-term psychological effects. Common mental health impacts include:</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1.   Post-Traumatic Stress Disorder (PTSD)</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Flashbacks or intrusive memories of the assault</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Nightmares or difficulty sleeping</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Avoidance of places, people, or situations that trigger memories</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">2. Depression</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Persistent feelings of sadness or hopelessness</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Loss of interest in daily activities</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Fatigue, difficulty concentrating, or suicidal thoughts</p>
                              </div>


                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Withdrawal symptoms like irritability, insomnia, and mood swings.</p>
                              </div>

                          
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3. Anxiety & Panic Attacks</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Constant feelings of fear, nervousness, or worry</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Difficulty trusting others</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Hypervigilance and exaggerated startle response</p>
                              </div>

                          
                            </div>


                            <div className="pb-3">
                              <p className="font-bold sm-text">4. Guilt, Shame & Self-Blame</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Feeling responsible for the assault</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Difficulty accepting that the assault was not their fault</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Negative self-image and self-worth</p>
                              </div>

                          
                            </div>


                            <div className="pb-3">
                              <p className="font-bold sm-text">4. Substance Use & Self-Harm</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Using alcohol or drugs to numb emotional pain</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Self-injury as a coping mechanism</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Risky behaviors due to emotional distress</p>
                              </div>

                          
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep3}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">The Link Between Sexual Assault and Mental Health Disorders</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step3Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Sexual assault is a risk factor for developing mental health disorders. Survivors are at higher risk for:</p>

                          <div className="pt-4 light-text">
                           
                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">PTSD – Trauma-related symptoms that interfere with daily life.</p>
                            </div>

                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Depression & Suicidal Thoughts – Feelings of worthlessness, despair, and self-harm risk.</p>
                            </div>


                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Anxiety Disorders – Generalized anxiety, panic attacks, and social withdrawal.</p>
                            </div>


                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Dissociation & Memory Loss – Disconnection from reality, feeling detached from emotions.</p>
                            </div>

                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text"> Substance Use Disorder – Using drugs or alcohol to cope with trauma.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>


                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep4}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text"> Healing & Recovery: Coping with Trauma</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step4Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">The journey to healing after sexual assault is different for everyone. Survivors may find the following approaches helpful:</p>
                          <div className="pt-4 light-text">
                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Therapy & Counseling – Trauma-informed therapists can help process emotions.</p>
                            </div>

                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Support Groups – Connecting with others who have similar experiences can be empowering.</p>
                            </div>

                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Self-Care & Wellness Practices – Exercise, mindfulness, journaling, and creative outlets.</p>
                            </div>


                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Setting Boundaries – Taking control over interactions and personal space.</p>
                            </div>


                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Speaking Out & Advocacy – Raising awareness and supporting others.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>

                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep7}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">How to Support a Survivor of Sexual Assault</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step7Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">If someone you know has experienced sexual assault, here are ways to provide support:</p>

                          <div className="pt-4 light-text">
                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Listen Without Judgment – Allow them to share their feelings without pressure.</p>
                            </div>


                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Validate Their Experience – Assure them it was not their fault.</p>
                            </div>


                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text"> Respect Their Choices – Let them decide what steps to take next.</p>
                            </div>


                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text"> Encourage Professional Help – Offer resources without forcing them.</p>
                            </div>


                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text"> Be Patient & Available – Healing is a long process, and ongoing support is crucial.</p>
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
                        <p className="font-bold light-text"> Crisis Hotlines & Support Organizations</p>
                          <div className="light-text pt-4">
                              <div className="d-flex pb-2 align-center">
                                <i class="sm-text ri-check-line  pe-3 site-primary-text  font-bold"></i> 
                                <p className="pe-5"> RAINN (Rape, Abuse & Incest National Network) – <Link className="dark-link" to='https://rainn.org/' target="_blank">Visit Site</Link></p>
                                <i class="sm-text ri-phone-line  pe-3 site-primary-text  font-bold"></i> 
                                <p>1-800-656-4673</p>
                              </div>


                              <div className="d-flex pb-2 align-center">
                                <i class="sm-text ri-check-line  pe-3 site-primary-text  font-bold"></i> 
                                <p className="pe-5"> National Sexual Assault Hotline (U.S.)  –</p>
                                <i class="sm-text ri-phone-line  pe-3 site-primary-text  font-bold"></i> 
                                <p>1-800-656-4673</p>
                              </div>

                              <div className="d-flex pb-2 align-center">
                                <i class="sm-text ri-check-line  pe-3 site-primary-text  font-bold"></i> 
                                <p className="pe-5"> National Domestic Violence Hotline – <Link className="dark-link" to='https://www.thehotline.org/' target="_blank">Visit Site</Link></p>
                                <i class="sm-text ri-phone-line  pe-3 site-primary-text  font-bold"></i> 
                                <p>1-800-799-7233</p>
                              </div>



                              <div className="d-flex pb-2 align-center">
                                <i class="sm-text ri-check-line  pe-3 site-primary-text  font-bold"></i> 
                                <p className="pe-5"> Nigeria: WARIF (Women at Risk International Foundation) – <Link className="dark-link" to='https://warifng.org/' target="_blank">Visit Site</Link></p>
                                <i class="sm-text ri-phone-line  pe-3 site-primary-text  font-bold"></i> 
                                <p>+234 809 210 0009</p>
                              </div>

                              <div className="d-flex pb-2 align-center">
                                <i class="sm-text ri-check-line  pe-3 site-primary-text  font-bold"></i> 
                                <p className="pe-5"> Nigeria: Mirabel Centre (Sexual Assault Referral Centre)   –</p>
                                <i class="sm-text ri-phone-line  pe-3 site-primary-text  font-bold"></i> 
                                <p>0815 379 6962</p>
                              </div>

                            </div>
                      </div>
                    </div>
                    
                  </div>

                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep6}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Frequently Asked Questions (FAQs) About Sexual Assault & Mental Health</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step6Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <p className="font-bold light-text"> </p>
                        <div className="light-text pt-4">
                            <div className="pb-3">
                              <p className="font-bold pb-3">Q1:  How does sexual assault affect mental health?</p>
                              <p>Sexual assault can cause PTSD, depression, anxiety, and other emotional challenges. It can also impact self-esteem, relationships, and daily functioning.</p>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold pb-3">Q2:  Can therapy help with sexual assault trauma?</p>
                              <p>  Yes, trauma-focused therapy, such as Cognitive Behavioral Therapy (CBT) and Eye Movement Desensitization and Reprocessing (EMDR), can help survivors process and heal from trauma.</p>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold pb-3">Q3:  What should I do if someone confides in me about their assault?</p>
                              <p> Listen, believe them, and offer support. Do not pressure them to take action—respect their choices.</p>
                            </div>


                            <div className="pb-3">
                              <p className="font-bold pb-3">Q4:   Is it normal to feel guilty after an assault?</p>
                              <p> Yes, many survivors experience guilt and self-blame. However, the assault was not your fault, and healing involves recognizing that responsibility lies with the perpetrator.</p>
                            </div>


                            <div className="pb-3">
                              <p className="font-bold pb-3">Q5:   How can I seek help if I’m afraid to talk about my experience?</p>
                              <p> Confidential hotlines, online therapy, and support groups can offer help anonymously until you feel ready to open up.</p>
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