import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className='row p-2 text-center text-light' style={{background:"#23aaf2"}}>
        <div className='col-sm-6'>
        <i class="fa-solid fa-envelope text-light"></i> hr@mykss.in &emsp;
        <i class="fa-solid fa-phone text-light"></i> +91-9713161487
        </div>
        <div className='col-sm-6'>
          <a href='https://www.facebook.com/kamadgiriSoftware'><i class="fa-brands fa-facebook text-light"></i></a> &ensp;
          <a href='https://www.'><i class="fa-brands fa-twitter text-light"></i></a>&ensp;
          <a href='https://www.'><i class="fa-brands fa-instagram text-light"></i></a>&ensp;
          <a href='https://www.linkedin.com/company/kamadgiri-software-solutions/'><i class="fa-brands fa-linkedin text-light"></i></a>
        </div>
    </div>
    )
  }
}
