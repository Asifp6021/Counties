import { searchCountry } from './searchCountry.js';
import { selectCountryByRegion } from './selectCountryByRegion.js';
import { sendDataToDetailPage } from './detailPageURL.js';
import { showLoadingState } from './Loader.js';
import { hideLoading } from './Loader.js';

const countriesEl = document.getElementById('countries');
const searchInput = document.querySelector('.searchInput');
const selectInput = document.querySelector('.query__filter');

let countriesArray = [];

const loadingEl = showLoadingState(countriesEl);

function fetchCountries() {
	fetch('./data.json')
		.then((res) => {
			if (!res.ok) {
				throw new Error('something went wrong while fetching data !');
			}

			return res.json();
		})
		.then((data) => {
			hideLoading(loadingEl);
			countriesArray.push(...data);
			createCountry();
		})
		.catch((error) => {
			hideLoading(loadingEl);

			countriesEl.innerHTML = `<p class="error">${error.message}</p>`;
		});
}

// ------------------------------------------------------------------

function createCountry() {
	let countryIs = countriesArray
		.map(function (country) {
			return `

        <div class="country">
        <img src="${country.flags.png} "alt="Country-flag" width="320px" height="320px">

        <h2 class="country__name">${country.name}</h2>

        <p class="country__population">Population: <Span>${country.population}</Span></p>

        <p class="country__region">Region: <span>${country.region}</span></p>
        <p class="country__capital">Capital: <span>${country.capital}</span></p>

    </div>

        `;
		})
		.join('');
	countriesEl.innerHTML = countryIs;
	countriesEl.classList.add('countriesStyle');
}

// --------------------------------------------------------------------------

searchInput.addEventListener('input', function (e) {
	const searchQuery = e.target.value;

	if (!searchQuery) return;

	selectInput.value = 'Filter by region';

	searchCountry(countriesArray, countriesEl, searchQuery);
});

// -------------------------------------------------------------------------------

selectInput.addEventListener('change', function (e) {
	const selectedQuery = e.target.value;
	searchInput.value = '';

	if (
		selectedQuery.toLowerCase() === 'all' ||
		selectedQuery.toLowerCase() === 'filter by region'
	) {
		return createCountry();
	}

	selectCountryByRegion(countriesArray, countriesEl, selectedQuery);
});

sendDataToDetailPage(countriesEl);

fetchCountries();
