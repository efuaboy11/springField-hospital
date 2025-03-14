import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import "../../css/componentCss/sidebarBox.css"

export const VisitorGuidelines = () =>{
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
                  <p className="site-primary-text md-text font-bold">Visitor Guidelines</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Patients & Visitors <i class="ri-arrow-right-fill"></i>Visitor Guidelines</p>
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
                    <p className="pb-4 site-header font-weight-700">Visitor Guidelines at Springfield Mental Health Services</p>
										<p className="light-text-2 pb-5">At Springfield Mental Health Services, we prioritize the safety, privacy, and comfort of our patients while ensuring a supportive and welcoming environment for visitors. To maintain a peaceful, respectful, and therapeutic atmosphere, we have established the following Visitor Guidelines that all guests are required to follow when visiting our facility.</p>
                  </div>

                  <section>
                    <div className="pb-4">
                      <h3>1.   General Visitor Rules</h3>
                      <div className="ps-3 pt-4 light-text-2">
                        <div>
                          <p className="font-bold sm-text pb-3">I. Respect Patient Privacy</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Visitors must respect the confidentiality of all patients. Any information about a patient’s treatment, diagnosis, or condition is strictly private and should not be discussed outside of the facility.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Taking photos, videos, or audio recordings inside the facility is strictly prohibited to protect patient confidentiality.</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">II. Check-In Process</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> All visitors must register at the reception desk upon arrival and provide valid identification if requested.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> A visitor pass will be issued, which should be worn at all times while inside the facility.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Visitors must remain in the designated waiting areas unless granted permission to accompany a patient.</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">III. Respect Facility Rules & Staff Instructions</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Follow all facility rules and staff instructions at all times.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Inappropriate behavior, including disruptive conduct, verbal abuse, or refusal to comply with staff directives, will result in removal from the facility.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Threatening or aggressive behavior toward staff, patients, or other visitors will not be tolerated and may result in legal action.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pb-4">
                      <h3>2.   Visiting Hours & Limitations</h3>
                      <div className="ps-3 pt-4 light-text-2">
                        <div>
                          <p className="font-bold sm-text pb-3">I. Standard Visiting Hours</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Monday – Friday: 9:00 AM – 7:00 PM</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Saturday – Sunday: 10:00 AM – 5:00 PM</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Holidays: Limited hours apply (please check in advance).</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">II. Length of Visits</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">To ensure patients receive adequate rest and uninterrupted treatment, visits should be limited to 30–60 minutes, unless special arrangements have been made.</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">III. Maximum Number of Visitors</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Each patient is allowed up to two visitors at a time unless otherwise approved by the care team.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Large groups should schedule visits in advance to prevent overcrowding in common areas.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pb-4">
                      <h3>3.   Visitor Restrictions & Special Considerations</h3>
                      <div className="ps-3 pt-4 light-text-2">
                        <div>
                          <p className="font-bold sm-text pb-3">I. Restricted Areas</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Some sections of our facility, such as therapy rooms, inpatient treatment areas, and medical offices, are restricted to visitors unless special permission is granted.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Visitors must remain in the designated waiting areas, lounges, or consultation rooms when waiting for a patient.</p>
                            </div>

                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">II. Health & Safety Requirements</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">Visitors experiencing symptoms of illness (fever, cough, flu, or contagious infections) should postpone their visit until they have fully recovered.</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">III. Minors & Children Visitors</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Children under 12 years old are not allowed in patient treatment areas unless approved by a mental health professional.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> If a child is permitted to visit, they must be accompanied by an adult at all times and should not be left unattended.</p>
                            </div>
                          </div>
                        </div>

                        
                        <div>
                          <p className="font-bold sm-text pb-3">IV. Prohibited Items</p>
                          <p className="light-text-2 pb-2">The following items are NOT allowed inside the facility:</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Alcohol, drugs, or any intoxicating substances</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Weapons, sharp objects, or any potentially dangerous materials</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Loud electronics, speakers, or disruptive personal devices</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Outside food or drinks (unless permitted by medical staff)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pb-4">
                      <h3>4.    Special Accommodations & Support</h3>
                      <div className="ps-3 pt-4 light-text-2">
                        <div>
                          <p className="font-bold sm-text pb-3">I. Emotional Support Persons & Therapy Animals</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> If a patient requires an emotional support person, visitors should inform staff in advance so arrangements can be made.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Service animals are allowed with proper documentation, but general pets are not permitted inside the facility.</p>
                            </div>

                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">II. interpreter & Communication Assistance</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">If a visitor or patient requires an interpreter or assistance with communication (sign language, language translation, etc.), please notify the staff ahead of time.</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-bold sm-text pb-3">III. Spiritual & Religious Support</p>
                          <div className="ps-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Visitors seeking spiritual or religious guidance may request a visit from a chaplain, religious counselor, or spiritual advisor, depending on availability.</p>
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
                </div>
              </div>
            </div>

            <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
              <aside className="sidebar  position-relative1">
                <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} sidebar-box`}>
                  <div className="me-5">
                    <Link className="sidebar-box-link" to='/patients-visitor/appointment-scheduling/'>Appointment & Scheduling</Link>
                    <Link to='/patients-visitor/what-to-expect/' className="sidebar-box-link " >What to Expect</Link>
                    <Link to='/patients-visitor/visitors-guideline/' className="sidebar-box-link sidebar-box-active-link" >Visitor Guidelines</Link>
                    <Link to='/patients-visitor/patient-resources-support/' className="sidebar-box-link " >Patient Resources & Support</Link>

                    
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