import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import '../../css/componentCss/patient.css'
import appointment1 from "../../img/appointment1.png"
import appointment2 from "../../img/appointment2.png"
import appointment3 from "../../img/appointment3.png"
import appointment4 from "../../img/appointment4.png"
export const AppointmentScheduling = () =>{
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
                  <p className="site-primary-text md-text font-bold">Appointment & Scheduling</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Patients & Visitors <i class="ri-arrow-right-fill"></i>Appointment & Scheduling</p>
                </div>
                
              </div>
            </div>
          </div>

          <section className="site-section-container">
              <div className="container-lg">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="text-center">
                      <p className="site-header font-bold pb-3">Your Mental Well-Being Matters: Easy & Accessible Care.</p>
                      <p className="light-text-2">At Springfield Mental Health Services, we believe that mental well-being is essential for a fulfilling life. Seeking support is a courageous step, and we are here to make the process as simple, accessible, and stress-free as possible. Whether you're looking for therapy, counseling, or medication management, scheduling an appointment is quick and easy.</p>
                      <div className="pt-4">
                        <Link to='' className="site-btn px-5">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div>
                <p className="font-bold sm-text text-center uppercase site-primary-text mb-5 pb-3">How to Schedule an Appointment</p>
                <div className="row gx-4 gy-5">
                  <div className="col-md-6 col-lg-4">
                    <div className="d-sm-flex align-center">
                      <div className="pe-5 pb-4">
                        <img width='70px' src={appointment1} alt="" />
                      </div>
                      <div className=" appointment-box-side-line ps-4">
                        <p className="font-bold sm-text pb-2">Online Booking</p>
                        <p className="light-text-2">Patients can book appointment by going to the book appointment portal. FIll in the personal details. A confirmation email and SMS will be sent upon successful booking.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="d-sm-flex align-center">
                      <div className="pe-5 pb-4">
                        <img width='70px' src={appointment2} alt="" />
                      </div>
                      <div className=" appointment-box-side-line ps-4">
                        <p className="font-bold sm-text pb-2">Phone Booking</p>
                        <p className="light-text-2">Patients can can always reach us through our customer hotline <strong className="black-text">(08079022633)</strong> or via email <strong className="black-text">(iseghohimhene@gmail.com)</strong>. We are avalaible 247</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="d-sm-flex align-center">
                      <div className="pe-5 pb-4">
                        <img width='70px' src={appointment3} alt="" />
                      </div>
                      <div className=" appointment-box-side-line ps-4">
                        <p className="font-bold sm-text pb-2">Walk-In Appointments </p>
                        <p className="light-text-2">Patients can come to the mental health facility center to book an appointmen. A mental health specialist will book you an appointment.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="d-sm-flex align-center">
                      <div className="pe-5 pb-4">
                        <img width='70px' src={appointment4} alt="" />
                      </div>
                      <div className=" appointment-box-side-line ps-4">
                        <p className="font-bold sm-text pb-2">Refferal</p>
                        <p className="light-text-2">If a patient is reffered from another hospital. We will need a transfer off your record from the previous hospital, so we can determine your progress.</p>
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