"use client"

import { useEffect } from "react"

export default function NotFound(){
  useEffect(()=>{
    document.querySelector(".NotFoundButton").addEventListener("click",function(){
      document.querySelector(".NotFound").style.display = "none"
    })
  },[])
  return (
    <div className="overflow-hidden NotFound absolute top-20 w-96 z-50 ml-auto mr-auto left-0 right-0 bg-cyan-300 rounded-lg text-center">
    {/* <div className="absolute h-20 w-20 rounded-full bg-yellow-400 -top-10 -right-10 blur-3xl animate-pulse"></div>
    <div className="absolute h-20 w-20 rounded-full bg-orange-300 -top-10 -right-10"></div> */}
    <img src="/images/sun.png" className="absolute top-0 right-0 h-10"></img>
    <img src="/images/Luffy.png" className="h-60 absolute bottom-0 -left-10 drop-shadow-lg"></img>
    <div className="text-white text-4xl text-center py-20 font-semibold">Not Found</div>
    <button className="NotFoundButton bg-cyan-400 text-black mb-20 px-4 py-1 rounded-lg font-semibold">Back to Main Page</button>
    </div>
  )
}