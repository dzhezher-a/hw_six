function promptAge(promptMessage) {
  let input = prompt(promptMessage);

  while (
    isNaN(parseInt(input)) ||
    parseInt(input) < 1900 ||
    parseInt(input) > 2020 ||
    input.trim() === ""
  ) {
    input = prompt("Некоректне значення. Введіть вік ще раз.");
  }

  return 2023 - Number(input);
}

function promptCity(promptMessage) {
  let input = prompt(promptMessage);

  while (input === /[^A-z]/ || input.trim() === "") {
    input = prompt("Некоректне значення. Введіть місто ще раз.");
  }

  return input;
}

function promptSport(promptMessage) {
  let input = prompt(promptMessage);

  while (input === /[^A-z]/ || input.trim() === "") {
    input = prompt("Некоректне значення. Введіть місто ще раз.");
  }

  return input;
}

function userCity() {
  if (promptCity === ("Kyiv" || "Washington" || "London")) {
    return `Ти живеш у столиці ${promptCity}`;
  }
  return `ти живеш у місті ${promptCity}`;
}
