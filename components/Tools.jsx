"use client"
import { useEffect } from "react";
const Tools = () => {
  useEffect(() => {
    const tools_list = ["css.png","android.png","icons8-c-48.png","js.png","nodejs.png","bash.png","html.png","java.png","nextjs.png","python.png"]
    const tools_container = document.querySelector(".tools_container")
    tools_list.forEach((ele)=>{
      var new_element = document.createElement("img")
      new_element.classList.add("tool","hover:scale-110","hover:-translate-y-1","transition-all","tools","hover:bg-primary-300","rounded-lg")
      new_element.src = "/images/"+ele
      tools_container.appendChild(new_element)
    })
  }, []);
  return (
    <div className="text-center mt-32 mb-40 flex justify-center items-center flex-col">
        <h2 className='bounce text-primary-200 font-semibold text-2xl tracking-wider mb-2'>Tool's In Hand</h2>
        <div className=" w-3/4 flex-wrap tools_container flex justify-center items-center bg-primary-300 rounded-lg gap-10 py-10">

        </div>
    </div>
  )
}

export default Tools