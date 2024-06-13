import React from 'react'
import Navbar from './(components)/Navbar/Navbar'
import Header from './(components)/Header/Header'
import Enjoy from './(components)/Enjoy/Enjoy'
import About from './(components)/About/About'
import Footer from './(components)/Footer/Footer'

function page() {
  return (
    <div>
    <div className="background-div">
      <Navbar/>
      <Header/>
    </div>
    <div >
      <About/>
      <Enjoy/>
      <h1 className="text-center lg:ml-16 mb-[40px] mt-[74px] col-span-2 font-transducer-test text-[50px] sm:text-[70px] font-black leading-[76px] tracking-[1.4px] capitalize text-custom-black">
      Our
          <span className="font-transducer-test text-[50px] sm:text-[70px] font-black leading-[76px] tracking-[1.4px] capitalize text-Accent2">
          Partners
          </span>
        </h1>
        <p className="sm:ml-[30px] text-center">
          What are we doing one of the biggest market makers in the market
        </p>
<Footer/>
    </div>
    </div>
  )
}

export default page