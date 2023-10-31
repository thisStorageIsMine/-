const btn = document.querySelector(".spoiler-btn");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
    content.style.display = "block";
    btn.style.display = "none";
});

content.addEventListener("click", () => {

    content.style.display = "none";
    btn.style.display = "block";

});