// хэш
let countries = {};
function generateId(country1) {
    return `country_id_${country1}`;
}
const enterCountryBtn = document.querySelector("#enterCountry");
const removeCountryBtn = document.querySelector("#removeCountry");
const showCountryInConsoleBtn = document.querySelector("#showCountryInConsole");
const showAllCountriesBtn = document.querySelector("#showAllCountries");
function createCountryTemplate(country1, capital) {
    let countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.setAttribute("id", generateId(country1));
    let countryP = document.createElement("p");
    countryP.innerHTML = `Страна: ${country1}`;
    let capitalP = document.createElement("p");
    capitalP.innerHTML = `Столица: ${capital}`;
    countryDiv.appendChild(countryP);
    countryDiv.appendChild(capitalP);
    return countryDiv;
}
function enterCountry() {
    let country1 = prompt("Введите название стрнаны");
    let capital = prompt("Введите название столицы");
    if (country1 && country1.length && capital && capital.length) {
        countries[country1] = capital;
        const countriesDiv = document.querySelector(".countries");
        const countryDiv = createCountryTemplate(country1, capital);
        countriesDiv.appendChild(countryDiv);
    }
}
function removeCountry() {
    let country1 = prompt("Введите название страны, которую нужно удалить");
    if (countries[country1]) {
        let findId = generateId(country1);
        let targetCountryBlock = document.querySelector(`#${findId}`);
        targetCountryBlock.remove();
        delete countries[country1];
        console.log("Информация о стране удалена");
    } else console.log("Cтрана не найдена");
}
function showCountryInConsole() {
    let country1 = prompt("Введите название страны");
    if (countries[country1]) console.log(`Страна: ${country1} - Столица: ${countries[country1]}`);
    else console.log("Информации о этой стране нет");
}
function showAllCountries() {
    for(country in countries)console.log(`Страна: ${country} - Столица: ${countries[country]}`);
}
enterCountryBtn.addEventListener("click", enterCountry);
removeCountryBtn.addEventListener("click", removeCountry);
showCountryInConsoleBtn.addEventListener("click", showCountryInConsole);
showAllCountriesBtn.addEventListener("click", showAllCountries);

//# sourceMappingURL=index.44983732.js.map
