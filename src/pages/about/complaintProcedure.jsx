import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import "../../css/componentCss/sidebarBox.css"
import { Helmet } from "react-helmet-async"

export const ComplaintProcedure = () =>{
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
        <title>Complaint Procedure | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Learn how to file a complaint or provide feedback about your experience with Springfield Mental Health and Psychosocial Services." />
        <meta name="keywords" content="Complaint Procedure, Report Issue, Feedback, How to File a Complaint, Response and Investigation Process, Possible Outcomes and Resolutions Mental Health Services, Springfield Psychosocial Services" />
        <meta property="og:title" content="Complaint Procedure | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Understand the steps to file a complaint or share your concerns with Springfield Mental Health and Psychosocial Services." />
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
                  <p className="site-primary-text md-text font-bold">Complaint Procedure</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> About Facility <i class="ri-arrow-right-fill"></i>Complaint Procedure</p>
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
                    <div className="pb-5">
                      <p className="md-text font-bold pb-3">Complaint Procedure</p>
                      <p className="light-text-2 pb-3">At Springfield Mental Health, we are committed to providing high-quality mental health services and ensuring that every patient receives respectful and professional care. We recognize that concerns or complaints may arise, and we have established a structured procedure for handling them efficiently and fairly.</p>
                      <p className="light-text-2">Our complaint procedure are designed to adress patient concern in a timely and professional manner; Improve the quality of our services based on patient feedback; Improve the quality of our services based on patient feedback;</p>
                    </div>

                    <div>
                    <h4 className="pb-3 uppercase">How to File a Complaint</h4>
                      <p className="light-text-2 pb-4">If you have concerns regarding our services, staff, policies, or any aspect of your care, you may file a complaint through the following methods:</p>
                      <div className="d-flex pb-5">
                        <p className="site-primary-bg border-radius-50 site-number white-text mt-1">1</p>
                        <div className="ps-3">
                          <p className="pb-3 font-weight-700 sm-text">Email or Written Letter</p>
                          <div className="light-text-2">
                          
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2"> Complaints can be sent via email to our official complaints department or delivered as a written letter to our physical office.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2">Ensure to include your patient ID (if applicable), the issue at hand, and any relevant details.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex pb-5">
                        <p className="site-primary-bg border-radius-50 site-number white-text mt-1">2</p>
                        <div className="ps-3">
                          <p className="pb-3 font-weight-700 sm-text">In-Person Complaint</p>
                          <div className="light-text-2">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2"> Patients can visit our patient support desk at our facility to report concerns.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2">A representative will document the complaint and provide guidance on the resolution process.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex pb-5">
                        <p className="site-primary-bg border-radius-50 site-number white-text mt-1">3</p>
                        <div className="ps-3">
                          <p className="pb-3 font-weight-700 sm-text">Phone Complaints</p>
                          <div className="pt-3 light-text-2">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2"> Complaints may also be made via our official helpline, where a representative will log the issue and provide an expected response timeline.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>

                  <div>
                    <h4 className="pb-1 uppercase">Response and Investigation Process</h4>
                    <div className="light-text-2">
                      <p className="pb-3">Once a complaint is received, we follow a structured approach to resolve it:</p>
                      <div>
                        <div className='pb-3'>
                          <p className="site-primary-text font-bold">Step 1: Acknowledgment</p>
                          <div className="pt-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                              <p className="light-text-2">A formal acknowledgment of the complaint is sent within 24 to 48 hours, confirming receipt and providing a reference number for tracking.</p>
                            </div>
                          </div>
                        </div>

                        <div className='pb-3'>
                          <p className="site-primary-text font-bold">Step 2: Acknowledgment</p>
                          <div className="pt-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                              <p className="light-text-2">Speaking with the patient for further clarification.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                              <p className="light-text-2">Consulting with involved staff members.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                              <p className="light-text-2">Reviewing medical records, policies, or service protocols.</p>
                            </div>
                          </div>
                        </div>

                        <div className='pb-3'>
                          <p className="site-primary-text font-bold">Step 3: Resolution & Feedback</p>
                          <div className="pt-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                              <p className="light-text-2">A resolution is typically provided within 7 to 14 business days, depending on the complexity of the issue.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                              <p className="light-text-2">The patient will receive a written response detailing the findings and any corrective measures taken.</p>
                            </div>
                          </div>
                        </div>

                        <div className='pb-3'>
                          <p className="site-primary-text font-bold">Step 4: Escalation (If Necessary)</p>
                          <div className="pt-3">
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                              <p className="light-text-2">If a patient is dissatisfied with the resolution, they may request an escalation to senior management for further review.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                              <p className="light-text-2">External legal or regulatory bodies may also be involved if necessary.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="pb-1 uppercase pb-4">Possible Outcomes & Resolutions</h4>
                    <div className="light-text-2">
                      <p>Depending on the nature of the complaint, possible resolutions may include:</p>
                      <div className="pt-3">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                          <p className="light-text-2">An apology and corrective action if service standards were not met.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                          <p className="light-text-2">Policy adjustments if the issue highlights gaps in procedures.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                          <p className="light-text-2">Staff retraining where necessary to improve service quality.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                          <p className="light-text-2">Further medical review if the complaint relates to a misdiagnosis or treatment concern.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                          <p className="light-text-2">Referral to an external authority if required by law or regulation.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="pb-1 uppercase pb-4">Confidentiality & Non-Retaliation Policy</h4>
                    <div className="light-text-2">
                      
                      <div className="pt-1">
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                          <p className="light-text-2">All complaints are handled confidentially, and patient privacy is strictly maintained.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                          <p className="light-text-2">Patients will not face discrimination or retaliation for filing a complaint.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text  font-bold"></i> 
                          <p className="light-text-2">Any staff member found retaliating against a patient for raising concerns will be subject to disciplinary action.</p>
                        </div>
                      </div>
                    </div>
                  </div>
   
                </div>
              </div>
            </div>

            <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
              <aside className="sidebar  position-relative1">
                <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} sidebar-box`}>
                  <div className="me-5">
                    <Link className="sidebar-box-link " to='/about-facility/privacy-policies/'>Privacy Policy</Link>
                    <Link className="sidebar-box-link " to='/about-facility/risk-disclosure/'>Risk Disclosure</Link>
                    <Link className="sidebar-box-link" to='/about-facility/terms-conditions/'>Terms and Conditions</Link>
                    <Link className="sidebar-box-link" to='/about-facility/information-security/'>Information Security</Link>
                    <Link className="sidebar-box-link" to='/about-facility/ethical-guidelines/'>Ethical Guidelines</Link>
                    <Link className="sidebar-box-link sidebar-box-active-link" to='/about-facility/complaint-procedure/'>Complaint Procedure</Link>
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