import { useContext, useState } from "react"
import { Header, Navbar } from "../../component/navbar"
import AuthContext from "../../context/AuthContext"
import '../../css/style.css'
import { Footer } from "../../component/footer"
import { Link } from "react-router-dom"

import mental1 from '../../img/people.jpg'
import Mental2 from '../../img/menta1.jpg'
import Mental3 from '../../img/mental3.jpg'
import mental4 from '../../img/mental4.jpg'
import crisis5 from '../../img/crisis7.jpg'
import why1  from '../../img/doctor-icon.png'
import why2 from '../../img/emergency-icon.png'
import why3 from '../../img/share-love-icon.png'
import why4 from '../../img/safe-earth-icon.png'
import features3 from '../../img/features3.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faRibbon } from "@fortawesome/free-solid-svg-icons"
import HotLineDetails from "../../component/hotlineDetails"
import WhyChooseUs from "../../component/whyChooseUs"

export const MentalHealthTreatment = () =>{
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
                    <p className="site-primary-text md-text font-bold">Mental Health Treatment</p>
                    <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Help <i class="ri-arrow-right-fill"></i>Mental Health Treatment</p>
                  </div>
                  
                </div>
              </div>
            </div>


            <section className="site-section-container">
              <div className="container-lg">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                    <div className="text-center">
                      <p className="site-header font-bold pb-3">Priotize Your Mental Health</p>
                      <p className="light-text-2">Mental health treatment is essential for managing conditions such as anxiety, depression, PTSD, bipolar disorder, and more. Various treatment options exist to provide personalized care based on an individual's needs. At Springfield Mental Health Services, we offer comprehensive mental health treatments designed to help individuals regain emotional balance and well-being.</p>
                      <div className="pt-4">
                        <Link to='' className="site-btn px-5">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

            </section>


            <section className="site-section-container">
              <p className="site-primary-text sm-text font-bold text-center pb-5 mb-5"> Types of Mental Health Treatments</p>
              <div className="container-lg">
                <div className="row gx-4 gy-5">

                  <div className="col-12 d-block d-md-none">
                    <img width='100%' src={mental1} alt="" />
                  </div> 

                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold pb-3"> Psychotherapy (Talk Therapy)</p>
                      <p className="font-bold">What it is:</p>
                      <p className="light-text-2 italic-text py-2">Psychotherapy involves talking to a trained mental health professional to explore thoughts, feelings, and behaviors. It helps individuals develop coping strategies and improve emotional well-being.</p> 
                      <p className="light-text-2 font-bold">Common types of therapy:</p>

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Cognitive Behavioral Therapy (CBT) – Helps change negative thought patterns and behaviors.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Dialectical Behavior Therapy (DBT) – Focuses on emotional regulation and coping with distress.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Psychodynamic Therapy – Explores past experiences and unconscious thoughts.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Humanistic Therapy – Encourages personal growth and self-discovery.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Group Therapy – Provides support in a shared environment with others facing similar challenges.</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 d-none d-md-block">
                    <div>
                      <img width='100%' src={mental1} alt="" />
                    </div>  
                  </div>


                  <div className="col-md-6">
                    <div>
                      <img width='100%' src={Mental2} alt="" />
                    </div>  
                  </div>

                  

                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold pb-3">  Medication-Based Treatments</p>
                      <p className="font-bold">What it is:</p>
                      <p className="light-text-2 italic-text py-2">Medications can help balance brain chemicals, manage symptoms, and improve quality of life. They are usually prescribed by psychiatrists and may be used alone or with therapy.</p> 
                      <p className="light-text-2 font-bold">Common types of mental health medications:</p>

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Antidepressants – Used for depression and anxiety (e.g., SSRIs, SNRIs).</p>
                        </div>

                        <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Mood Stabilizers – Used for bipolar disorder (e.g., Lithium, Valproate).</p>
                        </div>

                        <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Mood Stabilizers – Used for bipolar disorder (e.g., Lithium, Valproate).</p>
                        </div>

                        <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Anxiolytics (Anti-Anxiety Medications) – Used for anxiety and panic disorders.</p>
                        </div>

                        <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Stimulants – Used for ADHD and focus-related issues.</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>


                  <div className="col-12 d-block d-md-none">
                    <img width='100%' src={Mental3} alt="" />
                  </div> 

                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold pb-3"> Holistic & Alternative Treatments</p>
                      <p className="font-bold">What it is:</p>
                      <p className="light-text-2 italic-text py-2">Some individuals prefer holistic or complementary approaches to mental health care. These treatments work alongside traditional therapy or medication.</p> 
                      <p className="light-text-2 font-bold">Examples of holistic treatments:</p>

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Mindfulness & Meditation – Reduces stress and improves emotional regulation.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Yoga & Exercise Therapy – Boosts mental health through physical movement.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Nutritional Therapy – Focuses on diet and supplements that support brain function.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Acupuncture & Massage Therapy – Helps relieve stress and improve relaxation.</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 d-none d-md-block">
                    <div>
                      <img width='100%' src={Mental3} alt="" />
                    </div>   
                  </div>


                  <div className="col-md-6">
                    <div>
                      <img width='100%' src={mental4} alt="" />
                    </div>   
                  </div>


                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold pb-3"> Inpatient & Outpatient Programs</p>
                      <p className="font-bold">What it is:</p>
                      <p className="light-text-2 italic-text py-2">Depending on the severity of a condition, individuals may require different levels of care.</p> 
                      <p className="light-text-2 font-bold">Types of treatment programs:</p>

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Inpatient (Residential) Treatment – 24/7 care in a structured environment for severe conditions.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Outpatient Treatment – Therapy sessions while continuing daily activities</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Intensive Outpatient Programs (IOP) – Structured treatment without full hospitalization</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Partial Hospitalization Programs (PHP) – Day programs providing intensive therapy while allowing patients to return home at night</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-12 d-block d-md-none">
                    <img width='100%' src={crisis5} alt="" />
                  </div> 


                  <div className="col-md-6">
                    <div>
                      <p className="sm-text font-bold pb-3"> Crisis Intervention & Emergency Treatment</p>
                      <p className="font-bold">What it is:</p>
                      <p className="light-text-2 italic-text py-2">Immediate support for individuals experiencing severe mental health crises, suicidal thoughts, or psychiatric emergencies</p> 
                      <p className="light-text-2 font-bold">Types of crisis interventions:</p>

                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Emergency psychiatric services – Available at hospitals and mental health centers.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">24/7 crisis hotlines – Immediate support from trained professionals.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Suicide prevention programs – Focused intervention for individuals at risk.</p>
                        </div>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 d-none d-md-block">
                    <div>
                      <img width='100%' src={crisis5} alt="" />
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
                    <p className="site-header pb-4 font-bold">Have more questions about Mental Health Treatment?</p>
                    <p className="light-text-2">If you have more questions about Mental health, feel free to contact our customer support team that will gladly answer any questions you may have about enhancing a goood mental</p>
                  </div>
                </div>

                <div className="pt-5">
                  <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep1}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5"> How do I know which mental health treatment is right for me?</p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={` dropdown-content  ${step1Dropdown ? "slide-in" : "slide-out"}`}>
                      <p className="ps-5 pt-4">A mental health professional will assess your symptoms, medical history, and personal preferences to recommend the best treatment. You may start with therapy and consider medication if needed.</p>
                    </div>
                  </div>

                  <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep2}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5">  How long does mental health treatment take? </p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={` dropdown-content  ${step2Dropdown ? "slide-in" : "slide-out"}`}>
                      <p className="ps-5 pt-4">The length of treatment varies based on individual needs. Some people see improvement in a few months, while others may require long-term support. Regular assessments help adjust the treatment plan as needed.</p>
                    </div>
                  </div>

                  <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep3}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5"> Can I get treatment without medication? </p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={` dropdown-content  ${step3Dropdown ? "slide-in" : "slide-out"}`}>
                      <p className="ps-5 pt-4">Yes, many mental health conditions can be managed with psychotherapy, lifestyle changes, and holistic approaches. However, some conditions may require medication for effective symptom management.</p>
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