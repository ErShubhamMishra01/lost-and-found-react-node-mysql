import React, { useEffect, useState } from 'react'
import Menu from '../../components/admin/Menu'
import Footer from '../../components/admin/Footer'
import Sidebar from '../../components/admin/Sidebar'
import callMyApi from '../../ApiCaller'

export default function Email() {

  const [data, setData] = useState([]);
  const [to, SetTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, SetText] = useState("");

  function getData() {
    callMyApi('dashboard/getMail', 'GET')
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


  const handleSubmit = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append('to', to);
    data.append('subject', subject);
    data.append('text', text);
    callMyApi('dashboard/sendMail', data, 'POST')
      .then(data => {
        console.log(data + 'ddd');
        if (data.success === true) {
             alert('Email sended successfully.');
        } else {
          alert('Unable to send email, please try again later.');
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
              <h1 className='text-center mb-4' style={{ color: "#23aaf2" }}>Send Email</h1>
              < form onSubmit={handleSubmit}>
                <div className="card">
                  <div className='row card-body'>
                   
                  <div className="mb-3">
                      <label className="form-label">Type receiver email address</label>
                      <input type='email' value={to} onChange={e => SetTo(e.target.value)}  className="form-control" placeholder="Enter receiver email address here.." />
                    </div>

                    <div className="mb-3">
                      <label  className="form-label">Type email content</label>
                      <input type='text' value={subject} onChange={e => setSubject(e.target.value)} className="form-control" placeholder="Enter email subject here.." />
                    </div>
                   
                    <div className="mb-3">
                      <label  className="form-label">Type email content</label>
                      <textarea value={text} onChange={e => SetText(e.target.value)} rows="10" className="form-control" placeholder="Enter email content here.." ></textarea>
                    </div>
                    <div className="mb-3" align="center">
                      <button type="submit" style={{ minWidth: "120px" }} className="btn btn-primary mt-1 btn-center">Send EMail</button>
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
              <h1 className='text-center mb-4' style={{ color: "#23aaf2" }}>All Emails</h1>
              <table className='table table-hover table-bordered '>
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Receiver</th>
                    <th>Subjet</th>
                    <th>Content</th>
                    <th>Date Time</th>
                    
                  </tr>
                </thead>
                {/* {JSON.stringify(data)} */}
                <tbody>
                  {data.map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item.receiver}</td>
                      <td>{item.subject}</td>
                      <td>{item.text}</td>
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
