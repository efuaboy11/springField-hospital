import { Link, useLocation } from 'react-router-dom'
import '../css/componentCss/footer.css'
import '../css/style.css'
import '../css/informationCss/site.css'
import { useContext, useState } from 'react'
import { use } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faBarsStaggered, faEnvelope, faHandHoldingDollar, faLocation, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import AuthContext from '../context/AuthContext'
import logo from '../img/logo3.png'
export const Footer = () =>{

  return(
    <div>
      <div className="footer-bg py-5">
        <div className="container-lg">
          <div>
            <div className="row g-4 border-bottom1 pt-5 pb-4">
              <div className="col-lg-3">
                <Link className='Link' to='/'>
                  <img src={logo} width='100px' alt="" />
                
                </Link>
              </div>

              <div className="col-lg-9">
                <div className='footer-d-flex'>
                  <div className="d-flex pe-5 pb-3">
                    <FontAwesomeIcon className='site-primary-text md-text me-3' icon={faPhoneVolume}/>
                    <p className="light-text">+1 (983) 458-3459</p>
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <FontAwesomeIcon className='site-primary-text md-text me-3' icon={faEnvelope}/>
                    <p className="light-text">support@AmanilightEquity.com</p>
                  </div>

                  <div className="d-flex pe-5 pb-3">
                    <FontAwesomeIcon className='site-primary-text md-text me-3' icon={faLocation}/>
                    <p className="light-text">27 Division St, 1100. E Denver, CO 80237, USA</p>
                  </div>

                </div>
              </div>
            </div>



          </div>
          
          <div className="footer-links-container mt-5">
            <div className="footer-links-sub-container mt-4">
              <div>
                <p className="sm-text light-text-2 font-weight-700 pb-3">GET HELP</p>
                <div className='my-2'>
                  <Link to='/crisis-resources/' className="footer-links">Crisis Resources</Link>
                </div>

                <div className='my-2'>
                  <Link to='/mental-health-treatment/' className="footer-links">Mental Health Treatment</Link>
                </div>

                <div className='my-2'>
                  <Link to='/find-help/' className="footer-links">Find Help</Link>
                </div>

                <div className='my-2'>
                  <Link to='/find-warmline/' className="footer-links">Find a Warmline</Link>
                </div>
              </div>
            </div>
            
            <div className="footer-links-sub-container mt-4">
              <div>
                <p className="sm-text light-text-2 font-weight-700 pb-3 uppercase">GET INFORMATION</p>
                <div className='my-2'>
                  <Link to='/mental-health-condition/' className="footer-links">Mental Health Condition</Link>
                </div>

                <div className='my-2'>
                  <Link to='/get-information/mental-health-statistics/' className="footer-links">Mental Health facts and Statistic</Link>
                </div>

                <div className='my-2'>
                  <Link to='/get-information/mental-health-coping-strategies/' className="footer-links">Copy Strategies & Self-Care</Link>
                </div>

                <div className='my-2'>
                  <Link to='/get-information/treatment-therapy-options/' className="footer-links">Treatment & Therapy Options</Link>
                </div>
              </div>
            </div>

            <div className="footer-links-sub-container mt-4">
              <div>
                <p className="sm-text light-text-2 font-weight-700 pb-3 uppercase">Services</p>
                <div className='my-2'>
                  <Link to='/services/individual-therapy/' className="footer-links">Individual Therapy</Link>
                </div>

                <div className='my-2'>
                  <Link to='/services/group-therapy/' className="footer-links">Group Therapy & Support Groups </Link>
                </div>

                <div className='my-2'>
                  <Link to='/services/cognitive-behavioural-therapy/' className="footer-links">Cognitive Behavioral Therapy (CBT)</Link>
                </div>

                <div className='my-2'>
                  <Link to='/services/medication-management/' className="footer-links">Medication Management</Link>
                </div>
              </div>
            </div>

            <div className="footer-links-sub-container mt-4">
              <div>
                <p className="sm-text light-text-2 font-weight-700 pb-3 uppercase">PATIENTS & VISITORS</p>
                <div className='my-2'>
                  <Link  to='/patients-visitor/appointment-scheduling/' target="_blank" className="footer-links">Appointment & Scheduling</Link>
                </div>

                <div className='my-2'>
                  <Link to='/patients-visitor/what-to-expect/' target="_blank" className="footer-links">What to Expect</Link>
                </div>

                <div className='my-2'>
                  <Link to='/patients-visitor/visitors-guideline/'  target="_blank" className="footer-links">Visitor Guidelines</Link>
                </div>



                <div className='my-2'>
                  <Link to='/patients-visitor/patient-resources-support/' target="_blank" className="footer-links">Patient Resources & Support </Link>
                </div>
              </div>
            </div>

            <div className="footer-links-sub-container mt-4">
              <div>
                <p className="sm-text light-text-2 font-weight-700 pb-3 uppercase">About Company</p>
                <div className='my-2'>
                  <Link to='/about-us/' className="footer-links">About us</Link>
                </div>

                <div className='my-2'>
                  <Link to='/contact-us/' className="footer-links">Contact us</Link>
                </div>

                <div className='my-2'>
                  <Link to='/about-facility/regulation-explained/' className="footer-links">Regulation Explained</Link>
                </div>

                <div className='my-2'>
                  <Link to='/about-facility/privacy-policies/' className="footer-links">Privacy Policy</Link>
                </div>

                <div className='my-2'>
                  <Link to='/terms-and-conditions/' className="footer-links">Terms and Conditions</Link>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-5'>
            <p className="sm-text light-text">Springfield Mental Health Services is dedicated to providing compassionate and professional mental health care for individuals, families, and communities. Our expert team of licensed therapists, psychiatrists, and counselors offers evidence-based treatments to help you navigate challenges and achieve mental well-being. Whether you're seeking therapy, crisis support, or wellness programs, we are here to support your journey toward healing.</p>
            <p className="sm-text-2 light-text pt-2 italic-text"><span className="font-weight-700">NOTE: </span>At Springfield Mental Health Services, we respect your privacy. All client information is kept confidential and secure. Our website provides general mental health information but does not replace professional medical advice. Always seek guidance from a qualified mental health professional for personalized care.  Copyright © 2025 Springfield Mental Health Services. All Rights Reserved. Terms and Conditions | Risk Disclosure.
            </p>
          </div>
        </div>

      </div>
    </div>

  )
}