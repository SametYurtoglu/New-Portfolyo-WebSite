import ProjectsCard from '@/Components/ProjectsCard'
import React from 'react'

const Projects = () => {
  return (
    <div className='flex justify-center'>
        
        <div className="flex flex-col gap-y-5">
        <div className="bg-gray-800/30 w-full h-[4rem] flex items-center">
            <h1 className='container mx-auto text-gray-300 font-medium text-xl'>Projects</h1>
          </div>
        <div className="">
        <ProjectsCard/>
        </div>
        </div>
    </div>
  )
}

export default Projects