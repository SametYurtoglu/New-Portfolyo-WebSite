import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="flex justify-center my-10">
        <div className="bg-black/30 w-[1100px] h-[500px] rounded-xl">
              <div className="flex flex-col items-center justify-center h-full gap-5">
              <div className="relative w-44 h-44 ">
                <Image alt='' src={'/images/logo.png'} fill className='rounded-full'/>
              </div>
              <div className='flex flex-col items-center text-gray-300'>
                <h1>Samet</h1>
                <h4>FrontEndDev</h4>
                <p className='w-[400px] md:w-[500px] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eos est quasi quia. Nam, sed doloremque, esse quo quibusdam, obcaecati nemo dolores corporis temporibus totam eos? Tenetur ut adipisci et.</p>
              </div>
              </div>
        </div>
      </div>
  )
}

export default About