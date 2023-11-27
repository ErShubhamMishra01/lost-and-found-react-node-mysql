import React from 'react'

export default function Alert(props) {
    function hide(){
        if(props.showAlert=='true'){
            document.getElementById("box").style.display="block";
            setTimeout(()=>{
                document.getElementById("box").style.display="none";
                props.updateShowAlert(false);
            },5000)
        }
    }
  return (
    <>
    {hide()}
    <div id="box" style={{display:"none"}} class={'alert alert-'+props.type+' alert-dismissible fade show'} role="alert">
  <strong>{props.type=='success'?'Info':''} {props.type=='danger'?'Error(s)':''} </strong> 
  {
  typeof(props.message)=='object'? props.message.map((err,index)=>
  (
    <li key={index}>
        {err}
    </li>
  )):props.message
  }
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</>

  )
}
