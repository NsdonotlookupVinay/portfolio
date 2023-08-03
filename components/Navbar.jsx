"use client"
import { useEffect } from "react";
const Nav = () => {
  useEffect(() => {
    async function Check_active(){
        var options = await document.querySelectorAll(".options")
        options.forEach((el)=>{
          el.addEventListener("click" , function(){
            document.querySelector(".active").classList.remove('active')
            el.classList.add('active')
          })
        })
    }
    document.onload = Check_active()
  }, []);
  return (
    <div className="w-screen h-auto flex items-center justify-center mt-5 text-base">
      <div className=" test cat_container flex bg-custom-black font-medium py-2 text-white rounded-lg">
        <div className="options active bg-primary-300 px-3 py-1 rounded-lg sm:mx-2 mx-1 hover:bg-primary-100 hover:text-primary-200 transition-all">Home</div>
        <div className="options bg-primary-300 px-3 py-1 rounded-lg sm:mx-2 mx-1 hover:bg-primary-100 hover:text-primary-200 transition-all contact-button" href="#contact">Contact</div>
        <div className="options bg-primary-300 px-3 py-1 rounded-lg sm:mx-2 mx-1 hover:bg-primary-100 hover:text-primary-200 transition-all">CV</div>
        <div className="options bg-primary-300 px-3 py-1 rounded-lg sm:mx-2 mx-1 hover:bg-primary-100 hover:text-primary-200 transition-all">About Me</div>
    </div>
    </div>
    
  )
}

export default Nav