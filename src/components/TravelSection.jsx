import React from 'react'
import travelBg from '../assets/images/tripyAi_travel_bg.svg'
import twitterImg from '../assets/images/tripyAi_twitter.svg'
import chatImg from '../assets/images/tripyAi_chat.svg'
import revenueImg from '../assets/images/tripyAi_revenue.svg'
const TravelSection = () => {
  return (
<div
  className="relative flex flex-col justify-center items-center text-white w-full mt-10 py-20"
  style={{
    backgroundImage: `url(${travelBg})`,
    backgroundRepeat: 'repeat', // Makes the image repeat
    backgroundPosition: 'top left', // Aligns the starting point
  }}
>
   
  <div className="w-full text-center py-20 flex flex-col relative">
    <div
      className="absolute inset-0 bg-[#fff] opacity-15 rounded-full blur-3xl z-0 flex items-center justify-center"
      style={{
        height: "100%",
        width: "90%",
        top: "0%", // Positioning the div in the center vertically  
        left:'5%'
        
      }}
    ></div>

    <div className='flex flex-col items-center justify-center gap-10 z-10 relative' id='future-of-travel'>
        <span className='text-5xl underline'>Future of Travel</span>
        <span className='text-2xl'>AI serving Humanity, and Humanity nurturing AI</span>
        <div
          className="absolute bg-[#fff] opacity-50 rounded-full blur-3xl"
          style={{
            height: '100%',
            width: '20%',
            left: '50%', // Position it in the center horizontally
            transform: 'translateX(-50%)' // Shift it back by 50% of its width to truly center it
          }}
        ></div>
    </div>
      <div className='flex flex-col w-full items-center mt-32 gap-10 z-10'>
        <div className="grid grid-cols-1 lg:flex lg:gap-10 w-[80%] rounded-lg px-10 lg:justify-between"
          style={{
            background: "linear-gradient(145deg, #2f2f2f, #000)", // Dark gray to black gradient
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.1)", // Smooth shadow
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.08)", // Subtle border for a polished look
            overflow: "hidden", // Ensures child elements don't overflow rounded edges
          }}
        >
          <div className="flex flex-col py-20 relative lg:w-[60%]">
            <span className="text-center lg:text-start text-4xl lg:text-5xl">
              X.com Tag-Based Itinerary
              <br />
              Planning
            </span>
            <span className="text-center lg:text-start mt-10 lg:text-lg">
              Tag @TripyAI on Twitter with travel details (e.g.Plan a 5-day Dubai.) TripAI, and our AI will instantly share a detailed itinerary, booking links, and crypto payment options via public reply or DM.
            </span>
            <div
              className="absolute inset-0 bg-[#fff] opacity-15 rounded-full blur-3xl z-0 flex items-center justify-center"
              style={{
                height: "50%",
                width: "100%",
                top: "80%", // Positioning the div in the center vertically
                left: "50%",
              }}
            ></div>
          </div>

          <div className="flex flex-col w-full relative items-center justify-center lg:w-[30%]">
            <img src={twitterImg} alt="twitterImg" className="z-10" />
            <div
              className="absolute inset-0 bg-[#fff] opacity-20 rounded-full blur-xl z-0 flex items-center justify-center"
              style={{
                height: "50%",
                width: "100%",
                top: "50%", // Centers vertically within the parent
                transform: "translateY(-50%)", // Adjusts to truly center it
              }}
            ></div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:flex lg:gap-10 w-[80%] rounded-lg px-10 lg:justify-between' 
          style={{
            background: "linear-gradient(145deg, #2f2f2f, #000)", // Dark gray to black gradient
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.1)", // Smooth shadow
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.08)", // Subtle border for a polished look
            overflow: "hidden", // Ensures child elements don't overflow rounded edges
          }}
          >
            
            <div className='flex flex-col lg:w-[30%] relative items-center justify-center order-2 lg:order-1'>
                <img src={chatImg} alt="twitterImg"/>
                <div
                className="absolute inset-0 bg-[#fff] opacity-20 rounded-full blur-xl z-0 flex items-center justify-center"
                style={{
                  height: "50%",
                  width: "100%",
                  top: "50%",  // Centers vertically within the parent
                  transform: "translateY(-50%)", // Adjusts to truly center it
                }}
              ></div>
            </div>
            <div className='flex flex-col lg:w-[60%] py-20 relative order-1 lg:order-2'>
                <span className='text-center lg:text-end text-4xl lg:text-5xl'>Terminal/Chat Based<br/>
                Interface</span>
                <span className='text-center lg:text-end mt-10 lg:text-lg'>Interact with our chatbot on the website/Dapp to plan trips based on your
                  preferences and budget, get real-time booking options, and optionally pay directly
                  with your wallet for the best value deals. Example: Plan a 7-day Dubai trip
                  for 2 under 1 Agent books and deducts payment
                  seamlessly.
                </span>
                <div
                  className="absolute inset-0 bg-[#fff] opacity-15 rounded-full blur-3xl z-0 flex items-center justify-center"
                  style={{
                    height: "50%",
                    width: "100%",
                    top: "80%", // Positioning the div in the center vertically
                    left:'20%'
                  }}
                ></div>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:flex lg:gap-10 w-[80%] rounded-lg px-10 lg:justify-between' 
          style={{
            background: "linear-gradient(145deg, #2f2f2f, #000)", // Dark gray to black gradient
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.1)", // Smooth shadow
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.08)", // Subtle border for a polished look
            overflow: "hidden", // Ensures child elements don't overflow rounded edges
          }}
          >     
          <div className='flex flex-col lg:w-[60%] py-20 relative'>
                <span className='text-center lg:text-start text-4xl lg:text-5xl'>Community Revenue<br/> Share
                </span>
                <span className='text-center lg:text-start mt-10 lg:text-lg'>TripyAi enables travellers to share ideas in AI-moderated token-gated public
                  chats, boosting their social score to unlock revenue shares. This fosters vibrant
                  communities while benefiting both users and the platform.
                </span>
                <div
                  className="absolute inset-0 bg-[#fff] opacity-15 rounded-full blur-3xl z-0 flex items-center justify-center"
                  style={{
                    height: "50%",
                    width: "100%",
                    top: "80%", // Positioning the div in the center vertically
                    left:'50%'
                  }}
                ></div>
            </div>
            <div className='flex flex-col lg:w-[30%] relative items-center justify-center'>
                <img src={revenueImg} alt="twitterImg"/>
                <div
                className="absolute inset-0 bg-[#fff] opacity-20 rounded-full blur-xl z-0 flex items-center justify-center"
                style={{
                  height: "50%",
                  width: "100%",
                  top: "50%",  // Centers vertically within the parent
                  transform: "translateY(-50%)", // Adjusts to truly center it
                }}
              ></div>
            </div>
        </div>
    </div>
  </div>
</div>

  )
}

export default TravelSection