const links = document.querySelectorAll("a");
const tabs = document.querySelectorAll(".tab");

links.forEach(function(link, index) {

    link.addEventListener("click", function(event) {
        event.preventDefault();

        links.forEach(function(link){ 
            if(link.classList.contains("active")){
                link.classList.remove("active"); 
            }
        });

        tabs.forEach(function(tab){ 
            if(tab.classList.contains("active")){
                tab.classList.remove("active"); 
            }
        });
        tabs[index].classList.add("active");
        link.classList.add("active");
    })
    
});