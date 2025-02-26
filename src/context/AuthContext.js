import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({children}) =>{

  const [navOverlay, setNavOverlay] = useState(false)
  //Navbar Data 
  const [helpDropdown, setHelpDropdown] = useState(false)
  const [informationDropdown, setInformationDropdown] = useState(false)
  const [serviceDropdown, setServiceDropdown] = useState(false)
  const [patientsDropdown, setPatientsDropdown] = useState(false)
  const [cryptoDropdown, setCryptoDropdown] = useState(false)
  const [aboutDropdown, setAboutDropdown] = useState(false)

  const [showSidebar, setShowSidebar] = useState(false)
  const toggleClientSidebar = () =>{
    setShowSidebar(!showSidebar)
  }
  const toggleHelp = () =>{
    setHelpDropdown(!helpDropdown)
    setInformationDropdown(false)
    setServiceDropdown(false)
    setCryptoDropdown(false)
    setAboutDropdown(false)
    setPatientsDropdown(false)
    if(!helpDropdown){
      setNavOverlay(true)
    }else{
      setNavOverlay(false)
    }

  }

  const toggleInformation = () =>{
    setInformationDropdown(!informationDropdown)
    setHelpDropdown(false)
    setServiceDropdown(false)
    setCryptoDropdown(false)
    setAboutDropdown(false)
    setPatientsDropdown(false)
    if(!informationDropdown){
      setNavOverlay(true)
    }else{
      setNavOverlay(false)
    }

  }

  
  const toggleService = () =>{
    setServiceDropdown(!serviceDropdown)
    setHelpDropdown(false)
    setInformationDropdown(false)
    setCryptoDropdown(false)
    setAboutDropdown(false)
    setPatientsDropdown(false)
    if(!serviceDropdown){
      setNavOverlay(true)
    }else{
      setNavOverlay(false)
    }

  }

  const togglePatients = () =>{
    setPatientsDropdown(!patientsDropdown)
    setServiceDropdown(false)
    setHelpDropdown(false)
    setInformationDropdown(false)
    setCryptoDropdown(false)
    setAboutDropdown(false)
    if(!patientsDropdown){
      setNavOverlay(true)
    }else{
      setNavOverlay(false)
    }

  }

  const toggleCrypto = () =>{
    setCryptoDropdown(!cryptoDropdown)
    setServiceDropdown(false)
    setHelpDropdown(false)
    setInformationDropdown(false)
    setPatientsDropdown(false)
    if(!cryptoDropdown){
      setNavOverlay(true)
    }else{
      setNavOverlay(false)
    }

  }

  const toggleAbout = () =>{
    setAboutDropdown(!aboutDropdown)
    setServiceDropdown(false)
    setHelpDropdown(false)
    setInformationDropdown(false)
    setPatientsDropdown(false)
    setCryptoDropdown(false)
    if(!aboutDropdown){
      setNavOverlay(true)
    }else{
      setNavOverlay(false)
    }

  }

  const OnbodyClick = () =>{
    console.log('clicked')
    setAboutDropdown(false)
    setServiceDropdown(false)
    setHelpDropdown(false)
    setInformationDropdown(false)
    setPatientsDropdown(false)
    setCryptoDropdown(false)
    setNavOverlay(false)
  }
  const contextData = {
    navOverlay,
    setNavOverlay,
    helpDropdown, setHelpDropdown,
    informationDropdown, setInformationDropdown,
    serviceDropdown, setServiceDropdown,
    patientsDropdown, setPatientsDropdown,
    cryptoDropdown, setCryptoDropdown,
    aboutDropdown, setAboutDropdown,
    toggleHelp,
    toggleInformation,
    toggleService,
    togglePatients,
    toggleCrypto,
    toggleAbout,

    OnbodyClick,
    showSidebar, 
    setShowSidebar,
    toggleClientSidebar,



  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}