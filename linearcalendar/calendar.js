const daysStorage = document.querySelector(".days");
let currentDate = new Date();

function getDaysInMonth() {
    return new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0).getDate();
}

function plusMonth(number) {
    currentDate = new Date(currentDate.getFullYear(),currentDate.getMonth() + number, 1 );
    render();
}



function getMonthName(monthNumber) {
    var months = new Map();
    months.set(0, 'Январь');
    months.set(1, 'Февраль');
    months.set(2, 'Март');
    months.set(3, 'Апрель');
    months.set(4, 'Май');
    months.set(5, 'Июнь');
    months.set(6, 'Июль');
    months.set(7, 'Август');
    months.set(8, 'Сентябрь');
    months.set(9, 'Октябрь');
    months.set(10, 'Ноябрь');
    months.set(11, 'Декабрь');
  
    return months.get(monthNumber);
}

// function getDayName(dayNumber) {
//     var daysOfWeek = new Map();
//     daysOfWeek.set(1, 'Понедельник');
//     daysOfWeek.set(2, 'Вторник');
//     daysOfWeek.set(3, 'Среда');
//     daysOfWeek.set(4, 'Четверг');
//     daysOfWeek.set(5, 'Пятница');
//     daysOfWeek.set(6, 'Суббота');
//     daysOfWeek.set(0, 'Воскресенье');
  
//     return daysOfWeek.get(dayNumber);
// }

function render() {
    daysStorage.innerHTML = "";
    const localTime = currentDate;
    const month = document.getElementById("month");
    const year = document.getElementById("year");

    month.textContent = getMonthName(localTime.getMonth());
    year.textContent = localTime.getFullYear();


    // Рисуем каледарь
    for (let day = 1; day <= getDaysInMonth(); day++) {
        localTime.setDate(day);
        const create = document.createElement("div");
        const p = document.createElement("p");

        p.textContent = day;
        create.append(p);

        let localTimeConvertSundayToSeven= (localTime.getDay() === 0) ? 7 : localTime.getDay();

        // Ставим первый день месяца в нужное место 
        if(day === 1 ) {
            create.style.gridColumn = `${localTimeConvertSundayToSeven}/${localTimeConvertSundayToSeven+1}`;
        }

        //Находим выходные
        if(localTimeConvertSundayToSeven === 7 || localTimeConvertSundayToSeven === 6 ) {
            create.classList.add("weekend")
        }

        
        daysStorage.appendChild(create);
    }
}

render();