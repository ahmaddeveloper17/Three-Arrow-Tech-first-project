import React from 'react'
import PartnerCard from '../PartnerCard/PartnerCard'
import { Images } from '@/constants/constant'

function Partners() {
  return (
    <div className=' grid grid-cols-4 md:grid-cols-6  ' >
        <PartnerCard name="Bybit" img={Images.first} />
        <PartnerCard name="Nexo"  img={Images.second}/>
        <PartnerCard name="Crypto" img={Images.third}/>
        <PartnerCard name="Bybit" img={Images.first}/>
        <PartnerCard name="Nexo" img={Images.second}/>
        <PartnerCard name="Crypto" img={Images.third}/>
    </div>
  )
}

export default Partners