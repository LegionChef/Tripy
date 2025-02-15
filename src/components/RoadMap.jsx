import React from 'react'
import roadMapBg from '../assets/images/tripyAi_roadMap_bg.png'
import suitcaseImg from '../assets/images/tripyAi_standingSuitcase.svg'
const RoadMap = () => {
  return (
    <div 
      className='w-full flex flex-col justify-center items-center pt-24' 
      style={{
        backgroundImage: `url(${roadMapBg})`,
        backgroundPosition: 'center -20rem',
        backgroundSize: '150%',  // Ensures the image covers the entire div
        backgroundRepeat: 'no-repeat'  // Prevents the image from repeating
      }}
      id='roadmap'
      >
      <span className='text-5xl'>Roadmap</span>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full px-10 pt-24 justify-center '>
        <div className='rounded-2xl border-[0.1px] border-[#757575] flex flex-col py-16 px-10 gap-14 backdrop-blur-xl'>
            <span className='text-4xl lg:text-5xl '>2024 Q4</span>
            <span className='lg:text-lg'>
                Development of the generative AI framework for personalized travel agents.<br/><br/>
                Stealth launch of on-chain digital travel agents with customizable personas
            </span>
        </div>
        <div className='rounded-2xl border-[0.1px] border-[#757575] flex flex-col py-16 px-10 gap-14 backdrop-blur-xl'>
            <span className='text-4xl lg:text-5xl'>2025 Q1</span>
            <span className='lg:text-lg'>
                Onboarding of early adopters and incentivize engagement.<br/><br/>
                Token Generation Event<br/><br/>
                Setting the stage for tokenized travel solutions.<br/><br/>
                Full deployment of TripyAi on the mainnet, integrating advanced travel algorithms
            </span>
        </div>
        <div className='rounded-2xl border-[0.1px] border-[#757575] flex flex-col py-16 px-10 gap-14 backdrop-blur-xl'>
            <span className='text-4xl lg:text-5xl'>2025 Q2</span>
            <span className='lg:text-lg'>
                Rollout of AI-powered public travel chats with category and tag-based filtering.<br/><br/>
                Integration of $TRIPY tokens to unlock advanced personalization and premium features.
            </span>
        </div>
        <div className='rounded-2xl border-[0.1px] border-[#757575] flex flex-col py-16 px-10 gap-14 backdrop-blur-xl'>
            <span className='text-4xl lg:text-5xl'>2025 Q3</span>
            <span className='lg:text-lg'>
                Complete rollout of all core features, including seamless wallet integration for automated payments.<br/><br/>
                Introduction of advanced customization tools requiring $TRIPY tokens, enhancing agent functionality.
            </span>
        </div>
      </div>


      {/**About TripyAI */}
      <div className='flex flex-col w-full mt-52'>
        <div className='flex flex-col w-full items-center gap-6 '  id='tokenization'>
          <span className='text-3xl lg:text-5xl text-center'>More than just an Ai Travel Agent</span>
          <span className='text-[#525252] text-lg underline'>Veterans of Travel Industry</span>
        </div>
        <div className=' w-full justify-between grid grid-cols-1 lg:flex'>
          <div className='w-full lg:w-[47%] flex flex-col text-lg py-20 lg:py-44 gap-20 px-6 lg:px-0 lg:pl-32'>
            <div className='w-full'>
              <span>Experienced Team</span>
              <ul className="list-disc px-5 py-2">
                <li>With over 7 years of expertise in the travel industry, TripyAI is
                  revolutionizing travel by making it more engaging, rewarding, and
                  efficient.
                </li>
                <li>
                Achieving a remarkable revenue milestone of over $1 million between
                2023-2024 without any marketing efforts, TripyAi is poised to scale to
                unprecedented levels.
                </li>
              </ul>
            </div>
            <div className='w-full'>
              <span>More than just Travel</span>
              <ul className="list-disc px-5 py-2">
                <li>The parent company of TripyAi successfully manages a portfolio of over
                  50 Airbnb properties and several luxury yachts in Dubai, UAE,
                  showcasing its extensive operational experience.
                </li>
                <li>
                  The platform introduces Ai-powered public travel chats, featuring
                  category and tag-based filtering, fostering seamless interaction and
                  community building.
                </li>
              </ul>
            </div>
          </div>
          <div className='w-full lg:w-[50%] flex items-end justify-end'>
            <img src={suitcaseImg} alt='suitcase_img'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadMap