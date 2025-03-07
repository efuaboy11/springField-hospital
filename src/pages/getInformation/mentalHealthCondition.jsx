import { useContext, useState } from "react"
import { Header, Navbar } from "../../component/navbar"
import AuthContext from "../../context/AuthContext"
import '../../css/style.css'
import { Footer } from "../../component/footer"
import { Link } from "react-router-dom"
import '../../css/informationCss/getInformation.css'

import condition1 from '../../img/condition1.jpg'
import condition2 from '../../img/conditon2.jpg'
import condition3 from '../../img/condition3.jpg'
import condition4 from '../../img/condition4.jpg'
import condition5 from '../../img/condition5.png'
import condition6 from '../../img/condition6.jpg'
import condition7 from '../../img/condition7.jpg'
import condition8 from '../../img/condition8.jpg'
import condition9 from '../../img/condition9.jpg'
import condition10 from '../../img/condition10.jpg'
import condition11 from '../../img/condition11.jpg'
import condition12 from '../../img/condition12.jpg'
import condition13 from '../../img/condition13.jpg'
import condition14 from '../../img/condition14.jpg'
import condition15 from '../../img/condition15.jpg'
import condition16 from '../../img/condition16.jpg'
import condition17 from '../../img/condition17.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRibbon } from "@fortawesome/free-solid-svg-icons"
import HotLineDetails from "../../component/hotlineDetails"

