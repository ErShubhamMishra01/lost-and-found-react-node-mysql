import React, { useState } from 'react'
import Alert from '../components/Alert'
import callMyApi from '../ApiCaller'

export default function Enquiry() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobno, setMobno] = useState("");
    const [message, setMessage] = useState("");
    const [alertType, setAlertType] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertShowStatus, setAlertShowStatus] = useState("");
    const updateShowAlert = (props) => {
        setAlertShowStatus(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('mobno', mobno);
        data.append('message', message);
        var res = callMyApi('enquiry', data, 'POST')
            .then(data => {
                if (data.success === true) {
                    setAlertType('success');
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
        console.log(JSON.stringify(res));
    }

    return (
        <div>
            {/* Button trigger modal */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Enquiry
            </button>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
    < form onSubmit={handleSubmit}>
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Enquiry</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          
                <div className='row'>
                    <div className='col-sm-12'>
                        <div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" required onChange={e => setName(e.target.value)} className="form-control" id="name" placeholder="Enter your name here.." />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" required className="form-label">Email address</label>
                                <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter your email.." />
                            </div>


                            <div className="mb-3">
                                <label htmlFor="mobno" required className="form-label">Mobile Number</label>
                                <input type="text" onChange={e => setMobno(e.target.value)} className="form-control" id="mobno" placeholder="Enter your mobile number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" required className="form-label">Message</label>
                                <textarea className="form-control" onChange={e => setMessage(e.target.value)} id="message" rows={3} defaultValue={""} placeholder='Whats on your mind...' />
                            </div>
                        </div>

                    </div>
                </div>
            
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div style={{padding:"10px",}}>
                  <Alert type={alertType} message={alertMessage} showAlert={alertShowStatus} updateShowAlert={updateShowAlert} />
                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

