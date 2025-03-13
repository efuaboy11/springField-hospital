import { useContext, useRef, useState } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import emailjs from '@emailjs/browser'
import { useForm } from "react-hook-form"
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Contact = () =>{

  const { 
    OnbodyClick, 

  } = useContext(AuthContext)

  const form = useRef();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [loader, setLoader] = useState('')
  const [disablebutton, setDisablebutton] = useState(false)
  const currentTime = new Date().toLocaleTimeString();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data, e) =>{
    setDisablebutton(true)
    setLoader(true)
    sendEmail(e)
  }

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .send(
        "service_7457fxr",  // Replace with your EmailJS Service ID
        "template_w4ev6q2", // Replace with your EmailJS Template ID
        {  
          user_name: name,        // Match template variables
          user_email: email,
          message: emailMessage,
          time: currentTime,
        },
        "AQ-xd10VtIjfba0Yv"  // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setSent(true);
          setDisablebutton(false)
          setLoader(false)
          toast.success("Email sent successfully!", {
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


      <div onClick={OnbodyClick}>
        <ToastContainer/> 
        <div>
          <div className="light-background2 mb-5">
            <div className="py-5 container-lg">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <p className="site-primary-text md-text font-bold">Find Warmline</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Help <i class="ri-arrow-right-fill"></i>Find Warmline</p>
                </div>
                
              </div>
            </div>
          </div>

          <div className="container-lg pb-5 mb-4">
          <div className="row gx-4">
            <div className="col-md-6">
              <div className="box-shadow-2 border-radius-10px p-4 mb-4">
                <p className="site-header font-weight-700 pb-3">Head Office</p>
                <div>
                  <div className="d-flex align-center pb-3">
                    <FontAwesomeIcon className="site-primary-text pe-2" icon={faLocationDot}/>
                    <p className="light-text-2">27 Division St, 1100. E Denver, CO 80237, USA</p>
                  </div>

                  <div className="d-flex align-center pb-3">
                    <FontAwesomeIcon className="site-primary-text pe-2" icon={faPhone}/>
                    <p className="light-text-2">+1 (983) 458-3459</p>
                  </div>

                  <div className="d-flex align-center pb-3">
                    <FontAwesomeIcon className="site-primary-text pe-2" icon={faEnvelope}/>
                    <p className="light-text-2">support@amanilightequity.com</p>
                  </div>
                </div>

              </div>

              <div className="box-shadow-2 border-radius-10px p-4 mb-4">
                <p className="site-header font-weight-700 pb-3">Opening Hours</p>
                <div>
                  <p className="pb-2"><span className="font-weight-700">Mondays:</span> 08:00 - 20:00 (GMT+3)</p>
                  <p className="pb-2"><span className="font-weight-700">Tuesdays:</span> 08:00 - 20:00 (GMT+3)</p>
                  <p className="pb-2"><span className="font-weight-700">Wednesdays:</span> 08:00 - 20:00 (GMT+3)</p>
                  <p className="pb-2"><span className="font-weight-700">Thursdays:</span> 08:00 - 20:00 (GMT+3)</p>
                  <p className="pb-2"><span className="font-weight-700">Fridays:</span> 08:00 - 20:00 (GMT+3)</p>
                  <p className="pb-2"><span className="font-weight-700">Saturdays:</span> 12:00 - 18:00 (GMT+3)</p>
                </div>

              </div>
            </div>
            
            <div className="col-md-6">
              <div className="box-shadow-2 border-radius-10px p-4">
                <div>
                  <p className="site-header pb-3 font-weight-700">Send Us a Message</p>
                  <div>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <div className="row g-3">
                          <div className="col-12">
                            <label className="form-label">Email</label>
                            <input type="email"   className={` ${errors.email ? 'error-input' : ''} styled-input`} {...register('email', {required: true})}  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g johnDoe23@gmail.com" />
                            {errors.email && <span style={{color: 'red'}}>This Feild is required</span>}
                          </div>

                          <div className="col-12">
                            <label className="form-label">Your Name</label>
                            <input type="text"  className={` ${errors.name ? 'error-input' : ''} styled-input`} {...register('name', {required: true})}  value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g john doe" />
                            {errors.name && <span style={{color: 'red'}}>This Feild is required</span>}
                          </div>

                          <div className="col-12">
                            <label className="form-label">Message</label>
                            <textarea rows='6' className={` ${errors.emailMessage ? 'error-input' : ''} styled-input`} {...register('emailMessage', {required: true})}  value={emailMessage} onChange={(e) => setEmailMessage(e.target.value)} placeholder="e.g john doe" />
                            {errors.emailMessage && <span style={{color: 'red'}}>This Feild is required</span>}
                          </div>
                          

                        </div>
                        <div className="col-12 mt-4">
                          <button  className="site-btn2  px-5" type="submit" disabled={disablebutton}>    
                            <span class={`${loader ? 'site-submit-spinner': ''}`}></span>
                            <span class={`${loader ? 'site-submit-btn-visiblity': ''}`}>Send</span>
                          </button> 
                         
                          
                        </div>


                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        </div>

      </div>


      <Footer />
    </div>









      
  )
}