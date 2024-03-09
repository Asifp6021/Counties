export function sendDataToDetailPage(countriesEl) {
	countriesEl.addEventListener('click', function (e) {
		const countryNameEl = e.target
			.closest('.country')
			.querySelector('.country__name');

		if (countryNameEl) {
			const countryName = countryNameEl.textContent;

			fetch('./data.json')
				.then((res) => res.json())
				.then((data) => {
					const dataIs = data.find((item) => item.name === countryName);
					console.log(dataIs);

					const {
						name,
						region,
						capital,
						languages,
						subregion,
						nativeName,
						flag,
						topLevelDomain,
						currencies,
						borders,
						population,
					} = dataIs;

					const languageJson = JSON.stringify(languages);
					const currenciesJson = JSON.stringify(currencies);
					const encodeLanguages = encodeURIComponent(languageJson);
					const encodeCurrencies = encodeURIComponent(currenciesJson);

					const dataToSendForDetailPage = {
						name,
						region,
						capital,
						encodeLanguages,
						subregion,
						nativeName,
						flag,
						topLevelDomain,
						encodeCurrencies,
						borders,
						population,
					};

					const queryString = new URLSearchParams(dataToSendForDetailPage);

					const url = `../HTML/details.html?${queryString}`;

					window.location.href = url;
				});
		}
	});
}
