import Image from 'next/image'
import React from 'react'

const ProjectsCardItem = ({ title, desc, avatar, link }) => {
  return (
    <div className='bg-transparent w-[300px] h-full rounded-lg hover:-translate-y-5 hover:shadow-2xl duration-500 hover:scale-105 '>
      <div>
        <div className="bg-projebg relative w-full rounded-t-lg h-[180px] bg-center bg-cover">
          <Image alt='' src={avatar} fill className='rounded-lg' />
          <div className="flex justify-end px-3 ">
            <h1 className='text-violet-700 font-bold animate-pulse bg-black bg-opacity-70 px-2 rounded-lg'>Projects</h1>
          </div>
        </div>
        <div className='flex flex-col gap-3 items-center justify-center px-5 py-2'>
          <h1 className='dark:text-gray-400 font-bold text-xl'>{title}</h1>
          <p className='w-[270px] dark:text-gray-400 font-normal text-[15px] text-center'>{desc}</p>
          <div className='flex justify-center '>
            <a href={link} className='bg-blue-600/10 px-10 py-1 rounded-lg hover:bg-blue-600/30 dark:text-gray-400 font-medium uppercase'>İncele</a>
          </div>
        </div>

      </div>
    </div>
  )
}

const ProjectsCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      <ProjectsCardItem title='Test' desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente pariatur facere earum vel voluptas blanditiis delectus porro itaque nulla quisquam dolore laborum possimus illo eligendi saepe, reiciendis ex. Inventore, officia.' avatar='/images/logo.png' link='#' />
      <ProjectsCardItem title='Title' desc='Desc' avatar='/images/logo.png' link='#' />
      <ProjectsCardItem title='Title' desc='Desc' avatar='/images/logo.png' link='#' />
    </div>
  )
}

export default ProjectsCard