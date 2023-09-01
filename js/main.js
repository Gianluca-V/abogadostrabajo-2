document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav__li a");
    navLinks.forEach(link => {
      link.addEventListener("click",()=>{
          let id = link.getAttribute('id');
          document.querySelector("#"+id.slice(2,id.length)).scrollIntoView();
      })
  })

  window.onresize = ()=>{
    document.querySelector(".home").style.paddingTop = (20 + document.querySelector(".header").offsetHeight) + 'px';
  };
});