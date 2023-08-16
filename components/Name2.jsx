"use client"
import Script from 'next/script';
import React from 'react';
import { useState,useEffect } from 'react';
const Name2 = () => {
  // Programmer   .   Developer   .   Web Designer
  const [Acc,Bcc] = useState("")
  useEffect(()=>{
    const FirstText = document.getElementById("Firsttext")
    function StartTime(){
      let FinalText = "Programmer   .   Developer   .   Web Designer"
      let CurrentText = ""
      for(let i =0;i<FinalText.length;i++){
        setTimeout(function(){
          CurrentText = CurrentText+FinalText[i]
          Bcc(CurrentText+"|")
        },2000+i*100)
      }
    }
    StartTime()
  },[])
  return (
    <div>
      <div id='Firsttext' className=' test navbar w-screen h-auto flex items-center justify-center mt-5'><div className='text-white  sm:text-lg text-sm bg-custom-black font-semibold tracking-wider px-6 py-2 rounded-lg' >{Acc}</div></div>
    </div>
    
  )
}

export default Name2