import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='row p-2 text-center text-light' style={{background:"#23aaf2"}}>
      <div className='col-sm-6'>
     &copy; All Rights Reserved
      </div>
      <div className='col-sm-6'>
       Developed By ST23 Students
      </div>
  </div>
    )
  }
}
