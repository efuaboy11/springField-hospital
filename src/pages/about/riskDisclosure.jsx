import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import "../../css/componentCss/sidebarBox.css"
import { Helmet } from "react-helmet-async"

export const RiskDisclosure = () =>{
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
        <title>Risk Disclosure | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Understand the potential risks associated with mental health treatment and how Springfield Mental Health and Psychosocial Services ensures informed decision-making." />
        <meta name="keywords" content="Risk Disclosure, Mental Health Risks, Informed Consent, Therapy Risks, Springfield Psychosocial Services" />
        <meta property="og:title" content="Risk Disclosure | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Learn about the possible risks of mental health treatment and how we prioritize safety and transparency in our services." />
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
                  <p className="site-primary-text md-text font-bold">Risk Disclosure</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> About Facility <i class="ri-arrow-right-fill"></i>Risk Disclosure</p>
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
                      <p className="md-text font-bold pb-3">Risk Disclosure</p>
                      <p className="light-text-2 pb-3">At Springfield Mental Health, we are committed to providing professional and ethical mental health services. However, it is important to acknowledge that mental health treatment, like any other medical or psychological intervention, carries inherent risks. This Risk Disclosure outlines potential risks associated with therapy, counseling, and other mental health services, ensuring that patients and their families make informed decisions about their care.</p>
                    </div>
                    <div className="pb-5">
                      <h3 className="pb-3">Understanding Mental Health Risks</h3>
                      <p className="light-text-2">Mental health treatment is designed to promote healing, emotional well-being, and improved quality of life. However, each individual’s response to therapy or psychiatric treatment may vary. Some individuals may experience significant progress, while others may face challenges before seeing improvements. It is important to understand that mental health treatment is not a guaranteed solution, but rather a process that requires time, commitment, and collaboration between the patient and the healthcare provider.</p>
                    </div>

                    <div className="pb-5">
                      <h3 className="pb-3">Emotional and Psychological Risks</h3>
                      <p className="light-text-2">Therapy and counseling often require discussing difficult emotions, past traumas, or distressing experiences. While this process is necessary for healing, it can initially lead to heightened emotional discomfort, sadness, anxiety, frustration, or emotional exhaustion. Patients may also experience temporary worsening of symptoms before improvement occurs. It is essential to communicate any overwhelming feelings to the mental health provider, as adjustments to the treatment plan can be made.</p>
                    </div>

                    <div className="pb-5">
                      <h3 className="pb-3">Medication-Related Risks</h3>
                      <p className="light-text-2">For patients receiving psychiatric medications, there are potential side effects and risks, including but not limited to drowsiness, nausea, mood swings, appetite changes, or dependency concerns. Medication reactions vary from person to person, and adjustments may be necessary to find the most suitable treatment plan. Patients should never alter or discontinue their medication without consulting their psychiatrist or healthcare provider.</p>
                    </div>



                    <div className="pb-5">
                      <h3 className="pb-3">Privacy and Confidentiality Risks</h3>
                      <p className="light-text-2">While Springfield Mental Health adheres to strict privacy policies and follows HIPAA and NDPR regulations to protect patient information, electronic communications (such as emails or telehealth sessions) may pose inherent security risks. Although we use encrypted and secure platforms, there is always a minimal risk of data breaches. Patients are encouraged to use private and secure networks when engaging in telehealth services.</p>
                    </div>

                    <div className="pb-5">
                      <h3 className="pb-3">Effectiveness and Unpredictability of Outcomes</h3>
                      <p className="light-text-2">Every individual responds to mental health treatment differently, and progress may take time. While therapy and psychiatric care can be highly effective, results cannot be guaranteed. Some patients may experience slow progress, occasional setbacks, or require multiple treatment approaches before achieving their desired outcome. It is important to remain patient and committed to the therapeutic process.</p>
                    </div>

                    <div className="pb-5">
                      <h3 className="pb-3">Dependence on Professional Judgment</h3>
                      <p className="light-text-2">Mental health professionals use their expertise and clinical judgment to determine the best course of treatment. However, there may be differences in therapeutic approaches, and not every treatment method works for every individual. Patients are encouraged to ask questions, provide feedback, and actively participate in their care to ensure the best possible outcomes.</p>
                    </div>

                    <div className="pb-5">
                      <h3 className="pb-3">Emergency and Crisis Situations</h3>
                      <p className="light-text-2">Springfield Mental Health provides therapeutic and psychiatric care within scheduled sessions. However, we do not offer emergency crisis intervention services. Patients experiencing a psychiatric emergency, suicidal thoughts, or immediate harm to themselves or others should seek urgent care by contacting emergency services, crisis hotlines, or visiting the nearest hospital. We strongly encourage patients to have a crisis plan in place.</p>
                    </div>

                    <div className="pb-5">
                      <h3 className="pb-3">Informed Consent and Patient Responsibility</h3>
                      <p className="light-text-2 pb-3">By engaging in mental health treatment at Springfield Mental Health, patients acknowledge that they understand the potential risks and benefits of therapy, counseling, and psychiatric care. Patients are expected to participate actively in their treatment, communicate openly with their provider, and follow prescribed recommendations. If at any point a patient feels uncomfortable with their treatment, they should discuss their concerns with their mental health professional.</p>
                      <p className="light-text-2">Springfield Mental Health remains dedicated to providing compassionate, evidence-based care while ensuring that every patient is well-informed about the nature, risks, and benefits of mental health treatment.</p>
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
                    <Link className="sidebar-box-link sidebar-box-active-link" to='/about-facility/risk-disclosure/'>Risk Disclosure</Link>
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