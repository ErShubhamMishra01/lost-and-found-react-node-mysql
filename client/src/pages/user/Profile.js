import React, { useEffect, useState } from 'react'
import Menu from '../../components/user/Menu'
import Footer from '../../components/user/Footer'
import Sidebar from '../../components/user/Sidebar'
import callMyApi from '../../ApiCaller';

export default function Profile() {
 
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [mobno, setMobno] = useState("");
  const [mail, setMail] = useState("");
  const [picture, setPicture] = useState("");
  const [address, setAddress] = useState("");
  const [tmpname, setTmpName] = useState("");
  
  function getData() {
    var res = callMyApi('userinfo', 'GET')
      .then(data => {
        if (data.success === true) {
          setName(data.data[0].name)
          setMail(data.data[0].email)
          setAddress(data.data[0].address)
          setMobno(data.data[0].mobno)
          setPicture(data.data[0].pic_path)
          setDob(data.data[0].dob)
          setTmpName(data.data[0].name)
                } else {
          alert('unble to get user information.')
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

  
  const handleSubmit = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append('name', name);
    data.append('mobno', mobno);
    data.append('dob', dob);
    data.append('address', address);
    data.append('picture', picture);
    
    
    
    callMyApi('dashboard/updateProfile', data, 'POST')
      .then(data => {
        console.log(data + 'ddd');
        alert(data.message);
        window.location.href='/user/profile';
      }).catch(e => {
        console.log(e);
      });
  }
  const handleFileChange = e => {
    setPicture(e.target.files[0]);
    e.persist();
  };
  return (
    <>
      <Menu />
      <div className='row'>
        <div className="col-sm-2" style={{ minHeight: 500, overflow: 'auto', background: "#cdeef0" }}> <Sidebar /> </div>
        <div className='col-sm-10'>
         
        <div className='row mt-4 mb-5'>
            <div className='col-sm-2'></div>
            <div className='col-sm-8'>
              <h1 className='text-center mb-4' style={{ color: "#23aaf2" }}>Profile</h1>
              < form onSubmit={handleSubmit}>

<div className="modal-body">

  <div className='row'>
    <div className='col-sm-12'>
      <div>
     <center> <img src={process.env.REACT_APP_API_END_POINT + 'data/proPicture/'+ picture} className='img-thumbnail mt-3' style={{maxHeight:"150px",maxWidth:"150px",borderRadius:"50%"}}/> 
      <h1 className='text-success'>{tmpname}</h1>
     </center>
      <div class="mb-3">
          <label for="picture" class="form-label">Profile Picture</label>
          <input name="picture"  onChange={handleFileChange} class="form-control" type="file" id="picture" />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" value={name}  onChange={e => setName(e.target.value)} className="form-control" id="name" placeholder="Enter your name here.." />
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
          <input type="email" disabled  value={mail} onChange={e => setMail(e.target.value)} className="form-control" id="email" placeholder="Enter your email.." />
        </div>
        
        
        
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea value={address} onChange={e => setAddress(e.target.value)} className="form-control" id="address" rows={3} defaultValue={""} placeholder='Enter your address...' />
        </div>

        <div className="mb-3">
        </div>

      </div>
    </div>
  </div>
</div>
<div className="" style={{}} align="center">
  <button type="reset" className="btn btn-secondary">Reset</button>
  &emsp;&emsp;
  <button type="submit" className="btn btn-primary">Update</button>
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
