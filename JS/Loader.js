export function showLoadingState(countriesEl) {
	const Loader = document.createElement('p');
	Loader.innerText = 'Loading.....';
	Loader.classList.add('loaderState');
	countriesEl.appendChild(Loader);

	return Loader;
}

export function hideLoading(loadingEl) {
	if (loadingEl instanceof HTMLElement) {
		loadingEl.parentNode.removeChild(loadingEl);
	}
}
