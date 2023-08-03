function scrollToContactSection() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Add a click event listener to the "Contact" button
const contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', scrollToContactSection);


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