export const MentalHealthCondition = () =>{
  const { 
    OnbodyClick, 
    navOverlay,

  } = useContext(AuthContext)

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
                    <p className="site-primary-text md-text font-bold">Mental Health Conditions</p>
                    <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Information <i class="ri-arrow-right-fill"></i>Mental Health Condition</p>
                  </div>
                  
                </div>
              </div>
            </div>


            <section className="site-section-container">
              <div className="container-lg">
                <div>
                  <p className="site-header text-center pb-5">Mental Health Conditions</p>

                  <div className="row g-4">
                    <div className="col-lg-3 col-md-4 col-6">
                      <div className="get-information-conditions-img-container border-radius-10px ">
                        <img src={condition1} alt="" />
                        <div class="get-information-conditions-img-overlay px-4 d-flex align-buttom">
                          <div className="pb-2 width-100">
                            <Link to='/mental-health-condition/depression/' className="site-btn width-100 text-center">Depression</Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">
                      <div className="get-information-conditions-img-container border-radius-10px ">
                        <img src={condition2} alt="" />
                        <div class="get-information-conditions-img-overlay px-4 d-flex align-buttom">
                          <div className="pb-2 width-100">
                            <Link to='/mental-health-condition/anxiety/' className="site-btn width-100 text-center">Anxiety</Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">
                      <div className="get-information-conditions-img-container border-radius-10px ">
                        <img src={condition3} alt="" />
                        <div class="get-information-conditions-img-overlay px-4 d-flex align-buttom">
                          <div className="pb-2 width-100">
                            <Link to='/mental-health-condition/bipolar/' className="site-btn width-100 text-center">Bipolar</Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">
                      <div className="get-information-conditions-img-container border-radius-10px ">
                        <img src={condition4} alt="" />
                        <div class="get-information-conditions-img-overlay px-4 d-flex align-buttom">
                          <div className="pb-2 width-100">
                            <Link to='/mental-health-condition/PTSD/' className="site-btn width-100 text-center">PTSD</Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">
                      <div className="get-information-conditions-img-container border-radius-10px ">
                        <img src={condition6} alt="" />
                        <div class="get-information-conditions-img-overlay px-4 d-flex align-buttom">
                          <div className="pb-2 width-100">
                            <Link to='/mental-health-condition/Schizophrenia/' className="site-btn width-100 text-center">schizophrenia</Link>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="col-lg-3 col-md-4 col-6">
                      <div className="get-information-conditions-img-container border-radius-10px ">
                        <img src={condition5} alt="" />
                        <div class="get-information-conditions-img-overlay px-4 d-flex align-buttom">
                          <div className="pb-2 width-100">
                            <Link to='/mental-health-condition/mood-disorder/' className="site-btn width-100 text-center">Mood Disorders</Link>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="col-lg-3 col-md-4 col-6">
                      <div className="get-information-conditions-img-container border-radius-10px ">
                        <img src={condition8} alt="" />
                        <div class="get-information-conditions-img-overlay px-4 d-flex align-buttom">
                          <div className="pb-2 width-100">
                            <Link to='/mental-health-condition/panic-disorder/' className="site-btn width-100 text-center">Panic Disorder</Link>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="col-lg-3 col-md-4 col-6">
                      <div className="get-information-conditions-img-container border-radius-10px ">
                        <img src={condition7} alt="" />
                        <div class="get-information-conditions-img-overlay px-4 d-flex align-buttom">
                          <div className="pb-2 width-100">
                            <Link to='/mental-health-condition/psychosis/' className="site-btn width-100 text-center">Psychosis</Link>
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
                  <p className="site-header text-center pb-5">Major Topics in Mental Health</p>

                  <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                      <div>
                        <img  src={condition9} width='100%' alt="" />

                        <div className="py-4">
                          <p className="sm-text font-bold pb-3">Suicide</p>
                          <div className="d-flex pb-3">
                            <span className="get-information-blue-line"></span>
                            <span className="get-information-green-line"></span>
                            <span className="get-information-orange-line"></span>

                          </div>
                          <p className="light-text-2 mb-4">Suicide is a serious public health issue that affects individuals, families, and communities worldwide. It is often linked to mental health disorders like depression, bipolar disorder, or PTSD, but other factors such as substance abuse, trauma, and social isolation can also contribute. Understanding the warning signs and knowing how to seek help can save lives.</p>
                          <Link to='/mental-health-condition/suicide/' className="px-5 site-inverse-btn">Learn More </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div>
                        <img  src={condition10} width='100%' alt="" />

                        <div className="py-4">
                          <p className="sm-text font-bold pb-3">Warning Signs</p>
                          <div className="d-flex pb-3">
                            <span className="get-information-blue-line"></span>
                            <span className="get-information-green-line"></span>
                            <span className="get-information-orange-line"></span>

                          </div>
                          <p className="light-text-2 mb-4">Mental health challenges can develop gradually or appear suddenly. Recognizing early warning signs is crucial in getting timely help and preventing further complications. Changes in mood, behavior, thoughts, and physical health can all be indicators that someone is struggling with their mental well-being.</p>
                          <Link to='/mental-health-condition/warniing-signs/' className="px-5 site-inverse-btn">Learn More </Link>
                        </div>
                      </div>
                    </div>


                    <div className="col-lg-4 col-md-6">
                      <div >
                        <img  src={condition11} width='100%' alt="" />

                        <div className="py-4">
                          <p className="sm-text font-bold pb-3">BIPOC Mental Health</p>
                          <div className="d-flex pb-3">
                            <span className="get-information-blue-line"></span>
                            <span className="get-information-green-line"></span>
                            <span className="get-information-orange-line"></span>

                          </div>
                          <p className="light-text-2 mb-4">Mental health challenges affect everyone, but historical, cultural, and systemic factors create unique struggles for BIPOC communities. Discrimination, generational trauma, and barriers to healthcare contribute to disparities in mental health care access and outcomes. Understanding these challenges and advocating for culturally competent support is essential.</p>
                          <Link to='/mental-health-condition/BIPOC/' className="px-5 site-inverse-btn">Learn More </Link>
                        </div>
                      </div>
                    </div>



                    <div className="col-lg-4 col-md-6">
                      <div>
                        <img  src={condition12} width='100%' alt="" />

                        <div className="py-4">
                          <p className="sm-text font-bold pb-3">Youth</p>
                          <div className="d-flex pb-3">
                            <span className="get-information-blue-line"></span>
                            <span className="get-information-green-line"></span>
                            <span className="get-information-orange-line"></span>

                          </div>
                          <p className="light-text-2 mb-4">Mental health is just as important as physical health, especially for young people. Today’s youth face academic pressures, social challenges, family issues, and digital stress, all of which can impact their emotional well-being. Addressing mental health early can prevent long-term struggles and build resilience.</p>
                          <Link to='/mental-health-condition/youth/' className="px-5 site-inverse-btn">Learn More </Link>
                        </div>
                      </div>
                    </div>


                    <div className="col-lg-4 col-md-6">
                      <div>
                        <img  src={condition13} width='100%' alt="" />

                        <div className="py-4">
                          <p className="sm-text font-bold pb-3">Old Adults</p>
                          <div className="d-flex pb-3">
                            <span className="get-information-blue-line"></span>
                            <span className="get-information-green-line"></span>
                            <span className="get-information-orange-line"></span>

                          </div>
                          <p className="light-text-2 mb-4">Mental health is essential at every stage of life, including older adulthood. As people age, they may experience life transitions, health challenges, and social changes that can impact their emotional well-being. Prioritizing mental health in older adults is crucial for maintaining quality of life, independence, and overall well-being.</p>
                          <Link to='/mental-health-condition/old-adult/' className="px-5 site-inverse-btn">Learn More </Link>
                        </div>
                      </div>
                    </div>


                    <div className="col-lg-4 col-md-6">
                      <div>
                        <img  src={condition14} width='100%' alt="" />

                        <div className="py-4">
                          <p className="sm-text font-bold pb-3">Co-Dependency</p>
                          <div className="d-flex pb-3">
                            <span className="get-information-blue-line"></span>
                            <span className="get-information-green-line"></span>
                            <span className="get-information-orange-line"></span>

                          </div>
                          <p className="light-text-2 mb-4">Co-dependency is a behavioral and emotional condition that affects a person's ability to have a healthy, balanced relationship. It often involves excessive emotional reliance on another person, usually a partner, family member, or friend. This can lead to patterns of self-sacrifice, low self-esteem, and difficulty setting boundaries, impacting mental well-being.</p>
                          <Link to='/mental-health-condition/co-dependency/' className="px-5 site-inverse-btn">Learn More </Link>
                        </div>
                      </div>
                    </div>



                    <div className="col-lg-4 col-md-6">
                      <div>
                        <img  src={condition15} width='100%' alt="" />

                        <div className="py-4">
                          <p className="sm-text font-bold pb-3"> Internet Addiction</p>
                          <div className="d-flex pb-3">
                            <span className="get-information-blue-line"></span>
                            <span className="get-information-green-line"></span>
                            <span className="get-information-orange-line"></span>

                          </div>
                          <p className="light-text-2 mb-4">Internet addiction is a growing concern in today’s digital world. It refers to excessive, compulsive, or uncontrollable use of the internet that interferes with daily life, relationships, and mental health. While technology is essential for work, education, and social connection, excessive internet use can lead to negative psychological and emotional effects.</p>
                          <Link to='/mental-health-condition/internet-addition/' className="px-5 site-inverse-btn">Learn More </Link>
                        </div>
                      </div>
                    </div>


                    <div className="col-lg-4 col-md-6">
                      <div>
                        <img  src={condition16} width='100%' alt="" />

                        <div className="py-4">
                          <p className="sm-text font-bold pb-3">Marijuana Use</p>
                          <div className="d-flex pb-3">
                            <span className="get-information-blue-line"></span>
                            <span className="get-information-green-line"></span>
                            <span className="get-information-orange-line"></span>

                          </div>
                          <p className="light-text-2 mb-4">Marijuana, also known as cannabis, weed, or pot, is a commonly used substance that affects the brain and body. While some people use it for medical or recreational purposes, excessive or prolonged use can impact mental health, cognitive function, and emotional well-being.</p>
                          <Link to='/mental-health-condition/marijuana/' className="px-5 site-inverse-btn">Learn More </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div>
                        <img  src={condition17} width='100%' alt="" />

                        <div className="py-4">
                          <p className="sm-text font-bold pb-3">Sexual Assault and Mental Health</p>
                          <div className="d-flex pb-3">
                            <span className="get-information-blue-line"></span>
                            <span className="get-information-green-line"></span>
                            <span className="get-information-orange-line"></span>

                          </div>
                          <p className="light-text-2 mb-4">Sexual assault is a traumatic experience that can have profound effects on mental health, emotional well-being, and daily life. Survivors may experience a range of psychological, emotional, and physical challenges as they process their trauma. It is crucial to provide support, resources, and mental health care to help survivors heal and regain control over their lives.</p>
                          <Link to='/mental-health-condition/sexual-assault/' className="px-5 site-inverse-btn">Learn More </Link>
                        </div>
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>
            </section>

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