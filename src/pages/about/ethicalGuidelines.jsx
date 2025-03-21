import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import "../../css/componentCss/sidebarBox.css"
import { Helmet } from "react-helmet-async"

export const EthicalGuidelines = () =>{
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
        <title>Ethical Guidelines | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Learn about the ethical principles and standards that guide Springfield Mental Health and Psychosocial Services in providing compassionate and professional care." />
        <meta name="keywords" content="Ethical Guidelines, Mental Health Ethics, Professional Standards, Code of Conduct, Springfield Psychosocial Services" />
        <meta property="og:title" content="Ethical Guidelines | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Explore the ethical framework that ensures integrity, confidentiality, and professional excellence at Springfield Mental Health and Psychosocial Services." />
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
                  <p className="site-primary-text md-text font-bold">Ethical Guidelines</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> About Facility <i class="ri-arrow-right-fill"></i>Ethical Guidelines</p>
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
                      <p className="md-text font-bold pb-3">Ethical Guidelines</p>
                      <p className="light-text-2 pb-3">At Springfield Mental Health, we are committed to upholding the highest ethical standards in mental health care. Our Ethical Guidelines ensure that all professionals, staff, and stakeholders operate with integrity, respect, and professionalism while prioritizing patient well-being. These guidelines align with industry best practices, legal requirements, and professional ethical codes such as those set by the American Psychological Association (APA), National Association of Social Workers (NASW), and the Health Insurance Portability and Accountability Act (HIPAA).</p>
                    </div>

                    <div className="d-flex pb-5">
                      <p className="site-primary-bg border-radius-50 site-number white-text mt-1">1</p>
                      <div className="ps-3">
                        <h4 className="pb-3">  Patient-Centered Care</h4>
                        <p className="light-text-2">Every patient at Springfield Mental Health is treated with dignity, respect, and compassion. Our approach to mental health care is individualized, recognizing that no two patients are the same. Treatment plans are tailored to suit each patient’s unique needs, ensuring a personalized and effective care experience. We also emphasize informed consent, where patients are fully educated about their treatment options, risks, and expected outcomes. This ensures they have the autonomy to make decisions that align with their health and personal circumstances.</p>
                      </div>
                    </div>

                    <div className="d-flex pb-5">
                      <p className="site-primary-bg border-radius-50 site-number white-text mt-1">2</p>
                      <div className="ps-3">
                        <h4 className="pb-3">Confidentiality & Privacy</h4>
                        <p className="light-text-2">Confidentiality is a cornerstone of ethical mental health care. We strictly adhere to HIPAA and other data protection laws to ensure that all patient information, including Protected Health Information (PHI), remains private and secure. Information about a patient’s diagnosis, treatment, or therapy sessions is never shared without explicit consent unless legally required. When disclosure is necessary—such as in cases of imminent harm, abuse, or legal obligations—we follow strict protocols to protect patient rights while fulfilling ethical and legal responsibilities. We also implement robust digital security measures to prevent unauthorized access to sensitive data.</p>
                      </div>
                    </div>


                    <div className="d-flex pb-5">
                      <p className="site-primary-bg border-radius-50 site-number white-text mt-1">3</p>
                      <div className="ps-3">
                        <h4 className="pb-3">Professional Conduct & Integrity</h4>
                        <p className="light-text-2">Our team of mental health professionals and administrative staff are expected to uphold the highest standards of honesty, transparency, and ethical decision-making in all interactions. Professional integrity ensures that every diagnosis, treatment, and recommendation is made in the best interest of the patient, free from external influences or conflicts of interest. We maintain strict policies to address any ethical concerns or violations, ensuring that malpractice or unethical behavior is swiftly reported and addressed.</p>
                      </div>
                    </div>





                    <div className="d-flex pb-5">
                      <p className="site-primary-bg border-radius-50 site-number white-text mt-1">4</p>
                      <div className="ps-3">
                        <h4 className="pb-3">Boundaries & Dual Relationships</h4>
                        <p className="light-text-2">Maintaining professional boundaries is essential for effective mental health treatment. Therapists, counselors, and healthcare professionals must not engage in personal, financial, or romantic relationships with patients, as such relationships can compromise the integrity of care. Ethical guidelines prohibit any behavior that may blur the line between professional and personal relationships. Our team is trained to handle boundary-setting professionally, ensuring that all interactions remain appropriate, therapeutic, and focused on patient well-being.</p>
                      </div>
                    </div>

                    <div className="d-flex pb-5">
                      <p className="site-primary-bg border-radius-50 site-number white-text mt-1">5</p>
                      <div className="ps-3">
                        <h4 className="pb-3">Ethical Treatment Practices</h4>
                        <p className="light-text-2">All treatment provided at Springfield Mental Health is based on scientifically supported, evidence-based practices. Mental health professionals must ensure that the treatment methods used are safe, effective, and in the patient’s best interest. Patients are always informed about their diagnosis, treatment plan, and any available alternatives so they can make educated choices about their care. Coercion, manipulation, or the use of unproven methods that could potentially harm the patient are strictly prohibited. We continually update our practices to align with the latest research and clinical guidelines.</p>
                      </div>
                    </div>

                    <div className="d-flex pb-5">
                      <p className="site-primary-bg border-radius-50 site-number white-text mt-1">6</p>
                      <div className="ps-3">
                        <h4 className="pb-3">Informed Consent & Patient Rights</h4>
                        <p className="light-text-2">Patients have the right to be fully informed about their treatment, including the benefits, risks, and potential outcomes of their care. Before beginning therapy or any medical intervention, patients must provide informed consent, demonstrating that they understand and agree to the proposed treatment plan. Additionally, every patient retains the right to refuse treatment, seek a second opinion, or withdraw from treatment at any time unless there is an immediate risk of harm to themselves or others. Mental health professionals are responsible for ensuring that patients fully understand their rights and that their autonomy is always respected.</p>
                      </div>
                    </div>

                    <div className="d-flex pb-5">
                      <p className="site-primary-bg border-radius-50 site-number white-text mt-1">7</p>
                      <div className="ps-3">
                        <h4 className="pb-3">Reporting Abuse, Neglect & Ethical Violations</h4>
                        <p className="light-text-2">Mental health professionals at Springfield Mental Health are legally and ethically required to report any suspected cases of abuse, neglect, or harm involving vulnerable individuals such as children, the elderly, or persons with disabilities. If a patient discloses being in an unsafe situation, appropriate authorities will be contacted to ensure their protection while maintaining confidentiality as much as legally possible. Furthermore, ethical concerns related to professional conduct—whether among staff, therapists, or medical practitioners—must be reported to our ethics committee. Every report is handled with seriousness and confidentiality to uphold the integrity of our organization.</p>
                      </div>
                    </div>

                    <div className="d-flex pb-5">
                      <p className="site-primary-bg border-radius-50 site-number white-text mt-1">8</p>
                      <div className="ps-3">
                        <h4 className="pb-3">Ethical Use of Telehealth Services</h4>
                        <p className="light-text-2">With the increasing use of telehealth services, Springfield Mental Health ensures that remote therapy and virtual consultations meet the same ethical and professional standards as in-person sessions. Telehealth services are conducted via HIPAA-compliant platforms to ensure patient privacy and data security. Patients are fully informed of the limitations and risks associated with telehealth, including potential security concerns and challenges in providing emergency care remotely. All telehealth interactions remain confidential and are subject to the same privacy policies as traditional therapy.</p>
                      </div>
                    </div>

                    <div className="d-flex pb-5">
                      <p className="site-primary-bg border-radius-50 site-number white-text mt-1">9</p>
                      <div className="ps-3">
                        <h4 className="pb-3">Commitment to Continuous Ethical Education</h4>
                        <p className="light-text-2">Our dedication to ethical mental health care extends beyond policies—it requires continuous learning and improvement. All mental health professionals and staff members at Springfield Mental Health are required to participate in ongoing training related to ethical practices, patient rights, diversity, and cultural competency. As new research, laws, and industry standards evolve, we remain committed to adapting and improving our ethical guidelines. Regular workshops, audits, and training sessions help reinforce our commitment to providing high-quality, ethical care for all patients.</p>
                      </div>
                    </div>

                    <div className="d-flex pb-5">
                      <p className="site-primary-bg border-radius-50 site-number white-text mt-1">10</p>
                      <div className="ps-3">
                        <h4 className="pb-3">Non-Discrimination & Inclusivity</h4>
                        <p className="light-text-2">Springfield Mental Health is committed to creating a safe and inclusive space where individuals from all backgrounds feel welcomed and respected. We provide mental health services regardless of race, ethnicity, gender identity, sexual orientation, disability, religion, or socioeconomic status. Every patient receives equal access to care, free from discrimination or bias. Harassment, prejudice, or any form of discriminatory behavior is strictly prohibited among both staff and patients. Our team undergoes regular training to promote cultural competency and awareness in mental health treatment.</p>
                      </div>
                    </div>

                    <div className="pb-5">
                      <p className="light-text-2 italic-text">At Springfield Mental Health, we take our ethical responsibilities seriously, ensuring that every patient receives compassionate, confidential, and professional mental health care. These guidelines serve as the foundation for our work, protecting both patients and professionals while fostering a culture of trust and excellence.</p>
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
                    <Link className="sidebar-box-link" to='/about-facility/information-security/'>Information Security</Link>
                    <Link className="sidebar-box-link sidebar-box-active-link" to='/about-facility/ethical-guidelines/'>Ethical Guidelines</Link>
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