import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import "../../css/componentCss/sidebarBox.css"
import { Helmet } from "react-helmet-async"

export const Privacy = () =>{
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
        <title>Privacy Policies | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Read our privacy policies to understand how Springfield Mental Health and Psychosocial Services collects, uses, and protects your personal information." />
        <meta name="keywords" content="Privacy Policy, Data Protection, Personal Information, Confidentiality, Springfield Psychosocial Services" />
        <meta property="og:title" content="Privacy Policies | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Learn about our commitment to safeguarding your personal data and ensuring your privacy at Springfield Mental Health and Psychosocial Services." />
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
                  <p className="site-primary-text md-text font-bold">Privacy Policies</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> About Facility <i class="ri-arrow-right-fill"></i>Privacy Policies</p>
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
                      <p className="pb-4 site-header font-weight-700">Privacy Policy</p>
                      <div className="light-text-2">
                        <p className="pb-3">At Springfield Mental Health, we are committed to protecting the privacy and confidentiality of our patients, clients, and website users. We understand the sensitive nature of mental health information and the trust you place in us. This Privacy Policy outlines how we collect, use, store, and protect your Personal Health Information (PHI) and other personal data in compliance with applicable privacy laws, including the Health Insurance Portability and Accountability Act (HIPAA) and Nigeria’s Data Protection Regulation (NDPR).</p>
                        <p>By using our services, booking an appointment, registering as a patient, or accessing our website, you consent to the collection and use of your information as described in this policy.</p>
                      </div>
                      
                      <div>
                        <h4 className="pt-5 pb-3">Data Collection</h4>
                        <div className="light-text-2">
                          <p className="pb-3">We collect personal and medical information to provide high-quality mental health services, including Personal Identifiable Information (PII) such as full name, date of birth, gender, contact details (email, phone number, address), national identification numbers, and emergency contact; Medical and Mental Health Information, which includes medical history, symptoms, diagnosis, treatment plans, therapy progress notes, prescribed medications, and previous or ongoing treatments; Billing and Payment Information, such as financial details for payment processing, insurance provider details, and billing history; Appointment & Communication Records, which document interactions with our professionals, including scheduled appointments, consultation history, and inquiries; Digital Information, including IP addresses, device details, website usage patterns, and communication logs for online consultations; and Third-Party Data, which may include information provided by healthcare providers, referrals, or authorized family members involved in a patient’s care.</p>
                        </div>
                      </div>


                      <div>
                        <h4 className="pt-5 pb-3">How Data is Being Collected</h4>
                        <div className="light-text-2">
                          <p className="pb-3"><span className="font-weight-700">Book Appointment:</span> When you schedule an appointment with us—whether online, over the phone, or in person—we collect essential details such as your name, contact information, preferred appointment date, and reason for the visit. This information helps us prepare for your session and match you with the right mental health professional.</p>
                          <p className="pb-3"><span className="font-weight-700">Patient Registration:</span> During the registration process, we collect more detailed personal and medical information, including your medical history, current symptoms, past treatments, and emergency contact details. You may also be asked to complete consent forms and provide insurance or billing information to ensure smooth processing of your care.</p>
                          <p className="pb-3"><span className="font-weight-700">Therapy Sessions & Consultations:</span>During your therapy or counseling sessions, our mental health professionals document key details such as treatment progress, therapeutic notes, diagnoses, prescribed medications, and any relevant observations. This information helps track your mental health journey and tailor your care to your specific needs.</p>
                          <p className="pb-3"><span className="font-weight-700">Electronic Communications:</span>We collect data through electronic means such as emails, phone calls, and text messages when you contact us for inquiries, follow-ups, or prescription requests. These records ensure that we provide consistent and reliable care while maintaining an accurate history of patient-provider interactions.</p>
                          <p className="pb-3"><span className="font-weight-700">Third-Party Referrals:</span>If you have been referred to Springfield Mental Health Services by a doctor, hospital, or family member, we may collect relevant medical history and treatment recommendations from these third parties. However, such data is only obtained with your explicit consent to ensure confidentiality and respect for your privacy.</p>
                          <p className="pb-3"><span className="font-weight-700">Online Interactions & Website Usage:</span>When you visit our website or use our online booking system, we may collect non-identifiable digital data such as IP addresses, browsing behavior, and device information. This data helps us improve our services and provide a seamless online experience while maintaining compliance with privacy regulations.</p>                          
                          <p className="pb-3"><span className="font-weight-700">Billing & Payment Transactions:</span> If you are making a payment for mental health services, we collect financial data such as billing addresses, payment method details, and transaction history. This ensures accurate processing of payments and insurance claims while protecting sensitive financial information through secure payment gateways.</p>
                          <p className="pb-3"><span className="font-weight-700">Surveys & Feedback Forms:</span>To improve our services, we may collect information through patient feedback forms and surveys. These voluntary submissions allow us to assess patient satisfaction, enhance treatment approaches, and improve overall service quality while maintaining strict confidentiality.</p>
                        </div>
                      </div>


                      <div>
                        <h4 className="pt-5 pb-3">Data Security</h4>
                        <div className="light-text-2">
                          <p className="pb-3">At Springfield Mental Health, protecting the privacy and security of your personal and health information is our top priority. We understand that mental health records are highly sensitive, and we are committed to safeguarding them using industry-standard security measures. Our security framework is designed to prevent unauthorized access, ensure confidentiality, and maintain the integrity of patient data at all times.</p>
                          <p className="pb-3">To achieve this, we implement robust data encryption techniques, ensuring that all digital records are encrypted both at rest and in transit. This means that any information stored in our systems or transmitted between healthcare professionals is protected by advanced encryption protocols, making it nearly impossible for unauthorized individuals to access or decipher.</p>
                          <p className="pb-3">In addition to encryption, we have implemented strict access control measures to ensure that only authorized healthcare professionals and staff can access patient records. Access is granted on a strict need-to-know basis, meaning that only those directly involved in your care will have permission to view your data. Our staff undergoes regular training on privacy regulations and ethical handling of patient information to maintain the highest security standards.</p>
                          <p className="pb-3">For physical records, we have secure storage protocols in place. Paper-based records, when necessary, are kept in locked and monitored facilities with restricted access. Meanwhile, all digital records are stored in secure cloud-based systems equipped with firewalls, intrusion detection systems, and multi-factor authentication to prevent unauthorized logins. These measures significantly reduce the risk of data breaches and ensure that patient records remain confidential.</p>
                          <p className="pb-3">To continuously improve our security framework, we conduct regular security audits and system monitoring to detect and prevent potential breaches. Our IT security team performs frequent assessments to identify vulnerabilities and implement the latest security updates, ensuring our systems remain resilient against cyber threats. Any suspicious activity is promptly investigated and addressed to maintain a high level of data protection.</p>
                          <p className="pb-3">Furthermore, we adhere to both HIPAA (Health Insurance Portability and Accountability Act) and NDPR (Nigeria Data Protection Regulation) compliance standards. These regulations require us to follow strict guidelines for handling Protected Health Information (PHI), ensuring that we not only meet but exceed the legal requirements for data security and patient confidentiality. Our compliance with these regulations guarantees that your information is handled with the utmost care, reinforcing our commitment to ethical and responsible mental health care.</p>
                          <p className="pb-3">At Springfield Mental Health, we recognize that trust is fundamental in mental health treatment. By implementing these comprehensive security measures, we ensure that your personal and medical data remain secure, confidential, and protected at all times.</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="pb-3 pt-5">Data Use & Sharing</h4>
                        <div className="light-text-2">
                          <p className="pb-2 light-text-2">We use collected data for the following purposes:</p>
                          <div>
                            <div>
                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">Providing Mental Health Care: Your information helps us deliver personalized treatment and counseling services.</p>
                              </div>

                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">  Medical Research & Improvement: We may use de-identified data for research purposes to improve our services.</p>
                              </div>
                              
                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">Billing & Administrative Purposes: For processing payments and insurance claims (if applicable)</p>
                              </div>

                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">Legal & Regulatory Compliance: We may share your information if required by law, court orders, or in cases of imminent harm to yourself or others.</p>
                              </div>

                              <p className="italic-text light-text-2">Note: We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
                            </div>
                          </div>

                        
              
                         </div>
                      </div>

                      <div>
                        <h4 className="pb-3 pt-5">Third-Party Data Sharing</h4>
                        <div className="light-text-2">
                          <p className="pb-2 light-text-2">We may share your information with:</p>
                          <div>
                            <div>
                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">Healthcare professionals involved in your treatment.</p>
                              </div>

                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">  Emergency contacts or caregivers (with your consent).</p>
                              </div>
                              
                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">Government agencies or legal authorities when required by law.</p>
                              </div>

                              
                              <p className="italic-text light-text-2">Note: All third parties must adhere to strict confidentiality agreements to ensure the safety of your data.</p>
                            </div>
                          </div>

                        
              
                        </div>
                      </div>

                      <div>
                        <h4 className="pt-5 pb-3">Data Retention & Destruction</h4>
                        <div className="light-text-2">
                          <p className="pb-3">At Springfield Mental Health, we maintain patient records for as long as necessary to fulfill medical, legal, and regulatory obligations. Our data retention policy is designed to ensure that records are available for ongoing patient care while also complying with privacy laws and ethical standards. We store patient information securely throughout its required retention period and take stringent measures to properly dispose of data when it is no longer needed.</p>
                          <p className="pb-3">As per legal and regulatory requirements, medical records are typically retained for a minimum of 5 to 7 years. This ensures continuity of care, allows for future medical reference, and fulfills legal obligations in case of audits or medical inquiries. However, the retention period may vary depending on specific circumstances, such as extended treatment plans or regulatory updates.</p>
                          <p className="pb-3">Once patient records exceed their required retention period and are no longer needed, we ensure secure data destruction to prevent unauthorized access or misuse. Digital records are permanently erased using industry-standard data sanitization techniques, ensuring they cannot be recovered or reconstructed. For physical records, we employ secure shredding methods to completely destroy documents before disposal. These processes are carried out in strict compliance with privacy laws, ensuring that no patient information is left vulnerable.</p>
                          <p className="pb-3">By maintaining a structured approach to data retention and destruction, Springfield Mental Health upholds the highest standards of confidentiality, security, and compliance, ensuring that patient information is handled with care and integrity throughout its lifecycle.</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="pb-3 pt-5">Your Rights & Choices</h4>
                        <div className="light-text-2">
                          <p className="pb-2 light-text-2">As a patient or user, you have the following rights regarding your data:</p>
                          <div>
                            <div>
                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">Right to Access: You can request copies of your medical records.</p>
                              </div>

                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2"> Right to Correction: If your data is incorrect, you may request corrections.</p>
                              </div>
                              
                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">Right to Restrict Use: You can request limitations on how your data is used.</p>
                              </div>

                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">Right to Confidentiality: You can opt-out of data sharing except where required by law.</p>
                              </div>

                              <div className="d-flex pb-3">
                                <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                <p className="light-text-2">Right to Deletion: Under certain conditions, you may request data deletion.</p>
                              </div>
                            </div>
                          </div>

                        
              
                        </div>
                      </div>

                      <div>
                        <h4 className="pt-5 pb-3">Changes to This Policy</h4>
                        <div className="light-text-2">
                          <p className="pb-3">Springfield Mental Health reserves the right to update this Privacy Policy periodically. We will notify patients and website users of any significant changes through email or website announcements.</p>
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
                    <Link className="sidebar-box-link sidebar-box-active-link" to='/about-facility/privacy-policies/'>Privacy Policy</Link>
                    <Link className="sidebar-box-link" to='/about-facility/risk-disclosure/'>Risk Disclosure</Link>
                    <Link className="sidebar-box-link" to='/about-facility/terms-conditions/'>Terms and Conditions</Link>
                    <Link className="sidebar-box-link" to='/about-facility/information-security/'>Information Security</Link>
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