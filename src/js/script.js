window.addEventListener("DOMContentLoaded", () => {
	const scrollDown = document.querySelector(".scrollDown");
	const main = document.querySelector("main");

	try {
		scrollDown.addEventListener("click", (e) => {
			main.scrollIntoView({
				block: "start",
				behavior: "smooth"
			});
		});
	} catch{}
});



