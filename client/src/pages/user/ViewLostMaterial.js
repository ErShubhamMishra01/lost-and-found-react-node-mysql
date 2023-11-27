import React, { useEffect, useState } from 'react'
import Menu from '../../components/user/Menu'
import Footer from '../../components/user/Footer'
import Sidebar from '../../components/user/Sidebar'
import callMyApi from '../../ApiCaller'

export default function ViewLostMaterial() {

  const [data, setData] = useState([]);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertShowStatus, setAlertShowStatus] = useState("");


  const updateShowAlert = (props) => {
    setAlertShowStatus(false)
  }

  function getData() {
     callMyApi('dashboard/getLostMaterial', 'GET')
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
            <div className='col-sm-10' style={{ minHeight: 500, overflow: 'auto'}}>
              {/* main component starting */}
              <h1 className='text-center mb-4' style={{ color: "#23aaf2" }}>Lost and Found Materials</h1>
              <table className='table table-hover table-bordered '>
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Material Name</th>
                    <th>Manterial Category</th>
                    <th>Lost time</th>
                    <th>Lost Date</th>
                    <th>Lost Place</th>
                    <th>Estimated Cost</th>
                    <th>Owner Email</th>
                    <th>Status</th>
                    <th>Founder Name</th>
                    <th>Founder Details</th>
                    <th>Reward Status</th>
                    <th>Reward Details</th>
                    <th>Date Time</th>
                  </tr>
                </thead>
                {/* {JSON.stringify(data)} */}
                <tbody>
                  {data.map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.caterody}</td>
                      <td>{item.time}</td>
                      <td>{item.date}</td>
                      <td>{item.place}</td>
                      <td>{item.ecost}</td>
                      <td>{item.oemail}</td>
                      <td>{item.mstatus}</td>
                      <td>{item.fpersondname}</td>
                      <td>{item.fpersondetails}</td>
                      <td>{item.rewardstatus}</td>
                      <td>{item.rewarddetails}</td>
                      <td>{item.dt}</td>
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
