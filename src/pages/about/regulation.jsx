import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import "../../css/componentCss/sidebarBox.css"
import { Helmet } from "react-helmet-async"

export const Regulation = () =>{
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
        <title>Regulation Explained | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Understand the regulations and policies that govern mental health services at Springfield Mental Health and Psychosocial Services." />
        <meta name="keywords" content="Regulations, Mental Health Laws, Compliance, Policies, Springfield Psychosocial Services" />
        <meta property="og:title" content="Regulation Explained | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Learn about the legal and ethical regulations that ensure quality and compliance in mental health services." />
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
                  <p className="site-primary-text md-text font-bold">Regulation Explained</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> About Facility <i class="ri-arrow-right-fill"></i>Regulation Explained</p>
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
                    <p className="pb-4 site-header font-weight-700">Regulation Explained</p>
                    <h3 className="pb-4">SpringField Regulation</h3>
                    <div className="light-text-2">
                      <div className="pb-5">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">The Nigerian Mental Health Act (2021)</p>
                          </div>
                        </div>

                        <p className="pt-3">The Nigerian Mental Health Act was enacted to replace the outdated Lunacy Act of 1958, bringing a more human-centered and rights-based approach to mental health care. The law establishes clear guidelines for the treatment, rights, and protection of individuals with mental health conditions. It protects individuals with mental illnesses from discrimination and abuse while ensuring access to affordable and quality mental health care. It also creates a structured framework for licensing and regulating psychiatric hospitals, preventing involuntary treatment without due process and informed consent. Furthermore, it recognizes the rights of people with mental health conditions to fully participate in society. This law is a significant step in modernizing Nigeria’s mental health landscape, ensuring ethical and effective mental health treatment.</p>
                      </div>


                      <div className="pb-3">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">CRPD</p>
                            <p className="italic-text"> The United Nations Convention on the Rights of Persons with Disabilities  </p>
                          </div>
                        </div>

                        <p className="pt-3">The CRPD is an international treaty that Nigeria has ratified, committing to protecting the rights of people with disabilities, including mental health conditions. It acknowledges that mental health conditions are disabilities that require legal protection and promotes inclusive mental health care without discrimination. The treaty advocates for community-based treatment over institutionalization, ensuring that individuals receive support within their communities rather than being isolated. It also reinforces equal opportunities in employment, education, and social participation. The CRPD aligns with Nigeria’s mental health laws and encourages policies that integrate individuals with mental health challenges into mainstream society.</p>
                      </div>
                      
                    </div>
                    
                    

                    <div className="light-text-2">
                      <div className="pb-5">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">The Mental Health Policy of Nigeria (2013)</p>
                          </div>
                        </div>

                        <p className="pt-3">Nigeria’s National Mental Health Policy was created to guide the country’s mental health services and address critical gaps in care and policy implementation. The policy aims to expand mental health services across primary health care centers while training health workers to provide adequate mental health care at all levels. It also seeks to reduce the stigma associated with mental illnesses, ensuring that individuals feel safe to seek help without fear of discrimination. Adequate funding for mental health programs is another priority, as well as strengthening legal protections for people with mental health conditions. Although progress has been slow, this policy remains a roadmap for improving mental health care in Nigeria.</p>
                      </div>


                      <div className="pb-3">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">WHO (2013-2030)</p>
                            <p className="italic-text">   The World Health Organization (WHO) Mental Health Action Plan </p>
                          </div>
                        </div>

                        <p className="pt-3">The WHO Mental Health Action Plan provides a global framework for improving mental health services, and Nigeria is expected to align its policies with this plan. The action plan aims to strengthen leadership in mental health governance, ensuring that mental health is prioritized in national health strategies. It encourages the integration of mental health into general health services, so individuals can access care at all levels of the healthcare system. It also focuses on promoting prevention, early diagnosis, and treatment of mental disorders while protecting human rights in mental health care. The WHO provides technical support to Nigeria in implementing these global mental health strategies.</p>
                      </div>

                      <div className="pb-3">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">NDPR</p>
                            <p className="italic-text">   Data Protection and Privacy Regulations for Mental Health Records</p>
                          </div>
                        </div>

                        <p className="pt-3">Mental health records contain highly sensitive information, and Nigeria’s Data Protection Regulation (NDPR) ensures that patients’ personal data is handled securely. This regulation mandates that mental health records must be kept confidential and only shared with authorized professionals. Patients have the right to access their medical records, reinforcing transparency and trust in the mental health system. Clinics and hospitals are required to implement strict security measures to protect patient data, ensuring that individuals seeking mental health support can do so without fear of privacy violations. This regulation aligns with global best practices, strengthening the confidentiality and security of mental health services.</p>
                      </div>


                      <div className="pb-3">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">The National Health Act (2014)</p>
                          </div>
                        </div>

                        <p className="pt-3">The National Health Act provides a legal framework for the health sector in Nigeria, including mental health services, by outlining the rights of patients and the responsibilities of healthcare providers. This law ensures that mental health care is an integral part of Nigeria’s public health system and mandates fair treatment for people with mental health conditions. It also requires government funding for mental health programs, emphasizing the need for sustainable financial support to improve mental health infrastructure. By prioritizing mental health within the broader healthcare system, this law strengthens Nigeria’s commitment to ensuring accessible and equitable care for all.</p>
                      </div>


                      <div className="pb-3">
                        <div className="d-flex  py-2">
                          <i class="mt-1 bi bi-check site-primary-bg border-radius-50 site-good-mark white-text"></i>
                          <div className="ps-3"> 
                            <p className="font-weight-700">The African Charter on Human and Peoples' Rights</p>
                          </div>
                        </div>

                        <p className="pt-3">As part of the African Union, Nigeria follows this charter, which guarantees the protection of human rights, including those related to mental health. The charter explicitly prohibits inhumane or degrading treatment of individuals with mental health conditions, ensuring that they are treated with dignity and respect. It establishes guidelines for fair legal treatment of persons in psychiatric care and reinforces their right to dignity and social inclusion. By preventing mental health patients from being abused, mistreated, or unjustly institutionalized, this charter plays a vital role in shaping mental health laws and policies across African nations, including Nigeria.</p>
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
                    <Link className="sidebar-box-link sidebar-box-active-link" to='/about-facility/regulation-explained/'>Regulation Explained</Link>
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