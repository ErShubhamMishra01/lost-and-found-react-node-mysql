import React, { useEffect, useState } from 'react'
import Menu from '../../components/admin/Menu'
import Footer from '../../components/admin/Footer'
import Sidebar from '../../components/admin/Sidebar'
import callMyApi from '../../ApiCaller'

export default function Notification() {

  const [data, setData] = useState([]);
  const [notification, setNotification] = useState("");
  const [id, setId] = useState("");

  function getData() {
    callMyApi('dashboard/getNotification', 'GET')
      .then(data => {
        if (data.success === true) {
          setData(data.data);
        } else {
          alert('Unable to get data, please try again later')
        }
        return data;
      }).catch(e => {
        console.log(e);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append('id', id);
    callMyApi('dashboard/deleteNotification', data, 'POST')
      .then(data => {
        if (data.success === true) {
             alert('Notification deleted successfully.');
        } else {
          alert('Unable to delete notitification, please try again later.');
        }
      }).catch(e => {
        console.log(e);
      });
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append('notification', notification);
    callMyApi('dashboard/addNotification', data, 'POST')
      .then(data => {
        console.log(data + 'ddd');
        if (data.success === true) {
             alert('Notification added successfully.');
        } else {
          alert('Unable to add notitification, please try again later.');
        }
      }).catch(e => {
        console.log(e);
      });
  }
  return (
    <>
      <Menu />
      <div className='row'>
        <div className="col-sm-2" style={{ minHeight: 500, overflow: 'auto', background: "#cdeef0" }}> <Sidebar /> </div>
        <div className='col-sm-10'>
          <div className='row mt-4 mb-5'>
            <div className='col-sm-2'></div>
            <div className='col-sm-8'>
              <h1 className='text-center mb-4' style={{ color: "#23aaf2" }}>Add Notifications</h1>
              < form onSubmit={handleSubmit}>
                <div className="card">
                  <div className='row card-body'>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Type notification</label>
                      <textarea value={notification} onChange={e => setNotification(e.target.value)} rows="6" className="form-control" placeholder="Enter Notification Here.." ></textarea>
                    </div>
                    <div className="mb-3" align="center">
                      <button type="submit" style={{ minWidth: "120px" }} className="btn btn-primary mt-1 btn-center">Add</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-sm-2'></div>
          </div>
<hr/>
          <div className='row mt-4 mb-5'>
            <div className='col-sm-1'></div>
            <div className='col-sm-10'>
              {/* main component starting */}
              <h1 className='text-center mb-4' style={{ color: "#23aaf2" }}>All Notifications</h1>
              <table className='table table-hover table-bordered '>
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Notifications</th>
                    <th>Date Time</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                {/* {JSON.stringify(data)} */}
                <tbody>
                  {data.map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item.notification}</td>
                      <td>{item.dt}</td>
                      <td>
                        <form onSubmit={handleDelete}>
                          <button type='submit'  onClick={() => {setId(item.id);}} className='btn btn-danger' >Delete</button>
                        </form>
                      </td>
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
