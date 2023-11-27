import React, { useEffect, useState } from 'react'
import Menu from '../../components/user/Menu'
import Footer from '../../components/user/Footer'
import Sidebar from '../../components/user/Sidebar'
import callMyApi from '../../ApiCaller'

export default function AddMaterial() {

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [ecost, setEcost] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append('name', name);
    data.append('category', category);
    data.append('date', date);
    data.append('time',time );
    data.append('place',place );
    data.append('ecost', ecost);

    callMyApi('dashboard/addLostMaterial', data, 'POST')
      .then(data => {
        console.log(data + 'ddd');
        alert(data.message);
      }).catch(e => {
        alert('Sorry unable to submit record, please try again later.');
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
              <h1 className='text-center mb-4' style={{ color: "#23aaf2" }}>Add Material</h1>
      < form onSubmit={handleSubmit}>
        <div className="card">
          <div className='row card-body'>
          
          <div className="mb-3">
              <label htmlFor="" className="form-label">Material name</label>
              <input type='text' value={name} onChange={e => setName(e.target.value)} className="form-control" required placeholder="Enter material name..." />
            </div>

          <div className="mb-3">
              <label htmlFor="" className="form-label">Category</label>
             <select class="form-select"  onChange={e => setCategory(e.target.value)}>
            <option selected disabled>Choose</option>
            <option value="">Electronics</option>
            <option value="">Vechile</option>
            <option value="">Luggage</option>
            <option value="">Accessiries</option>
            <option value="">Other</option>
             </select>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">Time </label>
              <input type='time' value={time} onChange={e => setTime(e.target.value)} className="form-control"  />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Date</label>
              <input type='date' value={date} onChange={e => setDate(e.target.value)} className="form-control" required placeholder="Enter material name..." />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Place </label>
              <input type='text' value={place} onChange={e => setPlace(e.target.value)} className="form-control" required placeholder="Enter place name..." />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Estimated cost (in INR)</label>
              <input type='text' value={ecost} onChange={e => setEcost(e.target.value)} className="form-control" required placeholder="Enter material name..." />
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
