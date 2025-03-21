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

export const Youth = () =>{
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
        <title>Youth Mental Health | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Explore mental health challenges affecting youth, early warning signs, and available support at Springfield Mental Health and Psychosocial Services." />
        <meta name="keywords" content="Youth Mental Health, Teen Mental Health, Adolescent Wellness, Depression in Teens, Mental Health Support, Springfield Psychosocial Services" />
        <meta property="og:title" content="Youth Mental Health | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Understand youth mental health issues, recognize warning signs, and explore resources for support and treatment." />
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
                    <p className="site-primary-text md-text font-bold">Youth Mental Health</p>
                    <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Information <i class="ri-arrow-right-fill"></i>Mental Health Condition <i class="ri-arrow-right-fill"></i>Youth Mental Health</p>
                  </div>
                  
                </div>
              </div>
            </div>

            <section className="site-section-container">
              <div className="container-lg">
                <div>
                  <div className="row">
                    <div className="col-md-7">
                      <p className="site-header pb-3">Youth Mental Health</p>
                      <p className="sm-text font-bold pb-2">What is Youth Mental Health?</p>
                      <p className="light-text-2 pb-4">Youth mental health refers to the emotional, psychological, and social well-being of young people, typically between the ages of 10 and 25. It affects how they think, feel, and behave, influencing their ability to handle stress, relate to others, and make decisions.</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2">  Early intervention can improve outcomes and prevent serious mental health issues later in life.</p>
                    </div>

                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2">Factors like family support, education, and community resources play a big role in mental health.</p>
                    </div>

                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2"> Untreated mental health conditions can affect school performance, relationships, and overall quality of life.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="get-information-youth">
              <div className="img">
                <div className="container-lg">
                <div className="pt-5 pb-4">
                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4 " onClick={toggleStep1}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Common Mental Health Issues in Youth</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step1Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Many young people experience temporary stress or sadness, but when these feelings persist, they may indicate a mental health condition. Some of the most common include:</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1. Anxiety Disorders</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Persistent worry, panic attacks, or social anxiety.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Can affect school performance and relationships.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">2.    Depression</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Feelings of sadness, hopelessness, or loss of interest in activities.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Can lead to withdrawal from friends and family.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3.  Attention-Deficit/Hyperactivity Disorder (ADHD)</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Difficulty focusing, impulsivity, and hyperactivity.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Can impact schoolwork and self-esteem.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">4.   Eating Disorders</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Obsession with food, body image, or weight.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Can result in severe physical health issues.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">4.  Self-Harm & Suicidal Thoughts</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Some youth engage in self-harm as a way to cope with emotional pain.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Suicide is a leading cause of death among young people—early intervention is critical.</p>
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep3}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Causes & Risk Factors of Youth Mental Health Issues</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step3Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Youth mental health is influenced by biological, psychological, and environmental factors.</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1.  Biological Factors</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Genetics: Family history of mental illness.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Hormonal Changes: Adolescence brings significant emotional shifts.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Brain Chemistry: Imbalances in neurotransmitters.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">2. Psychological Factors</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Low Self-Esteem: Constant self-doubt or negative self-talk.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Perfectionism: High expectations leading to anxiety and depression.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Emotional Trauma: Childhood abuse, neglect, or bullying.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3.  Environmental & Social Factors</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Academic Pressure: Stress from school and exams.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Family Conflicts: Divorce, neglect, or unhealthy home environments.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Social Media & Cyberbullying: Constant comparison and online harassment.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>


                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep4}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Warning Signs of Mental Health Struggles in Youth</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step4Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Parents, teachers, and friends should watch for behavioral and emotional changes that could indicate mental health struggles.</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1.  Emotional Signs</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Persistent sadness, mood swings, or irritability.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Feeling worthless, hopeless, or withdrawn.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">2.  Behavioral Signs</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Sudden drop in school performance or loss of interest in activities.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Changes in sleeping or eating habits.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Engaging in risky behaviors like substance abuse or self-harm.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3. Social Signs</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Avoiding friends and family.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Difficulty maintaining relationships or sudden social withdrawal.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>

                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep7}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">How to Support Youth Mental Health</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step7Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Supporting young people’s mental health requires understanding, compassion, and access to resources. Here’s how parents, teachers, and communities can help:</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1.   Encourage Open Conversations</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Create a safe space for young people to talk about their feelings.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Avoid judgment and validate their experiences.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">2.  Promote Healthy Coping Strategies</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Encourage exercise, mindfulness, and creative activities like journaling or music.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Teach stress management techniques such as deep breathing and meditation.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3.  Limit Social Media & Screen Time</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Excessive screen time can contribute to anxiety and depression.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Encourage in-person social interactions and hobbies.</p>
                              </div>
                            </div>

                            
                            <div className="pb-3">
                              <p className="font-bold sm-text">4.  Provide Professional Help When Needed</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> If a young person shows signs of distress, connect them with a counselor or therapist.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> School-based mental health programs can be helpful.</p>
                              </div>
                            </div>

                            
                            <div className="pb-3">
                              <p className="font-bold sm-text">5.  Support School Mental Health Programs</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Advocate for mental health education in schools.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Schools should provide counseling services and peer support groups.</p>
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
                      <p className="ps-5 sm-text">Frequently Asked Questions (FAQs) About  Youth Mental Health</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step6Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <p className="font-bold light-text"> </p>
                        <div className="light-text pt-4">
                            <div className="pb-3">
                              <p className="font-bold pb-3">Q1:  How do I know if my child is struggling with mental health issues?</p>
                              <p>Watch for changes in mood, behavior, and social interactions. If they seem persistently sad, anxious, or withdrawn, they may need professional help.</p>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold pb-3">Q2:   How can schools improve youth mental health?</p>
                              <p> Schools can provide counselors, mental health education, peer support groups, and stress management programs.</p>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold pb-3">Q3:  What can parents do to support their child’s mental health?</p>
                              <p> Listen without judgment, encourage open conversations, and seek professional support if needed.</p>
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