import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import nigeriaMap from '../../img/nigeriaMap.jpg'
import therapy from '../../img/therapy4.jpg'
import heartIcon from '../../img/heart-icon.jpg'
import HotLineDetails from "../../component/hotlineDetails"
import WhyChooseUs from "../../component/whyChooseUs"


export const MedicationManagement = () =>{
  const { 
    OnbodyClick, 

  } = useContext(AuthContext)

  return(
    <div>
      <div>
        <Header />
      </div>
      <div className="position-sticky1">
        <Navbar />
      </div>


      <div onClick={OnbodyClick}>
        <div>
          <div className="light-background2 mb-5">
            <div className="py-5 container-lg">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <p className="site-primary-text md-text font-bold">Medicaton Management</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i>Services<i class="ri-arrow-right-fill"></i>Medicaton Management</p>
                </div>
                
              </div>
            </div>
          </div>

          <section className="site-section-container">
            <div className="container-lg">
              <div>
                <div className="row pb-5 mb-5" >
                  <div className="col-md-7">
                    <p className="site-header pb-3">Medication Management</p>
                    <p className="sm-text font-bold pb-2">What is Medication Management?</p>
                    <p className="light-text-2 pb-2">Medication management is a structured process that involves the prescription, monitoring, adjustment, and evaluation of psychiatric medications. This service is provided by licensed psychiatrists, psychiatric nurse practitioners, and other qualified healthcare professionals who specialize in mental health pharmacology.</p>
                    <div>
                      <p className="light-text-2 pb-3 font-bold">Key Aspects of Medication Management:</p>
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Comprehensive Evaluation – A thorough assessment of an individual’s symptoms, medical history, and previous medication use.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Personalized Treatment Plan – Selection of medications based on individual needs, lifestyle, and medical history.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Ongoing Monitoring – Regular check-ins to assess effectiveness, side effects, and necessary adjustments.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Education & Counseling – Helping individuals understand their medications, how they work, and what to expect.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Medication Adherence Support – Ensuring individuals take their medication correctly to maximize benefits.</p>
                        </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </section>



          <section className="site-section-container">
            <div className="container-lg">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="pb-5">

                    <p className="sm-text site-primary-text font-bold pb-2">Conditions Treated with Medication Management</p>
                    <p className="light-text-2 pb-4">Psychiatric medications can be highly effective for managing a variety of mental health conditions, including:</p>
                    <div>
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Depression – Antidepressants such as SSRIs and SNRIs help regulate mood.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Anxiety Disorders – Medications like benzodiazepines, beta-blockers, and antidepressants can relieve symptoms.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Bipolar Disorder – Mood stabilizers and antipsychotic medications help regulate extreme mood swings.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Schizophrenia & Psychotic Disorders – Antipsychotic medications manage symptoms such as hallucinations and delusions.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Post-Traumatic Stress Disorder (PTSD) – Certain medications can help reduce flashbacks, anxiety, and depression.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Attention-Deficit/Hyperactivity Disorder (ADHD) – Stimulant and non-stimulant medications aid focus and impulse control.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Obsessive-Compulsive Disorder (OCD) – SSRIs and other medications help manage intrusive thoughts and compulsions.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Substance Use Disorders – Medication-assisted treatment (MAT) supports recovery from addiction.</p>
                        </div>
                    </div>
                  </div>

                  <div className="">
                      <p className="sm-text  font-bold site-primary-text pb-3">Benefits of Medication Management</p>
                      <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Improved Symptom Control – Medications can significantly reduce symptoms of mental health disorders.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Personalized & Adjusted Over Time – Treatments are tailored and modified as needed.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Safe & Monitored Approach – Side effects and interactions are carefully tracked.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Enhanced Quality of Life – Proper medication management helps individuals regain stability and function in daily life.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Integrated with Other Treatments – Works alongside therapy, lifestyle changes, and support systems for holistic care.</p>
                          </div>

                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Substance Use Disorders – Identifying triggers and developing healthier coping strategies.</p>
                          </div>

                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Eating Disorders – Challenging unhealthy thoughts about food and body image.</p>
                          </div>
                        </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <img width='100%' src={therapy} alt="" />
                    <div className="pt-5">
                    <div>
                      <p className="sm-text  font-bold site-primary-text pb-4">The Medication Management Process</p>
                      <p className="pb-3 light-text-2">At Springfield Mental Health Services, our approach to medication management is collaborative, patient-centered, and evidence-based.</p>
                      <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Initial Assessment – A licensed psychiatric provider evaluates symptoms, medical history, and any previous treatment responses.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Prescription & Education – If medication is appropriate, the provider prescribes a tailored regimen and explains how it works.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Follow-Up Appointments – Regular visits to track progress, assess side effects, and make necessary adjustments.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Ongoing Monitoring – Continuous support to optimize treatment and prevent complications.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Coordination with Other Treatments – Medication is often most effective when combined with therapy and lifestyle changes.</p>
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
            <WhyChooseUs />
          </section>

          <section className="site-section-container">
              <div>
                <div className="container-lg p-4">
                  <p className="text-center site-primary-text sm-text uppercase font-bold pb-4">Get Professional Medication Management Today</p>
                  <div className="row justify-content-center">
                    <div className="col-sm-8 ">
                      <div className="home-what-we-do ps-4">
                        <p className="sm-text light-text-2">If you or a loved one may benefit from psychiatric medication, our experienced team at Springfield Mental Health Services is here to help. We provide safe, compassionate, and personalized medication management to support mental health recovery.</p>
                        <p className="italic-text light-text-2 pt-3">Take the first step—schedule an appointment today and start your journey to better mental health</p>
                      </div>                     
                    </div>
                    
                  </div>
                </div>
              </div>
            </section>


          <HotLineDetails />
       

        </div>
        <Footer />
      </div>


      
    </div>
      
  )
}