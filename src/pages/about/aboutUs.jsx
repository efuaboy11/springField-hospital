import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import "../../css/componentCss/sidebarBox.css"
import { Helmet } from "react-helmet-async"

export const AboutUs = () =>{
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
        <title>About Us | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Learn about Springfield Mental Health and Psychosocial Services, our mission, vision, and commitment to mental wellness." />
        <meta name="keywords" content="About Us, Mental Health Facility, Our Mission, Our Vision, Founder Message, Core Values, Why Choose Us, Message from the Team, Springfield Psychosocial Services, Mental Wellness" />
        <meta property="og:title" content="About Us | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Discover who we are, our values, and how Springfield Mental Health and Psychosocial Services is dedicated to improving mental health and well-being." />
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
                  <p className="site-primary-text md-text font-bold">About Us</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> About Facility <i class="ri-arrow-right-fill"></i>About Us</p>
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
                      <p className="md-text font-bold pb-3">About Us – Springfield Mental Health Services</p>
                      <p className="light-text-2 pb-3">At Springfield Mental Health Services, we are dedicated to fostering hope, healing, and transformation in the lives of those struggling with mental health challenges. Our mission is to provide compassionate, high-quality care in a supportive and judgment-free environment, ensuring that every individual receives the help they need to lead a healthier and more fulfilling life.</p>
                      <p className="light-text-2">We believe that mental health is just as important as physical well-being, and seeking help is a courageous and empowering step. Our team of experienced and licensed professionals is committed to guiding individuals on their journey to recovery, offering personalized treatment plans tailored to their unique needs. Whether someone is experiencing anxiety, depression, trauma, or any other mental health condition, we are here to provide the necessary support and care.</p>
                    </div>
                    <div className="pb-5">
                      <h3 className="pb-3">Our Mission</h3>
                      <p className="light-text-2">We envision a future where mental health care is readily available to all, where individuals feel seen, heard, and valued, and where everyone has the opportunity to heal and thrive. Through continuous innovation, research-driven approaches, and a deep commitment to our patients, we aim to be a leading force in transforming mental health care.</p>
                    </div>

                    <div className="pb-5">
                      <h3 className="pb-3">Our Vision</h3>
                      <p className="light-text-2">We envision a future where mental health care is readily available to all, where individuals feel seen, heard, and valued, and where everyone has the opportunity to heal and thrive. Through continuous innovation, research-driven approaches, and a deep commitment to our patients, we aim to be a leading force in transforming mental health care.</p>
                    </div>

                    <div className="pb-5">
                      <h3 className="pb-3">Core Values</h3>
                      <div className="light-text-2">
                        <p className="pb-2 light-text-2">At Springfield Mental Health Services, our core values define who we are and guide our approach to providing compassionate and effective mental health care:</p>
                        <div>
                          <div>
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Compassion: We believe in treating every individual with kindness, empathy, and respect, ensuring they feel heard and understood.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">  Integrity: We uphold the highest ethical standards in our care, maintaining honesty, transparency, and trustworthiness in all our interactions.</p>
                            </div>
                            
                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2"> Respect: Every person’s journey is unique, and we honor diverse backgrounds, perspectives, and experiences in a judgment-free environment.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">Innovation: We embrace evidence-based treatments and continually seek new approaches to improve mental health care and accessibility</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">Excellence: We are committed to delivering high-quality, patient-centered services that meet the highest standards of professionalism and care.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">Collaboration: We work closely with patients, families, and communities to create a supportive network for healing and recovery.</p>
                            </div>

                            <div className="d-flex pb-3">
                              <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                              <p className="light-text-2">Accessibility: We believe mental health care should be available to everyone, and we strive to remove barriers to support and treatment.</p>
                            </div>
                          </div>
                        </div>

                        
              
                      </div>
                    </div>

                    <div className="pb-5">
                      <h3 className="pb-3">Our Commitment to Diversity & Inclusion</h3>
                      <p className="light-text-2">We are committed to providing inclusive and culturally competent care that respects and celebrates diversity. Our services are tailored to meet the unique needs of individuals from all backgrounds, ensuring equitable access to mental health support.</p>
                    </div>

                    <div className="pb-5">
                      <h3 className="pb-3">Our Approach to Mental Health</h3>
                      <p className="light-text-2">We take a holistic and personalized approach to mental health care, understanding that every individual’s needs are different. Our team integrates therapy, counseling, medication management, and wellness strategies to create a comprehensive treatment plan that promotes long-term well-being.</p>
                    </div>

                    <div className="pb-5">
                      <h3 className="pb-3">Our Team</h3>
                      <p className="light-text-2">Our team consists of licensed therapists, counselors, psychiatrists, and mental health professionals who are passionate about making a difference. Each member brings a wealth of experience, dedication, and a deep commitment to patient care.</p>
                    </div>

                    <div className="pb-5">
                      <h3 className="pb-3">Community Involvement</h3>
                      <p className="light-text-2">Beyond providing clinical services, we are actively engaged in community outreach programs, educational workshops, and mental health advocacy initiatives. We believe in raising awareness and fostering a supportive community that prioritizes mental wellness.</p>
                    </div>

                    <div className="pb-5">
                      <h3 className="pb-3">Why Choose Us?</h3>
                      <p className="light-text-2 pb-3">We understand that choosing a mental health service provider is a significant decision. At Springfield Mental Health Services, we prioritize creating a safe, welcoming, and comfortable environment for our patients. Our evidence-based treatments, highly trained professionals, and holistic approach to care ensure that individuals receive the best possible support for their mental well-being. Whether it's individual therapy, group counseling, medication management, or crisis intervention, we are committed to delivering excellence in every aspect of our services.</p>
                      <p className="light-text-2">We are more than just a mental health facility—we are a community. A place where people come to heal, find hope, and reclaim their lives. No matter where you are on your mental health journey, know that you are not alone. We are here for you.</p>
                    </div>

                    <div className="pb-5">
                      <h3 className="pb-3">Message from the Team</h3>
                      <p className="light-text-2 pb-3">At Springfield Mental Health Services, we are more than just mental health professionals—we are a dedicated team of psychiatrists, therapists, counselors, and support staff united by a common purpose: to provide compassionate, accessible, and effective mental health care for all.</p>
                      <p className="light-text-2 pb-3">We understand that seeking help can be a difficult and emotional step, especially in a society where mental health is often misunderstood. That’s why we are committed to creating a safe, judgment-free space where everyone can feel heard, valued, and supported. Whether you are dealing with anxiety, depression, trauma, or any other mental health challenge, we are here to walk this journey with you.</p>
                      <p className="light-text-2 pb-3">Our approach goes beyond traditional therapy. We believe in holistic healing—integrating mental health care with skills training, vocational rehabilitation, and agricultural empowerment. We want to help individuals not only regain their mental well-being but also rediscover their purpose, build resilience, and find new opportunities for personal and economic growth.</p>
                      <p className="light-text-2 pb-3">Every individual who walks through our doors is more than just a patient—they are part of our Springfield family. Our mission is to support, uplift, and empower each person, ensuring they receive the care, respect, and tools they need to thrive. Together, we can break the stigma surrounding mental health in Nigeria and create a future where mental wellness is recognized as a fundamental right for all.</p>
                      <p className="light-text-2 pb-2">Thank you for trusting us with your care. We are honored to be part of your journey toward healing and growth.</p>
                      <p className="italic-text site-primary-text">— The Springfield Mental Health Services Team</p>
                    </div>

                    <div className="pb-5">
                      <h3 className="pb-3">Message from the Founder</h3>
                      <p className="light-text-2 pb-3">Mental health is the foundation of a fulfilling life, yet for too long, seeking help has been surrounded by stigma and misunderstanding. As a psychiatrist, I have always believed in seeing the good in people, understanding their struggles, and guiding them toward healing. In Nigeria, access to mental health care is limited, and many suffer in silence, afraid of judgment and rejection. I founded Springfield Mental Health Services to change that—to create a safe space where everyone can share their struggles freely and receive the care they deserve.</p>
                      <p className="light-text-2 pb-3">But my vision goes beyond treatment. I believe in true rehabilitation, in empowering individuals not just to recover but to thrive. Mental health challenges should not mean the end of one’s potential. That is why Springfield is pioneering an approach that integrates mental health care with skill-building, vocational training, and agricultural empowerment. I see a future where those who have battled mental health conditions can reintegrate into society, not just as survivors but as skilled, independent individuals who can contribute meaningfully.</p>
                      <p className="light-text-2 pb-3">My dream is to take those who have been abandoned—the mentally ill on the streets, in shelters, and in begging communities—house them, feed them, and provide them with structured care. But beyond that, I want to give them a purpose. Through agriculture, trade skills, and crafts like tailoring, barbing, and other innovative skill sets, they can rebuild their lives and regain their dignity. This is not just about treatment; it is about transformation.</p>
                      <p className="light-text-2 pb-2">Springfield Mental Health Services is here to change the narrative of mental health in Nigeria. To prove that mental wellness is not a privilege, but a right. To show that those who struggle with mental illness are not lost—they are simply waiting for the right support to find their way again. Together, we can create a future where no one is left behind.</p>
                      <p className="italic-text site-primary-text">— Iseghohmhen Tega Oare, Founder & CEO of Springfield Mental Health Services</p>
                    </div>
                  </div>
   
                </div>
              </div>
            </div>

            <div className={`d-none d-md-block col-xl-3 col-md-4 mt-5`}>
              <aside className="sidebar  position-relative1">
                <div className={`${isFixed ? 'position-fixed1': 'position-absolute1'} sidebar-box`}>
                  <div className="me-5">
                    <Link className="sidebar-box-link sidebar-box-active-link" to='/about-facility/about-us/'>About Us</Link>
                    <Link to='/contact-us/' className="sidebar-box-link " >Contact Us</Link>
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