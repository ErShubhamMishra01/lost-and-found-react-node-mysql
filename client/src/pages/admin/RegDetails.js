import React, { useEffect, useState } from 'react'
import Menu from '../../components/admin/Menu'
import Footer from '../../components/admin/Footer'
import Sidebar from '../../components/admin/Sidebar'
import callMyApi from '../../ApiCaller'

export default function RegDetails() {

  const [data, setData] = useState([]);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertShowStatus, setAlertShowStatus] = useState("");
  const [sdata, setSdata] = useState("");

  const updateShowAlert = (props) => {
    setAlertShowStatus(false)
  }

  const getData = (e) => {
    
    var url;
    if (sdata!=="")
    {
      e.preventDefault();
      url="getRegDetails?sdata="+sdata
    }
    else{
      url='getRegDetails'
    }
    callMyApi(url, 'GET')
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
            <div className='col-sm-10' style={{ overflow: "auto", maxWidth: "100%" }}>
              {/* main component starting */}
              <h1 className='text-center mb-4' style={{ color: "#23aaf2" }}>Registration Details</h1>
              <div className='row mb-2'>

                <form className="d-flex" onSubmit={getData}>
                  <input className="form-control me-2" type="search" onChange={e => setSdata(e.target.value)} placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>

              </div>
              <table className='table table-hover table-bordered ' >
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>EMail</th>
                    <th>Mobile Number</th>
                    <th>course</th>
                    <th>Address</th>
                    <th>date TIme</th>
                  </tr>
                </thead>
                {/* {JSON.stringify(data)} */}
                <tbody>
                  {data.map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td><img src={process.env.REACT_APP_API_END_POINT + 'data/proPicture/' + item.pic_path} style={{ maxHeight: "50px" }} /> </td>
                      <td>{item.name}</td>
                      <td>{item.gender}</td>
                      <td>{item.dob}</td>
                      <td>{item.email}</td>
                      <td>{item.mobno}</td>
                      <td>{item.course}</td>
                      <td>{item.address}</td>
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
