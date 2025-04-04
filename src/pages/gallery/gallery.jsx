import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import gallery1 from '../../img/gallery1.jpg'
import gallery2 from '../../img/gallery2.jpg'
import gallery3 from '../../img/sittingroom1.jpg'
import gallery4 from '../../img/gallery4.jpg'
import gallery5 from '../../img/gallery5.jpg'
import gallery6 from '../../img/gallery6.jpg'
import gallery7 from '../../img/gallery7.jpg'
import gallery8 from '../../img/office1.jpg'
import gallery9 from '../../img/room1.jpg'
import { Helmet } from "react-helmet-async"

export const Gallery = () =>{
  const { 
    OnbodyClick, 

  } = useContext(AuthContext)


  return(
    <div>
      <Helmet>
        <title>Gallery | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Explore our gallery showcasing Springfield Mental Health and Psychosocial Services, our facilities, events, and community engagement." />
        <meta name="keywords" content="Gallery, Mental Health Facility, Community Events, Springfield Psychosocial Services, Photos" />
        <meta property="og:title" content="Gallery | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="View images of our mental health facility, events, and the supportive environment at Springfield Mental Health and Psychosocial Services." />
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
                  <p className="site-primary-text md-text font-bold">Gallery</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Gallery</p>
                </div>
                
              </div>
            </div>
          </div>

          <section className="site-section-container">
            <div className="container-lg">
              <div className="row g-4 py-5">
                <div className="col-xxl-12">
                  <div className="row g-4">
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                      <div>
                        <img src={gallery1} alt="" width='100%'/>
                        <div className="dark-background p-2">
                          <p>Patient in Therapy </p>
                        </div>                 
                      </div>
                    </div>

                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                      <div>
                        <img src={gallery2} alt="" width='100%'/>
                        <div className="dark-background p-2">
                          <p>Checking Patient Blood Pressure</p>
                        </div>                 
                      </div>
                    </div>



                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                      <div>
                        <img src={gallery4} alt="" width='100%' height='240px'/>
                        <div className="dark-background p-2">
                          <p>Patient Playing Tensis </p>
                        </div>                 
                      </div>
                    </div>

                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                      <div>
                        <img src={gallery5} alt="" width='100%' height='240px'/>
                        <div className="dark-background p-2">
                          <p>Patient Playing Chess </p>
                        </div>                 
                      </div>
                    </div>

                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                      <div>
                        <img src={gallery6} alt="" width='100%' height='240px'/>
                        <div className="dark-background p-2">
                          <p>Health Care Staff</p>
                        </div>                 
                      </div>
                    </div>

                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                      <div>
                        <img src={gallery7} alt="" width='100%' height='240px'/>
                        <div className="dark-background p-2"> 
                          <p>Membbers Off Staff</p>
                        </div>                 
                      </div>
                    </div>

                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                      <div>
                        <img src={gallery3} alt="" width='100%'/>
                        <div className="dark-background p-2">
                          <p>Patients Relaxation Area</p>
                        </div>                 
                      </div>
                    </div>

                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                      <div>
                        <img src={gallery8} alt="" width='100%'/>
                        <div className="dark-background p-2">
                          <p>Patients Relaxation Area</p>
                        </div>                 
                      </div>
                    </div>

                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                      <div>
                        <img src={gallery9} alt="" width='100%'/>
                        <div className="dark-background p-2">
                          <p>Patients Bedroom</p>
                        </div>                 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


        </div>

        
        <Footer />

      </div>


    </div>









      
  )
}