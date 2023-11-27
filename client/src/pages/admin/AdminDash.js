import React, { useEffect, useState } from 'react'
import Menu from '../../components/admin/Menu'
import Footer from '../../components/admin/Footer'
import Sidebar from '../../components/admin/Sidebar'
import GenNotification from '../../components/GenNotification'
import callMyApi from '../../ApiCaller'

export default function AdminDash() {

  const [data, setData] = useState([]);

  function getData() {
    var res = callMyApi('dashboard/getDashboardData', 'GET')
      .then(data => {
        if (data.success === true) {
          //alert(data.data);
          setData(data.data)

        } else {
          alert('unble to get dashbord data, please try again later.')
        }
        return data;
      }).catch(e => {
        console.log(e);
        var message = 'Something went wrong, please come back later.';
        alert(message);
        return {
          'success': false,
          'message': message,
          'ecode': e
        }
      });

  }

  useEffect(() => {
    getData();
  }, []);


  let newDate = new Date()
              let date = newDate.getDate();
              let month = newDate.getMonth() + 1;
              let year = newDate.getFullYear();
              let h =newDate.getHours();
              let m =newDate.getMinutes();

  var dt= date+'/'+month+'/'+year+'  '+h+':'+m



  return (
    <>
      <Menu />
      <div className='row'>
        <div className="col-sm-2" style={{ minHeight: 500, overflow: 'auto', background: "#cdeef0" }}> <Sidebar /> </div>
        <div className='col-sm-10'>


          <div className='row mt-2'>
            <div className='col-sm-1'></div>
            <div className='col-sm-10 text-success'>
              <p className='text-center' ><span style={{fontSize:"35px",fontWeight:"bold"}}>Hi Admin </span><span style={{float:'right'}}>{ dt }</span></p> 
              
              
            <GenNotification/>
            </div>
            <div className='col-sm-1'></div>
          </div>

          <div className='row mt-5'>
            <div className='col-sm-1'></div>
            <div className='col-sm-10'>

              <div className="card" style={{ width: '15rem', float: "left", marginRight: "50px" }}>
                <div className="card-body">
                  <h5 className="card-title">Total Registration -  {data.tusers}</h5>
                  <p className="card-text">Click on below links to vget all users details.</p>
                  <a href="regdetails" className="card-link">VIew Registration Details</a>
                  </div>
              </div>

              <div className="card" style={{ width: '15rem', float: "left", marginRight: "50px" }}>
                <div className="card-body">
                  <h5 className="card-title">Total Enquiry -  {data.tenq}</h5>
                  <p className="card-text">Click on below links to get all enquiries.</p>
                  <a href="regdetails" className="card-link">VIew Registration Details</a>
                  </div>
              </div>

              <div className="card" style={{ width: '15rem', float: "left", marginRight: "50px" }}>
                <div className="card-body">
                  <h5 className="card-title">Total Feedback -  {data.tfeed}</h5>
                  <p className="card-text">Click on below links to vget all users details.</p>
                  <a href="regdetails" className="card-link">VIew Registration Details</a>
                  </div>
              </div>
             
             

            </div>
            <div className='col-sm-1'></div>
          </div>

          <div className='row mt-5 mb-5'>
            <div className='col-sm-1'></div>
            <div className='col-sm-10'>

              <div className="card" style={{ width: '15rem', float: "left", marginRight: "50px" }}>
                <div className="card-body">
                  <h5 className="card-title">Total Notification -  {data.tnoti}</h5>
                  <p className="card-text">Click on below links to get all users details.</p>
                  <a href="regdetails" className="card-link">View Registration Details</a>
                  </div>
              </div>

              <div className="card" style={{ width: '15rem', float: "left", marginRight: "50px" }}>
                <div className="card-body">
                  <h5 className="card-title">Total Lost & Found -  {data.tlost}</h5>
                  <p className="card-text">Click on below links to get all enquiries.</p>
                  <a href="regdetails" className="card-link">VIew Registration Details</a>
                  </div>
              </div>

            
             

            </div>
            <div className='col-sm-1'></div>
          </div>
         



        </div>
      </div>
      <Footer />
    </>
  )
}
