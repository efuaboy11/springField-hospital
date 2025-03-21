import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import "../../css/componentCss/sidebarBox.css"
import { Helmet } from "react-helmet-async"

export const InformationSecurity = () =>{
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
        <title>Information Security | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Learn how Springfield Mental Health and Psychosocial Services protects your personal and health information through strict security measures." />
        <meta name="keywords" content="Information Security, Data Protection, Privacy Policy, Cybersecurity, Springfield Psychosocial Services" />
        <meta property="og:title" content="Information Security | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Discover the steps we take to ensure confidentiality, data security, and privacy protection at Springfield Mental Health and Psychosocial Services." />
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
                  <p className="site-primary-text md-text font-bold">Information Security</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> About Facility <i class="ri-arrow-right-fill"></i>Information Security</p>
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
                      <p className="md-text font-bold pb-3">Information Security</p>
                      <p className="light-text-2 pb-3">At Springfield Mental Health, safeguarding your personal and medical information is a top priority. We implement robust security measures to protect against unauthorized access, data breaches, and cyber threats. This section outlines the security practices we follow, your role in maintaining security, and the limitations of our responsibility.</p>
                    </div>

                    <div>
                      <div className="d-flex pb-5">
                        <p className="site-primary-bg border-radius-50 site-number white-text mt-1">1</p>
                        <div className="ps-3">
                          <p className="pb-3 font-weight-700 sm-text">  Data Protection Measures</p>
                          <div className="pt-3 light-text-2">
                          <p>To ensure the confidentiality and integrity of patient information, we employ industry-standard security protocols, including:</p>
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2"> Data Encryption: All electronic health records and personal data are encrypted to prevent unauthorized access.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2">Secure Storage: Digital records are stored on secure servers with firewalls and multi-factor authentication. Physical records, if any, are kept in locked and restricted areas.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2"> Access Control: Only authorized healthcare professionals and administrative staff with a legitimate need have access to Protected Health Information (PHI).</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2"> Regular Security Audits: We routinely assess our security infrastructure to identify vulnerabilities and implement necessary improvements.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2"> HIPAA & NDPR Compliance: Our policies and practices align with data protection laws such as the Health Insurance Portability and Accountability Act (HIPAA) and the Nigeria Data Protection Regulation (NDPR).</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex pb-5">
                        <p className="site-primary-bg border-radius-50 site-number white-text mt-1">2</p>
                        <div className="ps-3">
                          <p className="pb-3 font-weight-700 sm-text">Patient Responsibilities in Information Security</p>
                          <div className="pt-3 light-text-2">
                          <p>While we take extensive precautions, patients also play a role in securing their information. We advise:</p>
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2"> Keeping login credentials private: If you create an online account with us, do not share your username or password.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2">Using secure networks: Avoid accessing sensitive health information over public or unsecured Wi-Fi networks.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2"> Reporting suspicious activity: If you suspect unauthorized access to your records, notify us immediately.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex pb-5">
                        <p className="site-primary-bg border-radius-50 site-number white-text mt-1">3</p>
                        <div className="ps-3">
                          <p className="pb-3 font-weight-700 sm-text">Electronic Communications Security</p>
                          <div className="pt-3 light-text-2">
                            <p>Patients may communicate with us via email, phone, or online portals. While we take precautions to secure these communications:</p>
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2"> Emails and messages may not be fully secure, so avoid sharing highly sensitive data unless through encrypted channels.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2">Video therapy sessions use secure, HIPAA-compliant platforms, but patients should also ensure privacy on their end.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex pb-5">
                        <p className="site-primary-bg border-radius-50 site-number white-text mt-1">4</p>
                        <div className="ps-3">
                          <p className="pb-3 font-weight-700 sm-text">Limitations of Liability</p>
                          <div className="pt-3 light-text-2">
                            <p>Despite our efforts, no system is completely immune to cyber threats. We are not responsible for:</p>
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2"> Unauthorized access due to patient negligence (e.g., sharing passwords, using insecure devices).</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2">Third-party data breaches beyond our control (e.g., hacking incidents affecting service providers).</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text font-bold"></i> 
                              <p className="light-text-2">Loss or corruption of data caused by unforeseen circumstances such as natural disasters or system failures.</p>
                            </div>
                          </div>
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
                    <Link className="sidebar-box-link " to='/about-facility/terms-conditions/'>Terms and Conditions</Link>
                    <Link className="sidebar-box-link sidebar-box-active-link" to='/about-facility/information-security/'>Information Security</Link>
                    <Link className="sidebar-box-link" to='/about-facility/ethical-guidelines/'>Ethical Guidelines</Link>
                    <Link className="sidebar-box-link" to='/about-facility/complaint-procedure/'>Complaint Procedure</Link>
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