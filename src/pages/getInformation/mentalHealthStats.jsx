import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import nigeriaMap from '../../img/nigeriaMap.jpg'
import togetherness from '../../img/togetherness.jpg'
import heartIcon from '../../img/heart-icon.jpg'
import HotLineDetails from "../../component/hotlineDetails"


export const MentalHealthStats = () =>{
  const { 
    OnbodyClick, 

  } = useContext(AuthContext)

  const percentage = 66;
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
                  <p className="site-primary-text md-text font-bold">Mental Health Facts and Statistics</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Information <i class="ri-arrow-right-fill"></i>Mental Health Facts and Statistics</p>
                </div>
                
              </div>
            </div>
          </div>

          <section className="site-section-container">
            <div className="container-lg">
              <div className="row">
                <div className="col-xl-7 col-lg-9 col-md-11  responsive-centralized-text">
                  <div className="light-background2 p-4">
                    <p className="site-header pb-5">Understanding the Mental Health Landscape in Nigeria</p>
                    <p className="light-text-2">Mental health remains one of the most overlooked aspects of healthcare in Nigeria, despite its critical impact on individuals, families, and society. In a country with a population of over 200 million people, an estimated 20–30% of Nigerians suffer from mental illnesses, yet mental health care remains severely underfunded and stigmatized. <br /> <br />
                    Nigeria, like many African countries, has traditionally prioritized physical health over mental well-being, leading to a lack of awareness, inadequate healthcare infrastructure, and deep-rooted stigmas associated with mental disorders. Many Nigerians suffering from conditions like depression, anxiety, bipolar disorder, schizophrenia, and post-traumatic stress disorder (PTSD) do not receive the necessary support due to misconceptions, cultural beliefs, and the shortage of mental health professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <section className="site-section-container">
            <div className="container-lg">

              <div className="d-block d-xl-none">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="light-background2 p-4 border-radius-10px ">
                        <div>
                          <div className="d-flex justify-content-center">
                            <div style={{ width: "50%"}}>
                              <CircularProgressbar
                                value={14.3}
                                text={`~14.3%`}
                                strokeWidth={10} // Increase or decrease thickness
                                styles={{
                                  path: {
                                    stroke: `rgba(27, 9, 111, ${percentage / 100})`,
                                    strokeLinecap: "round",
                                    transition: "stroke-dashoffset 0.5s ease 0s",
                                    
                                    transformOrigin: "center center",
                                  },
                                  trail: {
                                    stroke: "#d6d6d6",
                                    strokeLinecap: "round",
                                    transform: "rotate(0.25turn)",
                                    transformOrigin: "center center",
                                  },
                                  text: {
                                    fill: "#1b096f",
                                    fontSize: "16px",
                                    fontWeight: '700'
                                  },
                                  background: {
                                    fill: "#3e98c7",
                                  },
                                }}
                              />
                            </div>
                          </div>
                          <p className="pb-2 pt-4 font-bold site-primary-text">Addiction/Substance Use</p>
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> <span className="font-bold">Global:</span>   5% of adults; higher in men.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> <span className="font-bold">Nigeria:</span>  ~14.3% marijuana use (youth up to 20% in some areas).</p>
                          </div>
                        </div>

                    </div>
                  </div>

                  <div className="col-md-6">
                    
                    <div className="light-background2 p-4 border-radius-10px mb-4">
                        <div>
                          <p className="pb-4 font-bold site-primary-text">Depression</p>
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> <span className="font-bold">Global:</span>  5% of adults; women 1.5–2x higher.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> <span className="font-bold">Nigeria:</span>   ~20% prevalence (adults), linked to economic hardship and stigma limiting treatment access.</p>
                          </div>
                        </div>

                    </div>

                    <div className="light-background2 p-4 border-radius-10px ">
                      <div>
                        <p className="pb-4 font-bold site-primary-text">Bipolar Disorder</p>
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> <span className="font-bold">Global:</span>  1–2% of adults; similar rates across genders.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> <span className="font-bold">Nigeria:</span>   Data scarce; estimated ~1.5% due to underdiagnosis.</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="col-md-6">
                    
                    <div className="light-background2 p-4 border-radius-10px mb-4">
                        <div>
                          <p className="pb-4 font-bold site-primary-text">Suicidal Thoughts</p>
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> <span className="font-bold">Global:</span>  ~9% of adults; 15–20% youth.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> <span className="font-bold">Nigeria:</span>   Underreported (cultural stigma); youth rates rising due to unemployment.</p>
                          </div>
                        </div>

                    </div>

                    <div className="light-background2 p-4 border-radius-10px ">
                      <div>
                        <p className="pb-4 font-bold site-primary-text">Marijuana Use</p>
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> <span className="font-bold">Global:</span>  3–4% adults; youth use rising.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> <span className="font-bold">Nigeria:</span>   ~14% adults (NDLEA data); youth up to 20% in hotspots.</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="col-md-6">
                  <div className="light-background2 p-4 border-radius-10px mb-4">
                      <div>
                        <div className="d-flex justify-content-center">
                          <div style={{ width: "50%"}}>
                            <CircularProgressbar
                              value={14.3}
                              text={`~14.3%`}
                              strokeWidth={10} // Increase or decrease thickness
                              styles={{
                                path: {
                                  stroke: `rgba(27, 9, 111, ${percentage / 100})`,
                                  strokeLinecap: "round",
                                  transition: "stroke-dashoffset 0.5s ease 0s",
                                  
                                  transformOrigin: "center center",
                                },
                                trail: {
                                  stroke: "#d6d6d6",
                                  strokeLinecap: "round",
                                  transform: "rotate(0.25turn)",
                                  transformOrigin: "center center",
                                },
                                text: {
                                  fill: "#1b096f",
                                  fontSize: "16px",
                                  fontWeight: '700'
                                },
                                background: {
                                  fill: "#3e98c7",
                                },
                              }}
                            />
                          </div>
                        </div>
                        <p className="pb-2 pt-4 font-bold site-primary-text">Addiction/Substance Use</p>
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> <span className="font-bold">Global:</span>   5% of adults; higher in men.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> <span className="font-bold">Nigeria:</span>  ~14.3% marijuana use (youth up to 20% in some areas).</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="col-md-10 d-flex justify-content-center">
                    <img src={nigeriaMap} width='100%' alt="" />
                  </div>
                </div>
              </div>

              <div className="d-none d-xl-block">
                <div className="row align-center">
                  <div className="col-3">
                    <div className="light-background2 p-4 border-radius-10px mb-4">
                      <div>
                        <div className="d-flex justify-content-center">
                          <div style={{ width: "50%"}}>
                            <CircularProgressbar
                              value={14.3}
                              text={`~14.3%`}
                              strokeWidth={10} // Increase or decrease thickness
                              styles={{
                                path: {
                                  stroke: `rgba(27, 9, 111, ${percentage / 100})`,
                                  strokeLinecap: "round",
                                  transition: "stroke-dashoffset 0.5s ease 0s",
                                  
                                  transformOrigin: "center center",
                                },
                                trail: {
                                  stroke: "#d6d6d6",
                                  strokeLinecap: "round",
                                  transform: "rotate(0.25turn)",
                                  transformOrigin: "center center",
                                },
                                text: {
                                  fill: "#1b096f",
                                  fontSize: "16px",
                                  fontWeight: '700'
                                },
                                background: {
                                  fill: "#3e98c7",
                                },
                              }}
                            />
                          </div>
                        </div>
                        <p className="pb-2 pt-4 font-bold site-primary-text">Addiction/Substance Use</p>
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> <span className="font-bold">Global:</span>   5% of adults; higher in men.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> <span className="font-bold">Nigeria:</span>  ~14.3% marijuana use (youth up to 20% in some areas).</p>
                        </div>
                      </div>

                    </div>


                    <div className="light-background2 p-4 border-radius-10px ">
                      <div>
                        <p className="pb-4 font-bold site-primary-text">Bipolar Disorder</p>
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> <span className="font-bold">Global:</span>  1–2% of adults; similar rates across genders.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> <span className="font-bold">Nigeria:</span>   Data scarce; estimated ~1.5% due to underdiagnosis.</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="col-6">
                    <div>
                      <img src={nigeriaMap} width='100%' alt="" />
                    </div>
                  </div>


                  <div className="col-3">
                    <div className="light-background2 p-4 border-radius-10px mb-4">
                      <div>
                        <p className="pb-4 font-bold site-primary-text">Depression</p>
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> <span className="font-bold">Global:</span>  5% of adults; women 1.5–2x higher.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> <span className="font-bold">Youth:</span>  10–20% affected.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> <span className="font-bold">Nigeria:</span>  1~20% prevalence (adults), linked to economic hardship and stigma limiting treatment access.</p>
                        </div>
                      </div>

                    </div>


                    <div className="light-background2 p-4 border-radius-10px mb-4">
                      <div>
                        <div className="d-flex justify-content-center">
                          <div style={{ width: "50%"}}>
                            <CircularProgressbar
                              value={30}
                              text={`~30%`}
                              strokeWidth={10} // Increase or decrease thickness
                              styles={{
                                path: {
                                  stroke: `rgba(27, 9, 111, ${percentage / 100})`,
                                  strokeLinecap: "round",
                                  transition: "stroke-dashoffset 0.5s ease 0s",
                                  
                                  transformOrigin: "center center",
                                },
                                trail: {
                                  stroke: "#d6d6d6",
                                  strokeLinecap: "round",
                                  transform: "rotate(0.25turn)",
                                  transformOrigin: "center center",
                                },
                                text: {
                                  fill: "#1b096f",
                                  fontSize: "16px",
                                  fontWeight: '700'
                                },
                                background: {
                                  fill: "#3e98c7",
                                },
                              }}
                            />
                          </div>
                        </div>
                        <p className="pb-2 pt-4 font-bold site-primary-text">Sexual Assault</p>
                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> <span className="font-bold">Global:</span>  1 in 3 women experience violence.</p>
                        </div>

                        <div className="d-flex pb-3">
                          <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                          <p className="light-text-2"> <span className="font-bold">Nigeria:</span>  ~30% of women report assault; youth women at higher risk.</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div>
                <p className="pb-5 mb-4 sm-text font-bold uppercase text-center site-primary-text">Barriers to Mental Health Care in Nigeria</p>

                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">01</p>
                        <p className="sm-text font-bold pb-3">Stigma and Cultural Beliefs</p>
                        <p className="light-text-2">Many Nigerians still view mental illness as a spiritual problem caused by witchcraft, demonic possession, or punishment from God. This has led to maltreatment of individuals with mental disorders, with some being chained, beaten, or abandoned in religious or traditional healing centers instead of receiving medical care.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">02</p>
                        <p className="sm-text font-bold pb-3">Lack of Awareness and Education</p>
                        <p className="light-text-2">Many Nigerians do not recognize the symptoms of mental illnesses, leading to misdiagnosis or ignorance. Some believe that depression is just laziness, while anxiety is often dismissed as overreacting. <br /> Mental Health should be taught in schools and public places</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">03</p>
                        <p className="sm-text font-bold pb-3">Inadequate Mental Health Infrastructure</p>
                        <p className="light-text-2">There are only eight psychiatric hospitals in Nigeria, and they are mostly located in major cities, leaving rural populations without access to care. Most primary healthcare centers do not offer mental health services, and general hospitals lack trained professionals.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">04</p>
                        <p className="sm-text font-bold pb-3">Shortage of Mental Health Professionals</p>
                        <p className="light-text-2">With only 250 psychiatrists and a few thousand clinical psychologists and social workers, Nigeria has one of the worst psychiatrist-to-patient ratios in the world. This means that even when people seek help, they may wait months to see a specialist.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">05</p>
                        <p className="sm-text font-bold pb-3">High Cost of Mental Health Care</p>
                        <p className="light-text-2">Most mental health treatments, including therapy, medications, and psychiatric consultations, are not covered by health insurance in Nigeria. This makes mental health care too expensive for the average Nigerian, forcing many to seek unqualified alternatives.</p>
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">06</p>
                        <p className="sm-text font-bold pb-3">Criminalization of Suicide</p>
                        <p className="light-text-2">Nigeria's criminal code (Section 327) still treats suicide as a criminal offense, meaning that individuals who survive suicide attempts can be arrested and prosecuted instead of receiving proper care. This prevents people from seeking help when they are suicidal.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div className="row g-4">
              <div className="col-md-6">
                  <div>
                    <p className="site-header responsive-centralized-text">How Can Nigeria Improve Mental Health Care?</p>
                    <div className="pt-4">
                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">   Increase Awareness & Education – The government, schools, and communities must educate people on mental health to reduce stigma and encourage help-seeking behavior.</p>
                      </div>

                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">   Integrate Mental Health into Primary Healthcare – Every local clinic and general hospital should provide basic mental health services, so people do not have to travel long distances for treatment.</p>
                      </div>

                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">   Increase Awareness & Education – The government, schools, and communities must educate people on mental health to reduce stigma and encourage help-seeking behavior.</p>
                      </div>


                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">   Train More Mental Health Professionals – Nigeria must invest in training psychiatrists, psychologists, counselors, and social workers to meet the growing demand for mental health care.</p>
                      </div>


                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2"> Make Mental Health Care Affordable – Including therapy and psychiatric care in health insurance plans would help make mental health services accessible to more Nigerians.</p>
                      </div>


                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">   Decriminalize Suicide – Suicide should be treated as a mental health issue, not a crime. The law should be reformed to provide support rather than punishment for people struggling with suicidal thoughts.</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <img width='100%' src={togetherness} alt="" />

                    <div className="pt-4">
                      <p className="sm-text site-primary-text font-bold pb-3 responsive-centralized-text">Hope for the Future: Changing the Narrative on Mental Health</p>
                      <p className="light-text-2">Despite the challenges Nigeria faces, mental health awareness is slowly improving. Organizations like Mentally Aware Nigeria Initiative (MANI) and She Writes Woman are advocating for mental health awareness and policy changes. The Nigerian government has also passed the Mental Health Bill, which aims to improve mental healthcare services and protect the rights of individuals with mental disorders.</p>
                    </div>
                  </div>
                </div>


              </div>
  
            </div>

          </section>

          <section className="site-section-container">
              <div>
                <div className="container-lg p-4">
                  <p className="text-center site-primary-text sm-text uppercase font-bold pb-4">A Message of Hope</p>
                  <div className="row g-4 justify-content-center">
                    <div className="col-2 col-sm-1">
                      <img className="get-information-mentalhealth-stats-hearth-2" width='40px' src={heartIcon} alt="" />
                    </div>
                    <div className="col-lg-8 col-10">
                      <div className="home-what-we-do ps-4">
                        <p className="sm-text light-text-2">Mental health is just as important as physical health. If Nigeria invests in awareness, treatment, and support systems, millions of lives can be saved and improved. <br /> If you or someone you know is struggling with mental health issues, reach out for help. You are not alone, and recovery is possible.</p>
                        <p className="light-text-2 italic-text pt-3">📢 Breaking the stigma starts with us! Together, we can build a mentally healthier Nigeria.</p>
                      </div>                     
                    </div>
                    <div className="d-none d-lg-block col-1 get-information-mentalhealth-stats-hearth">
                      <img width='40px' src={heartIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
          </section>

          <div>
            <HotLineDetails />
          </div>

        </div>
        <Footer />
      </div>


      
    </div>
      
  )
}