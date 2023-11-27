import React, { useEffect, useState } from 'react'
import callMyApi from '../../ApiCaller';

export default function Menu() {
  
  const [pic_path, setPic_path] = useState("");
  const [name, setName] = useState("");

  function getData() {
    var res = callMyApi('userinfo', 'GET')
      .then(data => {
        if (data.success === true) {
          setName(data.data[0].name)
          setPic_path(data.data[0].pic_path);
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

  return (
    <div className='row'style={{background:"#23aaf2"}}>
    <nav className="navbar navbar-expand-lg navbar-light" >
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         
            <img src={process.env.REACT_APP_API_END_POINT + 'data/proPicture/'+ pic_path} style={{maxHeight:"35px",maxWidth:"35px",borderRadius:"50%"}}/> <span>{name}</span>
            
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/logout">Logout</a></li>
          </ul>
        </li>
        
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Your Optios</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
       
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}
