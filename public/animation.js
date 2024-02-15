function scrollToContactSection() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Add a click event listener to the "Contact" button
const contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', scrollToContactSection);

function scrollToProjectSection() {
  const ProjectSection = document.getElementById('projects');
  ProjectSection.scrollIntoView({ behavior: 'smooth' });
}

// Add a click event listener to the "Contact" button
const ProjectButton = document.querySelector('.project-button');
ProjectButton.addEventListener('click', scrollToProjectSection);


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('animate')
      }else{
        entry.target.classList.remove('animate')
      }
    })
  })

const bounce_observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('bounced')
    }else{
      entry.target.classList.remove('bounced')
    }
  })
})
const tools_observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if (entry.isIntersecting){
      entry.target.classList.add('seen')
    }else{
      entry.target.classList.remove('seen')
    }
  })
})
const observer_for_nav = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.remove('nav_animate1')
      entry.target.classList.add('nav_animate2')
    }else{
      entry.target.classList.remove('nav_animate2')
      entry.target.classList.add('nav_animate1')
    }
  })
})
function starta(){
  const hiddenElements = document.querySelectorAll(".test");
  hiddenElements.forEach((el)=>{observer.observe(el)
  })
  const bounce_objects = document.querySelectorAll(".bounce");
  bounce_objects.forEach((el)=>{bounce_observer.observe(el)
  })
  const tools_objects = document.querySelectorAll(".tools");
  tools_objects.forEach((el)=>{tools_observer.observe(el)
  })
  const nav = document.querySelector(".navbar");
  observer_for_nav.observe(nav);
}
document.onload = starta()

// "---------------------------------------------------------------------------------------"

let ModernCss = document.querySelector('.ModernCss')
let ModernCssAbout = document.querySelector('.ModernCssAbout')
let OnFront = 1
ModernCss.addEventListener("click",function(){
  if(OnFront==1){
    // ModernCss.style.transform = "rotateY(180deg)"
    ModernCss.classList.remove("flex")
    ModernCss.classList.add("hidden")
    ModernCssAbout.classList.remove("hidden")
    ModernCssAbout.classList.add("flex")
    OnFront = 0
  }
  
})
ModernCssAbout.addEventListener("click",function(){
  if(OnFront==0){
    // ModernCss.style.transform = "rotateY(180deg)"
    ModernCssAbout.classList.remove("flex")
    ModernCssAbout.classList.add("hidden")
    ModernCss.classList.remove("hidden")
    ModernCss.classList.add("flex")
    OnFront = 1
  }
  
})

