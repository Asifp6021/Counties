export function searchCountry(countryArray, countries, searchQuery) {
	const filterCountry = countryArray.filter(function (con) {
		return con.name.toLowerCase().includes(searchQuery.toLowerCase());
	});

	filteredElements(filterCountry, countries);
}

export function filteredElements(filteredArray) {
	const filteredCountry = filteredArray
		.map(function (filtcon) {
			return `

    <div class="country">
    <img src="${filtcon.flags.png} "alt="Country-flag" width="320px" height="320px">

    <h2 class="country__name">${filtcon.name}</h2>

    <p class="country__population">Population: <Span>${filtcon.population}</Span></p>

    <p class="country__region">Region: <span>${filtcon.region}</span></p>
    <p class="country__capital">Capital: <span>${filtcon.capital}</span></p>
	</div>

    `;
		})
		.join('');

	countries.innerHTML =
		filteredArray.length === 0
			? '<p class="noCountry">No country found !</p>'
			: filteredCountry;
}
