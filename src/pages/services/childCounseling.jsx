import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import nigeriaMap from '../../img/nigeriaMap.jpg'
import therapy from '../../img/child-mom.jpg'
import heartIcon from '../../img/heart-icon.jpg'
import HotLineDetails from "../../component/hotlineDetails"
import WhyChooseUs from "../../component/whyChooseUs"
import { Helmet } from "react-helmet-async"


export const ChildCounseling = () =>{
  const { 
    OnbodyClick, 

  } = useContext(AuthContext)

  return(
    <div>
      <Helmet>
        <title>Child & Adolescent Counseling | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Support your child's mental health with specialized counseling services at Springfield Mental Health and Psychosocial Services." />
        <meta name="keywords" content="Services, Child Counseling, Adolescent Therapy, Teen Mental Health, Family Therapy, Springfield Psychosocial Services, Behavioral Support" />
        <meta property="og:title" content="Child & Adolescent Counseling | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Providing compassionate therapy and mental health support for children, teens, and families." />
      </Helmet>


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
                  <p className="site-primary-text md-text font-bold">Child & Adolescent Counseling</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i>Services<i class="ri-arrow-right-fill"></i>Child & Adolescent Counseling</p>
                </div>
                
              </div>
            </div>
          </div>

          <section className="site-section-container">
            <div className="container-lg">
              <div>
                <div className="row pb-5 mb-5" >
                  <div className="col-md-7">
                    <p className="site-header pb-3">Child & Adolescent Counseling</p>
                    <p className="sm-text font-bold pb-2">What is Child & Adolescent Counseling?</p>
                    <p className="light-text-2 pb-2">Child and adolescent counseling is a therapeutic process designed to help young individuals cope with emotional, social, and psychological challenges. It provides a safe space for them to express their feelings, develop healthy coping skills, and work through difficulties with the guidance of trained professionals. <br /> <br />
                    Our therapy sessions are tailored to each child’s or teenager’s specific needs, using individual therapy, family therapy, play therapy, cognitive-behavioral therapy (CBT), and other evidence-based techniques.
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

                    <p className="sm-text site-primary-text font-bold pb-2">Common Issues Addressed in Child & Adolescent Counseling</p>
                    <div>
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Anxiety & Stress – Helping children cope with worries, social anxiety, and school-related stress.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Depression – Addressing sadness, withdrawal, or low self-esteem in young individuals.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Behavioral Issues – Managing aggression, defiance, and impulsive behavior.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Academic & School-Related Stress – Coping strategies for test anxiety, learning difficulties, and performance pressure.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Family Conflict & Divorce Adjustment – Supporting children through family changes and relationship struggles.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Trauma & Abuse Recovery – Helping young individuals heal from traumatic experiences.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">Bullying & Peer Pressure – Teaching resilience, assertiveness, and emotional strength.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> Low Self-Esteem & Identity Struggles – Encouraging self-confidence and self-awareness.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Grief & Loss – Supporting children in processing loss and emotional pain.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2">  Attention-Deficit/Hyperactivity Disorder (ADHD) – Providing strategies to improve focus, organization, and behavior.</p>
                        </div>
                    </div>
                  </div>

                  <div className="">
                      <p className="sm-text  font-bold site-primary-text pb-3">Benefits of Child & Adolescent Counseling</p>
                      <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Improved Emotional Regulation – Helps children manage their emotions and reactions.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Healthier Coping Skills – Teaches practical techniques to deal with stress, anxiety, and peer pressure.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Better Communication – Encourages children to express their feelings openly and constructively.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Enhanced Academic & Social Performance – Reduces school-related stress and improves confidence.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Strengthened Family Relationships – Supports parents and caregivers in understanding their child's needs.</p>
                          </div>

                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Long-Term Mental Health Benefits – Builds resilience and emotional intelligence for future challenges.</p>
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
                      <p className="sm-text  font-bold site-primary-text pb-4">Approaches Used in Child & Adolescent Counseling</p>
                      <p className="pb-3 light-text-2">Our counselors use a variety of age-appropriate therapeutic techniques to help children and teenagers express themselves, process emotions, and develop coping strategies.</p>
                      <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Play Therapy – Engaging young children through play to help them express emotions and work through issues.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Cognitive-Behavioral Therapy (CBT) – Teaching children to identify and change negative thought patterns.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Art & Expressive Therapy – Using creative activities like drawing and storytelling to encourage self-expression.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Art & Expressive Therapy – Using creative activities like drawing and storytelling to encourage self-expression.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Mindfulness & Relaxation Techniques – Teaching children stress-relief exercises to manage anxiety.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Social Skills Training – Helping children develop positive relationships and communication skills.</p>
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
                  <p className="text-center site-primary-text sm-text uppercase font-bold pb-4">How to Get Started</p>
                  <div className="row justify-content-center">
                    <div className="col-sm-8 ">
                      <div className="home-what-we-do ps-4">
                        <p className="sm-text light-text-2">At Springfield Mental Health Services, we believe early intervention and support can make a significant difference in a child’s life. If your child or teenager is struggling with emotional or behavioral challenges, we are here to help.</p>
                        <p className="italic-text light-text-2 pt-3">Schedule a consultation today and give your child the support they need to thrive.</p>
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