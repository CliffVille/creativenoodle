import React from 'react'

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen font-montserrat mt-12">

        <div className="flex flex-col justify-start items-start ml-44">
          <h1 className="text-4xl text-bold font-extrabold uppercase">Services</h1>
          <p className="w-1/3 text-xl">Browse our solutions to see what we can offer to you and your business or company!</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[78%] mx-auto min-h-[500px]">
            <div className="flex flex-row gap-10 mt-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-full h-[207px] flex flex-col justify-center items-center rounded-[40px] bg-yellow mb-4">
                  <h1 className="text-xl lg:text-4xl text-black mb-4">Web Design</h1>
                  <p className="text-[10px] lg:text-[12px] text-black w-3/4">Browse through what we can offer you and your business or company!</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-full h-[207px] flex flex-col justify-center items-center rounded-[40px] bg-yellow mb-4">
                  <h1 className="text-xl lg:text-4xl text-black mb-4">Site Development</h1>
                  <p className="text-[10px] lg:text-[12px] text-black w-3/4">Browse through what we can offer you and your business or company! </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-full h-[207px] flex flex-col justify-center items-center rounded-[40px] bg-yellow mb-4">
                  <h1 className="text-xl lg:text-4xl text-black mb-4">Graphic Design</h1>
                  <p className="text-[10px] lg:text-[12px] text-black w-3/4">Browse through what we can offer you and your business or company! </p>
                </div> 
              </div>
            </div>
          </div>

    </div>
  )
}

export default Services