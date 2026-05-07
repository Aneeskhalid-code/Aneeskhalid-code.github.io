
const herobutton = document.getElementById("herobutton");
const portfoliobtn = document.getElementById("portfolio");

const btns = document.querySelectorAll(".btn");
const contact = document.querySelector(".contact");

btns.forEach(function(btn){
    btn.addEventListener("click", function() {
  contact.scrollIntoView({
    behavior:"smooth"
   });
 });
});

herobutton.addEventListener("click" , function(){
    portfoliobtn.scrollIntoView({
        behavior:"smooth"
    });
});


