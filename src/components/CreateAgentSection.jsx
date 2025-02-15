import React from 'react'
import ProgressBar from './ProgressBar'
import agentIcon from '../assets/images/tripyAi_agent_icon.svg'
import NumberSectionCard from './NumberSectionCard'
import AgentCard from './AgentCard'
import agent1 from '../assets/images/tripyAi_agent1.svg'
import agent2 from '../assets/images/tripyAi_agent2.svg'
import agent3 from '../assets/images/tripyAi_agent3.svg'
import agent4 from '../assets/images/tripyAi_agent4.svg'
import agent5 from '../assets/images/tripyAi_agent5.svg'


const CreateAgentSection = () => {
  return (
    <div className='flex flex-col justify-between w-full' id='technology'>
      <div className='flex flex-col justify-center items-center px-10 gap-10 pt-20 lg:pt-0'>
        <span className='text-[#525252] text-2xl underline'>Monetize Your Experiences</span>
        <span className='text-5xl text-center'>Create your own Agent</span>
        <span className='text-xl text-center w-[80%]'>Leverage your travel history to train a personalized AI Travel Agent that others can use for their trips. Earn rewards every time your agent is utilized, with
        opportunities to upsell NFTs, exclusive experiences, and premium 1:1 guide, turning your expertise into revenue.</span>
      </div>
      <div className="w-full flex justify-center mt-20">
        <div className="grid grid-cols-1 lg:flex w-[90%] lg:justify-center items-stretch gap-10 mb-20">
          
          <div className="order-2 lg:order-1 flex flex-col gap-2 h-full justify-between z-10">
            <ProgressBar progress={10} title={'Adventure'}/>
            <ProgressBar progress={16} title={'Fun'}/>            
            <ProgressBar progress={5} title={'Historical'}/>
          </div>

          
          <div className="order-1 lg:order-2 flex items-center justify-center h-full relative">
            <div className=" bg-black rounded-xl flex items-center justify-center h-full w-full z-10">
              <img
                src={agentIcon}
                alt="agent_icon"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div
                className="absolute inset-0 bg-[#fff] opacity-15 rounded-full blur-xl items-center justify-center z-0 h-[130%] w-[100%] lg:w-[160%] lg:-left-[30%] -top-[15%]"
              ></div>
          </div>
          
          <div className="order-3 flex flex-col gap-2 h-full justify-between z-10">
            <ProgressBar progress={16} title={'Food explorer'}/>
            <ProgressBar progress={4} title={'Budget'}/>            
            <ProgressBar progress={18} title={'Nightlife'}/>
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-center mb-20 '>
        <div className='z-20 relative'>
          <a href='/'>
            <div className='relative rounded-full px-14 py-6 text-xl z-10 bg-gradient-to-tl from-black to-[#1e1e1e] border-t-[0.1px] border-r-[0.1px] border-white hover:cursor-pointer'>
              <span>Create your own ai agent</span>
            </div>
          </a>
          <div
            className="absolute inset-0 bg-[#fff] opacity-15 rounded-full blur-xl flex items-center justify-center z-0 h-[190%] w-[100%] lg:w-[140%] lg:-left-[20%] -top-[50%]"
          ></div>
          </div>
      </div>
      <div className='w-full '>
        <div className='flex gap-4 overflow-x-auto w-full px-5 no-scrollbar'>
            <AgentCard image={agent1} price={'0.01 ETH'} name={'Agent Lisa'} location={'Rio'}/>
            <AgentCard image={agent2} price={'0.05 ETH'} name={'Agent Isa'} location={'NYC'}/>
            <AgentCard image={agent3} price={'0.1 ETH'} name={'Agent Piage'} location={'Spain'}/>
            <AgentCard image={agent4} price={'0.02 ETH'} name={'Agent Ava'} location={'Florida'}/>
            <AgentCard image={agent5} price={'0.08 ETH'} name={'Agent Mia'} location={'Dubai'}/>
            <AgentCard image={agent1} price={'0.01 ETH'} name={'Agent Lisa'} location={'Rio'}/>
            <AgentCard image={agent2} price={'0.05 ETH'} name={'Agent Isa'} location={'NYC'}/>
            <AgentCard image={agent3} price={'0.1 ETH'} name={'Agent Piage'} location={'Spain'}/>
        </div>

      </div>


    </div>
  )
}

export default CreateAgentSection