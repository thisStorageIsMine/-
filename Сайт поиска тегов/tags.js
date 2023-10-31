const htmlTags = new Map([
    ["a", "Ссылка"],
    ["p", "Параграф"],
    ["div", "Блок-контейнер"],
    ["img", "Изображение"],
    ["h1", "Заголовок 1-го уровня"]
]);

function chechIfTagIsExisting(tag) {
    return htmlTags.has(tag);
}

const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("keydown", (event) => {

    if(event.key === "Enter") {
        console.log("Ентер нажат");
        
        if (chechIfTagIsExisting(input.value)) {
            console.log("тру");
            p.textContent = `${htmlTags.get(input.value)}`;
            return;
        }

        console.log("фалс");
    }

});
