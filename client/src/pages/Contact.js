import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


export default function Contact() {
  return (
    <>
      <Header />
      <NavBar />
      <div className='row' style={{}}>
        <h1 className='mt-5 text-center'>Contact Us</h1>
        <div className='col-sm-1'></div>
        <div className='col-sm-6  mt-4 mb-4 '>
       <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.3090290711607!2d80.86889947445741!3d25.192798931880567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3984a7d8354a53d1%3A0x55f946b2ed4bae6a!2sKamadgiri%20Software%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1694156966606!5m2!1sen!2sin" width={600} height={320} style={{border: "1px solid #23aaf2"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />


        </div>
        <div className='col-sm-4 mt-4 mb-5' style={{marginLeft:"50px"}}>
          <h3 className='text-center'>Contact Details</h3>
          <span style={{ fontSize: "22px", fontWeight: "bold" }}> Contact Number :-</span><br/>
          <span style={{ fontSize: "17px", fontWeight: "bold", color:"#23aaf2" }}> +91-2389784389, +91-7843809232</span><br/><br/>

          <span style={{ fontSize: "22px", fontWeight: "bold" }}> Email ID :-</span><br/>
          <span style={{ fontSize: "17px", fontWeight: "bold", color:"#23aaf2" }}> hr@mykss.in</span><br/><br/>

          <span style={{ fontSize: "22px", fontWeight: "bold" }}> Address:- </span><br/>
          <span style={{ fontSize: "17px", fontWeight: "bold", color:"#23aaf2" }}> Kamadgiri Software Solutions (P) Limited, Sitapur, Chitrakoot (UP) - 210204</span><br/><br/>

        </div>
        <div className='col-sm-1'></div>
      </div>
      <Footer />
    </>
  )
}
