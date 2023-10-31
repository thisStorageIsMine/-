const daysStorage = document.querySelector(".days");
const now = new Date();
let currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const thisDay = new Date(currentDate.getFullYear(), currentDate.getMonth(),currentDate.getDate());

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

function renderPreviosMonth(date) {
    let firstDay = (date.getDay() === 0) ? 7 : date.getDay();
    const previosMonth = new Date(date.getFullYear(), date.getMonth() , 0);

    if ( firstDay !== 1) {
        let day = previosMonth.getDate();
        while (firstDay > 1) {
            const create = document.createElement("div");
            const p = document.createElement("p");
            create.classList.add("not-this-month");

            p.textContent = day;
            create.append(p);

            // daysStorage.insertBefore(create, daysStorage.querySelector(".first-day"));
            daysStorage.insertBefore(create, daysStorage.firstElementChild);
            firstDay--;
            previosMonth.setDate(day--);
        } 
    }
}

function renderNextMonth(date) {
    let firstDay = (date.getDay() === 0)? 7 : date.getDay();
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);

    if (firstDay!== 7) {
        let day = nextMonth.getDate();
        while (firstDay < 7) {
            const create = document.createElement("div");
            const p = document.createElement("p");

            create.classList.add("not-this-month");
            p.textContent = day;
            create.append(p);

                        
            daysStorage.appendChild(create);
            firstDay++;
            nextMonth.getDate(day++);
        }
    }

}

function render() {
    daysStorage.innerHTML = "";
    const localTime = currentDate;
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const firstMonthDay = new Date(localTime.getFullYear(), localTime.getMonth(), 1);
    const lastMonthDay = new Date(localTime.getFullYear(), localTime.getMonth()+1, 0);

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
            create.setAttribute("id" , "first-day");
        }

        //Находим выходные
        if(localTimeConvertSundayToSeven === 7 || localTimeConvertSundayToSeven === 6 ) {
            create.classList.add("weekend")
        }

        // Выделяем сегодняшний день
        if(localTime.getTime() === thisDay.getTime()) {
            create.classList.add("today");
        }
        daysStorage.appendChild(create);
        
    }

    //Отрисовываем предыдущий месяц и следующий месяц
    renderPreviosMonth(firstMonthDay);
    renderNextMonth(lastMonthDay);
}

render();