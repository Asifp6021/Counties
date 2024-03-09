const backBtn = document.querySelector('button');
const detailContainer = document.querySelector('.details__content');

backBtn.addEventListener('click', function () {
	window.location.href = './index.html';
});

// -------------------------------------------------------------------

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const CountryName = urlParams.get('name');
const nativeName = urlParams.get('nativeName');
const region = urlParams.get('region');
const capital = urlParams.get('capital');
const flag = urlParams.get('flag');
const subRegion = urlParams.get('subregion');
const topLevelDomain = urlParams.get('topLevelDomain');
const population = urlParams.get('population');
const currencies = urlParams.getAll('encodeCurrencies');
const languages = urlParams.getAll('encodeLanguages');
const borders = urlParams.get('borders');

const languagesAre = JSON.parse(decodeURIComponent(languages));
const currenciesIs = JSON.parse(decodeURIComponent(currencies));

const getLanguages = languagesAre
	.map(function (lang) {
		return lang.name;
	})
	.join(', ');

const getCurrenciesName = currenciesIs
	.map(function (curr) {
		return curr.name;
	})
	.join(', ');

let borderList;

if (borders !== 'undefined') {
	const bordersCountries = borders.split(',');
	const bordersCountriesAre = bordersCountries.map(
		(border) => `<li>${border}</li>`
	);
	borderList = bordersCountriesAre.join('');
} else {
	borderList = `<li>There are no borders</li>`;
}

const countryDetails = `

<img
src="${flag}"
alt="country__flag"
height="500px"
width="500px" />

<div class="detail__country grid"><div>
	<h2 class="detail__name">${CountryName}</h2>

	<div class="country__details grid">
		<p class="native__name">Native Name: <span>${nativeName}</span></p>
		<p class="country__population">
			Population: <span>${population}</span>
		</p>
		<p class="country__region">Region: <span>${region}</span></p>
		<p class="country__region">
			Sub Region: <span>${subRegion}</span></p>
		<p class="country__capital">Capital: <span>${capital}</span></p>
	</div>
</div>

<div class="more__detail grid">
	<p class="country__region">Top Level Domain: <span>${topLevelDomain}</span></p>
	<p class="country__region">Currencies: <span>${getCurrenciesName}</span></p>
	<p class="country__capital">
		Languages:
		<span>${getLanguages}</span>
	</p>
</div>

<div class="border__countries grid">
	<p class="border__heading">Border Countries</p>
	<ul class="flex list__border">

	${borderList}

	</ul>
</div>
</div>

	`;

detailContainer.innerHTML = countryDetails;
