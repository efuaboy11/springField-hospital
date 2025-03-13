import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import gallery1 from '../../img/gallery1.jpg'
import gallery2 from '../../img/gallery2.jpg'
import gallery3 from '../../img/gallery3.jpg'
import gallery4 from '../../img/gallery4.jpg'
import gallery5 from '../../img/gallery5.jpg'
import gallery6 from '../../img/gallery6.jpg'
import gallery7 from '../../img/gallery7.jpg'

export const Gallery = () =>{
  const { 
    OnbodyClick, 

  } = useContext(AuthContext)


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
                        <img src={gallery3} alt="" width='100%'/>
                        <div className="dark-background p-2">
                          <p>Attending To Patients</p>
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
                  </div>
                </div>
              </div>
            </div>
          </section>


        </div>

      </div>


      <Footer />
    </div>









      
  )
}