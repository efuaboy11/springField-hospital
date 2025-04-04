import { useContext, useState } from "react"
import { Header, Navbar } from "../../component/navbar"
import AuthContext from "../../context/AuthContext"
import '../../css/style.css'
import { HomeCoverCarousel } from "../../swiperConatiner/homeSwiper"
import img1 from '../../img/img1.png'
import features1 from '../../img/features1.png'
import features2 from '../../img/features2.png'
import features3 from '../../img/features3.png'
import features4 from '../../img/cover-icon2.png'
import nigeria1 from '../../img/nigeria1.jpg'
import depression1 from '../../img/depression1.jpg'
import depression2 from '../../img/depression2.jpg'
import depression3 from '../../img/depression3.png'
import depression4 from '../../img/depression4.jpg'
import adultDepression1  from '../../img/anxiey-icon1.png'
import adultDepression2  from '../../img/depressed-icon1.png'
import why1  from '../../img/doctor-icon.png'
import why2 from '../../img/emergency-icon.png'
import why3 from '../../img/share-love-icon.png'
import why4 from '../../img/safe-earth-icon.png'
import gallery1 from '../../img/staff.jpg'
import gallery2 from '../../img/patient.jpg'
import gallery3 from '../../img/chess.jpg'
import gallery4 from '../../img/people.jpg'
import gallery5 from '../../img/tensis.jpg'
import gallery6 from '../../img/group-people.jpg'
import gallery7 from '../../img/chess.jpg'
import reg1 from '../../img/reg1.png'
import reg2 from '../../img/reg2.png'
import reg4 from '../../img/reg4.png'
import '../../css/informationCss/home.css'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import customer1 from '../../img/customer1.jpg'
import customer2 from '../../img/customer-2.jpg'
import customer3 from '../../img/customer3.jpg'
import { Footer } from "../../component/footer"
import WhyChooseUs from "../../component/whyChooseUs"
import { Helmet } from "react-helmet-async"


