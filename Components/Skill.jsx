import React from 'react'

const Skill = () => {
    return (
        <div className="flex flex-col gap-y-10">
            <div className="bg-gray-800/30 w-full h-[4rem] flex items-center ">
                <h1 className='container mx-auto text-gray-300 font-medium text-xl flex md:justify-start justify-center'>Skills</h1>
            </div>
            <div className="container mx-auto">
                <div className="flex gap-x-5 flex-wrap justify-center">

                    <button>
                        <span className='text-gray-200'>HTML</span>
                        <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 w-full"></div>
                        </div>
                    </button>
                    <button>
                        <span className='text-gray-200'>CSS</span>
                        <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-full"></div>
                        </div>
                    </button>
                    <button>
                        <span className='text-gray-200'>JavaScript</span>
                        <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-300 w-28"></div>
                        </div>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default Skill