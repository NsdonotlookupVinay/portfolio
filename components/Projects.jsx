import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='text-white antialiased text-center flex flex-col justify-center items-center'>
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
            <div className=' ModernCss tools CatGO flex justify-start items-center sm:flex-row flex-col hover:bg-primary-300 transition-all rounded-lg p-2 w-full'>
                <img className='h-80 rounded-lg' src="/projects/ModernCss/ModernCsslogo.png" alt="" />
                <div className='mx-20 sm:text-start text-center'>
                    <div className='p_name font-semibold text-xl my-4 tracking-wide bg-cyan-300 text-black sm:px-4 px-0 sm:w-40 w-auto'>ModernCss
                    </div>
                    <div className='p_about text-sm'>A place with thousands of unique design idea's for building application's faster</div>
                    <Link href="https://moderncss.vercel.app" className='text-xs text-blue-300 '>Visit The Project &#8594;</Link>
                </div>
            </div>
            <div className='hidden ModernCssAbout mx-16 sm:h-80 h-96 tools CatGO justify-around items-center sm:flex-row flex-col bg-cyan-300 transition-all rounded-lg'>
                <div className='sm:w-1/3 w-auto sm:border-r-2 border-r-0 sm:border-b-0 border-b-2 pb-10 border-slate-200'>
                <div className='ToolsUsed text-xl font-semibold tracking-normal text-black'>Tool's Used 🛠️
                <div className='ToolsUsedContainer'>
                    <ul className='text-base font-normal tracking-normal text-gray-800 mt-2'>
                        <li>NextJs</li>
                        <li>TailWindCss</li>
                        <li>MongoDB Atlas</li>
                    </ul>
                </div>
                </div></div>
                <div className='AboutProject sm:w-1/2 w-auto text-xl font-semibold px-4 text-black'>About The Project ⓘ
                <p className='text-base text-gray-800 mt-2 font-light '>A place where you can get new & different styles for making the designing process of any application faster</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects