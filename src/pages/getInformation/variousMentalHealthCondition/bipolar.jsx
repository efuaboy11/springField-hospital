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

export const Bipolar = () =>{
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
        <title>Bipolar Disorder | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Learn about Bipolar Disorder, its symptoms, types, and treatment options at Springfield Mental Health and Psychosocial Services." />
        <meta name="keywords" content="Bipolar Disorder, Mood Swings, Manic Depression, Bipolar Symptoms, Mental Health Treatment, Springfield Psychosocial Services" />
        <meta property="og:title" content="Bipolar Disorder | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Understand Bipolar Disorder, its impact on mental health, and effective ways to manage it." />
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
                    <p className="site-primary-text md-text font-bold">Bipolar</p>
                    <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Information <i class="ri-arrow-right-fill"></i>Mental Health Condition <i class="ri-arrow-right-fill"></i>Bipolar</p>
                  </div>
                  
                </div>
              </div>
            </div>

            <section className="site-section-container">
              <div className="container-lg">
                <div>
                  <div className="row">
                    <div className="col-md-7">
                      <p className="site-header pb-3">Bipolar</p>
                      <p className="sm-text font-bold pb-2">What is Bipolar?</p>
                      <p className="light-text-2 pb-4">Bipolar disorder is a chronic mental illness that causes unpredictable changes in mood, energy, and activity levels. Individuals with bipolar disorder experience intense mood episodes that can last for days, weeks, or even months. <br /> <br />
                      Bipolar disorder is a chronic mental illness that causes unpredictable changes in mood, energy, and activity levels. Individuals with bipolar disorder experience intense mood episodes that can last for days, weeks, or even months.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="get-information-bipolar">
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
                          <p className="font-bold light-text">Bipolar disorder is a complex condition caused by multiple factors, including genetics, brain chemistry, and environmental triggers</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1. Genetic Factors:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Bipolar disorder tends to run in families.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  If a close relative has it, the risk of developing the disorder increases.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">2.  Brain Chemistry & Structure:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">   Imbalances in neurotransmitters (dopamine, serotonin) can contribute to mood swings.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Brain imaging studies show differences in the structure of brains with bipolar disorder.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3.  Environmental Triggers:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Stressful life events (e.g., trauma, abuse, financial crisis) can trigger mood episodes.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Substance abuse (alcohol, drugs) can worsen symptoms.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Lack of sleep can lead to manic or depressive episodes.</p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep2}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Types</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step2Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Bipolar disorder is classified into different types based on the severity and pattern of mood swings.</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1.  Bipolar I Disorder:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Characterized by full manic episodes that last at least 7 days or require hospitalization.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">   Depressive episodes usually follow, lasting at least 2 weeks.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Severe and disruptive to daily life.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">2. Bipolar II Disorder:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Involves hypomanic episodes (milder than full mania) and major depressive episodes.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">People with Bipolar II do not experience full-blown mania.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3. Cyclothymic Disorder (Cyclothymia):</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Chronic mood swings with mild hypomanic and depressive symptoms.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Symptoms are less severe than Bipolar I or II but persist for at least two years.</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">4. Rapid Cycling Bipolar Disorder:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Four or more mood episodes (mania, hypomania, or depression) within one year.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">More common in people who do not receive proper treatment.</p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>


                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep3}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Common Symptoms of Bipolar Disorder</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step3Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">The symptoms of bipolar disorder vary depending on whether a person is experiencing mania, hypomania, or depression.</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1. Symptoms of a Manic Episode:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Extreme happiness, euphoria, or feeling overly energetic</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Decreased need for sleep (sleeping only a few hours or not at all)</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Racing thoughts and rapid speech</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Increased impulsivity (risky spending, reckless driving, excessive gambling)</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Feeling invincible or having grandiose beliefs</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Easily distracted or jumping between tasks</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">2. Symptoms of a Hypomanic Episode:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">  Similar to mania but less severe</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Increased energy and activity</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Feeling more productive than usual</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">No major disruption in daily life</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3.  Symptoms of a Depressive Episode:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Intense sadness or hopelessness</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Fatigue and low energy</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Loss of interest in activities once enjoyed</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Sleep problems (insomnia or sleeping too much)</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Difficulty concentrating or making decisions</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Thoughts of self-harm or suicide</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">4. Rapid Cycling Bipolar Disorder:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Four or more mood episodes (mania, hypomania, or depression) within one year.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">More common in people who do not receive proper treatment.</p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>


                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep4}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Treatment Options for Bipolar Disorder</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step4Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Bipolar disorder requires long-term treatment, even when symptoms are not present.</p>

                          <div className="pt-4 light-text">
                            <div className="pb-3">
                              <p className="font-bold sm-text">1.  Medication</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Mood Stabilizers: Lithium, valproate, or carbamazepine to prevent mood swings.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Antipsychotic Medications: Olanzapine, risperidone, or quetiapine for severe mood episodes.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Antidepressants (with caution): Used for depression but may trigger mania if not combined with a mood stabilizer.</p>
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
                                <p className="light-text">Psychoeducation: Teaches coping strategies and helps individuals understand their condition.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Family Therapy: Involves loved ones to improve support systems. </p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">No major disruption in daily life</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">3.  Symptoms of a Depressive Episode:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Intense sadness or hopelessness</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Fatigue and low energy</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Loss of interest in activities once enjoyed</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Sleep problems (insomnia or sleeping too much)</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Difficulty concentrating or making decisions</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">Thoughts of self-harm or suicide</p>
                              </div>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold sm-text">4. Rapid Cycling Bipolar Disorder:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text"> Four or more mood episodes (mania, hypomania, or depression) within one year.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text">More common in people who do not receive proper treatment.</p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>

                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep7}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">How is Bipolar Disorder Diagnosed?</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step7Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">A mental health professional diagnoses bipolar disorder through:</p>

                          <div className="pt-4">
                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">  Clinical evaluation and medical history</p>
                            </div>

                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text"> Mood charts to track patterns of highs and lows</p>
                            </div>


                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Psychological assessments to rule out other conditions</p>
                            </div>

                            <p className="light-text">Since bipolar disorder shares symptoms with depression and other mental illnesses, misdiagnosis is common. Seeking the right medical evaluation is crucial.</p>

                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>

                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep8}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Coping Strategies for Bipolar Disorder</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step8Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <div>
                          <p className="font-bold light-text">Living with bipolar disorder requires effective management techniques:</p>

                          <div className="pt-4">
                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Track your moods to recognize triggers and patterns.</p>
                            </div>

                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Stick to a treatment plan (medications and therapy).</p>
                            </div>


                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text">Create a support network of family, friends, or support groups.</p>
                            </div>

                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text"> Develop healthy routines to maintain stability.</p>
                            </div>

                            <div className="d-flex pb-2">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text"> Educate yourself about the disorder for better self-awareness.</p>
                            </div>

                            <p className="light-text">Since bipolar disorder shares symptoms with depression and other mental illnesses, misdiagnosis is common. Seeking the right medical evaluation is crucial.</p>

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
                      <p className="ps-5 sm-text">Frequently Asked Questions (FAQs) About Bipolar Disorder</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step6Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <p className="font-bold light-text"> </p>
                        <div className="light-text pt-4">
                            <div className="pb-3">
                              <p className="font-bold pb-3">Q1: Can bipolar disorder be cured?</p>
                              <p> No, bipolar disorder is a lifelong condition, but it can be managed with treatment.</p>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold pb-3">Q2: Can someone with bipolar disorder live a normal life?</p>
                              <p>Yes! With proper medication, therapy, and lifestyle management, individuals with bipolar disorder can live stable, fulfilling lives.</p>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold pb-3">Q3: What triggers a bipolar episode?</p>
                              <p>Lack of sleep, stress, substance abuse, and skipping medication can trigger mood episodes.</p>
                            </div>


                            <div className="pb-3">
                              <p className="font-bold pb-3">Q4: How is bipolar disorder different from depression?</p>
                              <p>Unlike depression, bipolar disorder includes both manic/hypomanic and depressive episodes.</p>
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