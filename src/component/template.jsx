import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"


export const MentalHealthStats = () =>{
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
                  <p className="site-primary-text md-text font-bold">Find Warmline</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Help <i class="ri-arrow-right-fill"></i>Find Warmline</p>
                </div>
                
              </div>
            </div>
          </div>


        </div>
        <Footer />
      </div>
      
    </div>









      
  )
}