export const Home = () =>{

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
      <Helmet>
        <title>Home | Springfield Mental Health and Pyschosocal Services</title>
        <meta name="description" content="Welcome to Springfield Mental Health and Pyschosocal Services. Explore our mental health services, expert counseling, and commitment to your well-being." />
        <meta name="keywords" content="Mental Health, Therapy, Counseling, Springfield, Mental Wellness, Psychology, Support, Well-being" />
        <meta property="og:title" content="Springfield Mental Health and Pyschosocal Services - Your Path to Wellness" />
        <meta property="og:description" content="Providing compassionate mental health care and support to help you thrive." />
      </Helmet>

      <div>
        <div>
          <Header />
        </div>
        <div className="position-sticky1">
          <Navbar />
        </div>

        <div onClick={OnbodyClick} className={`${navOverlay ? 'kl' : ""}`}>
          <HomeCoverCarousel />
          
          <div>
            <section className="section-intro">
              <div className="container-lg">
                <div className="row">
                  <div className="col-md-5 col-lg-7">
                    <div className="d-none d-md-block">
                      <img width='100%'src={img1} alt="" />
                    </div>
                  </div>

                  <div className="col-md-7 col-lg-5">
                    <div className="d-flex align-center responsive-centralized-text">
                      <div>
                        <p className="xl-text font-bold pb-4">Your Mental Health is Our Priority</p>
                        <p className="light-text-2 italic-text">Mental health is as important as physical health. It affects how we think, feel, and interact with the world. Seeking help is not a sign of weakness but a courageous step towards healing and growth. Our facility provides a safe space where you can find the support you need to overcome challenges and build a fulfilling life.</p>
                        <div className="mt-5">
                          <Link to='/mental-health-condition/' className="site-btn width-100 text-center">Learn More</Link>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
     
              </div>
          

            </section>

            <section className="site-section-container">
              <div className="container-lg">
                <div className="row g-4 responsive-centralized-text">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div>
                      <img src={features2} width='80px' alt="" />
                      <div className="pt-4">
                        <p className="font-bold sm-text pb-2">Common Conditions</p>
                        <p className="light-text-2">Anxiety, depression, PTSD, bipolar disorder, addiction, stress management, OCD, trauma-related disorders, and eating disorders.</p>
                        
                      </div>

                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div>
                      <img src={features3} width='80px' alt="" />
                      <div className="pt-4">
                        <p className="font-bold sm-text pb-2">Approach to Treatment</p>
                        <p className="light-text-2">Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), holistic healing, medication-assisted treatment, group therapy, mindfulness techniques, lifestyle counseling, and neurotherapy.</p>
                        
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div>
                      <img src={features1} width='80px' alt="" />
                      <div className="pt-4">
                        <p className="font-bold sm-text pb-2">Specialized Programs</p>
                        <p className="light-text-2">Individual therapy, couples therapy, inpatient and outpatient care, crisis intervention, adolescent mental health programs, support groups for caregivers, and workplace mental health programs.</p>
                        
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div>
                      <img src={features4} width='80px' alt="" />
                      <div className="pt-4">
                        <p className="font-bold sm-text pb-2">Mental Wellness & Prevention</p>
                        <p className="light-text-2">Stress reduction techniques, emotional resilience training, workplace mental health initiatives, school-based mental health programs, and community outreach for early intervention.</p>
                        
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
                    <img width='100%' src={nigeria1} alt="" />
                  </div>


                  <div className="col-md-6 responsive-centralized-text">
                    <div className="">
                      <p className="site-header pb-4">Mental Health Condition in <br /> Nigeria Today</p>
                      <p className="light-text-2">Mental health in Nigeria remains a major public health concern, with rising cases of anxiety, depression, PTSD, and substance abuse. Despite a growing awareness, stigma and lack of access to quality mental health care continue to be major challenges. The country has limited mental health professionals, with only a few psychiatric hospitals serving millions of people. In 2022, Nigeria passed its Mental Health Act, aiming to improve policies and protect the rights of those with mental illnesses. However, funding, infrastructure, and awareness programs are still inadequate. More efforts are needed to integrate mental health care into primary health services and community support systems.</p>
                      <div className="mt-4">
                        <Link to='/get-information/mental-health-statistics/' className="site-inverse-btn width-100 text-center">Learn More</Link>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </section>

            <section className="site-section-container mt-5 pt-5">
              <div className="container-lg">
                <div className="light-background2 px-3 pb-3 border-radius-10px">
                  <div className="row g-4 justify-content-center align-center">
                    <div className="col-lg-5">
                      <div className="row g-4">
                        <div className="col-6">
                          <div>
                            <div className="pb-4">
                              <img className="border-radius-10px" width='100%' src={depression2} alt="" />
                            </div>
                            <img  className="border-radius-10px" width='100%' src={depression4} alt="" />
                          </div>
                        </div>

                        <div className="col-6">
                          <div>
                            <div className="pb-4">
                              <img  className="border-radius-10px" width='100%' src={depression3} alt="" />
                            </div>
                            <img  className="border-radius-10px" width='100%' src={depression1} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 responsive-centralized-text">
                      <div>
                        <div>
                          <p className="font-bold site-primary-text pb-2">SOME FACT ABOUT</p>
                          <p className="site-header">Nigerian adults suffering from mental health issues</p>
                        </div>

                        <div className="row g-4 pt-4">
                          <div className="col-md-6">
                            <div className="boxes-shadow white-background border-radius-5px p-3">
                              <img width='50px' src={features2} alt="" />
                              <div className="pt-3">
                                <p className="sm-text font-bold">Mental Health Disorder</p>
                                <p className="light-text-2">Approximately 20%–30% of Nigerians, equating to around 40–60 million people, are believed to suffer from mental health disorders.</p>
                              </div>
                            </div> 
                          </div>

                          <div className="col-md-6">
                            <div className="boxes-shadow white-background border-radius-5px p-3">
                              <img width='50px' src={adultDepression2} alt="" />
                              <div className="pt-3">
                                <p className="sm-text font-bold">Depression</p>
                                <p className="light-text-2">Approximately 20%–30% of Nigerians, equating to around 40–60 million people, are believed to suffer from mental health disorders.</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="boxes-shadow white-background border-radius-5px p-3">
                              <img width='50px' src={adultDepression1} alt="" />
                              <div className="pt-3">
                                <p className="sm-text font-bold">Anxiety Disorders</p>
                                <p className="light-text-2">The same year, 4.9 million Nigerians (2.7% of the population) were reported to have anxiety disorders.</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="boxes-shadow white-background border-radius-5px p-3">
                              <img width='50px' src={features3} alt="" />
                              <div className="pt-3">
                                <p className="sm-text font-bold">Substance Use Disorders</p>
                                <p className="light-text-2">A study reported a lifetime prevalence of alcohol abuse at 2.8% and drug abuse at 1.0% among Nigerians.</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <Link to='/get-information/mental-health-statistics/'  className="site-inverse-btn width-100 text-center">Learn More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="site-section-container">
              <div>
                <div className="container-lg p-4">
                  <p className="text-center site-primary-text sm-text uppercase font-bold pb-4">What We Do</p>
                  <div className="row justify-content-center">
                    <div className="col-sm-8 ">
                      <div className="home-what-we-do ps-4">
                        <p className="sm-text light-text-2">” Our services include treatment for mental illnesses such as depression, anxiety, Schizophrenia, Attention Deficit Hyperactive Disorders, Alcohol and Drug addiction, and numerous other mental health disorders and emotional health concerns. “</p>
                      </div>                     
                    </div>
                    
                  </div>
                </div>
              </div>
            </section>

            <section>
              <WhyChooseUs />
            </section>

            <section className="site-section-container pb-5">
              <div className="container-lg">
                <div>
                  <p className="sm-text primary-text font-bold text-center pb-5 mb-3">Gallery</p>

                  <div className="row justify-content-center align-center">
                    <div className="col-11">
                      <div className="row g-4 align-center">
                        <div className="col-sm-3">
                          <img width='100%' src={gallery1} alt="" />
                        </div>
                        

                        <div className="col-sm-3">
                          <div className="pb-4">
                            <img width='100%' src={gallery2} alt="" />
                          </div>
                          <img width='100%' src={gallery4} alt="" />
                        </div>


                        <div className="col-sm-3">
                          <div className="pb-4">
                            <img width='100%' src={gallery5} alt="" />
                          </div>
                          <img width='100%' src={gallery6} alt="" />
                        </div>

                        <div className="col-sm-3">
                          <img width='100%' src={gallery7} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="site-section-container">
              <div className="container-lg">
                <p className="sm-text site-primary-text text-center font-bold uppercase">Four Step to a good mental health</p>


                <div className="row g-3 pt-5">
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="box-shadow-hover p-3 responsive-centralized-text">
                      <div>
                        <img width='80px' src={reg1} alt="" />
                        <div>
                          <p className="py-3 uppercase font-bold sm-text">1. Book Appointment</p>
                          <p className="light-text-2">Go to the book appointment section or click on the link below. Follow the instrustion on how to book an appointment</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="box-shadow-hover p-3 responsive-centralized-text">
                      <div>
                        <img width='80px' src={reg2} alt="" />
                        <div>
                          <p className="py-3 uppercase font-bold sm-text">2. Register</p>
                          <p className="light-text-2">Your appointment will be processed an email will be sent to you on a schedule date. You will come in for registration</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="box-shadow-hover p-3 responsive-centralized-text">
                      <div>
                        <img width='80px' src={features3} alt="" />
                        <div>
                          <p className="py-3 uppercase font-bold sm-text">3. Get Treated</p>
                          <p className="light-text-2">You will get the proper treatment to enhance a good mental health by mental health professionals.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="box-shadow-hover p-3 responsive-centralized-text">
                      <div>
                        <img width='80px' src={reg4} alt="" />
                        <div>
                          <p className="py-3 uppercase font-bold sm-text">4. Post Medication</p>
                          <p className="light-text-2">After you are done with treatment, you will be guided on how to continue treatment to aviod relapse. You will added to our community.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 d-flex justify-content-center">
                  <Link to='/book-appointment/' className="site-btn px-5">Book Appointment</Link>
                </div>
              </div>
            </section>

            <section className="site-section-container">
              <div className="container-lg">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <div style={{ width: "100%", height: "auto", position: "relative", paddingBottom: "56.25%" }}>
                      <iframe
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                        src="https://www.youtube.com/embed/sgCtfRGLmi8?si=659-PA1vG98ObKuQ?autoplay=0&mute=1&loop=1"
                        title="YouTube Video"
                        frameBorder="0"
                        allow="encrypted-media; fullscreen"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="site-section-container">
              <div className="container-lg">
                <div className="row justify-content-center">
                  <div className="text-center  col-lg-8 col-md-10">
                    <p className="site-primary-text font-bold">FAQ</p>
                    <p className="site-header pb-4 font-bold">Have more questions about Mental Health?</p>
                    <p className="light-text-2">If you have more questions about Mental health, feel free to contact our customer support team that will gladly answer any questions you may have about enhancing a goood mental</p>
                  </div>
                </div>

                <div className="pt-5">
                  <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep1}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5"> What are the common signs of mental health issues? </p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={` dropdown-content  ${step1Dropdown ? "slide-in" : "slide-out"}`}>
                      <p className="ps-5 pt-4">Mental health issues can manifest in various ways, including persistent sadness, extreme mood swings, anxiety, withdrawal from social activities, difficulty concentrating, changes in sleep or appetite, and feelings of hopelessness. If these symptoms interfere with daily life, seeking professional help is recommended.</p>
                    </div>
                  </div>

                  <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep2}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5">  How can I support a loved one struggling with mental health challenges?   </p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={` dropdown-content  ${step2Dropdown ? "slide-in" : "slide-out"}`}>
                      <p className="ps-5 pt-4">Offer a listening ear without judgment, encourage them to seek professional help, and educate yourself about their condition. Provide emotional support, respect their boundaries, and remind them they are not alone. If they are in crisis, help them connect with emergency support services.</p>
                    </div>
                  </div>

                  <div className="box-shadow-2 mb-3  py-3 " onClick={toggleStep3}>
                    <div className="d-flex justify-content-between font-bold  cursor-pointer">
                      <p className="ps-5"> Can mental health conditions be treated or managed?   </p>
                      <p className="pe-3"><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>
                    
                    <div className={` dropdown-content  ${step3Dropdown ? "slide-in" : "slide-out"}`}>
                      <p className="ps-5 pt-4">Yes, most mental health conditions can be effectively treated or managed with therapy, medication, lifestyle changes, and support systems. Early intervention and a personalized approach improve recovery outcomes and overall well-being.</p>
                    </div>
                  </div>
                </div>

              </div>


            </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div className="text-center">
                <p className="site-primary-text font-bold">OUR REVIEWS</p>
                <p className="site-header font-bold">We Have Happy Customers That Trust <br /> Our Services</p>
              </div>

              <div className="row gx-3 gy-4 pt-5">
                <div className="col-lg-4 col-md-6">
                  <div className="position-relative1">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div className="row align-center pb-4">
                        <div className="col-10">
                          <div className="d-flex">
                            <i class="ri-star-fill sm-text gold-text"></i>
                            <i class="ri-star-fill sm-text gold-text"></i>
                            <i class="ri-star-fill sm-text gold-text"></i>
                            <i class="ri-star-fill sm-text gold-text"></i>
                            <i class="ri-star-half-line sm-text gold-text"></i>
                          </div>
                        </div>

                        <div className="col-2">
                          <i class="ri-double-quotes-l xl-text site-primary-text"></i>
                        </div>
                      </div>
                      <p className="light-text-2 italic-text">Springfield Mental Health Services has truly changed my life. The therapists are compassionate and knowledgeable, and they provided me with the tools to manage my anxiety. I feel more in control of my emotions and confident in handling daily stress. Highly recommend!</p>


                    </div>
                    <div className="home-review-angle">
                      <i class="bi bi-caret-down-fill"></i>
                    </div>
                  </div>

  
                  <div className="pt-5 d-flex text-center justify-content-center font-bold ">
                      <div>
                        <img width='70px' height='70px' className="p-1 site-round-border border-radius-50" src={customer2} alt="" />
                        <p className="sm-text font-bold">Okechucku Micheal</p>
                        <p className="light-text-2 font-bold">Teacher</p>
                      </div>
                  </div>

                </div>


                <div className="col-lg-4 col-md-6">
                  <div className="position-relative1">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div className="row align-center pb-4">
                        <div className="col-10">
                          <div className="d-flex">
                            <i class="ri-star-fill sm-text gold-text"></i>
                            <i class="ri-star-fill sm-text gold-text"></i>
                            <i class="ri-star-fill sm-text gold-text"></i>
                            <i class="ri-star-fill sm-text gold-text"></i>
                            <i class="ri-star-half-line sm-text gold-text"></i>
                          </div>
                        </div>

                        <div className="col-2">
                          <i class="ri-double-quotes-l xl-text site-primary-text"></i>
                        </div>
                      </div>
                      <p className="light-text-2 italic-text">I was struggling with depression for years, and Springfield Mental Health Services provided the support I needed. Their personalized therapy sessions and mindfulness techniques helped me regain my motivation. The environment is safe and welcoming, making it easier to open up.</p>


                    </div>
                    <div className="home-review-angle">
                      <i class="bi bi-caret-down-fill"></i>
                    </div>
                  </div>

  
                  <div className="pt-5 d-flex text-center justify-content-center font-bold ">
                      <div>
                        <img width='70px' height='70px' className="p-1 site-round-border border-radius-50" src={customer1} alt="" />
                        <p className="sm-text font-bold">Janet Okwu</p>
                        <p className="light-text-2 font-bold">Banker</p>
                      </div>
                  </div>

                </div>


                <div className="col-lg-4 col-md-6">
                  <div className="position-relative1">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div className="row align-center pb-4">
                        <div className="col-10">
                          <div className="d-flex">
                            <i class="ri-star-fill sm-text gold-text"></i>
                            <i class="ri-star-fill sm-text gold-text"></i>
                            <i class="ri-star-fill sm-text gold-text"></i>
                            <i class="ri-star-fill sm-text gold-text"></i>
                            <i class="ri-star-line sm-text gold-text"></i>
                          </div>
                        </div>

                        <div className="col-2">
                          <i class="ri-double-quotes-l xl-text site-primary-text"></i>
                        </div>
                      </div>
                      <p className="light-text-2 italic-text">The team at Springfield Mental Health Services is exceptional. Their holistic approach to mental wellness helped me overcome burnout and stress. The therapists genuinely care, and their 24/7 support gave me reassurance whenever I needed it. Best decision I ever made!</p>


                    </div>
                    <div className="home-review-angle">
                      <i class="bi bi-caret-down-fill"></i>
                    </div>
                  </div>

  
                  <div className="pt-5 d-flex text-center justify-content-center font-bold ">
                      <div>
                        <img width='70px' height='70px' className="p-1 site-round-border border-radius-50" src={customer3} alt="" />
                        <p className="sm-text font-bold">David Osemudiamen</p>
                        <p className="light-text-2 font-bold">Entrepreneur</p>
                      </div>
                  </div>

                </div>
              </div>
            </div>
        
          </section>




          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
     
}