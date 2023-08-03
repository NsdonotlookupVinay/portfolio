import React from 'react'

const Projects = () => {
  return (
    <div className='text-white text-center flex flex-col justify-center items-center'>
        <h3 className=' font-semibold text-2xl tracking-wide text-primary-200 mb-10'>Project's</h3>
        <div className='project_container mb-40'>
            <div className='tools CatGO flex justify-center items-center sm:flex-row flex-col hover:bg-primary-300 transition-all rounded-lg p-2'>
                <img className='h-80 rounded-lg' src="/projects/CatGO/CatGo.png" alt="" />
                <div className='mx-20 sm:text-start text-center'>
                    <div className='p_name font-semibold text-xl my-4'>Cat GO
                    </div>
                    <div className='p_about '>Help’s to organize file according to the file extension</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects