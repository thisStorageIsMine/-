const horoscope = {
    today: "Сегодня ваш день будет полон энергии и оптимизма. Ожидайте хороших новостей.",
    tomorrow: "Завтра вы можете столкнуться с некоторыми трудностями, но не унывайте. Все будет хорошо.",
    dayAfterTomorrow: "Послезавтра предостерегает вас быть более внимательными к окружающим. Избегайте конфликтов."
};

const dots = document.querySelectorAll(".dot");
const today = document.querySelector("#today");
const tomorrow = document.querySelector("#tomorrow");
const dayAfterTomorrow = document.querySelector("#day-after-tommorow");
const p = document.querySelector("p");

dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        p.textContent = horoscope[dot.value];
    });
});

p.textContent = horoscope.today;