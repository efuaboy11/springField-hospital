import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import "../../css/componentCss/sidebarBox.css"
import { Helmet } from "react-helmet-async"

export const PatientsResources = () =>{
  const { 
    OnbodyClick, 

  } = useContext(AuthContext)

  const [isFixed, setIsFixed] = useState(true);

  

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer"); // Select Footer
      const sidebar = document.querySelector(".sidebar");

      if (!footer || !sidebar) return;

      const footerTop = footer.getBoundingClientRect().top; // Footer position
      const sidebarHeight = sidebar.offsetHeight; // Sidebar height

      if (footerTop <= sidebarHeight + 600) {
        setIsFixed(false); // Switch to absolute
      } else {
        setIsFixed(true); // Keep fixed
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return(
    <div>
      <Helmet>
        <title>Patient Resources & Support | Springfield Mental Health and Pyschosocal Services</title>
        <meta name="description" content="Access valuable mental health resources, support groups, and self-help tools at Springfield Mental Health and Pyschosocal Services." />
        <meta name="keywords" content="Mental Health Resources, Patient Support, Therapy Tools, Springfield Counseling, Self-Help, Support Groups, Mental Wellness" />
        <meta property="og:title" content="Patient Resources & Support | Springfield Mental Health and Pyschosocal Services" />
        <meta property="og:description" content="Explore a wide range of resources and support options for your mental health and well-being." />
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
                  <p className="site-primary-text md-text font-bold">Patient Resources & Support</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Patients & Visitors <i class="ri-arrow-right-fill"></i>Patient Resources & Support</p>
                </div>
                
              </div>
            </div>
          </div>

          <div className="container-lg pb-5 mb-4">
          <div className="row g-4">
            <div className="col-xl-9 col-md-8">
              <div className="row">
                <div className="col-lg-11">
                  <div>
                    <p className="pb-4 site-header font-weight-700">Patient Resources & Support</p>
										<p className="light-text-2 pb-5">At Springfield Mental Health Services, we are committed to providing patients with comprehensive resources and ongoing support to help them navigate their mental health journey. We understand that recovery and well-being require more than just therapy sessions—having access to educational materials, support groups, financial assistance, and crisis intervention services can make a significant difference.</p>
                  </div>

                  <section>
                    <div className="pb-4">
                      <h3>1.   Educational Resources</h3>
                      <div className="ps-3 pt-4 light-text-2">
                        <div>
                          <p className="font-bold sm-text pb-3">I.  Mental Health Library</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Our website and facility provide a library of mental health articles, brochures, and guides covering topics such as anxiety, depression, coping strategies, and treatment options.</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">II. Workshops & Webinars</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> We offer regular workshops and online webinars on various mental health topics, including stress management, mindfulness, and coping techniques.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Patients can participate in-person or virtually to learn more about their conditions and ways to improve their mental health.</p>
                            </div>

                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">III. Psychoeducation Programs</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">Our psychoeducation sessions help patients and families understand mental health conditions, medication management, and therapeutic approaches to better support recovery.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Inappropriate behavior, including disruptive conduct, verbal abuse, or refusal to comply with staff directives, will result in removal from the facility.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pb-4">
                      <h3>2.   Support Groups & Peer Networks</h3>
                      <div className="ps-3 pt-4 light-text-2">
                        <div>
                          <p className="font-bold sm-text pb-3">I.  Group Therapy & Peer Support</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> We offer group therapy sessions and peer support groups for individuals struggling with similar mental health challenges.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Groups may focus on grief, addiction recovery, trauma, anxiety, depression, and more.</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">II. Family & Caregiver Support</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">Mental health recovery is a journey that affects not just the individual but their loved ones as well. We provide support groups and educational resources for family members and caregivers to help them better support their loved ones.</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">III. Online Community & Forums</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> We offer access to moderated online forums and peer communities where patients can connect, share experiences, and seek advice in a safe and supportive environment.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pb-4">
                      <h3>3.   Financial Assistance & Insurance Support</h3>
                      <div className="ps-3 pt-4 light-text-2">
                        <div>
                          <p className="font-bold sm-text pb-3">I. Understanding Insurance Coverage</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> We assist patients in navigating their insurance plans, including coverage for therapy, medication, and psychiatric services.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Our staff can help verify insurance benefits and explain out-of-pocket costs before starting treatment.</p>
                            </div>

                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">II. Sliding Scale & Payment Plans</p>
                          <div className="ps-3">
													<p className="pb-2 light-text-2">We believe financial barriers should not prevent anyone from accessing mental health care. We offer:</p>
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">Sliding scale fees based on income</p>
                            </div>

														<div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">Flexible payment plans for those without insurance</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">III. Access to Low-Cost or Free Resources</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">We provide information on nonprofit organizations, state-funded programs, and grants that help cover mental health services for those in need.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pb-4">
                      <h3>4.    Crisis & Emergency Support</h3>
                      <div className="ps-3 pt-4 light-text-2">
                        <div>
                          <p className="font-bold sm-text pb-3">I. 24/7 Crisis Helpline</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> If you or a loved one is experiencing a mental health crisis, our 24/7 helpline provides immediate assistance, guidance, and referrals.</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">II. Emergency Intervention Services</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">For individuals facing severe distress, suicidal thoughts, or psychiatric emergencies, we coordinate with crisis intervention teams, hospitals, and emergency services to ensure immediate care and safety.</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">III. Safety Planning & Suicide Prevention</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> We work with patients to develop personalized safety plans, providing resources to help them manage distressing situations before they escalate.															</p>
                            </div>
                          </div>
                        </div>

                        
              
                      </div>
                    </div>

                    <div className="pb-4">
                      <h3>5.  Emergency Situations & Security</h3>
                      <div className="ps-3 pt-4 light-text-2">
                        <div>
                          <p className="font-bold sm-text pb-3">I.Evacuation & Emergency Protocols</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> In the event of an emergency (fire, medical incident, security threat, etc.), visitors should follow all staff instructions and proceed to designated emergency exits.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Security personnel are available 24/7 to assist in emergencies.</p>
                            </div>

                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">II. Incident Reporting</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">Visitors who witness suspicious behavior, disturbances, or medical emergencies should immediately report it to facility staff or security.                              </p>
                            </div>
                          </div>
                        </div>

                        
              
                      </div>
                    </div>

                    <div className="pb-4">
                      <h3>6.  Consequences for Violating Visitor Guidelines</h3>
                      
                      <div className="ps-3 pt-4 light-text-2">
                        <p className="pb-2 ps-3 light-text-2">Failure to follow these guidelines may result in:</p>
                        <div>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> A warning from staff or security personnel</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">  Immediate removal from the facility</p>
                            </div>
                            
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">   Temporary or permanent restrictions on visiting privileges</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">   Legal action (in cases of violence, threats, or serious infractions)</p>
                            </div>
                          </div>
                        </div>

                        
              
                      </div>
                    </div>
                  </section>

									<section className="site-section-container">
										<div>
											<p className="sm-text site-primary-text font-bold">How to Access Our Resources & Support Services</p>
											<div className="light-text-2">
												<p className="font-bold pb-3">Patients can access our resources by:</p>
												<p>I.  Visiting our Patient Resource Center at the facility</p>
												<p>II.  Exploring our online resource hub on our website</p>
												<p>III.  Attending support groups and educational workshops</p>
												<p>IV.  Calling our helpline for guidance</p>
											</div>
											<p className="pt-4 light-text-2">At Springfield Mental Health Services, we believe in holistic mental health care that extends beyond therapy sessions. Our resources and support systems are designed to empower individuals, promote healing, and improve overall well-being. <span className="site-primary-text font-bold">You are not alone—help is available, and we are here to support you every step of the way.</span></p>

										</div>
									</section>
                </div>
              </div>
            </div>

            <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
              <aside className="sidebar  position-relative1">
                <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} sidebar-box`}>
                  <div className="me-5">
                    <Link className="sidebar-box-link" to='/patients-visitor/appointment-scheduling/'>Appointment & Scheduling</Link>
                    <Link to='/patients-visitor/what-to-expect/' className="sidebar-box-link " >What to Expect</Link>
                    <Link to='/patients-visitor/visitors-guideline/' className="sidebar-box-link " >Visitor Guidelines</Link>
                    <Link to='/patients-visitor/patient-resources-support/' className="sidebar-box-link sidebar-box-active-link" >Patient Resources & Support</Link>

                    
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>


        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
      
    </div>









      
  )
}