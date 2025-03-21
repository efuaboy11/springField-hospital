import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import "../../css/componentCss/sidebarBox.css"
import { Helmet } from "react-helmet-async"

export const TermsConditions = () =>{
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
        <title>Terms and Conditions | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Read the terms and conditions governing the use of Springfield Mental Health and Psychosocial Services' website and services." />
        <meta name="keywords" content="Terms and Conditions, User Agreement, Service Terms, Legal Policy, Springfield Psychosocial Services" />
        <meta property="og:title" content="Terms and Conditions | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Review our terms and conditions to understand your rights and responsibilities when using our services." />
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
                  <p className="site-primary-text md-text font-bold">Terms and Conditions</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> About Facility <i class="ri-arrow-right-fill"></i>Terms and Conditions</p>
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
                    <p className="site-header font-weight-700">Terms & Conditions</p>
                    
                    <div className="pt-4 light-text-2">
                      <p className="pb-3">At Springfield Mental Health, we are committed to providing compassionate and professional mental health services to individuals seeking support. These Terms and Conditions govern the use of our services, ensuring a clear understanding between Springfield Mental Health, our patients, and any users of our website and facilities.</p>
                      <p className="pb-3"> By accessing or using our services—whether through in-person consultations, telehealth sessions, online appointment booking, or other communication channels—you agree to comply with these terms. These guidelines help maintain ethical, legal, and professional standards while safeguarding patient rights and ensuring a safe, confidential, and respectful environment for mental health treatment.</p>
                      <p className="pb-3">Springfield Mental Health was founded on the belief that mental health should be accessible to all without stigma or discrimination. Our mission is to create a judgment-free space where individuals can seek mental health care while also gaining the skills and support needed to reintegrate into society. Our holistic approach combines mental health treatment, skill development, and community support, with a particular focus on integrating individuals into agriculture, vocational training, and self-sufficiency programs</p>
                      <p className="pb-3">These Terms and Conditions outline the responsibilities of both the patient and Springfield Mental Health, ensuring transparency in services, patient rights, confidentiality, data protection, and the legal framework under which we operate. They are designed to protect your privacy, ensure ethical service delivery, and provide clarity on how our services function.</p>
                      <p className="pb-3">By using our services, you acknowledge that you have read, understood, and agreed to the terms set forth in this document. If you do not agree with any part of these terms, we advise that you discontinue use of our services. If you have any questions or concerns regarding these Terms and Conditions, please feel free to contact us.</p>
                      
                    </div>

                    <section className="py-3">
                      <div>
                        <h4 className="pb-4 upercase">1.  Acceptance of Terms</h4>
                        <div className="light-text-2">
                          <p className="pb-4">By accessing and using the services provided by Springfield Mental Health, you acknowledge and agree to be bound by these Terms and Conditions. Your engagement with our organization—whether through booking an appointment, registering as a patient, using our website, participating in therapy sessions, or any other form of interaction with our services—constitutes your acceptance of these terms.</p>
                          <p className="pb-4">If you do not agree with any part of these Terms and Conditions, you should refrain from using our services. Continued use implies that you fully understand and accept your rights and responsibilities as outlined in this document.</p>
                          <p className="pb-4">We reserve the right to update, modify, or amend these terms at any time to reflect changes in our services, legal requirements, or industry standards. Patients and users will be notified of any significant changes, and continued engagement with our services after such updates will be considered as acceptance of the revised terms.</p>
                          <p className="pb-4">Springfield Mental Health is dedicated to ensuring ethical, professional, and lawful service delivery, and these terms are designed to protect both our patients and our organization. If you have any concerns, questions, or require further clarification regarding these terms, we encourage you to reach out to us directly.</p>     
                        </div>
                      </div>
                    </section>

                    
                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">2. Eligibility for Services</h4>
                        <p className="light-text-2">At Springfield Mental Health, our services are designed to support individuals seeking professional mental health care. However, to ensure that we can provide appropriate and effective care, there are specific eligibility criteria that patients and users must meet.</p>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700"> Age Requirement</p>
                              <p>Our mental health services are primarily available to individuals 18 years and older. Minors (under 18) may access our services only with parental or legal guardian consent. Certain services, such as psychiatric evaluations and therapy sessions, may require additional legal documentation for minors.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700 ">Mental Health Condition & Treatment Suitability</p>
                              <p>We offer specialized care for individuals experiencing anxiety, depression, PTSD, schizophrenia, bipolar disorder, and other mental health conditions. However, in cases where a patient’s condition requires hospitalization, medical detox, or emergency psychiatric intervention, we may refer them to a more appropriate facility to ensure their safety and well-being.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700 ">Residency & Location</p>
                              <p>Our primary focus is on serving individuals within Nigeria, but we may provide consultations and resources for international clients depending on jurisdictional regulations. Some telehealth services may be restricted based on local laws governing mental health practice across different regions.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700 ">Compliance with Treatment Plans</p>
                              <p>For effective treatment, patients must be willing to participate in their recovery process. This includes attending scheduled therapy sessions, following prescribed treatment plans, and complying with medication guidelines (if applicable). Patients who refuse treatment recommendations or engage in behavior that disrupts the therapeutic process may be subject to service limitations.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700 "> Financial Responsibility & Insurance</p>
                              <p>Patients must agree to cover the cost of their mental health services, whether through direct payment, insurance, or financial aid (where available). Unpaid balances may result in temporary suspension of services until payment arrangements are made.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">6</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700 ">Ethical Conduct & Non-Disruptive Behavior</p>
                              <p className="pb-3">To maintain a safe and respectful therapeutic environment, all patients are expected to conduct themselves appropriately. Threatening behavior, verbal abuse, physical aggression, or deliberate disruption of therapy sessions may lead to service restrictions or termination.</p>
                              <p>These eligibility criteria ensure that Springfield Mental Health can provide effective, ethical, and legal mental health care to those in need. If you have questions about your eligibility or require special accommodations, please contact us for assistance.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">3. Scope of Services</h4>
                        <div className="light-text-2">
                          <p className="pb-4">At Springfield Mental Health, we offer a range of mental health services designed to provide comprehensive care, support, and treatment for individuals experiencing various psychological challenges. Our services cover in-person and online consultations, therapy, psychiatric evaluations, and wellness programs.</p>
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700"> Mental Health Consultations & Assessments</p>
                              <p className="pb-3">We provide initial and ongoing mental health evaluations to assess psychological conditions, determine treatment needs, and create personalized care plans. These assessments are conducted by licensed mental health professionals through in-person visits or virtual consultations.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Therapy & Counseling Services</p>
                              <p>Our therapy sessions include individual therapy, group therapy, family counseling, and couples therapy. Each session is conducted by trained professionals using evidence-based approaches such as Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and trauma-informed care.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Psychiatric Care & Medication Management</p>
                              <p>For patients requiring psychiatric intervention, we offer psychiatric evaluations, medication prescriptions, and medication monitoring. Our psychiatrists ensure that medications are prescribed safely and that patients receive proper guidance on their usage.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700"> Service Limitations & Exclusions</p>
                              <p>While we strive to provide comprehensive mental health support, we do not offer:</p>
                              <div className="pt-3">
                                <p className="pb-3">Emergency psychiatric hospitalization (patients in immediate danger should seek emergency services).</p>
                                <p className="pb-3">Legal competency evaluations (for court-related mental health cases).</p>
                                <p className="pb-3">Medical detox programs (for severe substance withdrawal cases)</p>
                              </div>
                             
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Telehealth & Online Therapy</p>
                              <p className="pb-2">To improve accessibility, Springfield Mental Health offers secure telehealth sessions for therapy, counseling, and psychiatric consultations. Patients using telehealth services must ensure a stable internet connection and a private, quiet space for sessions.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">6</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700"> Support Groups & Community Programs</p>
                              <p className="pb-2">We host peer support groups, workshops, and mental health awareness programs to help individuals build coping skills and find community support in their mental health journey.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">7</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700"> Confidentiality & Ethical Standards</p>
                              <p className="pb-2">All our services are delivered in strict adherence to HIPAA, NDPR, and other privacy regulations, ensuring the highest standard of confidentiality, professionalism, and ethical care.</p>
                            </div>
                          </div>

                        

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">4. User Responsibilities & Obligations</h4>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Providing Accurate Information</p>
                              <p>Users must provide truthful, complete, and up-to-date personal and medical information when booking appointments, registering as a patient, and undergoing assessments. Misrepresentation of medical history, symptoms, or other relevant details may impact the effectiveness of treatment and compromise care quality.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Compliance with Treatment Plans</p>
                              <p>Patients are encouraged to follow the guidance and treatment plans prescribed by their mental health professionals, including therapy sessions, medication schedules, and coping strategies. Non-compliance with prescribed treatments may affect mental health progress and limit service effectiveness.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Respectful Conduct</p>
                              <p>Users must engage respectfully with therapists, psychiatrists, support staff, and other patients. Harassment, threats, abusive behavior, or discrimination towards staff or fellow patients will not be tolerated and may result in service termination.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Payment Obligations</p>
                              <p>For paid services, users must ensure timely payments for consultations, therapy sessions, and psychiatric care. Failure to complete payment obligations may lead to service suspension unless alternative arrangements have been made.</p>
                            </div>
                          </div>

                          
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Appointment Cancellations & No-Show Policy</p>
                              <p>Patients must notify Springfield Mental Health at least 24 hours in advance if they need to cancel or reschedule an appointment. Repeated no-shows without prior notice may result in penalties or limitations on future bookings.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">6</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700"> Confidentiality & Privacy Compliance</p>
                              <p>Users must respect the confidentiality of group therapy sessions and other shared mental health programs. Any unauthorized recording, sharing, or disclosure of session details is strictly prohibited.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">7</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700"> Reporting Concerns or Violations</p>
                              <p>Users should report any concerns, ethical violations, or security breaches related to Springfield Mental Health’s services. Complaints can be submitted through our official channels for prompt resolution.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">5. Limitations of Liability</h4>
                        <div className="light-text-2">
                          <p className="pb-3">Springfield Mental Health provides mental health services with the highest level of professional care, but users acknowledge that therapy and psychiatric treatments are not guaranteed to yield specific results. By using our services, users agree to the following limitations of liability:</p>
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">No Guaranteed Outcomes</p>
                              <p>Mental health treatment is a personalized process, and individual responses vary. Springfield Mental Health does not guarantee that therapy, counseling, medication, or any other intervention will result in a specific improvement in mental health conditions.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Not a Substitute for Emergency Care</p>
                              <p>Our services are not designed for crisis intervention or emergency medical care. If you are experiencing a mental health emergency, including suicidal thoughts, severe distress, or immediate danger, you must seek emergency medical services or contact crisis hotlines in your area.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700"> Limited Liability for Third-Party Services</p>
                              <p>If users engage with third-party services, referrals, or external resources recommended by Springfield Mental Health, we are not responsible for their accuracy, quality, or effectiveness. Users must exercise due diligence before utilizing third-party services.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Accuracy of Information Provided</p>
                              <p>We strive to ensure that all information on our website, educational materials, and service descriptions is accurate and up-to-date. However, we do not accept liability for errors, outdated content, or misinterpretations of mental health-related resources..</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700"> User’s Responsibility for Their Own Well-Being</p>
                              <p>Users acknowledge that they are responsible for their participation and engagement in therapy. Springfield Mental Health provides guidance, but ultimate responsibility for implementing therapeutic strategies, following prescribed medication, and seeking additional help when necessary lies with the user.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">6</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">  Service Interruptions & Technical Issues</p>
                              <p>While we maintain a reliable system for online consultations and telehealth services, we are not liable for disruptions due to:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Internet connectivity issues on the user’s side.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Unforeseen technical failures in telehealth platforms.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Scheduled or emergency maintenance that may temporarily affect access to services.</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">7</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700"> Liability for Non-Compliance</p>
                              <p>If users fail to follow treatment recommendations, provide truthful health information, or comply with safety guidelines, Springfield Mental Health will not be held liable for any negative consequences resulting from such actions.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>


                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">6. Termination of Services</h4>
                        <div className="light-text-2">
                          <p className="pb-3">Springfield Mental Health reserves the right to terminate or suspend services under specific circumstances. Termination may be initiated either by Springfield Mental Health or by the user under the following conditions:</p>
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700"> Voluntary Termination by the User</p>
                              <p>Users have the right to discontinue therapy, counseling, or any other services at any time. However, we strongly encourage users to discuss their decision with their mental health provider to ensure a safe transition or alternative treatment recommendations. If a user discontinues therapy, they may still access past records in accordance with our Data Retention & Privacy Policy.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700"> Termination Due to Non-Compliance</p>
                              <p>Springfield Mental Health may terminate services if a user:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Provides false or misleading information that affects treatment decisions.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Refuses to follow treatment plans or recommendations, leading to potential harm.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Violates confidentiality agreements by recording or distributing sessions without consent.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Displays abusive, threatening, or inappropriate behavior towards therapists, staff, or other users.</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Breach of Terms & Conditions</p>
                              <p>Users who violate any provisions of these Terms and Conditions, including but not limited to misuse of services, inappropriate conduct, or failure to comply with legal or ethical guidelines, may have their access to Springfield Mental Health services revoked.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Service Disruptions & Unforeseen Circumstances</p>
                              <p>We reserve the right to suspend or discontinue services due to circumstances beyond our control, including:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Regulatory changes or legal constraints affecting mental health service delivery.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Unforeseen technical failures preventing the continuation of telehealth or in-person therapy.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> The closure or restructuring of Springfield Mental Health, in which case affected users will be provided with guidance on transitioning to other mental health providers.</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">  Reinstatement of Services</p>
                              <p>In some cases, a user whose services were suspended due to non-compliance or behavioral concerns may request reinstatement. This will be reviewed on a case-by-case basis, and reinstatement is not guaranteed. Users may need to provide assurance that they will adhere to professional guidelines and treatment recommendations.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>


                    
                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">7.  Appointment Scheduling & Cancellations</h4>
                        <div className="light-text-2">
                          <p className="pb-4">At Springfield Mental Health, we strive to provide timely and efficient mental health services. To ensure smooth operations and accommodate all patients effectively, we have policies regarding appointment scheduling, rescheduling, and cancellations.</p>
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Booking Appointments:</p>
                              <p>Patients can schedule appointments through our website, by phone, or in person at our facility. Upon booking, a confirmation message will be sent via email or SMS with details of the appointment.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Rescheduling and Cancellations:</p>
                              <p>We understand that unforeseen circumstances may require patients to change their appointment dates. If you need to reschedule, we encourage you to do so at least 24 to 48 hours in advance to allow us to accommodate other patients. Cancellations made without sufficient notice may be subject to a cancellation fee.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Missed Appointments (No-Shows):</p>
                              <p>Failure to attend a scheduled appointment without prior notice may result in additional charges or limitations on future bookings. Repeated no-shows may lead to restrictions on appointment scheduling privileges.</p>     
                            </div>
                          </div>

                          
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Late Arrivals:</p>
                              <p>Arriving late to an appointment may shorten the session duration or require rescheduling, depending on availability. If you are more than 15 minutes late, your appointment may be considered a no-show.</p>     
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>


                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">8. Payment and Billing</h4>
                        <div className="light-text-2">
                          <p className="pb-4">At Springfield Mental Health, we are committed to transparency in our billing practices to ensure patients understand the costs associated with their care. Our payment and billing policies outline the fees for our services, accepted payment methods, and financial responsibilities.</p>
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Service Fees and Payment Methods</p>
                              <p>We provide a detailed breakdown of service fees before treatment begins. Patients are responsible for covering the cost of consultations, therapy sessions, assessments, and any additional mental health services they receive. We accept various payment methods, including credit/debit cards, bank transfers, and digital payment platforms.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Insurance and Third-Party Payments</p>
                              <p>If a patient’s mental health care is covered by insurance or a third-party provider, it is the patient’s responsibility to confirm coverage and ensure claims are processed correctly. We may assist with claim submissions, but the patient remains responsible for any outstanding balances not covered by insurance.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Billing Process and Invoices</p>
                              <p className="pb-2">Invoices are issued electronically or in person at the time of service. Payment is expected immediately unless a prior arrangement has been made. Patients may also receive statements for ongoing treatments or outstanding balances.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700"> Late Payments and Outstanding Balances</p>
                              <p className="pb-3">Timely payment is essential to continue receiving services. If payment is not made by the due date, patients may incur late fees, and further appointments may be restricted until the balance is settled. Persistent non-payment may lead to debt collection proceedings.</p>
                             
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Refunds and Disputess</p>
                              <p className="pb-3">Refunds are only provided under exceptional circumstances, such as service unavailability or billing errors. If a patient disagrees with a charge, they should contact our billing department promptly to resolve the issue.</p>
                             
                            </div>
                          </div>


                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">9. Use of Website and Online Services</h4>
                        <div className="light-text-2">
                          <p className="pb-4">Springfield Mental Health provides an online platform to facilitate mental health services, appointment scheduling, and patient education. By accessing our website or using our online services, users agree to abide by the terms outlined below.</p>
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Website Content and AccuracyS</p>
                              <p>The information provided on our website, including articles, blog posts, and resources, is for informational purposes only and should not be considered a substitute for professional medical advice. While we strive to ensure accuracy, we do not guarantee that all content is free of errors or omissions.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">User Responsibilities</p>
                              <p className="pb-3">Users must use the website and online services responsibly, ensuring that they do not:</p>
                              <div className="pt-3">
                                <p className="pb-3"><span className="site-primary-text font-weight-700">i. </span>  Provide false or misleading information when booking appointments or registering.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">ii. </span>  Use the website for illegal, fraudulent, or harmful activities.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iii. </span> Attempt to access restricted areas of the website without authorization.</p>


                              </div>
                             
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Third-Party Links</p>
                              <p>Our website may include links to third-party resources for educational purposes. However, Springfield Mental Health does not endorse or control the content on external websites, and we are not responsible for any consequences arising from their use.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Service Availability</p>
                              <p>While we aim to provide uninterrupted access to our website and online services, we do not guarantee that they will always be available. Scheduled maintenance, technical issues, or unforeseen circumstances may result in temporary downtime.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Privacy and Data Protection</p>
                              <p>Any personal data collected through our website is protected under our Privacy Policy and follows HIPAA and NDPR regulations. Users’ information is kept secure and only used for legitimate medical or administrative purposes.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">10. Medical Disclaimer</h4>
                        <div className="light-text-2">
                          <p className="pb-4">At Springfield Mental Health, we are committed to providing high-quality mental health support, but it is essential to clarify the scope and limitations of our services. This medical disclaimer ensures that patients understand how our services should be used and the responsibilities associated with receiving mental health care.</p>
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Not a Substitute for Emergency Care</p>
                              <p>Our mental health services are not a substitute for emergency medical treatment. If you or someone you know is experiencing a mental health crisis, suicidal thoughts, or a life-threatening situation, please seek immediate assistance by:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Calling emergency services (e.g., 911 or your country’s emergency hotline).</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Visiting the nearest hospital or emergency room.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Reaching out to a crisis helpline or suicide prevention hotline.</p>
                                </div>
                              </div>
                              <p className="pt-3">Springfield Mental Health does not provide 24/7 crisis intervention services, and any delays in response to messages or appointment requests should not be interpreted as neglect or lack of concern.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Informational and Supportive Services</p>
                              <p className="pb-2">Our consultations, therapy sessions, and telehealth services are designed to offer professional mental health guidance, therapeutic support, and treatment recommendations. However, our services do not replace a formal psychiatric diagnosis, medical treatment, or prescriptions from a licensed physician.</p>
                              <p>Patients must consult a psychiatrist, medical doctor, or emergency healthcare provider if they require:</p>
                              <div className="pt-2">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Psychiatric medication prescriptions or dosage adjustments.                                  </p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Medical assessments for neurological or physical health concerns.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Intensive inpatient or residential mental health treatment.</p>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Individual Treatment Plans May Vary</p>
                              <p className="pb-2">Mental health care is highly personalized, and treatment effectiveness may vary based on an individual’s condition, history, and adherence to therapy. Springfield Mental Health makes no guarantees regarding specific treatment outcomes, as mental health progress depends on multiple factors, including patient participation, external support systems, and co-existing health conditions.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">No Liability for Self-Managed Care</p>
                              <p className="pb-2">Patients who choose to self-diagnose, modify their treatment plan, or discontinue therapy without consulting a professional do so at their own risk. Springfield Mental Health is not responsible for:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Worsening mental health conditions due to non-compliance with professional recommendations.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Side effects resulting from medication adjustments made without a doctor’s supervision.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Misinterpretation of therapy advice that leads to unintended consequences.</p>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Professional Advice Should Be Followed</p>
                              <p className="pb-2">All patients are encouraged to follow the recommendations of their assigned licensed mental health professional and to communicate openly about any concerns, doubts, or side effects related to therapy or prescribed treatment.</p>
                            </div>
                          </div>


                        </div>
                      </div>
                    </section>


                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">11. Telehealth Services</h4>
                        <p className="pb-3 light-text-2">Springfield Mental Health offers telehealth services to provide convenient access to mental health care through video calls, phone consultations, and online messaging platforms. These services are designed to make therapy and consultations more accessible, particularly for individuals who may have difficulties attending in-person sessions. However, telehealth has its own guidelines and limitations, which are outlined below.s</p>
                        <div className="light-text-2">
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Eligibility for Telehealth Services</p>
                              <p>Our telehealth services are available to patients who meet the following conditions:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Reside in a jurisdiction where telehealth services are legally permitted.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Have access to a secure internet connection and a private space for confidential sessions.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Are not in an immediate crisis requiring emergency intervention.</p>
                                </div>
                              </div>
                              <p className="pt-3">Patients with severe mental health conditions requiring in-person assessments, hospitalization, or intensive monitoring may not be eligible for telehealth services. In such cases, we will recommend alternative treatment options.</p>
                            </div>
                            
                          </div>
                          

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Technology and Security Measures</p>
                              <p>To protect patient privacy, our telehealth services use secure, HIPAA-compliant platforms for virtual appointments. We implement the following security measures:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> End-to-end encryption for video calls and online communications.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Authentication processes to verify patient identity before each session.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Confidential data storage to protect records of telehealth interactions.</p>
                                </div>
                              </div>
                              <p className="pt-3">However, Springfield Mental Health cannot guarantee absolute security due to the inherent risks of online communication. Patients are responsible for ensuring that their own devices and internet connections are secure when participating in telehealth sessions.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Limitations of Telehealth Services</p>
                              <p className="pb-2">While telehealth provides flexibility and accessibility, there are certain limitations:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Not suitable for all cases – Some conditions, such as severe psychiatric disorders or medical emergencies, may require in-person treatment.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Technical issues – Poor internet connectivity, software glitches, or device malfunctions may disrupt a session.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Reduced non-verbal communication – While video calls help maintain face-to-face interaction, subtle non-verbal cues may be harder to interpret compared to in-person therapy.</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Patient Responsibilities for Telehealth Sessions</p>
                              <p className="pb-2">To ensure a productive and confidential telehealth experience, patients must:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Log in on time for scheduled virtual appointments.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Be in a quiet, private location free from distractions.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Communicate any concerns regarding therapy progress, session effectiveness, or technical difficulties.</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Cancellations and Rescheduling for Telehealth</p>
                              <p className="pb-2">The same cancellation policies apply to telehealth appointments as in-person visits. Patients must provide at least 24-hour notice for cancellations or rescheduling, except in emergencies. Failure to do so may result in a missed appointment fee.</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">12. Intellectual Property</h4>
                        <div className="light-text-2">
                          <p className="pb-4">Springfield Mental Health owns and protects all intellectual property associated with our website, services, and materials. This section outlines ownership rights, restrictions on reproduction, and the permitted use of resources by patients and visitors.</p>
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Ownership of Website Content</p>
                              <p>All content found on the Springfield Mental Health website, including but not limited to:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Text, articles, and written materials.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Logos, branding, and graphics.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Images, videos, and multimedia content</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Downloadable resources such as mental health guides, worksheets, and e-books</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Website design, layout, and overall presentation</p>
                                </div>
                              </div>
                              <p className="pt-3">is the exclusive property of Springfield Mental Health and is protected under copyright, trademark, and intellectual property laws. Unauthorized use, modification, or distribution of our content without explicit permission is strictly prohibited.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Restrictions on Reproduction and Distribution</p>
                              <p>Users may not copy, reproduce, distribute, or republish any content from our website or materials for commercial purposes without our prior written consent. This includes:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Sharing website content on other platforms without proper credit or authorization.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Modifying or reproducing any part of our services or resources for resale.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Using our logo, name, or branding in any unauthorized manner.</p>
                                </div>
                              </div>
                              <p className="pt-3">Limited personal, non-commercial use of Springfield Mental Health resources is allowed for patients and individuals seeking mental health support. However, such use must not involve any modification, resale, or redistribution.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Patient Use of Resources</p>
                              <p className="pb-2">Patients may access and use mental health resources provided by Springfield Mental Health solely for personal educational or therapeutic purposes.</p>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Violation of Intellectual Property Rights</p>
                              <p className="pb-2">Any unauthorized use, reproduction, or distribution of our intellectual property may result in:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Legal action to enforce intellectual property rights.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Termination of access to our website and services.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Financial penalties if damages arise from intellectual property misuse.</p>
                                </div>
                              </div>
                              <p className="pt-3">Springfield Mental Health reserves the right to update, modify, or remove content on the website at any time.</p>
                            </div>
                          </div>


                        </div>
                      </div>
                    </section>
                    

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">13. Governing Law & Dispute Resolution</h4>
                        <div className="light-text-2">
                          <p className="pb-4">Springfield Mental Health operates under legal frameworks that ensure the protection of both our organization and the individuals who use our services. This section outlines the laws governing our services and the process for resolving disputes should they arise.</p>
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Applicable Law</p>
                              <p>Our terms, conditions, and policies are governed by the laws of Nigeria, including but not limited to:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">The Nigerian Mental Health Act (2021) – Governs the rights of individuals receiving mental health care.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> The National Health Act (2014) – Establishes regulations for healthcare providers in Nigeria.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> The Nigeria Data Protection Regulation (NDPR) – Protects the privacy and confidentiality of patient records.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">The United Nations Convention on the Rights of Persons with Disabilities (CRPD) – Ensures fair treatment for individuals with mental health conditions..</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Dispute Resolution Process</p>
                              <p>We strive to provide a smooth and ethical mental health service. However, in the event of a dispute, we encourage users to follow these steps:</p>
                              <p className="pt-4 pb-3"><span className="pb-2 font-bold site-primary-text d-block">Step I: Internal Resolution</span> Users experiencing issues or concerns should first contact our customer support team to seek an amicable resolution. This may involve mediation between the user and their assigned mental health provider.</p>
                              <p className="pb-3"><span className="pb-2 font-bold site-primary-text d-block">Step II: Formal Complaint Process</span> If internal resolution does not satisfy the user’s concerns, they may file a formal complaint in writing. This complaint will be reviewed by our legal and ethics team, and a response will be provided within 14 business days.</p>
                              <p className="pb-3"><span className="pb-2 font-bold site-primary-text d-block">Step II: Alternative Dispute Resolution (ADR)</span> If the dispute remains unresolved, both parties may agree to mediation or arbitration as an alternative to court litigation. This process will be handled by a neutral third-party arbitrator, and both Springfield Mental Health and the user must adhere to the final decision.</p>
                              <p className="pb-3"><span className="pb-2 font-bold site-primary-text d-block">Step IV:  Legal Proceedings</span> If all previous resolution attempts fail, legal action may be pursued in a court of competent jurisdiction in Nigeria. Users agree that such legal action must be filed within six (6) months of the incident leading to the dispute.</p>
                            </div>
                          </div>


                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Limitation of Liability</p>
                              <p>Springfield Mental Health is committed to providing professional and ethical mental health care, but we do not assume liability for:</p>
                              <div className="pt-3">
                                <p className="pb-3"><span className="site-primary-text font-weight-700">i. </span>  Misuse of mental health services or failure to adhere to treatment recommendations.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">ii. </span>  Unforeseen events or force majeure, such as natural disasters, data breaches despite security measures, or government-mandated shutdowns.</p>
                                <p className="pb-3"><span className="site-primary-text font-weight-700">iii. </span>  Third-party actions, including unauthorized disclosures by users or external service providers.</p>
                              </div>
                             
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>
                    

                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">14.  Emergency and Crisis Situations</h4>
                        <div className="light-text-2">
                          <p className="pb-4">At Springfield Mental Health, we are dedicated to providing mental health support, but our services do not replace emergency medical care. This section outlines what to do in crisis situations, our limitations in handling emergencies, and the appropriate resources for immediate assistance.</p>
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Not an Emergency Service</p>
                              <p>Springfield Mental Health is not a crisis center, emergency response provider, or suicide prevention service. Our therapy sessions and consultations are scheduled and do not offer real-time crisis intervention. If you are experiencing a medical or psychiatric emergency, we strongly advise you to:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Go to the nearest emergency room or hospital if you are in distress.</p>
                                </div>

                                
                              </div>
                             
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Situations Requiring Immediate Attention</p>
                              <p>Seek emergency support immediately if you or someone you know is experiencing:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Suicidal thoughts or self-harm urges with an intent to act.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Violent or aggressive behavior posing a danger to self or others.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Severe emotional distress or panic attacks that impair functioning.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Signs of psychosis, such as hallucinations or extreme paranoia.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Severe medication side effects or overdose.</p>
                                </div>
                              </div>
                              
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">How We Handle Crisis Situations</p>
                              <p className="pb-2">While our therapists and mental health professionals are trained to provide support and coping strategies, we do not provide 24/7 crisis intervention. In cases where a client expresses signs of crisis during a session, we may:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Encourage the client to reach out to emergency services.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Provide referrals to crisis centers or psychiatric facilities.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Notify a designated emergency contact if there is an immediate risk to life (as permitted under HIPAA and patient confidentiality laws).</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">4</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Limitations of Online and Telehealth Support in Emergencies</p>
                              <p className="pb-2">If you are using our telehealth services, please note that:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Therapists cannot provide real-time intervention or physical assistance during a crisis.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Virtual therapy is not suitable for emergencies. If you are in immediate danger, disconnect and seek emergency care.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">In cases of severe distress, we may refer you to an in-person evaluation or emergency mental health facility.</p>
                                </div>
                              </div>
                          
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">5</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Duty to Warn & Exceptions to Confidentiality</p>
                              <p className="pb-2">While we prioritize patient confidentiality, Springfield Mental Health may be legally required to disclose certain information if:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> A client is at imminent risk of harming themselves or others.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">There is suspected abuse or neglect of a child, elderly person, or vulnerable adult.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">A court order requires disclosure of mental health records.</p>
                                </div>
                              </div>
                          
                            </div>
                          </div>


                        </div>
                      </div>
                    </section>


                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">15. Third-Party Links and Referrals</h4>
                        <div className="light-text-2">
                          <p className="pb-4">Springfield Mental Health may provide links to third-party websites, resources, and professional referrals to enhance patient care and offer additional support. However, these third-party services operate independently, and we do not have control over their content, privacy policies, or practices. This section outlines our role in third-party referrals, the limitations of our responsibility, and guidelines for patient discretion when accessing external resources.</p>
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Third-Party Website Links</p>
                              <p>Our website or online services may include links to:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Mental health resources such as government health agencies, advocacy organizations, or crisis intervention services.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Educational materials from reputable sources to help patients understand their conditions and treatment options.</p>
                                </div>


                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Partner organizations offering specialized mental health services, medication management, or additional support.</p>
                                </div>

                                <p className="font-bold pb-2">Important Considerations:</p>
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Clicking on third-party links redirects you to external websites that are not under Springfield Mental Health’s control.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> We do not guarantee the accuracy, reliability, or security of third-party content.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Patients should review the privacy policies and terms of any external website before providing personal information.</p>
                                </div>

                                
                              </div>
                             
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Referrals to Third-Party Providers</p>
                              <p>In certain cases, our mental health professionals may refer patients to external healthcare providers or specialists for additional treatment. This includes:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Psychiatrists for medication management.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Medical professionals for physical health concerns affecting mental well-being</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Specialized therapists or support groups based on patient needs</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Community organizations for financial assistance, housing support, or addiction recovery programs</p>
                                </div>

                                <p className="font-bold pb-2">Patient Responsibility in Third-Party Referrals:</p>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Referrals do not imply an endorsement of the third-party provider. Patients should conduct their own research.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Any agreements, services, or payments made with third-party providers are the responsibility of the patient.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Springfield Mental Health is not liable for any negative experiences, malpractice, or data breaches that occur with third-party services.</p>
                                </div>
                              </div>
                              
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Affiliate & Sponsored Content Disclaimer</p>
                              <p className="pb-2">If Springfield Mental Health participates in any affiliate programs or sponsored content, we will clearly disclose such relationships. However:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> We do not prioritize financial gain over patient well-being. Any recommendations are made in good faith.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Patients are encouraged to critically evaluate third-party content and seek independent advice when necessary.</p>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>


                    <section className="pb-2">
                      <div>
                        <h4 className="pb-4">16. Amendments to Terms & Conditions</h4>
                        <div className="light-text-2">
                          <p className="pb-4">Springfield Mental Health reserves the right to modify, update, or revise these Terms & Conditions at any time. Changes may be made to reflect legal requirements, improvements in service delivery, or advancements in data protection and mental health care standards.</p>
                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">1</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Notification of Changes</p>
                              <p>Whenever updates to these Terms & Conditions occur, we will:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Publish the revised version on our official website.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Update the "Last Updated" date at the top of the Terms & Conditions page.</p>
                                </div>


                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Notify registered users via email or in-app notifications, where applicable.</p>
                                </div>

                                <p>Users are responsible for reviewing the updated terms periodically. Continued use of our services after modifications have been implemented constitutes acceptance of the new terms.</p>
                                
                              </div>
                             
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">2</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">Scope of Changes</p>
                              <p>Changes may include, but are not limited to:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Adjustments to service policies, including booking, cancellations, and treatment protocols.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Privacy and data protection updates, ensuring compliance with laws such as NDPR and HIPAA.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Changes in dispute resolution mechanisms, including modifications to arbitration processes.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Amendments to user rights and responsibilities, ensuring clarity in engagement with our services.</p>
                                </div>
                              </div>
                              
                            </div>
                          </div>

                          <div className="d-flex pb-5">
                            <p className="site-primary-bg border-radius-50 site-number white-text">3</p>
                            <div className="ps-3">
                              <p className="pb-3 font-weight-700">User Acknowledgment</p>
                              <p className="pb-2">By continuing to use our services after an update, users confirm that they:</p>
                              <div className="pt-3">
                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2"> Have reviewed and understood the revised Terms & Conditions.</p>
                                </div>

                                <div className="d-flex pb-3">
                                  <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                                  <p className="light-text-2">Agree to comply with the updated terms as they apply to all interactions with Springfield Mental Health.</p>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                   
                    
                    
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
                    <Link className="sidebar-box-link sidebar-box-active-link" to='/about-facility/terms-conditions/'>Terms and Conditions</Link>
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