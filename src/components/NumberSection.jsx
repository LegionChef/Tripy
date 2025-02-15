import React from 'react'
import NumberSectionCard from './NumberSectionCard'

const NumberSection = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-40 gap-24'>
        <div className='flex flex-col gap-14 items-center justify-center'>
            <span className='text-[#525252] text-2xl underline'>Number & Stats</span>
            <span className='text-5xl text-center'>Track records of Parent Company</span>
            <span className='text-2xl text-center px-10'>Our Impact in Web3 Travel Space. Track Records of Tripy Ai speaks for itself. Transform the way you travel.</span>
        </div>
        <div className='flex gap-4 overflow-x-auto w-full px-5 no-scrollbar'>
            <NumberSectionCard  amount={'10+'} title={'Life Time Revenue'} desc={'Empowering a new era of travel experiences in Web3.'}/>
            <NumberSectionCard  amount={'5M USD+'} title={'Life Time Revenue'} desc={'Empowering a new era of travel experiences in'}/>
            <NumberSectionCard  amount={'10,000+'} title={'Number of Customers Served'} desc={'Revolutionizing the travel experience for 10,000+ customers.'}/>
            <NumberSectionCard  amount={'10,000+'} title={'Number of Customers Served'} desc={'Revolutionizing the travel experience for 10,000+ customers.'}/>
            <NumberSectionCard  amount={'10,000+'} title={'Number of Customers Served'} desc={'Revolutionizing the travel experience for 10,000+ customers.'}/>
        </div>
    </div>
  )
}

export default NumberSection