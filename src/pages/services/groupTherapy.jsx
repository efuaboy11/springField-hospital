import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import nigeriaMap from '../../img/nigeriaMap.jpg'
import therapy from '../../img/people.jpg'
import heartIcon from '../../img/heart-icon.jpg'
import HotLineDetails from "../../component/hotlineDetails"
import WhyChooseUs from "../../component/whyChooseUs"


export const GroupTherapy = () =>{
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
                  <p className="site-primary-text md-text font-bold">Group Therapy & Support Groups</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i>Services<i class="ri-arrow-right-fill"></i>Group Therapy & Support Groups</p>
                </div>
                
              </div>
            </div>
          </div>

          <section className="site-section-container">
            <div className="container-lg">
              <div>
                <div className="row">
                  <div className="col-md-7">
                    <p className="site-header pb-3">Group Therapy?</p>
                    <p className="sm-text font-bold pb-2">What is Group Therapy?</p>
                    <p className="light-text-2 pb-4">Group therapy is a form of psychotherapy where individuals with similar struggles come together under the guidance of a trained therapist to discuss their thoughts, emotions, and experiences. Unlike individual therapy, group therapy provides a supportive and collaborative environment where participants can learn from one another, develop coping strategies, and build a sense of community. <br /> <br />
                    At Springfield, our group therapy sessions are carefully structured to ensure a safe, confidential, and supportive space for individuals facing a wide range of mental health concerns, including anxiety, depression, trauma, addiction, and grief.
                    </p>



                    <p className="sm-text font-bold pb-2">What is Support Therapy?</p>
                    <p className="light-text-2 pb-4">Support groups are peer-led or professionally facilitated gatherings where individuals dealing with similar challenges can share their experiences, offer encouragement, and receive emotional support. Unlike group therapy, which is led by a licensed therapist and follows a structured treatment plan, support groups focus more on mutual understanding, empathy, and shared coping strategies.</p>
                    <div>
                        
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">   Individuals dealing with mental health disorders (e.g., anxiety, depression, bipolar disorder)</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Survivors of trauma, abuse, or PTSD</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> People facing grief and loss</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Individuals in recovery from addiction</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">   Caregivers and family members supporting a loved one with mental health challenges</p>
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
                    <p className="sm-text  font-bold site-primary-text">Who Can Benefit from Group Therapy & Support Groups?</p>
                    <p className="light-text-2 pt-2 pb-4 font-bold">Group therapy and support groups can be highly effective for individuals struggling with:</p>
                    <div>
                        
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Anxiety & Panic Disorders – Learn coping strategies and hear how others manage their symptoms.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Depression & Mood Disorders – Reduce isolation and gain motivation through shared experiences.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">   Addiction & Substance Abuse Recovery – Build a strong support system and maintain sobriety.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Grief & Loss – Find comfort and healing in a space where others understand your pain.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Trauma & PTSD – Learn trauma-informed coping techniques while connecting with others who have similar experiences.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Relationship & Family Issues – Gain insights on communication and emotional boundaries.</p>
                        </div>


                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Self-Esteem & Personal Growth – Work on self-acceptance and confidence in a supportive environment.</p>
                        </div>
                    </div>
                  </div>

                  <div className="">
                      <p className="sm-text  font-bold site-primary-text">How Does Group Therapy Work?</p>
                      <p className="light-text-2 pt-2 pb-4 font-bold">At Springfield, our group therapy sessions are led by licensed therapists who provide a structured yet flexible approach to healing. Each session typically includes:</p>
                      <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Check-ins & Introductions – Participants share their current feelings, struggles, or progress.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Guided Discussions – Therapists introduce specific topics relevant to the group’s focus.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Skill-Building & Coping Strategies – Learn new tools for emotional regulation, mindfulness, and resilience.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Peer Support & Feedback – Participants offer insights, encouragement, and validation to one another.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Closure & Reflection – Sessions end with personal takeaways and goal-setting for the next meeting.</p>
                          </div>
                        </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <img width='100%' src={therapy} alt="" />
                    <div className="pt-5">
                    <div>
                      <p className="sm-text  font-bold site-primary-text pb-4">Key Benefits of Group Therapy & Support Groups</p>
                      <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Sense of Belonging – Reduces isolation and provides a supportive community.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Emotional Support – Encouragement from people who understand your struggles.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">New Perspectives – Gain insights and coping techniques from others.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Personal Growth – Improves self-awareness, emotional regulation, and resilience.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Affordability – Group therapy is often more cost-effective than individual therapy.</p>
                          </div>
                      </div>


                      <p className="sm-text  font-bold site-primary-text pb-4">Is Group Therapy Right for You?</p>
                      <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Want to connect with others facing similar challenges</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Are comfortable sharing in a structured, therapist-led environment</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Seek accountability and motivation in your healing journey</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Would benefit from learning diverse coping strategies</p>
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
              <div>
                <p className="sm-text font-bold uppercase text-center site-primary-text pb-5 mb-4">Types of Group Therapy at Springfield</p>

                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">01</p>
                        <p className="sm-text font-bold pb-4">Cognitive Behavioral Therapy (CBT) Groups </p>
                        <p className="light-text-2">CBT groups focus on identifying and changing negative thought patterns that contribute to emotional distress. Participants learn practical coping skills to manage stress, anxiety, and depression by challenging irrational beliefs and replacing them with healthier perspectives.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">02</p>
                        <p className="sm-text font-bold pb-3">Dialectical Behavior Therapy (DBT) Groups </p>
                        <p className="light-text-2">DBT groups help individuals struggling with emotional regulation and impulsive behaviors. Through mindfulness techniques, distress tolerance, and interpersonal skills training, participants learn how to manage intense emotions and develop healthier relationships.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">03</p>
                        <p className="sm-text font-bold pb-3">Grief & Loss Support Groups </p>
                        <p className="light-text-2">Grief support groups help individuals cope with the loss of a loved one by providing a compassionate environment for sharing emotions, memories, and struggles. Participants learn to navigate grief in healthy ways and find comfort in the shared experiences of others. <br /> !!!</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">04</p>
                        <p className="sm-text font-bold pb-3"> Trauma & PTSD Support Groups </p>
                        <p className="light-text-2">These groups provide a safe and supportive space for individuals who have experienced trauma. Discussions focus on processing past experiences, building trust, and developing coping strategies to reduce anxiety, flashbacks, and emotional distress.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">05</p>
                        <p className="sm-text font-bold pb-3"> Trauma & PTSD Support Groups </p>
                        <p className="light-text-2">These groups provide a safe and supportive space for individuals who have experienced trauma. Discussions focus on processing past experiences, building trust, and developing coping strategies to reduce anxiety, flashbacks, and emotional distress.</p>
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">06</p>
                        <p className="sm-text font-bold pb-3">Social Skills & Self-Esteem Groups</p>
                        <p className="light-text-2">These groups focus on improving confidence, communication, and self-worth. Participants engage in discussions and exercises that enhance their ability to set boundaries, express themselves effectively, and develop a positive self-image.</p>
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
                  <p className="text-center site-primary-text sm-text uppercase font-bold pb-4">You're Not Alone</p>
                  <div className="row justify-content-center">
                    <div className="col-sm-8 ">
                      <div className="home-what-we-do ps-4">
                        <p className="sm-text light-text-2">Healing doesn’t have to happen in isolation. Group therapy and support groups at Springfield offer a powerful space for transformation, encouragement, and community. Whether you're dealing with anxiety, depression, trauma, or life challenges, you are not alone—there is support waiting for you.</p>
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