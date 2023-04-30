function userPortraitApp() {
  let regExpUk = / ^[А-ЯҐЄІЇ]+$/;

  function promptAge() {
    let input = prompt("Введіть ваш рік народження: ");

    while (
      isNaN(parseInt(input)) ||
      parseInt(input) < 1900 ||
      parseInt(input) > 2020 ||
      input.trim() === ""
    ) {
      if (input === null) {
        alert("Шкода, що Ви не захотіли ввісти свій рік.");
        return "?";
      }
      input = prompt("Некоректне значення. Введіть рік народження ще раз: ");
    }

    return 2023 - Number(input);
  }

  function promptCity() {
    let input = prompt("Введіть ваше місто: ");

    while (input !== regExpUk || input.trim() === "") {
      if (input === null) {
        alert("Шкода, що Ви не захотіли ввісти своє місто.");
        return "?";
      } else if (input === ("Київ" || "Вашингтон" || "Лондон")) {
        return `Ви живете у столиці ${input}`;
      }
      input = prompt("Некоректне значення. Введіть місто ще раз: ");
    }

    return `Ви живете у місті ${input}`;
  }

  function promptSport() {
    let input = prompt("Введіть ваш улюблений від спорту: ");

    while (input !== regExpUk || input.trim() === "") {
      if (input === null) {
        alert("Шкода, що Ви не захотіли ввісти свій улюблений від спорту.");
        return "Завдання на сьогодні: вийти на вулицю та почати бійку з випадковим перехожим";
      } else if (input === "футбол") {
        return `Круто! бажаєте стати К'єліні?`;
      } else if (input === "баскетбол") {
        return `Круто! бажаєте стати Джорданом?`;
      } else if (input === "бокс") {
        return `Круто! бажаєете стати Пак'яо?`;
      }
      input = prompt("Некоректне значення. Введіть від спорту ще раз: ");
    }

    return `Бажаю успіхів у ${input}і`;
  }

  let userAge = promptAge();
  let userCity = promptCity();
  let userSport = promptSport();

  return alert(`Вам ${userAge} років та ${userCity}. ${userSport}.`);
}

let userPortrait = userPortraitApp();
