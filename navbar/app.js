const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
console.log(navToggle, links);
navToggle.addEventListener('click', (e) => {
	links.classList.toggle('show-links');
});