document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".working-areas__div");
  
    accordionItems.forEach((item) => {
      const descriptionElement = item.querySelector(".working-areas__description");
  
      item.querySelector(".working-areas__toggle").addEventListener("click", () => {
        // Toggle the active class on the description element
        item.classList.toggle("active");
        descriptionElement.classList.toggle("active");
        item.querySelector("#hammer").classList.remove("hammer");
        setTimeout(()=>{item.querySelector("#hammer").classList.add("hammer");},1);
        

  
        // Collapse other open items
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.querySelector(".working-areas__description").classList.remove("active");
            otherItem.classList.remove("active");
          }
        });
      });
    });

    const navLinks = document.querySelectorAll(".nav__li a");
    navLinks.forEach(link => {
      link.addEventListener("click",()=>{
          let id = link.getAttribute('id');
          document.querySelector("#"+id.slice(2,id.length)).scrollIntoView();
      })
  })

});