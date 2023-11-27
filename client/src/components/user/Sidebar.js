import React from 'react'

export default function Sidebar() {
  return (
   <> 
  
  <div>
    <h2 className="accordion-header" id="headingThree">
      <div className style={{fontSize: 17, padding: '15px 18px 15px 18px', width: '100%'}} type="button">
        <a href="userDash" className="text-dark" style={{textDecoration: 'none'}}>Home</a>
      </div>
    </h2>
  </div>
  <div className="accordion">
    <h2 className="accordion-header" id="headingThree">
      <div className="accordion-button collapsed" style={{background:"#cdeef0"}} data-bs-toggle="collapse" data-bs-target="#setings" aria-expanded="false" aria-controls="collapseThree">
        Lost and Found
      </div>
    </h2>
    <div id="setings" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item mt-1">
            <a className="nav-link" href="addmaterial">Add Lost Material</a>
          </li>
          <li></li>
          <li className="nav-item mt-1">
            <a className="nav-link" href="viewlostmaterial">View L&F Materials</a>
          </li>
          <li className="nav-item mt-1">
            <a className="nav-link" href="claimdetails">Claim Lost Materials</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div>
    <h2 className="accordion-header" id="headingThree">
      <div className style={{fontSize: 17, padding: '15px 18px 15px 18px', width: '100%'}} type="button">
        <a href="/user/submitfeedback" className="text-dark" style={{textDecoration: 'none'}}>Feedback</a>
      </div>
    </h2>
  </div>
  <div>
    <h2 className="accordion-header" id="headingThree">
      <div className style={{fontSize: 17, padding: '15px 18px 15px 18px', width: '100%'}} type="button">
        <a href="profile" className="text-dark" style={{textDecoration: 'none'}}>Profile</a>
      </div>
    </h2>
  </div>
  <div>
    <h2 className="accordion-header" id="headingThree">
      <div className style={{fontSize: 17, padding: '15px 18px 15px 18px', width: '100%'}} type="button">
        <a href="logout" className="text-dark" style={{textDecoration: 'none'}}>Logout</a>
      </div>
    </h2>
  </div>

</>


  )
}
