// хэш
let countries = {} 

function generateId(country) {
	return `country_id_${country}`
}

const enterCountryBtn = document.querySelector('#enterCountry')
const removeCountryBtn = document.querySelector('#removeCountry')
const showCountryInConsoleBtn = document.querySelector('#showCountryInConsole')
const showAllCountriesBtn = document.querySelector('#showAllCountries')

function createCountryTemplate(country, capital) {
	let countryDiv = document.createElement('div')
	countryDiv.classList.add('country')
	countryDiv.setAttribute('id', generateId(country))

	let countryP = document.createElement('p')
	countryP.innerHTML = `Страна: ${country}`

	let capitalP = document.createElement('p')
	capitalP.innerHTML = `Столица: ${capital}`

	countryDiv.appendChild(countryP)
	countryDiv.appendChild(capitalP)

	return countryDiv
}

function enterCountry() {
    let country = prompt('Введите название стрнаны')
	let capital = prompt('Введите название столицы')

	if (country && country.length && capital && capital.length) {
		countries[country] = capital

		const countriesDiv = document.querySelector('.countries')

		const countryDiv = createCountryTemplate(country, capital)

		countriesDiv.appendChild(countryDiv)
	}
}

function removeCountry() {
    let country = prompt('Введите название страны, которую нужно удалить')

    if (countries[country]) {
        let findId = generateId(country)
        let targetCountryBlock = document.querySelector(`#${findId}`)

        targetCountryBlock.remove()
        delete countries[country]
        console.log('Информация о стране удалена')
    }
    else{
        console.log('Cтрана не найдена')
    }      
}

function showCountryInConsole() {
    let country = prompt('Введите название страны')

    if( countries[country]) {
        console.log(`Страна: ${country} - Столица: ${countries[country]}`)
    }
    else{
        console.log('Информации о этой стране нет') 
    }
}

function showAllCountries() {

    for (country in countries) {
		console.log(`Страна: ${country} - Столица: ${countries[country]}`)
	}
}



enterCountryBtn.addEventListener('click', enterCountry)
removeCountryBtn.addEventListener('click', removeCountry)
showCountryInConsoleBtn.addEventListener('click',showCountryInConsole)
showAllCountriesBtn.addEventListener('click', showAllCountries)