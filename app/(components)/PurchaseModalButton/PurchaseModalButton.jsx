import React from 'react'

function PurchaseModalButton(props) {
  return (
    <div>
      <input type="text" placeholder={props.placeholder} className='text-Accent placeholder-white duration-500  px-10 sm:px-16 py-2 ease-in-out hover:bg-black hover:text-Accent active:bg-black active:text-[#404040] bg-[#404040] border-[#404040] rounded-md' />
    </div>
  )
}

export default PurchaseModalButton