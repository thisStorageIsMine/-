const eventsArray = [
    {
      date: new Date(2023, 9, 31),
      eventName: 'Презентация нового продукта',
      description: 'Мероприятие, на котором будет представлен новый продукт компании.'
    },
    {
      date: new Date(2023, 10, 15), 
      eventName: 'Конференция по технологиям',
      description: 'Мероприятие, посвященное обсуждению последних технологических тенденций и инноваций.'
    },
    {
      date: new Date(2023, 11, 5), 
      eventName: 'Встреча с инвесторами',
      description: 'Представление нового бизнес-плана перед инвесторами и обсуждение возможных инвестиций.'
    }
];



const parent  = document.getElementById("parent");
const input = document.querySelector("input");
const table = document.getElementById("table");

input.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        table.innerHTML = "";

        for (let i = 0; i < eventsArray.length; i++) {
            if (eventsArray[i].date.getFullYear() === +input.value) {
                const tr = document.createElement("tr");
                const tdYear = document.createElement("td");
                const tdEventName = document.createElement("td");
                const tdDescription = document.createElement("td");


                tdYear.textContent = eventsArray[i].date.getFullYear();
                tdEventName.textContent = eventsArray[i].eventName;
                tdDescription.textContent = eventsArray[i].description;

                tr.append(tdYear, tdEventName, tdDescription);
                table.append(tr);
            }
        }
    }
});