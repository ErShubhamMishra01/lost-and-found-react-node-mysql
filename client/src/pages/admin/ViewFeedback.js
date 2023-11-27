import React, { useEffect, useState } from 'react'
import Menu from '../../components/admin/Menu'
import Footer from '../../components/admin/Footer'
import Sidebar from '../../components/admin/Sidebar'
import callMyApi from '../../ApiCaller'

export default function ViewFeedback() {

  const [data, setData] = useState([]);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertShowStatus, setAlertShowStatus] = useState("");


  const updateShowAlert = (props) => {
    setAlertShowStatus(false)
  }

  function getData() {
    var res = callMyApi('dashboard/getFeedback', 'GET')
      .then(data => {
        if (data.success === true) {
          setData(data.data);
        } else {
          setAlertType('danger');
        }
        setAlertShowStatus('true');
        setAlertMessage(data.message);
        return data;
      }).catch(e => {
        console.log(e);
        var message = 'Something went wrong, please come back later.';
        setAlertShowStatus('true');
        setAlertType('danger');
        setAlertMessage(message);
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

  return (
    <>
      <Menu />
      <div className='row'>
        <div className="col-sm-2" style={{ minHeight: 500, overflow: 'auto', background: "#cdeef0" }}> <Sidebar /> </div>
        <div className='col-sm-10'>
          <div className='row mt-4 mb-5'>
            <div className='col-sm-1'></div>
            <div className='col-sm-10'>
              {/* main component starting */}
              <h1 className='text-center mb-4' style={{ color: "#23aaf2" }}>All Feedbacks</h1>
              <table className='table table-hover table-bordered '>
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Name</th>
                    <th>EMail</th>
                    <th>Mobile Number</th>
                    <th>Address</th>
                    <th>Message</th>
                  </tr>
                </thead>
                {/* {JSON.stringify(data)} */}
                <tbody>
                  {data.map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.mobno}</td>
                      <td>{item.address}</td>
                      <td>{item.feedback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* main component ending */}
            </div>
            <div className='col-sm-1'></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
