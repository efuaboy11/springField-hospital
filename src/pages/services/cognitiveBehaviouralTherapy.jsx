import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import nigeriaMap from '../../img/nigeriaMap.jpg'
import therapy from '../../img/therapy3.jpg'
import heartIcon from '../../img/heart-icon.jpg'
import HotLineDetails from "../../component/hotlineDetails"
import WhyChooseUs from "../../component/whyChooseUs"


export const CognitiveTherapy = () =>{
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
                  <p className="site-primary-text md-text font-bold">Cognitive Behavioral Therapy (CBT)</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i>Services<i class="ri-arrow-right-fill"></i>Cognitive Behavioral Therapy (CBT)</p>
                </div>
                
              </div>
            </div>
          </div>

          <section className="site-section-container">
            <div className="container-lg">
              <div>
                <div className="row pb-5 mb-5" >
                  <div className="col-md-7">
                    <p className="site-header pb-3">Cognitive Behavioral Therapy (CBT)</p>
                    <p className="sm-text font-bold pb-2">What is Cognitive Behavioral Therapy (CBT)?</p>
                    <p className="light-text-2 pb-4">Cognitive Behavioral Therapy (CBT) is a widely recognized and evidence-based form of psychotherapy that focuses on identifying, understanding, and changing negative thought patterns and behaviors. At Springfield Mental Health Services, we offer CBT as a structured and goal-oriented treatment to help individuals manage a range of mental health conditions and emotional challenges.</p>



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

                    <p className="sm-text font-bold pb-2">How CBT Works?</p>
                    <p className="light-text-2 pb-4">CBT operates on the principle that thoughts, feelings, and behaviors are interconnected. Negative or distorted thinking can lead to emotional distress and unhealthy behaviors. By identifying these thought patterns, individuals can develop healthier coping strategies and behavioral responses.</p>
                    <div>
                      <p className="light-text-2 pb-3 font-bold">Key Aspects of CBT:</p>
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Identifying Negative Thought Patterns – Recognizing self-defeating thoughts that contribute to emotional struggles.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Cognitive Restructuring – Challenging and replacing unhelpful thoughts with more balanced and constructive ones.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Behavioral Activation – Encouraging activities that improve mood and well-being.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Exposure Therapy – Gradually facing fears in a controlled way to reduce anxiety.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Skill-Building – Learning stress management, emotional regulation, and problem-solving techniques.</p>
                        </div>
                    </div>
                  </div>

                  <div className="">
                      <p className="sm-text  font-bold site-primary-text">Conditions Treated with CBT</p>
                      <p className="light-text-2 pt-2 pb-4 font-bold">At Springfield, our group therapy CBT is highly effective for a variety of mental health conditions, including:</p>
                      <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Anxiety Disorders – Generalized anxiety, panic disorder, social anxiety, and phobias.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Depression – Helping individuals reframe negative thinking and regain motivation.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Post-Traumatic Stress Disorder (PTSD) – Addressing distressing memories and reactions.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Obsessive-Compulsive Disorder (OCD) – Managing intrusive thoughts and compulsive behaviors.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Bipolar Disorder – Stabilizing mood patterns and improving coping mechanisms.</p>
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
                      <p className="sm-text  font-bold site-primary-text pb-4">What to Expect in CBT Sessions</p>
                      <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Structured Sessions – Each session follows a planned approach tailored to the individual's needs.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Homework Assignments – Practical exercises to apply learned skills in daily life.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Short-Term & Goal-Oriented – Typically lasts for a set number of sessions (e.g., 12-20).</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Personal Growth – Improves self-awareness, emotional regulation, and resilience.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Active Participation – Encourages individuals to take an active role in their healing.</p>
                          </div>
                      </div>


                      <p className="sm-text  font-bold site-primary-text pb-4">Benefits of CBT?</p>
                      <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Proven Effectiveness – Backed by extensive research in treating various conditions.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Practical & Solution-Focused – Provides real-life coping strategies.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Long-Term Results – Equips individuals with skills to prevent future relapses.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Can Be Combined with Other Treatments – Works well alongside medication or other therapies.</p>
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
                  <p className="text-center site-primary-text sm-text uppercase font-bold pb-4">Start Your Journey with CBT</p>
                  <div className="row justify-content-center">
                    <div className="col-sm-8 ">
                      <div className="home-what-we-do ps-4">
                        <p className="sm-text light-text-2">At Springfield Mental Health Services, our licensed therapists specialize in CBT and tailor each treatment plan to meet individual needs. Whether you’re struggling with anxiety, depression, trauma, or other challenges, CBT can help you regain control of your thoughts and emotions. <br /> Ready to take the first step? Contact us today to schedule a consultation and start your path toward mental well-being.</p>
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