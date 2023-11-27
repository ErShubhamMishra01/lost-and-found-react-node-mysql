import React, { useState } from 'react'
import Menu from '../../components/user/Menu'
import Footer from '../../components/user/Footer'
import Sidebar from '../../components/user/Sidebar'
import callMyApi from '../../ApiCaller';

export default function SubmitFeedback() {
  const [data, setData] = useState([]);
  const [subject, setSubject] = useState("");
  const [feedback, setFeedback] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append('subject', subject);
    data.append('feedback', feedback);
    callMyApi('dashboard/submitFeedback', data, 'POST')
      .then(data => {
        console.log(data + 'ddd');
        alert(data.message);
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
              <h1 className='text-center mb-4' style={{ color: "#23aaf2" }}>Feedback</h1>
      < form onSubmit={handleSubmit}>
        <div className="card">
          <div className='row card-body'>
          
          <div className="mb-3">
              <label htmlFor="" className="form-label">Subject/Topic</label>
              <input type='text' value={subject} onChange={e => setSubject(e.target.value)} className="form-control" required placeholder="Enter feedback subject.." />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Feedback</label>
              <textarea  value={feedback} rows="7" onChange={e => setFeedback(e.target.value)} className="form-control" required placeholder="Type your feedback here.." />
            </div>
            <div className="mb-3" align="center">
              <button type="submit" style={{ minWidth: "120px" }} className="btn btn-primary mt-1 btn-center">Submit</button>
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
