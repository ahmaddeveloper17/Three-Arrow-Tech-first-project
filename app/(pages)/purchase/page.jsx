import Footer from '@/app/(components)/Footer/Footer'
import Navbar from '@/app/(components)/Navbar/Navbar'
import PurchaseCard from '@/app/(components)/PurchaseCard/PurchaseCard'
import PurchaseHeader from '@/app/(components)/PurchaseHeader/PurchaseHeader'
import { Images } from '@/constants/constant'
import React from 'react'

function page() {
  return (
    <div>
    <div className="background-div">
        <Navbar/>
        <PurchaseHeader img={Images.purchaseGlobe}/>
    </div>
    <div class="text-opacity-75">
    <p class="font-transducer-test mt-[73px] mb-[73px] text-center text-4xl font-extrabold leading-tight capitalize">
    The Algo-Trading Full Service
    </p>
</div>
<div className=' bg-[#404040] mx-8 mb-28 rounded-2xl h-[1500px] '>
    <PurchaseCard/>
    <PurchaseCard/>
    <PurchaseCard/>
    <PurchaseCard/>
    <PurchaseCard/>
</div>
    <div class="text-opacity-75">
    <p class="font-transducer-test mt-[73px] mb-[73px] text-center text-4xl font-extrabold leading-tight capitalize">
    The Copy-Trading Service
    </p>
</div>
<div className=' bg-[#404040] mx-8 mb-28 rounded-2xl h-[1000px] '>
    <PurchaseCard/>
    <PurchaseCard/>
    <PurchaseCard/>
</div>
<Footer/>
    </div>
  )
}

export default page