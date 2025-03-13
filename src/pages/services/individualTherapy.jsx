import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import nigeriaMap from '../../img/nigeriaMap.jpg'
import therapy from '../../img/therapy2.jpg'
import heartIcon from '../../img/heart-icon.jpg'
import HotLineDetails from "../../component/hotlineDetails"
import WhyChooseUs from "../../component/whyChooseUs"


export const IndividualTherapy = () =>{
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
                  <p className="site-primary-text md-text font-bold">Individual Therapy</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i>Services<i class="ri-arrow-right-fill"></i>Individual Therapy</p>
                </div>
                
              </div>
            </div>
          </div>

          <section className="site-section-container">
            <div className="container-lg">
              <div>
                <div className="row">
                  <div className="col-md-7">
                    <p className="site-header pb-3">Individual Therapy: Personalized Mental Health Support</p>
                    <p className="sm-text font-bold pb-2">What is Individual Therapy?</p>
                    <p className="light-text-2 pb-4">Individual therapy, also known as one-on-one therapy, psychotherapy, or counseling, is a personalized mental health treatment where a client works directly with a licensed therapist to explore thoughts, emotions, behaviors, and life challenges. This process helps individuals gain self-awareness, develop coping strategies, and work toward emotional well-being. <br /> <br />
                    At Springfield, our highly trained mental health professionals provide a safe, confidential, and judgment-free space for clients to express themselves openly. Whether you're dealing with anxiety, depression, trauma, relationship issues, or personal growth, individual therapy is tailored to meet your specific needs and goals.
                    </p>
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
                          <p className="sm-text  font-bold site-primary-text">Who Can Benefit from Individual Therapy?</p>
                          <p className="light-text-2 pt-2 pb-4 font-bold">Individual therapy is beneficial for people facing various mental health challenges, including but not limited to:</p>
                          <div>
                              
                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">  Anxiety Disorders (Generalized Anxiety Disorder, Panic Disorder, Phobias)</p>
                              </div>

                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">  Depression & Mood Disorders (Bipolar Disorder, Persistent Depressive Disorder)</p>
                              </div>

                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">  Trauma & PTSD (Post-Traumatic Stress Disorder, Abuse, or Neglect)</p>
                              </div>

                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">  Grief & Loss (Death of a loved one, Divorce, Major life transitions)</p>
                              </div>

                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">   Stress Management (Workplace stress, Burnout, Life balance)</p>
                              </div>

                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">  Self-Esteem & Confidence Issues</p>
                              </div>


                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">  Relationship Problems (Family conflicts, Romantic relationships, Friendships)</p>
                              </div>

                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">  Personal Growth & Self-Exploration</p>
                              </div>

                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">   Addiction & Behavioral Struggles</p>
                              </div>

                            </div>
                  </div>

                  <div className="">
                      <p className="sm-text  font-bold site-primary-text">How Does Individual Therapy Work?</p>
                      <p className="light-text-2 pt-2 pb-4 font-bold">Therapy sessions are typically 45–60 minutes long and are held in a private, secure environment. During the sessions, your therapist will:</p>
                      <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Listen actively & empathetically – You will have a safe space to express your thoughts and emotions without fear of judgment.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Identify underlying issues – Through guided conversations, your therapist will help uncover root causes of distress.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Teach coping strategies & skills – You will learn practical mental, emotional, and behavioral techniques to manage your concerns.</p>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <img width='100%' src={therapy} alt="" />
                    <div className="pt-5">
                    <div>
                      <p className="sm-text  font-bold site-primary-text">How to Get Started?</p>
                      <p className="light-text-2 pt-2 pb-4 font-bold">Starting therapy can feel overwhelming, but taking that first step is a sign of strength and self-care.</p>
                      <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Step 1: Schedule an Appointment – Contact Springfield to book your initial session.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Step 2: Meet Your Therapist – We will match you with a professional based on your needs and preferences</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">   Step 3: Begin Your Journey – Start working toward mental clarity, healing, and personal growth.</p>
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
                  <p className="text-center site-primary-text sm-text uppercase font-bold pb-4">Confidentiality & Privacy in Individual Therapy</p>
                  <div className="row justify-content-center">
                    <div className="col-sm-8 ">
                      <div className="home-what-we-do ps-4">
                        <p className="sm-text light-text-2">At Springfield, your privacy is our priority. Everything discussed in therapy remains confidential, following strict ethical and legal guidelines. This ensures that you feel safe, respected, and comfortable to share openly without fear of judgment or disclosure.</p>
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