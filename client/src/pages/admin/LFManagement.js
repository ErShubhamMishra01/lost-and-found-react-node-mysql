import React, { useEffect, useState } from 'react'
import Menu from '../../components/admin/Menu'
import Footer from '../../components/admin/Footer'
import Sidebar from '../../components/admin/Sidebar'
import callMyApi from '../../ApiCaller'

export default function LFManagement() {

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [ecost, setEcost] = useState("");
  const[fpersondname,setFpersonname]=useState("");
  const[fpersondetails,setFpersondetails]=useState("");
  const[rewardstatus,setRewardstatus]=useState("");
  const[regdetails,setRegdetails]=useState("");
  const[loststatus,setLoststatus]=useState("");
 
  const handleUpdate = (id) => {
    console.log(id)
    //e.preventDefault();
    var data = new FormData();
    data.append('fpersondname', fpersondname);
    data.append('fpersondetails', fpersondetails);
    data.append('rewardstatus', rewardstatus);
    data.append('regdetails', regdetails);
    data.append('loststatus', loststatus);
    data.append('id', id);
    


    callMyApi('dashboard/updateLF', data, 'POST')
      .then(data => {
        console.log(data + 'ddd');
        alert(data.message);   
      }).catch(e => {
        console.log(e);
        alert('Sorry unable to update record.');
      });
  }


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

  function getData() {
    callMyApi('dashboard/getLostMaterial', 'GET')
     .then(data => {
       if (data.success === true) {
         setData(data.data);
       } else {
         alert('Unable to get details. Please try again later.')
       }
       return data;
     }).catch(e => {
       console.log(e);
       alert('Unable to get details, Some went wrong. Please try again later.')
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


          <div className='row mt-4 mb-5'>
            <div className='col-sm-1'></div>
            <div className='col-sm-10' style={{ minHeight: 500, overflow: 'auto'}}>
              {/* main component starting */}
              <h1 className='text-center mb-4' style={{ color: "#23aaf2" }}>Lost and Found Materials</h1>
              <table className='table table-hover table-bordered '>
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Material Name</th>
                    <th>Manterial Category</th>
                    <th>Lost time</th>
                    <th>Lost Date</th>
                    <th>Lost Place</th>
                    <th>Estimated Cost</th>
                    <th>Owner Email</th>
                    <th>Material Status</th>
                    <th>Founder Name</th>
                    <th>Founder Details</th>
                    <th>Reward Status</th>
                    <th>Reward Details</th>
                    <th>Date Time</th>
                    <th>Update</th>
                  </tr>
                </thead>
                {/* {JSON.stringify(data)} */}
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.caterody}</td>
              <td>{item.time}</td>
              <td>{item.date}</td>
              <td>{item.place}</td>
              <td>{item.ecost}</td>
              <td>{item.oemail}</td>
            
              <td style={{minWidth:"150px"}}>
                Current - {item.mstatus}<br/>
                <input type='radio' name='mstatus' value="lost" onChange={e=>setLoststatus(e.target.value)}/> Lost&nbsp;
                <input type='radio' name='mstatus' value="Found" onChange={e=>setLoststatus(e.target.value)}/> Found
                </td>
              <td>
              <label  className="form-label">Current - {item.fpersonname}</label>
                <input type='text'  onChange={e => setFpersonname(e.target.value)}/>
                </td>

              <td>
               <label  className="form-label">Current - {item.fpersondetails}</label>
                <input type='text' onChange={e => setFpersondetails(e.target.value)}/>
                </td>

                <td style={{minWidth:"150px"}}>
                Current - {item.rewartstatus}<br/>
                <input type='radio' name='rstatus' value="yes" onChange={e=>setRewardstatus(e.target.value)}/> Yes &nbsp;
                <input type='radio' name='mstatus' value="no" onChange={e=>setRewardstatus(e.target.value)}/> No
                </td>

              <td>
              <label  className="form-label">Current - {item.rewarddetails}</label>
                <textarea type='text'  onChange={e => setRegdetails(e.target.value)}></textarea></td>

              <td>{item.dt}</td>
              <td>
                
                <input className='btn btn-primary' type='submit' onClick={() => {handleUpdate(item.id)}}  value="Update"/>
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
