import React from 'react'

export default function Sidebar() {
  return (
   <> 
   <div>
    <h2 className="accordion-header" id="headingThree">
      <div className style={{fontSize: 17, padding: '15px 18px 15px 18px', width: '100%'}} type="button">
        <a href="adminDash" className="text-dark" style={{textDecoration: 'none'}}>Home</a>
      </div>
    </h2>
  </div>
  <div>
    <h2 className="accordion-header" id="headingThree">
      <div className style={{fontSize: 17, padding: '15px 18px 15px 18px', width: '100%'}} type="button">
        <a href="/admin/enquiry" className="text-dark" style={{textDecoration: 'none'}}>Enquiry</a>
      </div>
    </h2>
  </div>
  
  <div>
    <h2 className="accordion-header" id="headingThree">
      <div className style={{fontSize: 17, padding: '15px 18px 15px 18px', width: '100%'}} type="button">
        <a href="/admin/regdetails" className="text-dark" style={{textDecoration: 'none'}}>Registration</a>
      </div>
    </h2>
  </div>

  <div>
    <h2 className="accordion-header" id="headingThree">
      <div className style={{fontSize: 17, padding: '15px 18px 15px 18px', width: '100%'}} type="button">
        <a href="/admin/notification" className="text-dark" style={{textDecoration: 'none'}}>Notifications</a>
      </div>
    </h2>
  </div>

  <div>
    <h2 className="accordion-header" id="headingThree">
      <div className style={{fontSize: 17, padding: '15px 18px 15px 18px', width: '100%'}} type="button">
        <a href="/admin/email" className="text-dark" style={{textDecoration: 'none'}}>Email</a>
      </div>
    </h2>
  </div>

  <div>
    <h2 className="accordion-header" id="headingThree">
      <div className style={{fontSize: 17, padding: '15px 18px 15px 18px', width: '100%'}} type="button">
        <a href="/admin/viewfeedback" className="text-dark" style={{textDecoration: 'none'}}>Feedback</a>
      </div>
    </h2>
  </div>
  
  <div>
    <h2 className="accordion-header" id="headingThree">
      <div className style={{fontSize: 17, padding: '15px 18px 15px 18px', width: '100%'}} type="button">
        <a href="lfmanagement" className="text-dark" style={{textDecoration: 'none'}}>Lost & Found</a>
      </div>
    </h2>
  </div>

  <div className="accordion">
    <h2 className="accordion-header" id="headingThree">
      <div className="accordion-button collapsed" style={{background:"#cdeef0"}} data-bs-toggle="collapse" data-bs-target="#setings" aria-expanded="false" aria-controls="collapseThree">
        Settings
      </div>
    </h2>
    <div id="setings" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li></li>
          <li className="nav-item mt-1">
            <a className="nav-link" href="/admin/changepassword">Change Password</a>
          </li>
          <li className="nav-item mt-1">
            <a className="nav-link" href="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</>


  )
}
