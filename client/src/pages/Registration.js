import React, { useState } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { validName, validEmail, validAddress, validMobno, validPassword } from '../Rejex'
import callMyApi from '../ApiCaller'
import ReCAPTCHA from 'react-google-recaptcha'
import Alert from '../components/Alert'

export default function Registration() {

  const [captchaValue, setCaptchaValue] = useState("");
  const handleCaptcha = value => {
    console.log(value);
    setCaptchaValue(value);
  }

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [mobno, setMobno] = useState("");
  const [mail, setMail] = useState("");
  const [course, setCourse] = useState("");
  const [picture, setPicture] = useState("");
  const [password, setPassword] = useState("");
  const [cpass, setCpass] = useState("");
  const [address, setAddress] = useState("");
  
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertShowStatus, setAlertShowStatus] = useState("");
  
  const updateShowAlert = (props) => {
    setAlertShowStatus(false)
  }


  let formErrors = [];
  function validate() {
    let errStatus = false;
    if (!validName.test(name)) {
      errStatus = true;
      formErrors.push("Name must be between 4 to 40 charectors.");
      console.log("Invalid name");
    }
    if (!validMobno.test(mobno)) {
      errStatus = true;
      formErrors.push("Invalid Mobile number.");
      console.log("Invalid Mobile number.");
    }
    if (!validEmail.test(mail)) {
      errStatus = true;
      formErrors.push("Invalid email id.");
      console.log("Invalid email id.");
    }
    if (!validAddress.test(address)) {
      errStatus = true;
      formErrors.push("Invalid address.");
      console.log("Invalid address.");
    }
    if (!validPassword.test(password)) {
      errStatus = true;
      formErrors.push("Password must be between 8 to 50 charectors and contains Alpfabet, number, symbols.");
      console.log("Password must be between 8 to 50 charectors and contains Alpfabet, number, symbols.");
      if (password != cpass) {
        formErrors.push("Password and confirm password is not same");
        console.log("Invalid paddword");
      }
    }
    return errStatus;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var err = validate();

    var data = new FormData();
    data.append('name', name);
    data.append('gender', gender);
    data.append('dob', dob);
    data.append('email', mail);
    data.append('password', password);
    data.append('mobno', mobno);
    data.append('course', course);
    data.append('address', address);
    data.append('picture', picture);
    data.append('captcha', captchaValue);

    if (!err) {
      //API calling code.
      var res = callMyApi('registration', data, 'POST')
        .then(data => {
          console.log(data+'ddd');
          if (data.success === true) {
            setAlertType('success');
          } else {
            setAlertType('danger');
          }
          console.log(data+'ddd');
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
    } else {
      // alert(formErrors);
      setAlertShowStatus('true');
      setAlertType('danger');
      setAlertMessage(formErrors);
      formErrors = [];
    }
  }

  const handleFileChange = e => {
    setPicture(e.target.files[0]);
    e.persist();
  };


  return (
    < >
      <Header />
      <NavBar />
      <div className='row mt-5 mb-5' >
        <div className='col-sm-2' ></div>
        <div className='col-sm-8' >
          <div className="card">
            <div className="card-body">
              <h1 className='card-heading mt-1 text-center'>Register Here</h1>
              < form onSubmit={handleSubmit}>

                <div className="modal-body">

                  <div className='row'>
                    <div className='col-sm-12'>
                      <div>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input type="text" value={name} required onChange={e => setName(e.target.value)} className="form-control" id="name" placeholder="Enter your name here.." />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="mobno" className="form-label">Gender</label><br />
                          <input type="radio" value="male" onChange={e => setGender(e.target.value)} className="form-check-input" id="gender" name="gender" /> Male &emsp;
                          <input type="radio" value="female" onChange={e => setGender(e.target.value)} className="form-check-input" id="gender" name="gender" /> Female &emsp;
                        </div>
                        <div className="mb-3">
                          <label htmlFor="dob" className="form-label">Date of birth</label>
                          <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="form-control" id="dob" placeholder="" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="mobno" className="form-label">Mobile Number</label>
                          <input type="text" value={mobno} onChange={e => setMobno(e.target.value)} className="form-control" id="mobno" placeholder="Enter your mobile number" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email address</label>
                          <input type="email" required value={mail} onChange={e => setMail(e.target.value)} className="form-control" id="email" placeholder="Enter your email.." />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="course" className="form-label">Course</label>
                          <select value={course} required onChange={e => setCourse(e.target.value)} class="form-select" aria-label="Default select example">
                            <option selected disabled>Choose</option>
                            <option value="B-TECH">B-TECH</option>
                            <option value="M-TECT">M-TECT</option>
                            <option value="BCA">BCA</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <label for="picture" class="form-label">Profile Picture</label>
                          <input name="picture" required onChange={handleFileChange} class="form-control" type="file" id="picture" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="password" placeholder="Enter your password.." />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">Confirm Password</label>
                          <input type="password" required value={cpass} onChange={e => setCpass(e.target.value)} className="form-control" id="cpassword" placeholder="Re-enter your password.." />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="address" className="form-label">Address</label>
                          <textarea value={address} onChange={e => setAddress(e.target.value)} className="form-control" id="address" rows={3} defaultValue={""} placeholder='Enter your address...' />
                        </div>

                        <div className="mb-3">
                          <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPV2_SITE_KEY} onChange={handleCaptcha} />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-check">
                  <input className="form-check-input" required type="checkbox" defaultValue id="terms" />
                  <label className="form-check-label" htmlFor="terms">
                    I agree with <a href="#" style={{ textDecoration: "none" }}>Terms and Conditions.</a>
                  </label>
                </div>

                <Alert type={alertType} message={alertMessage} showAlert={alertShowStatus} updateShowAlert={updateShowAlert}/>

                <div className="" style={{}} align="center">
                  <button type="reset" className="btn btn-secondary">Reset</button>
                  &emsp;&emsp;
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>

              </form>
            </div>
          </div>
        </div>
        <div className='col-sm-2' ></div>
      </div>
      <Footer />
    </>
  )
}
