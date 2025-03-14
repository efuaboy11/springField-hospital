import { Link, useLocation } from "react-router-dom"
import AuthContext from "../context/AuthContext"
import { useContext, useEffect, useState } from "react"
import '../css/componentCss/navbar.css'
import '../css/informationCss/site.css'
import logo from  '../img/logo3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
export const Navbar = () =>{

  const { authTokens, 
    helpDropdown,
    informationDropdown, 
    serviceDropdown,
    patientsDropdown,
    aboutDropdown,
    toggleHelp,
    toggleInformation,
    toggleService,
    togglePatients,
    toggleAbout,
    navOverlay,
    showSidebar, 
    setShowSidebar,
    toggleClientSidebar,
    OnbodyClick



  } = useContext(AuthContext)

  const location = useLocation();
  const isActiveDashLink = (path) =>{
    return location.pathname === path

  }


  const [sidebarAssetDropdown, setSidebarAssetDropdown] = useState(false)
  const [sidebarAccountDropdown, setSidebarAccountDropdown] = useState(false)
  const [sidebarMarketDropdown, setSidebarMarketDropdown] = useState(false)
  const [sidebarTradeDropdown, setSidebarTradeDropdown] = useState(false)
  const [sidebarCryptoDropdown, setSidebarCryptoDropdown] = useState(false)
  const [sidebarAboutDropdown, setSidebarAboutDropdown] = useState(false)



  const toggleSidebarAsset = () =>{
    setSidebarAssetDropdown(!sidebarAssetDropdown)
    setSidebarAccountDropdown(false)
    setSidebarMarketDropdown(false)
    setSidebarAboutDropdown(false)
    setSidebarTradeDropdown(false)
    setSidebarCryptoDropdown(false)
  }

  const toggleSidebarAccount = () =>{
    setSidebarAssetDropdown(false)
    setSidebarAccountDropdown(!sidebarAccountDropdown)
    setSidebarMarketDropdown(false)
    setSidebarAboutDropdown(false)
    setSidebarTradeDropdown(false)
    setSidebarCryptoDropdown(false)
  }

  const toggleSidebarMarket = () =>{
    setSidebarAssetDropdown(false)
    setSidebarAccountDropdown(false)
    setSidebarMarketDropdown(!sidebarMarketDropdown)
    setSidebarAboutDropdown(false)
    setSidebarTradeDropdown(false)
    setSidebarCryptoDropdown(false)
  }

  const toggleSidebarTrade = () =>{
    setSidebarAssetDropdown(false)
    setSidebarAccountDropdown(false)
    setSidebarMarketDropdown(false)
    setSidebarAboutDropdown(false)
    setSidebarTradeDropdown(!sidebarTradeDropdown)
    setSidebarCryptoDropdown(false)
  }

  const toggleSidebarCrypto = () =>{
    setSidebarAssetDropdown(false)
    setSidebarAccountDropdown(false)
    setSidebarMarketDropdown(false)
    setSidebarAboutDropdown(false)
    setSidebarTradeDropdown(false)
    setSidebarCryptoDropdown(!sidebarCryptoDropdown)
  }


  const toggleSidebarAbout = () =>{
    setSidebarAssetDropdown(false)
    setSidebarAccountDropdown(false)
    setSidebarMarketDropdown(false)
    setSidebarAboutDropdown(!sidebarAboutDropdown)
    setSidebarTradeDropdown(false)
    setSidebarCryptoDropdown(false)
  }


  useEffect(() =>{
    setShowSidebar(false)
    OnbodyClick()

  }, [])



  return(
    <div className={`${navOverlay ? 'nav-overlay' : ''}`}>
      <div className="position-sticky1">
        <div className="nav-shadow nav-bar ">
          <div className="mx-3 width-100">
            <div className='nav-laptop-screen'>
              <div className="row justify-content-between align-center py-3">
                <div className="col-1">
                  <div className="d-flex justify-content-end">
                    <div className="width-70">
                      <Link className='Link' to='/'>
                        <img className="width-100" src={logo} alt="" />
                      
                      </Link>
                    </div>
                  </div>

                </div>

                <div className="col-8">
                  <div className="d-flex justify-content-center align-center">
                    <div className='nav-links'>
                      <ul className="d-flex ">
                        <li className='px-3'>
                          <div>
                            <p onClick={toggleHelp} className={`${helpDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`} >Get Help</p>
                          </div>
                        </li>

                        <li className='px-3'>
                          <div>
                            <p onClick={toggleInformation} className={`${informationDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`}>Get Information</p>
                          </div>
                        </li>

                        <li className='px-3'>
                          <div>
                            <p onClick={toggleService} className={`${serviceDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`}>Services</p>
                          </div>
                        </li>

                        <li className='px-3'>
                          <div>
                            <Link to='/gallery/' className={` navbar-links cursor-pointer`}>Gallery</Link>
                          </div>
                        </li>


                        <li className='px-3'>
                          <div>
                            <p onClick={togglePatients} className={`${patientsDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`}>Patients & Visitors</p>
                          </div>
                        </li>


                        <li className='px-3'>
                          <div>
                            <Link to='/contact-us/' className={` navbar-links cursor-pointer`}>Contact</Link>
                          </div>
                        </li>


                        <li className='px-3'>
                          <div onClick={toggleAbout}> 
                            <p className={`${aboutDropdown ? 'nav-active-link': ''} navbar-links cursor-pointer`}>About Company</p>
                          </div>
                        </li>

                      </ul>
                    </div>
                  </div>


                  
                </div>

                <div className="col-3">
                  <Link className="site-btn uppercase">Book Appointment</Link>

                </div>
              </div>
            </div>

            <div className="nav-responsive px-1">
              <div className="d-flex justify-content-between align-center">
                <div>
                  <Link className='Link' to='/'>
                    <img src={logo} width='90%' alt="" />
                  
                  </Link>
                </div>

                <div onClick={toggleClientSidebar}>
                  <FontAwesomeIcon className='sm-text site-primary-text font-weight-700' icon={faBarsStaggered}/>
                </div>
              </div>
            </div>

            <section className='row'>
              <div className="col-2"></div>
              <div className='col-7'>
                <div>
                  {helpDropdown &&
                    <ul className={`nav-sublink-container `}>
                      <li className='mb-3'>
                        <Link to='/crisis-resources/' className='nav-sublink'>
                          <p>Crisis Resources</p>                
                        </Link>
                      </li>

                      <li className='mb-3'>
                        <Link to='/mental-health-treatment/' className='nav-sublink'>
                          <p>Metal Health Treatment</p>                
                        </Link>
                      </li>

                      <li className='mb-3'>
                        <Link to='/find-help/' className='nav-sublink'>
                          <p>Find Help</p>                
                        </Link>
                      </li>

                      <li className='mb-3'>
                        <Link to='/find-warmline/' className='nav-sublink'>
                          <p >Find a Warmline</p>                
                        </Link>
                      </li>
                    </ul>
                  }

                  {informationDropdown &&
                    <ul className={`nav-sublink-container `}>

                      <div className="d-flex">
                        <div className='me-5 pe-5'>
                          <li className='mb-3'>
                            <Link to='/mental-health-condition/' className='nav-sublink'>
                              <p>Mental Health Condition</p>                
                            </Link>
                          </li>

                          <li className='mb-3'>
                            <Link to='/get-information/mental-health-statistics/' className='nav-sublink'>
                              <p>Mental Health Facts and Statistics </p>                
                            </Link>
                          </li>
                        </div>

                        <div>
                          <li className='mb-3'>
                            <Link to='/get-information/mental-health-coping-strategies/' className='nav-sublink'>
                              <p>Coping Strategies & Self-Care</p>                
                            </Link>
                          </li>

                          <li className='mb-3'>
                            <Link to='/get-information/treatment-therapy-options/' className='nav-sublink'>
                              <p>Treatment & Therapy Options</p>                
                            </Link>
                          </li>

                        </div>
                      </div>
                    </ul>
                  }

                  {serviceDropdown &&
                    <ul className={`nav-sublink-container `}>
                      <li className='mb-3'>
                        <Link to='/services/individual-therapy/' className='nav-sublink'>
                          <p>Individual Therapy</p>                
                        </Link>
                      </li>

                      <li className='mb-3'>
                        <Link to='/services/group-therapy/' className='nav-sublink'>
                          <p>Group Therapy & Support Groups</p>                
                        </Link>
                      </li>

                      <li className='mb-3'>
                        <Link to='/services/cognitive-behavioural-therapy/' className='nav-sublink'>
                          <p>Cognitive Behavioral Therapy (CBT)</p>                
                        </Link>
                      </li>

                      <li className='mb-3'>
                        <Link to='/services/medication-management/' className='nav-sublink'>
                          <p>Medication Management</p>                
                        </Link>
                      </li>

                      <li className='mb-3'>
                        <Link to='/services/child-counseling/' className='nav-sublink'>
                          <p>Child & Adolescent Counseling</p>                
                        </Link>
                      </li>
                    </ul>
                  }

                  {patientsDropdown &&
                    <ul className={`nav-sublink-container `}>
                      <li className='mb-3'>
                        <Link to='/patients-visitor/appointment-scheduling/' className='nav-sublink'>
                          <p>Appointment & Scheduling</p>                
                        </Link>
                      </li>

                      <li className='mb-3'>
                        <Link to='/patients-visitor/what-to-expect/' className='nav-sublink'>
                          <p>What to Expect</p>                
                        </Link>
                      </li>

                      <li className='mb-3'>
                        <Link to='/patients-visitor/visitors-guideline/' className='nav-sublink'>
                          <p>Visitor Guidelines</p>                
                        </Link>
                      </li>

                      <li className='mb-3'>
                        <Link to='/patients-visitor/patient-resources-support/' className='nav-sublink'>
                          <p>Patient Resources & Support </p>                
                        </Link>
                      </li>
                    </ul>
                  }

                  {aboutDropdown &&
                    <ul className={`nav-sublink-container `}>

                      <div className="d-flex">
                        <div className='me-5 pe-5'>
                          <p className="light-text">About Company</p>
                          <li className='mb-3'>
                            <Link to='/about-us/' className='nav-sublink'>
                              <p>About Us</p>                
                            </Link>
                          </li>

                          <li className='mb-3'>
                            <Link to='/contact-us/' className='nav-sublink'>
                              <p>Contact Us</p>                
                            </Link>
                          </li>

                          <li className='mb-3'>
                            <Link to='/affiliate-program/' className='nav-sublink'>
                              <p>Affiliate Programs</p>                
                            </Link>
                          </li>

                          <p className="light-text">Trading Condition</p>
                          <li className='mb-3'>
                            <Link to='/order-execution/' className='nav-sublink'>
                              <p>Order of Execution</p>                
                            </Link>
                          </li>

                          <li className='mb-3'>
                            <Link to='/margin-requirement/' className='nav-sublink'>
                              <p>Margin Requirements</p>                
                            </Link>
                          </li>

                        </div>



                        <div className='me-5 pe-5'>
                          <p className="light-text">Regulations</p>
                          <li className='mb-3'>
                            <Link to='/regulations/' className='nav-sublink'>
                              <p>Regulation Explained</p>                
                            </Link>
                          </li>
                          <p className="light-text">Transparency</p>
                          <li className='mb-3'>
                            <Link to='/privacy-policy/' className='nav-sublink'>
                              <p>Privacy Policy</p>                
                            </Link>
                          </li>

                          <li className='mb-3'>
                            <Link to='/safety-funds/' className='nav-sublink'>
                              <p>Safety Funds</p>                
                            </Link>
                          </li>

                          <li className='mb-3'>
                            <Link to='/risk-disclosure/' className='nav-sublink'>
                              <p>Risk Disclosure</p>                
                            </Link>
                          </li>

                          <li className='mb-3'>
                            <Link to='/terms-and-conditions/' className='nav-sublink'>
                              <p>Terms and Conditions</p>                
                            </Link>
                          </li>


                        </div>

                        <div>
                          <p>...</p>
                          <li className='mb-3'>
                            <Link to='/information-security/' className='nav-sublink'>
                              <p>Information Security</p>                
                            </Link>
                          </li>

                          <li className='mb-3'>
                            <Link to='/interest-conflict/' className='nav-sublink'>
                              <p>Conflit of Interest</p>                
                            </Link>
                          </li>

                          <li className='mb-3'>
                            <Link to='/complaints-procedure/' className='nav-sublink'>
                              <p>Complaint Procedure</p>                
                            </Link>
                          </li>

                          <li className='mb-3'>
                            <Link to='/margin-calls/' className='nav-sublink'>
                              <p>Margin Calls</p>                
                            </Link>
                          </li>
                        </div>
                      </div>
                    </ul>
                  }



                  
                </div>
              </div>
            </section>
          </div>
          


        </div>
      </div>



      <div className={`${showSidebar ? 'client-sidebar-overlay' : ''}`}>
        <div className={` client-sidebar ${showSidebar ? 'client-show-sidebar': 'client-close-sidebar'}`}>
          <div className='scroll-bar-y client-sidebar-height pb-5'>
            <ul className='pt-3'>
              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarAsset}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>Get Help</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarAssetDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarAssetDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/crisis-resources/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/crisis-resources/">
                          <div className="d-flex ms-3 py-2">
                            <p>Crisis Resources</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/mental-health-treatment/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/mental-health-treatment/">
                          <div className="d-flex ms-3 py-2">
                            <p>Mental Health Treatment</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/find-help/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/find-help/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Find Help</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/find-warmline/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/find-warmline/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Find Warline</p> 
                          </div>
                        </Link>
                      </li>

                      
                    </ul>
                  </div>


      
              </li>


              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarAccount}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>Get Information</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarAccountDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarAccountDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/mental-health-condition/") ?"client-sidebar-active-link": ""}`}>     
                        <Link className='client-sidebar-link' to="/mental-health-condition/">
                          <div className="d-flex ms-3 py-2">
                            <p>Mental Health Condition</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/get-information/mental-health-statistics/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/get-information/mental-health-statistics/">
                          <div className="d-flex ms-3 py-2">
                            <p>Mental Health Facts and Statistics</p> 
                          </div>
                        </Link>
                      </li>

                      <p className="light-text ps-3 pt-3">Fundings</p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/get-information/mental-health-coping-strategies/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/get-information/mental-health-coping-strategies/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Copying Strategies & Self-Care</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/get-information/treatment-therapy-options/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/get-information/treatment-therapy-options/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Treatment & Therapy Options</p> 
                          </div>
                        </Link>
                      </li>

                      
                    </ul>
                  </div>


      
              </li>

              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarMarket}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>Services</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarMarketDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarMarketDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/services/individual-therapy/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/services/individual-therapy/">
                          <div className="d-flex ms-3 py-2">
                            <p>Individual Therapy</p> 
                          </div>
                        </Link>
                      </li>





                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/services/group-therapy/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/services/group-therapy/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Group Therapy & Support Groups</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/services/cognitive-behavioural-therapy/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/services/cognitive-behavioural-therapy/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Cognitive Behavioural Therapy (CBT)</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/services/medication-management/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/services/medication-management/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Medication Management</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/services/child-counseling/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/services/child-counseling/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Child & Adolescent Counseling</p> 
                          </div>
                        </Link>
                      </li>



                      
                    </ul>
                  </div>


      
              </li>


              <li className={`pb-3 pt-1  ${isActiveDashLink("/gallery/") ?"client-sidebar-active-link": ""}`}>
                <Link  className='client-sidebar-link' to="/gallery/">
                  <div className="d-flex ms-3">
                    <p className=' font-size-20px'>Gallery</p> 
                  </div>
                </Link>
              </li>


              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarTrade}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>Patients & Visitors</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarTradeDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarTradeDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/patients-visitor/appointment-scheduling/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/patients-visitor/appointment-scheduling/">
                          <div className="d-flex ms-3 py-2">
                            <p> Appointment & Scheduling</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/patients-visitor/visitors-guideline/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/patients-visitor/visitors-guideline/">
                          <div className="d-flex ms-3 py-2">
                            <p>What to Expect </p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/patients-visitor/visitors-guideline/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/patients-visitor/visitors-guideline/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Visitor Guidelines</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/patients-visitor/patient-resources-support/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/patients-visitor/patient-resources-support/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Patients Resources & Supports</p> 
                          </div>
                        </Link>
                      </li>

                      
                    </ul>
                  </div>


      
              </li>

              <li className={`pb-3 pt-1  ${isActiveDashLink("/contact-us/") ?"client-sidebar-active-link": ""}`}>
                <Link  className='client-sidebar-link' to="/contact-us/">
                  <div className="d-flex ms-3">
                    <p className=' font-size-20px'>Contact</p> 
                  </div>
                </Link>
              </li>

              <li className={`pb-2 ${isActiveDashLink("/admin") ?"active-dash-link": ""}  cursor-pointer`}>
                  <div className='row mb-2' onClick={toggleSidebarAbout}>

                    <div className="d-flex justify-content-between ">
                      <p className='pt-1 font-size-20px ms-3'>About Company</p>
                      <div className='me-3'>
                        <FontAwesomeIcon className={`${sidebarAboutDropdown ? 'rotate-90deg': ''} font-bold sm-text pt-1`}  icon={faAngleRight}/>
                      </div>
                    </div>
                  </div>
                  

                  <div>
                    <ul className={` client-sidebar-dropdown-bg ${sidebarAboutDropdown ? "client-sidebar-dropdown-slide-in" : "client-sidebar-dropdown-slide-out"}`}>
                      <p className="light-text ps-3 pt-3">About Company</p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/about-us/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/about-us/">
                          <div className="d-flex ms-3 py-2">
                            <p>About Us</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/contact-us/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/contact-us/">
                          <div className="d-flex ms-3 py-2">
                            <p>Contact Us</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/affiliate-program/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/affiliate-program/">
                          <div className="d-flex ms-3 py-2">
                            <p>Affilate Programs</p> 
                          </div>
                        </Link>
                      </li>

                      <p className="light-text ps-3 pt-3">Trading Conditions</p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/order-execution/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/order-execution/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Order of Execution</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/margin-requirement/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/margin-requirement/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Margin Requirement</p> 
                          </div>
                        </Link>
                      </li>

                      <p className="light-text ps-3 pt-3">Regulation</p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/regulations/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/regulations/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Regulation  Explained</p> 
                          </div>
                        </Link>
                      </li>

                      <p className="light-text ps-3 pt-3">Transparency </p>
                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/privacy-policy/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/privacy-policy/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Privacy Policy</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/safety-funds/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/safety-funds/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Safety Funds</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/risk-disclosure/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/risk-disclosure/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Risk Disclosure</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/terms-and-conditions/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/terms-and-conditions/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Terms and Conditions</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/information-security/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/information-security/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Information Security</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/interest-conflict/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/interest-conflict/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Conflit of Interest</p> 
                          </div>
                        </Link>
                      </li>

                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/complaints-procedure/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/complaints-procedure/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Complaint Procedure</p> 
                          </div>
                        </Link>
                      </li>


                      <li className={`client-sidebar-dropdown-link ${isActiveDashLink("/margin-calls/") ?"client-sidebar-active-link": ""}`}>
                        <Link className='client-sidebar-link' to="/margin-calls/">
                          <div className="d-flex ms-3 py-2">
                            <p className='font-weight'>Margin Calls</p> 
                          </div>
                        </Link>
                      </li>

                      
                    </ul>
                  </div>


      
              </li>
              
            </ul>

            {/* {showDashboardBtn ? (
                  <div className='d-flex justify-content-center pt-4'>
                     <Link to={`${dashLink}`} className='client-sidebar-btn  font-bold'>Dashbaord</Link>
                  </div>
                ) : (
                  <div className="d-flex justify-content-center pt-4">
                    <div>
                      <div className='d-flex'>
                        <div className='me-3'>
                          <Link to='/register' className='client-sidebar-btn  font-bold'>Create Account</Link>
                        </div>
      
                        <div>
                          <Link to='/login' className='client-sidebar-btn  font-bold'>Sign In</Link>
                        </div>
                        
                      </div>
                    </div>
                </div>
                )} */}
          </div>
        </div>
      </div>
    </div>
  )
     
}
export const Header = () =>{
  return(
    <div>
      <div className="site-secondary-bg py-2 navbar-header">
        <div className="container-lg">
         <div className="d-flex justify-content-between">
          <div className="d-flex d-md-none"></div>
          <div className="d-lg-flex d-none">
            <div className="d-flex pe-5">
              <i class="ri-phone-fill"></i>
              <p className="ps-3">080790226444</p>
            </div>

            <div className="d-flex pe-5">
              <i class="ri-mail-line"></i>
              <p className="ps-3">iseghohimhene@gmail.com</p>
            </div>

            <div className="d-flex pe-5">
              <i class="ri-map-pin-line"></i>
              <p className="ps-3">Adolo college road</p>
            </div>


          </div>

          <div>
            <Link className="me-3 Link"><i class="ri-facebook-circle-fill"></i></Link>
            <Link className="me-3 Link"><i class="ri-whatsapp-line"></i></Link>
            <Link className="me-3 Link"><i class="ri-instagram-line"></i></Link>
            <Link className="me-3 Link"><i class="ri-twitter-x-line"></i></Link>

          </div>
         </div>
        </div>
      </div>
    </div>
  )
}