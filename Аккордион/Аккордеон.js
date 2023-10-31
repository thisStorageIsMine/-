const links = document.querySelectorAll(".link");
const texts = document.querySelectorAll(".tab");

links.forEach(function(link, index) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        links.forEach(function(link){ 
            if(link.classList.contains("active")){
                link.classList.remove("active"); 
            }
        });
        texts.forEach(function(text){ 
            if(text.classList.contains("active")){
                text.classList.remove("active"); 
            }
        });
        texts[index].classList.add("active");
        link.classList.add("active");
    });
});