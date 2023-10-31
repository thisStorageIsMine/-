let arr  = [ 'Bulgaria', "Croatia", "Czech Republic", "Denmark", "Estonia",];
const input = document.getElementById("elem");
const ul = document.querySelector("#list");

input.addEventListener("input", () => {

    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i].toLowerCase().includes(input.value.toLowerCase())) {
    //         const li = document.createElement("li");
    //         li.textContent = arr[i];

    //         li.addEventListener("click", () => {
    //             input.value = li.textContent;
    //         });
    //         ul.appendChild(li);
    //     } else {
    //         ul.innerHTML = "";
    //     }
        
    // }
    // if(input.value === "") {
    //     ul.innerHTML = "";
    // }
    ul.innerHTML = "";

    const newArr = arr.filter((item) => {
        if(item.startsWith(input.value)) {
            return true;
        }
    });

    newArr.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;

        li.addEventListener("click", () => {
            input.value = item;
        });

        ul.appendChild(li);
    });
    if(input.value === "") {
            ul.innerHTML = "";
    }
});