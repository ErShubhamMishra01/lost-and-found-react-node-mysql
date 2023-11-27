import React, { useState } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Alert from '../components/Alert'
import callMyApi from '../ApiCaller'

export default function Login() {
  const [utype, setUtype] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertShowStatus, setAlertShowStatus] = useState("");

  const updateShowAlert = (props) => {
    setAlertShowStatus(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append('utype', utype);
    data.append('email', mail);
    data.append('password', password);
    var res = callMyApi('login', data, 'POST')
      .then(data => {
        console.log(data + 'ddd');
        if (data.success === true) {
          localStorage.setItem('email', JSON.stringify(data.email));
          localStorage.setItem('token', JSON.stringify(data.token));
          setAlertType('success');
          if (utype==='admin'){
             window.location.href='/admin/admindash';
          }else{
            window.location.href='/user/userdash';
          }
        } else {
          setAlertType('danger');
        }
        console.log(data + 'ddd');
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
    console.log(JSON.stringify(res));
  }

  return (
    <>
      <Header />
      <NavBar />

      <div className='row mt-5 mb-5' >
        <div className='col-sm-4' ></div>
        <div className='col-sm-4' >
          <div className="card">
            <div className="card-body">
              <h1 className='card-heading mt-1 text-center'>Login Here</h1>
              < form onSubmit={handleSubmit}>

                <div className="modal-body">
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div>
                        <div className="mb-3">
                          <div className="mb-3">
                            <label htmlFor="type" className="form-label">Choose user type</label>
                            <select class="form-select" onChange={e => setUtype(e.target.value)} aria-label="Default select example">
                              <option selected disabled>Choose</option>
                              <option value="admin">Admin</option>
                              <option value="user">User</option>
                            </select>
                          </div>
                          <label htmlFor="email" className="form-label">Email address</label>
                          <input type="email" value={mail} onChange={e => setMail(e.target.value)} className="form-control" id="email" placeholder="Enter your email.." />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="password" placeholder="Enter your password.." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <a href="#" style={{ textDecoration: "none", float: "left" }}>Forget Password</a>
                  <a href="registration" style={{ textDecoration: "none", float: "right" }}>SignUp</a>
                </div>
                
                <div style={{marginTop:"35px"}}>
                  <Alert type={alertType} message={alertMessage} showAlert={alertShowStatus} updateShowAlert={updateShowAlert} />
                </div>

                <div className="mb-3"  align="center">
                  <button type="submit" style={{ minWidth: "120px" }} className="btn btn-primary mt-1 btn-center">Login</button>
                </div>

              </form>
            </div>
          </div>
        </div>
        <div className='col-sm-4' ></div>
      </div>

      <Footer />
    </>
  )
}
