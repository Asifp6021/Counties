const themeChangeBtn = document.querySelector('.theme__changer--btn');

let htmlElement = document.documentElement;

themeChangeBtn.addEventListener('click', function () {
	if (htmlElement.getAttribute('data-theme') === 'light') {
		htmlElement.setAttribute('data-theme', 'dark');
	} else {
		htmlElement.setAttribute('data-theme', 'light');
	}
});
