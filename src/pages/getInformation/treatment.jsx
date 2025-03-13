import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import nigeriaMap from '../../img/nigeriaMap.jpg'
import therapy from '../../img/therapy.jpg'
import heartIcon from '../../img/heart-icon.jpg'
import HotLineDetails from "../../component/hotlineDetails"


export const Treatment = () =>{
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
                  <p className="site-primary-text md-text font-bold">Treatment & Therapy Options</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Information <i class="ri-arrow-right-fill"></i>Treatment & Therapy Options</p>
                </div>
                
              </div>
            </div>
          </div>

          <section className="site-section-container">
            <div className="container-lg">
              <div className="row">
                <div className="col-xl-7 col-lg-9 col-md-11  responsive-centralized-text">
                  <div className="light-background2 p-4">
                    <p className="site-header pb-5">Understanding Mental Health Treatment</p>
                    <p className="light-text-2">Mental health conditions affect millions of people worldwide, yet many do not seek help due to stigma, lack of information, or fear. Treatment is not a one-size-fits-all solution; it varies based on individual needs, diagnosis, and severity of symptoms. The good news is that effective treatments exist, and with the right support, individuals can manage their mental health and lead fulfilling lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div>
                <p className="sm-text font-bold site-primary-text text-center uppercase pb-5 mb-4">A Day in the Life: The Power of Self-Care & Coping StrategiesMeet Amina & David: <br /> Two Different Treatment Journeys</p>
                <div>
                  <div className="mb-4 d-flex align-center">
                    <i class="ri-circle-fill site-primary-text d-none d-md-block me-4 "></i>  
                    <div className="light-border p-4 border-radius-10px">
                      <p className="font-bold pb-2">Amina’s Story:</p>
                      <p className="light-text-2">Amina, a 26-year-old university student, has been struggling with anxiety and panic attacks. She avoids social gatherings, has trouble sleeping, and feels overwhelmed by her studies. After speaking to a counselor, she starts Cognitive Behavioral Therapy (CBT) and learns how to manage her anxious thoughts. She also practices relaxation techniques and gradually regains confidence in social situations.</p>
                    </div>
                  </div>

                  <div className="d-flex align-center mb-4">
                    <i class="ri-circle-fill site-primary-text d-none d-md-block me-4 "></i>
                    <div className="light-border p-4 border-radius-10px">
                      <p className="font-bold pb-2"> David’s Story:</p>
                      <p className="light-text-2">David, a 35-year-old accountant, has been feeling hopeless, exhausted, and uninterested in life. He tries to push through but finds himself missing work and withdrawing from friends. A psychiatrist diagnoses him with major depressive disorder and prescribes antidepressants along with therapy. Over time, David starts to feel better, engages in self-care, and reconnects with loved ones.</p>
                    </div>
                  </div>

                  <div className="d-flex align-center">
                    <i class="ri-circle-fill site-primary-text d-none d-md-block me-4 "></i>
                    <div className="light-border p-4 border-radius-10px">
                      <p className="font-bold pb-2"> The lesson?</p>
                      <p className="light-text-2">Different mental health conditions require different treatments. There is no single "right" way—what matters is finding the right combination that works for each person.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div className="row pb-5 mb-5">
                <div className="col-xl-7 col-lg-9 col-md-11  responsive-centralized-text">
                  <div className="light-background2 p-4">
                    <p className="site-header pb-5">Psychotherapy (Talk Therapy)</p>
                    <p className="light-text-2">Psychotherapy, also known as talk therapy, involves working with a trained mental health professional to explore thoughts, emotions, and behaviors. It helps individuals develop coping skills, process trauma, and improve their overall mental health.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="sm-text font-bold uppercase text-center site-primary-text pb-5 mb-4">Types of Therapy:</p>

                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">1.1</p>
                        <p className="sm-text font-bold pb-4">Cognitive Behavioral Therapy (CBT)  </p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Focuses on identifying negative thought patterns and behaviors</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Helps develop healthier ways of thinking and coping</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">   Used for anxiety, depression, PTSD, OCD, phobias, and more</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">1.2</p>
                        <p className="sm-text font-bold pb-3">Dialectical Behavior Therapy (DBT)  </p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">A specialized form of CBT designed for people with intense emotions, self-harm tendencies, or borderline personality disorder</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Teaches skills like emotional regulation, mindfulness, and distress tolerance</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Helps improve relationships and impulse control</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">1.3</p>
                        <p className="sm-text font-bold pb-3">Psychodynamic Therapy</p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Focuses on exploring past experiences and unconscious thoughts</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Helps people understand how childhood experiences shape their current behavior</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Used for long-term emotional challenges and deep-rooted trauma</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">1.4</p>
                        <p className="sm-text font-bold pb-3">Group Therapy & Support Groups</p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Involves a therapist leading a group of individuals with similar struggles</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Provides a sense of community and shared understanding</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Used for grief, addiction, depression, anxiety, and more</p>
                          </div>

                        </div>
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
                  <div>
                    <p className="sm-text font-bold site-primary-text  responsive-centralized-text">Medication & Medical Treatments</p>
                    <p className="light-text-2 pt-2">While therapy is effective, some mental health conditions require medication to stabilize brain chemistry and improve functioning. Medication should always be prescribed by a licensed medical professional (psychiatrist or doctor).</p>
                    <div className="pt-4">
                      <p className="font-bold pb-3">Types of Mental Health Medications:</p>
                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">Antidepressants (e.g., SSRIs, SNRIs, MAOIs) – Treat depression, anxiety, and PTSD by balancing serotonin and dopamine levels.</p>
                      </div>

                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2"> Anti-Anxiety Medications (e.g., Benzodiazepines) – Help with panic disorders and severe anxiety, but should be used carefully due to dependency risks.</p>
                      </div>

                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">Mood Stabilizers (e.g., Lithium, Valproate) – Used for bipolar disorder to prevent mood swings.</p>
                      </div>

                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">Antipsychotics (e.g., Risperidone, Olanzapine) – Help manage schizophrenia and psychosis.</p>
                      </div>

                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">Stimulants (e.g., Adderall, Ritalin) – Used for ADHD to improve focus and impulse control.</p>
                      </div>

                      <p className='sm-text font-bold site-primary-text pt-4 pb-2 responsive-centralized-text'> Lifestyle & Alternative Therapies</p>
                      <p className="light-text-2 pb-4">While therapy and medication are core treatments, lifestyle changes and alternative therapies can greatly support mental health.</p>
                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">  Exercise & Physical Activity  – Releases endorphins (feel-good hormones) and reduces stress.</p>
                      </div>


                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">Healthy Diet & Nutrition  – Foods rich in omega-3, magnesium, and vitamins support brain health.</p>
                      </div>


                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">  Adequate Sleep  – 7-9 hours of quality sleep helps regulate mood and cognitive function.</p>
                      </div>

                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">  Mindfulness & Meditation  – Reduces anxiety and improves emotional balance.</p>
                      </div>

                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">  Journaling & Gratitude Practices – Helps process emotions and reduce negative thoughts.</p>
                      </div>

                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">  Social Connections & Support Systems  – Engaging with loved ones improves emotional well-being.</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <img width='100%' src={therapy} alt="" />
                    <div className="pt-5">
                      <p className="sm-text font-bold site-primary-text  responsive-centralized-text">Alternative & Complementary Therapie</p>
                      <p className="light-text-2 pt-2">While not replacements for therapy or medication, some people find relief through alternative treatments:</p>
                      <div className="pt-4">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Art & Music Therapy  – Helps individuals express emotions creatively.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Equine Therapy  – Interacting with animals like horses reduces anxiety and builds confidence.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Acupuncture & Herbal Remedies  – Some natural remedies may help, but should be discussed with a doctor.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Light Therapy  – Used for Seasonal Affective Disorder (SAD) to improve mood.</p>
                        </div>

                        <p className='sm-text font-bold site-primary-text pt-4 pb-2 responsive-centralized-text'> When to Seek Professional Help?s</p>
                        <p className="light-text-2 pb-4">If you or someone you know is experiencing:</p>
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Persistent sadness, hopelessness, or extreme mood swings</p>
                        </div>


                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Suicidal thoughts or self-harm urges</p>
                        </div>


                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Severe anxiety or panic attacks</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Hallucinations or delusions</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Inability to function in daily life</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
  
            </div>

          </section>


            <HotLineDetails />
       

        </div>

      </div>


      <Footer />
    </div>
      
  )
}