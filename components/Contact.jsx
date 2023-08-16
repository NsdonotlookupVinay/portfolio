"use client"
const Contact = () => {
  async function handleclick(){
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
    const data = {name,email,message}
    if(name != "" && email!="" && message!=""){
      const res = await fetch("/api/test",{
        method:"POST",
        body: JSON.stringify(data)
      })
      document.querySelectorAll(".hideit").forEach((el)=>{
        el.style.display = "none"
      })
      document.querySelector(".contact-back").classList.remove("bg-primary-300")
      document.querySelector(".contact-back").classList.add("bg-primary-500")
      document.querySelector(".submited").classList.remove("hidden")
    }else{
      alert("Please !! Fill Form Carefully")
    }
    
  }
  return (
    <div id="contact" className='contact-back text-white flex flex-col justify-center items-center bg-primary-300 py-20 sm:px-20 px-2 w-full h-screen'>
        <div className="text-white font-semibold text-4xl text-center submited hidden transition-all">Submited</div>
        <h4 className='hideit font-semibold sm:text-2xl text-4xl mb-10'>Contact &#9995;</h4>
        <div className='hideit text-xl font-medium w-3/4 flex justify-between sm:flex-row flex-col'>
            <input type="text" name='name' id='name' placeholder='Name' className='border-0 rounded-lg px-4 py-2 bg-primary-400  outline-none w-full mr-2 sm:mb-0 mb-2' required/>
            <input type="email" name='email' id='email' placeholder='Email' className='border-0 rounded-lg px-4 py-2 bg-primary-400 outline-none w-full' required/>
        </div>
        <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' className='hideit text-xl border-0 rounded-lg outline-none bg-primary-400 my-2 w-3/4 px-4 py-2' required></textarea>
        <button onClick={handleclick} className='hideit text-xl font-semibold bg-primary-100 px-4 py-2 rounded-lg mt-10'>Submit</button>
    </div>
  )
}

export default Contact