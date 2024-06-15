import { Images } from '@/constants/constant'
import Image from 'next/image'
import React from 'react'

function SettingSmartCard(props) {
  return (
    <div>
            <div className="px-4 py-4" >
            <div className="flex">
                <Image src={props.img} width={20} height={20}/>
                <p className="text-Accent pl-3 font-poppins text-sm font-medium capitalize">{props.text}</p>
            </div>
            <div className="flex">
                <p className=" text-Accent font-sans text-sm">o   Get informed about relevant information after a purchase-</p>
                <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-Accent2 dark:peer-focus:ring-Accent2 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-Accent2"></div>
            </label>            </div>
            <hr />
            </div>
            </div>
  )
}

export default SettingSmartCard