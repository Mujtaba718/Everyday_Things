const mainAsides = document.querySelectorAll("section.main aside");

window.addEventListener("scroll", function(e) {
	mainAsides.forEach(aside => {
		if(window.scrollY > 0) {
			aside.classList.add("animate")
		} 
	})
})