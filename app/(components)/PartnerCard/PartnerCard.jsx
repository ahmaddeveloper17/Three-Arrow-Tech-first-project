import Image from 'next/image'
import React from 'react'
import { Images } from '@/constants/constant'
function PartnerCard(props) {
  return (
    <div>
        <div className='relative'>
          <div className='relative p-8'>
            <Image src={props.img} width={160} height={160} />
            <div className='absolute top-0 left-0 p-4'>
              <Image src={Images.question} width={180} height={180} />
            </div>
          </div>
        </div>
          <p className=' text-Accent ml-8 mt-6 sm:ml-20 sm:mt-16'>{props.name}</p>
    </div>
  )
}

export default PartnerCard