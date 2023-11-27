import React, { useEffect, useState } from 'react'
import Menu from '../../components/admin/Menu'
import Footer from '../../components/admin/Footer'
import Sidebar from '../../components/admin/Sidebar'
import callMyApi from '../../ApiCaller'

export default function ChangePassword() {

  const [data, setData] = useState([]);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append('oldPass', oldPass);
    data.append('newPass', newPass);
    callMyApi('dashboard/changePassword', data, 'POST')
      .then(data => {
        console.log(data + 'ddd');
        alert(data.message);
        // if (data.success === true) {
          
        // } else {
        //   alert(data.message);
        // }
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
              <h1 className='text-center mb-4' style={{ color: "#23aaf2" }}>ChangePassword</h1>
      < form onSubmit={handleSubmit}>
        <div className="card">
          <div className='row card-body'>
          
          <div className="mb-3">
              <label htmlFor="" className="form-label">Old Password</label>
              <input type='password' value={oldPass} onChange={e => setOldPass(e.target.value)} className="form-control" required placeholder="Enter old password.." />
            </div>

          <div className="mb-3">
              <label htmlFor="" className="form-label">New Password</label>
              <input type='password' value={newPass} onChange={e => setNewPass(e.target.value)} className="form-control" required placeholder="Enter new password.." />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">Confirm Password</label>
              <input type='password' value={confirmPass} onChange={e => setConfirmPassword(e.target.value)} className="form-control" required placeholder="Re-enter new password.." />
            </div>
            <div className="mb-3" align="center">
              <button type="submit" style={{ minWidth: "120px" }} className="btn btn-primary mt-1 btn-center">Change Password</button>
            </div>
          </div>
        </div>
      </form>
            </div>
            <div className='col-sm-2'></div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
