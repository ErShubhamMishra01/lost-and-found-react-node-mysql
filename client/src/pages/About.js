import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import sImage from '../assets/images/shubham.jpg'


export default function About() {
    return (
        <>
            <Header />
            <NavBar />
            <div className='row mt-5 mb-5' style={{ textAlign: "justify" }}>
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



            <div className='row mt-5 mb-5' style={{ textAlign: "justify" }}>
                <div className='col-sm-1'></div>
                <div className='col-sm-5'>
                    <h3 className='text-center'>What we do</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nulla tempora autem cum facere, labore, amet quo minima nam tenetur id dolor dicta voluptate aut perferendis expedita animi modi dolorum?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nulla tempora autem cum facere, labore, amet quo minima nam tenetur id dolor dicta voluptate aut perferendis expedita animi modi dolorum?
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nulla tempora autem cum facere, labore, amet quo minima nam tenetur id dolor dicta voluptate aut perferendis expedita animi modi dolorum?
                    </p>
                </div>
                <div className='col-sm-5 image-fluid'>
                    <img src={sImage} style={{ maxHeight: "300px", maxWidth: "100%" }} />
                </div>
                <div className='col-sm-1'></div>
            </div>


            <div className='row mt-5 mb-5' style={{ textAlign: "justify" }}>
                <div className='col-sm-1'></div>
                <div className='col-sm-5 image-fluid'>
                    <img src={sImage} style={{ maxHeight: "300px", maxWidth: "100%" }} />
                </div>
                <div className='col-sm-5'>
                    <h3 className='text-center'>Our Mission</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nulla tempora autem cum facere, labore, amet quo minima nam tenetur id dolor dicta voluptate aut perferendis expedita animi modi dolorum?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nulla tempora autem cum facere, labore, amet quo minima nam tenetur id dolor dicta voluptate aut perferendis expedita animi modi dolorum?
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nulla tempora autem cum facere, labore, amet quo minima nam tenetur id dolor dicta voluptate aut perferendis expedita animi modi dolorum?
                    </p>
                </div>
                
                <div className='col-sm-1'></div>
            </div>





            <Footer />
        </>
    )
}
