import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import GenNotification from '../components/GenNotification'

export default class Home extends Component {
  render() {
    return (
      <div className='row'>
      <div className='col-sm-12' >
        <Header/>
        <NavBar/>
        <Slider/>
        <GenNotification/>
        <div className='row mt-5 mb-5' style={{textAlign:"justify"}}>
          <div className='col-sm-2'></div>
          <div className='col-sm-8'>
            <h1 className='text-center'>About Us</h1>
            <p> 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nulla tempora autem cum facere, labore, amet quo minima nam tenetur id dolor dicta voluptate aut perferendis expedita animi modi dolorum? 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nulla tempora autem cum facere, labore, amet quo minima nam tenetur id dolor dicta voluptate aut perferendis expedita animi modi dolorum? 
            
            </p>
            <p> 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nulla tempora autem cum facere, labore, amet quo minima nam tenetur id dolor dicta voluptate aut perferendis expedita animi modi dolorum? 
            </p>
          </div>
          <div className='col-sm-2'></div>
        </div>
        <Footer/>
        
        
      </div>
      </div>
    )
  }
}
