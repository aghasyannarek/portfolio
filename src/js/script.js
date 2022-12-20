window.addEventListener("DOMContentLoaded", () => {
	const scrollDown = document.querySelector(".scrollDown");
	const main = document.querySelector("main");
	const portfolio = document.querySelector(".portfolio");
	const scrollUp = document.querySelector(".scrollup");

	try {
		scrollDown.addEventListener("click", (e) => {
			main.scrollIntoView({
				block: "start",
				behavior: "smooth"
			});
		});
	} catch{}
	try {
		portfolio.addEventListener("click", (e) => {
			main.scrollIntoView({
				block: "start",
				behavior: "smooth"
			});
		});
	} catch{}
});






