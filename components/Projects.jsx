import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='text-white text-center flex flex-col justify-center items-center'>
        <h3 className=' font-semibold text-4xl tracking-wide text-primary-200 mb-10'>Project's</h3>
        <div className='project_container mb-40  flex justify-center items-center flex-col gap-20'>
            <div className='tools CatGO flex justify-start items-center sm:flex-row flex-col hover:bg-primary-300 transition-all rounded-lg p-2 w-full'>
                <img className='h-80 rounded-lg' src="/projects/CatGO/CatGo.png" alt="" />
                <div className='mx-20 sm:text-start text-center'>
                    <div className='p_name font-semibold text-xl my-4 tracking-wide bg-orange-300 text-black sm:px-4 px-0 sm:w-32 w-auto'>Cat GO
                    </div>
                    <div className='p_about text-sm'>Help’s to organize file according to the file extension</div>
                </div>
            </div>
            <div className='tools CatGO flex justify-start items-center sm:flex-row flex-col hover:bg-primary-300 transition-all rounded-lg p-2 w-full'>
                <img className='h-80 rounded-lg' src="/projects/CatGO/CatGo.png" alt="" />
                <div className='mx-20 sm:text-start text-center'>
                    <div className='p_name font-semibold text-xl my-4 tracking-wide bg-cyan-300 text-black sm:px-4 px-0 sm:w-40 w-auto'>ModernCss
                    </div>
                    <div className='p_about text-sm'>A place with thousands of unique design idea's for building application's faster</div>
                    <Link href="https://moderncss.vercel.app" className='text-xs text-blue-300 '>Visit The Project &#8594;</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects