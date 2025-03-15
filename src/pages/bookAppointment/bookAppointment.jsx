import { useContext, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import { useForm } from "react-hook-form"
import '../../css/informationCss/bookAppointment.css'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BookAppointment = () =>{
  const { 
    OnbodyClick, 

  } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const [fullName, setFullName] = useState('')
  const [DOB, setDOB] = useState('')
  const [email, setEmail] = useState('')
  const [homeAddress, setHomeAddress] = useState('')
  const [gender, setGender] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [appointmentDate, setAppointmentDate] = useState('')
  const [appointmentType, setAppointmentType] = useState('')
  const [urgencyLevel, setUrgencyLevel] = useState('')
  const [healthConditon, setHealthCondition] = useState('')
  const [additionalNote, setAdditionalNote] = useState('')
  const [loader, setLoader] = useState('')
  const [disablebutton, setDisablebutton] = useState(false)
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [cancellationChecked, setCancellationChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = (data, e) =>{
    if (!privacyChecked || !cancellationChecked) {
      setErrorMessage("You must agree to both policies before proceeding.");
      return;
    }
    setDisablebutton(true)
    setLoader(true)
    sendEmail(e)
  }

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .send(
        "service_7457fxr",  // Replace with your EmailJS Service ID
        "template_8wha0mq", // Replace with your EmailJS Template ID
        {  
          full_name: fullName,        // Match template variables
          dob: DOB,
          email_address: email,
          home_address: homeAddress,
          gender: gender,
          phone_number: phoneNumber,
          appointment_date: appointmentDate,
          appointment_type: appointmentType,
          urgency_level: urgencyLevel,
          health_Conditon: healthConditon,
          additional_note: additionalNote,
        },
        "AQ-xd10VtIjfba0Yv"  // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setDisablebutton(false)
          setPrivacyChecked(false)
          setCancellationChecked(false)
          setLoader(false)
          setFullName('')
          setDOB('')
          setEmail('')
          setHomeAddress('')
          setGender('')
          setPhoneNumber('')
          setUrgencyLevel('')
          setHealthCondition('')
          setAdditionalNote('')
          toast.success("Appointment booked successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          e.target.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setDisablebutton(false)
          setLoader(false)
          toast.error("Failed to send email!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );

    e.target.reset();
  };
  return(
    <div>
      <div>
        <Header />
      </div>
      <div className="position-sticky1">
        <Navbar />
      </div>

      <ToastContainer/> 
      <div onClick={OnbodyClick}>
        <div>
          <div className="light-background2 mb-5">
            <div className="py-5 container-lg">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <p className="site-primary-text md-text font-bold">Book Appointment</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Book Appointment</p>
                </div>
                
              </div>
            </div>
          </div>
          <section className="site-section-container">
            <div className="container-lg mb-5 pb-5" >
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="border2 border-radius-10px">
                    <div>
                      <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="mb-4">
                            <div className="border-bottom3 px-4 py-3">
                              <div className="d-flex align-center">
                                <p className="me-3 site-primary-text site-round-border appointment-portal-number">01</p>
                                <p className="appointment-portal-headers site-primary-text">Personal Information</p>
                              </div>
                            </div>
                            <div className="row g-3 p-4">
                              <div className="col-sm-6">
                                <label className="form-label">Full Name</label>
                                <input type="text"   className={` ${errors.fullName ? 'error-input' : ''} styled-input`} {...register('fullName', {required: true})}  value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Mark" />
                                {errors.fullName && <span style={{color: 'red'}}>This Feild is required</span>}
                              </div>

                              <div className="col-sm-6">
                                <label className="form-label">Date of Birth</label>
                                <input type="date"   className={` ${errors.DOB ? 'error-input' : ''} styled-input`} {...register('DOB', {required: true})}  value={DOB} onChange={(e) => setDOB(e.target.value)}/>
                                {errors.DOB && <span style={{color: 'red'}}>This Feild is required</span>}
                              </div>

                              <div className="col-sm-6">
                                <label className="form-label">Email Address</label>
                                <input type="email"   className={` ${errors.email ? 'error-input' : ''} styled-input`} {...register('email', {required: true})}  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="johnmark12@gmail.com" />
                                {errors.email && <span style={{color: 'red'}}>This Feild is required</span>}
                              </div>

                              <div className="col-sm-6">
                                <label className="form-label">Home Address</label>
                                <input type="text"   className={` ${errors.homeAddress ? 'error-input' : ''} styled-input`} {...register('homeAddress', {required: true})}  value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)} placeholder="Adolo college road. Benin city" />
                                {errors.homeAddress && <span style={{color: 'red'}}>This Feild is required</span>}
                              </div>

                              <div className="col-sm-6">
                                <label className="form-label">Gender</label>
                                <select className={` ${errors.gender ? 'error-input' : ''} styled-input`} {...register('gender', {required: true})}  value={gender} onChange={(e) => setGender(e.target.value)}>
                                  <option value=""></option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                </select>
                                {errors.gender && <span style={{color: 'red'}}>This Feild is required</span>}
                              </div>

                              <div className="col-sm-6">
                                <label className="form-label">Phone Number</label>
                                <input type="text"   className={` ${errors.phoneNumber ? 'error-input' : ''} styled-input`} {...register('phoneNumber', {required: true})}  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="(+234) 801 589 1212" />
                                {errors.phoneNumber && <span style={{color: 'red'}}>This Feild is required</span>}
                              </div>

                              
                            </div>
                          </div>

                          <div className="mb-4">
                            <div className="border-y px-4 py-3">
                              <div className="d-flex align-center">
                                <p className="me-3 site-primary-text site-round-border appointment-portal-number">02</p>
                                <p className="appointment-portal-headers site-primary-text">Appointment Details</p>
                              </div>
                            </div>
                            <div className="row g-3 p-4">
                              <div className="col-sm-6">
                                <label className="form-label">Preferred Date & Time</label>
                                <input type="datetime-local"   className={` ${errors.appointmentDate ? 'error-input' : ''} styled-input`} {...register('appointmentDate', {required: true})}  value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} placeholder="John Mark" />
                                {errors.appointmentDate && <span style={{color: 'red'}}>This Feild is required</span>}
                              </div>

                              <div className="col-sm-6">
                                <label className="form-label">Type of Appointment</label>
                                <select className={` ${errors.appointmentType ? 'error-input' : ''} styled-input`} {...register('appointmentType', {required: true})}  value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)}>
                                  <option value=""></option>
                                  <option value="in-person">In-Person</option>
                                  <option value="virttual">Virtual</option>
                                </select>
                                {errors.appointmentType && <span style={{color: 'red'}}>This Feild is required</span>}
                              </div>
                              <div className="col-sm-6">
                                <label className="form-label">Urgency Level</label>
                                <select className={` ${errors.urgencyLevel ? 'error-input' : ''} styled-input`} {...register('urgencyLevel', {required: true})}  value={urgencyLevel} onChange={(e) => setUrgencyLevel(e.target.value)}>
                                  <option value=""></option>
                                  <option value="routine">Routine</option>
                                  <option value="urgent">Urgent</option>
                                  <option value="emergency-support">Emergency Support</option>
                                </select>
                                {errors.setUrgencyLevel && <span style={{color: 'red'}}>This Feild is required</span>}
                              </div>


                              <div className="col-sm-6">
                                <label className="form-label">Mental Health Concern  (Optional, But Recommended)</label>
                                <select className={` ${errors.healthConditon ? 'error-input' : ''} styled-input`} {...register('healthConditon')}  value={healthConditon} onChange={(e) => setHealthCondition(e.target.value)}>
                                  <option value=""></option>
                                  <option value="anxiety">Anxiety</option>
                                  <option value="depression">Depression</option>
                                  <option value="trauma">Truma</option>
                                  <option value="ptsd">PTSD</option>
                                  <option value="bipolar">Bipolar</option>
                                  <option value="psychosis">Psychosis</option>
                                  <option value="others">Others</option>
                                </select>
                                
                              </div>

                              <div className="col-12">
                                <label className="form-label">Additional Note (Optional)</label>
                                <textarea type="text"   className={` ${errors.additionalNote ? 'error-input' : ''} styled-input`} {...register('additionalNote')}  value={additionalNote} onChange={(e) => setAdditionalNote(e.target.value)}rows='9'></textarea>
                              </div>

                              
                            </div>
                          </div>

                          <div className="mb-4">
                            <div className="border-y px-4 py-3">
                              <div className="d-flex align-center">
                                <p className="me-3 site-primary-text site-round-border appointment-portal-number">03</p>
                                <p className="appointment-portal-headers site-primary-text">Consent & Agreement</p>
                              </div>
                            </div>
                            <div className="row g-3 p-4">
                              <div className="col-12">
                                <input
                                  className="cursor-pointer me-2"
                                  type="checkbox"
                                  checked={privacyChecked}
                                  onChange={(e) => setPrivacyChecked(e.target.checked)}
                                />
                                <label>Privacy Policy Agreement</label>
                              </div>

                              <div className="col-12">
                                <input
                                  className="cursor-pointer me-2"
                                  type="checkbox"
                                  checked={cancellationChecked}
                                  onChange={(e) => setCancellationChecked(e.target.checked)}
                                />
                                <label>Cancellation Policy Agreement</label>
                              </div>
                              {errorMessage && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>}

                              <div className="col-12 mt-4">
                                <button  className="site-btn2  px-5" type="submit" disabled={disablebutton}>    
                                  <span class={`${loader ? 'site-submit-spinner': ''}`}></span>
                                  <span class={`${loader ? 'site-submit-btn-visiblity': ''}`}>Send</span>
                                </button> 
                              
                                
                              </div>

                              
                            </div>
                          </div>
                        </form>
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