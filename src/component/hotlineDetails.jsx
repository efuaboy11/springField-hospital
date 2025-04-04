import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HotLineDetails = () =>{

  return(
    <div>
      <div className="light-background2 mb-5">
        <div className="py-5 container-lg">
          <div className="d-flex justify-content-center text-center">
            <div>
              <i class="ri-phone-line site-primary-text lg-text"></i>
              <p className="site-primary-text md-text font-bold">SpringField Emergency Hotline</p>
              <p className="pt-1 lg-text">+234  (912 516 1750)</p>
              <p className="light-text-2 italic-text">You never know who might need these resources. <br />Share this page with your friends, family, and community. Let’s make mental health care accessible to all!</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )

}

export default HotLineDetails;