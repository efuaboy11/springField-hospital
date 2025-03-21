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

export const Depression = () =>{
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


  const toggleStep1 = () =>{
    setStep1Dropdown(!step1Dropdown)
    setStep2Dropdown(false)
    setStep3Dropdown(false)
    setStep4Dropdown(false)
    setStep5Dropdown(false)
    setStep6Dropdown(false)

    
  }

  const toggleStep2 = () =>{
    setStep2Dropdown(!step2Dropdown)
    setStep1Dropdown(false)
    setStep3Dropdown(false)
    setStep4Dropdown(false)
    setStep5Dropdown(false)
    setStep6Dropdown(false)

  }

  const toggleStep3 = () =>{
    setStep3Dropdown(!step3Dropdown)
    setStep1Dropdown(false)
    setStep2Dropdown(false)
    setStep4Dropdown(false)
    setStep5Dropdown(false)
    setStep6Dropdown(false)

  }


  const toggleStep4 = () =>{
    setStep4Dropdown(!step4Dropdown)
    setStep1Dropdown(false)
    setStep2Dropdown(false)
    setStep3Dropdown(false)
    setStep5Dropdown(false)
    setStep6Dropdown(false)

  }

  const toggleStep5 = () =>{
    setStep5Dropdown(!step5Dropdown)
    setStep1Dropdown(false)
    setStep2Dropdown(false)
    setStep4Dropdown(false)
    setStep3Dropdown(false)
    setStep6Dropdown(false)

  }

  const toggleStep6 = () =>{
    setStep6Dropdown(!step6Dropdown)
    setStep1Dropdown(false)
    setStep2Dropdown(false)
    setStep4Dropdown(false)
    setStep5Dropdown(false)
    setStep3Dropdown(false)

  }

  return(
    <div>
      <Helmet>
        <title>Depression | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Learn about depression, its symptoms, causes, and treatment options at Springfield Mental Health and Psychosocial Services." />
        <meta name="keywords" content="Depression, Major Depressive Disorder, Depression Symptoms, Mental Health, Therapy for Depression, Springfield Psychosocial Services" />
        <meta property="og:title" content="Depression | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Understand depression, its impact on mental health, and effective ways to manage and treat it." />
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
                    <p className="site-primary-text md-text font-bold">Depression</p>
                    <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Information <i class="ri-arrow-right-fill"></i>Mental Health Condition <i class="ri-arrow-right-fill"></i>Depression</p>
                  </div>
                  
                </div>
              </div>
            </div>

            <section className="site-section-container">
              <div className="container-lg">
                <div>
                  <div className="row">
                    <div className="col-md-7">
                      <p className="site-header pb-3"> Understanding Depression</p>
                      <p className="sm-text font-bold pb-2">What is Depression?</p>
                      <p className="light-text-2 pb-4">Depression is a serious mental health condition that affects mood, thoughts, and daily life. It is more than just feeling sad—it can cause persistent feelings of emptiness, hopelessness, and loss of interest in activities once enjoyed.</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2"> Common but Treatable</p>
                    </div>

                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2">Affects People of All Ages</p>
                    </div>

                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2">Can Impact Work, Relationships, and Daily Life</p>
                    </div>

                    <div className="d-flex pb-2">
                      <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                      <p className="light-text-2">Support and Treatment Are Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <div className="get-information-depression">
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
                        <p className="font-bold light-text">Depression is a complex mental health condition that can arise due to a combination of biological, psychological, and environmental factors. While some individuals may develop depression due to one primary cause, for many, multiple factors interact to trigger and sustain depressive episodes.</p>
                        <div className="pt-4">
                          <div className="pb-4">
                            <h4>1. Genetics & Family History</h4>
                            <p className="pt-3 light-text">Depression tends to run in families, suggesting a genetic link. Individuals with a parent, sibling, or close relative who has experienced depression may have a higher risk of developing the condition themselves. However, genetics alone do not determine whether someone will experience depression—environmental and psychological factors also play a significant role.</p>
                            <div className="light-text pt-4">
                              <p className="font-bold pb-3">Why does this happen?</p>
                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> Certain gene variations may make some people more vulnerable to depression.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Having a family history does not guarantee depression but increases susceptibility.</p>
                              </div>
                            </div>
                          </div>


                          <div className="pb-4">
                            <h4>2. Genetics & Family History</h4>
                            <div className="light-text pt-4">
                              <p className="font-bold pb-3">The human brain relies on neurotransmitters—chemical messengers—to regulate mood and emotions. <br /> The key neurotransmitters involved in depression include:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> Serotonin: Helps regulate mood, sleep, and appetite. Low levels are linked to feelings of sadness and anxiety.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Dopamine: Involved in motivation and pleasure. Deficiencies may cause lack of interest or joy.</p>
                              </div>


                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Norepinephrine: Influences stress response and alertness. Imbalances can contribute to fatigue and mood instability.</p>
                              </div>

                              <p className="font-bold pb-2">Why does this happen?</p>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>A deficiency or imbalance in these neurotransmitters can lead to mood dysregulation.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Medications like antidepressants (SSRIs, SNRIs) help balance these chemicals to improve symptoms.</p>
                              </div>
                            </div>
                          </div>


                          <div className="pb-4">
                            <h4>3. Brain Chemistry & Neurotransmitter Imbalances</h4>
                            <div className="light-text pt-4">
                              <p className="font-bold pb-3">The human brain relies on neurotransmitters—chemical messengers—to regulate mood and emotions. <br /> The key neurotransmitters involved in depression include:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> Serotonin: Helps regulate mood, sleep, and appetite. Low levels are linked to feelings of sadness and anxiety.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Dopamine: Involved in motivation and pleasure. Deficiencies may cause lack of interest or joy.</p>
                              </div>


                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Norepinephrine: Influences stress response and alertness. Imbalances can contribute to fatigue and mood instability.</p>
                              </div>

                              <p className="font-bold pb-2">Why does this happen?</p>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>A deficiency or imbalance in these neurotransmitters can lead to mood dysregulation.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Medications like antidepressants (SSRIs, SNRIs) help balance these chemicals to improve symptoms.</p>
                              </div>
                            </div>
                          </div>


                          <div className="pb-4">
                            <h4>4.Trauma, Stress, & Negative Life Experiencess</h4>
                            <div className="light-text pt-4">
                              <p className="font-bold pb-3">Significant life events or ongoing stress can trigger or worsen depression. Some common psychological stressors include:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> Childhood trauma or abuse (physical, emotional, or sexual)</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Loss of a loved one (grief and bereavement)</p>
                              </div>


                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Divorce or relationship breakdown</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Job loss or financial struggles</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Workplace stress or academic pressure</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Bullying or social rejection</p>
                              </div>

                              <p className="font-bold pb-2">Why does this happen?</p>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Childhood trauma can lead to changes in brain structure, making individuals more prone to depression later in life.</p>
                              </div>

                            </div>
                          </div>


                          <div className="pb-4">
                            <h4>5. Chronic Medical Conditions & Physical Health Issues</h4>
                            <div className="light-text pt-4">
                              <p className="font-bold pb-3">Physical health and mental health are closely connected. Chronic illnesses can contribute to depression in several ways:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> Chronic pain conditions (arthritis, fibromyalgia) can lead to emotional distress.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Neurological disorders (stroke, Parkinson’s disease) may alter brain chemistry.</p>
                              </div>


                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Hormonal imbalances (thyroid disorders, PCOS) can affect mood regulation.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Cardiovascular diseases (heart disease, high blood pressure) may reduce blood flow to the brain, impacting mental health.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Diabetes has been linked to depression due to fluctuations in blood sugar levels and lifestyle challenges.</p>
                              </div>


                              <p className="font-bold pb-2">Why does this happen?</p>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Chronic illness can reduce quality of life, causing hopelessness and frustration.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Some medical conditions directly impact brain function, contributing to mood disturbances.</p>
                              </div>

                            </div>
                          </div>

                          <div className="pb-4">
                            <h4>6.  Substance Use & Addiction</h4>
                            <div className="light-text pt-4">
                              <p className="font-bold pb-3">Alcohol and drug use are closely linked to depression. Some individuals may turn to substances as a coping mechanism, while others develop depression as a result of substance abuse.</p>
                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> Alcohol: Acts as a depressant on the brain, worsening depressive symptoms.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Stimulants (Cocaine, Meth): Cause temporary euphoria, followed by a severe emotional crash.</p>
                              </div>


                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Opioids & Painkillers: Disrupt mood regulation and lead to dependence.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Marijuana: Can contribute to paranoia, low motivation, and emotional numbness.</p>
                              </div>


                              <p className="font-bold pb-2">Why does this happen?</p>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Substance use alters dopamine levels, causing temporary relief but long-term mood instability.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Withdrawal symptoms can mimic depression, making it harder to recover.</p>
                              </div>

                            </div>
                          </div>

                          <div className="pb-4">
                            <h4>7.  Social Isolation & Lack of Support</h4>
                            <div className="light-text pt-4">
                              <p className="font-bold pb-3">Humans are social beings, and meaningful relationships play a crucial role in mental well-being. A lack of social connections can increase feelings of loneliness and hopelessness, leading to depression. <br /> Risk factors for social isolation include:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Living alone with little family interaction</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Elderly individuals with declining mobility</p>
                              </div>


                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Social anxiety or extreme shyness</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Lack of close friendships</p>
                              </div>


                              <p className="font-bold pb-2">Why does this happen?</p>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Isolation reduces dopamine and oxytocin production, which are necessary for happiness and emotional regulation.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2  pe-3 site-primary-text  font-bold"></i> 
                                <p>Without support, negative thoughts and feelings can spiral into deep depression.</p>
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
                        <p className="font-bold light-text">Depression can take different forms, including:</p>
                          <div className="light-text pt-4">
                              <p className="font-bold pb-3">Depression is not a one-size-fits-all condition. It manifests in different forms, with varying levels of severity, duration, and triggers. Identifying the specific type of depression a person is experiencing is essential for developing an effective treatment plan. Below are the most common types of depression:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> Major Depressive Disorder (MDD): Severe symptoms lasting at least two weeks.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Persistent Depressive Disorder (Dysthymia): Long-term, less severe depression lasting two years or more.</p>
                              </div>


                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Bipolar Depression: Alternating periods of extreme highs (mania) and lows (depression).</p>
                              </div>


                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Postpartum Depression: Depression after childbirth.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Seasonal Affective Disorder (SAD): Depression linked to seasonal changes.</p>
                              </div>
                            </div>
                      </div>
                    </div>
                    
                  </div>


                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep3}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Signs and Symptoms of Depression</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step3Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <p className="font-bold light-text">Depression symptoms vary from person to person but may include:</p>
                          <div className="light-text pt-4">
                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> Emotional Symptoms: Persistent sadness, hopelessness, irritability, guilt, or worthlessness.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> Physical Symptoms: Fatigue, headaches, body aches, or appetite changes.</p>
                              </div>


                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> Behavioral Symptoms: Loss of interest in hobbies, social withdrawal, or trouble concentrating.</p>
                              </div>


                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Sleep Issues: Insomnia or excessive sleeping.</p>
                              </div>

                              <div className="d-flex pb-3">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Suicidal Thoughts: Thoughts of self-harm or suicide (seek immediate help).</p>
                              </div>

                              <p className="font-bold pb-2">If you or someone you know is experiencing suicidal thoughts, call a crisis helpline immediately.</p>

                              <div className="d-flex pb-2">
                                <i class="ri-phone-line sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Nigeria Suicide Prevention Helpline: 0806 210 6493, 0803 200 0776</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-phone-line sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Nigeria Mental Health Support Line: 0909 555 2288</p>
                              </div>
                            </div>
                      </div>
                    </div>
                    
                  </div>


                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep4}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">How is Depression Treated?</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step4Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <p className="font-bold light-text">Depression is highly treatable, and multiple approaches can help:</p>
                          <div className="light-text pt-4">
                            <div className="pb-3">
                              <p className="font-bold pb-3">1. Therapy & Counseling:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> Emotional Symptoms: Persistent sadness, hopelessness, irritability, guilt, or worthlessness.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Dialectical Behavior Therapy (DBT) – Teaches emotional regulation skills.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Interpersonal Therapy (IPT) – Focuses on improving relationships and communication.</p>
                              </div>

                              
                            </div>

                            <div className="pb-3">
                              <p className="font-bold pb-3">2. Medication:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p> Antidepressants like SSRIs (e.g., Prozac, Zoloft) or SNRIs.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Must be prescribed by a mental health professional.</p>
                              </div>
                            </div>


                            <div className="pb-3">
                              <p className="font-bold pb-3">3.  Lifestyle Changes::</p>
                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Regular exercise and a healthy diet improve mood.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Mindfulness & meditation reduce stress.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Adequate sleep is crucial for mental health.</p>
                              </div>
                            </div>


                            <div className="pb-3">
                              <p className="font-bold pb-3">4.  Support Groups & Peer Support:</p>
                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Talking to others with similar experiences can help.</p>
                              </div>

                              <div className="d-flex pb-2">
                                <i class="ri-circle-fill sm-text-2 pe-3 site-primary-text  font-bold"></i> 
                                <p>Talking to others with similar experiences can help.</p>
                              </div>
                            </div>
                            

                          </div>
                      </div>
                    </div>
                    
                  </div>

                  <div className="grey-background border-radius-10px box-shadow-2 mb-3  py-4  " onClick={toggleStep5}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5 sm-text">Depression Helplines & Resources</p>
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
                      <p className="ps-5 sm-text">Frequently Asked Questions (FAQs) on Depression</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    

                    <div className={`get-information-depression-dropdown-content scroll-bar-y  ${step6Dropdown ? "get-information-depression-slide-in" : "get-information-depression-slide-out"}`}>
                      <div className="ps-5 pt-4 pe-3 ">
                        <p className="font-bold light-text"> </p>
                        <div className="light-text pt-4">
                            <div className="pb-3">
                              <p className="font-bold pb-3">Q1. How do I know if I have depression?</p>
                              <p>If you have been feeling persistently sad, hopeless, or uninterested in life for more than two weeks and it affects your daily life, you may have depression. A mental health professional can help with diagnosis and treatment.</p>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold pb-3">Q2. Can depression go away on its own?</p>
                              <p>Mild depression may improve with self-care and support, but moderate to severe depression often requires professional treatment like therapy or medication. Seeking help is important.</p>
                            </div>

                            <div className="pb-3">
                              <p className="font-bold pb-3">Q3. What should I do if someone I know is depressed?</p>
                              <p>Offer emotional support, listen without judgment, and encourage them to seek help. If they talk about suicidal thoughts, connect them to a crisis helpline or mental health professional immediately.</p>
                            </div>
                            

                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
                </div>
                

              </div>
            </div>

            <div>
              <HotLineDetails/>
            </div>

          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
     
}