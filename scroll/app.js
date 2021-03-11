// set date in footer
const year = document.querySelector('.date');
year.textContent = (new Date()).getFullYear();
// close links
const btnShowLinks = document.querySelector('.nav-toggle'); // btn when creen smaller
const linksContainer = document.querySelector('.links-container'); // links of part menu
const links = document.querySelector('.links'); // inside linksContainer
btnShowLinks.addEventListener('click', (e) => {
	const containerHight = linksContainer.getBoundingClientRect().height; // get height of linksContainer
	const linkHeight = links.getBoundingClientRect().height; // get height of links inside linksContainer
	if(containerHight == 0) { // links hidden then set height for linksContainer
		linksContainer.style.height = `${linkHeight}px`;
	} else {
		linksContainer.style.height = 0;
	}
});
// fixed navbar
const navbar = document.querySelector('#nav'); // parts nav of header
const topLink = document.querySelector('.top-link'); // to top 
let lastScroll = 0;
window.addEventListener('scroll', () => {
	let scrollHeight = window.pageYOffset;
	let navHeight = navbar.getBoundingClientRect().height; // get height of header
	// up and down croll
	// if(scrollHeight > lastScroll) {
	// 	navbar.classList.add('fixed-nav');
	// } else {
	// 	navbar.classList.remove('fixed-nav');
	// }
	// lastScroll = scrollHeight < 0 ? 0 : scrollHeight; 
	if(scrollHeight > navHeight) {
		navbar.classList.add('fixed-nav');
	} else {
		navbar.classList.remove('fixed-nav');
	}
	if(scrollHeight > 300) {
		topLink.classList.add('show-link');
	} else {
		topLink.classList.remove('show-link');
	}
});
// scroll links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault(); // prevent default of a tag
		// calculate the heights
		const navHeight = navbar.getBoundingClientRect().height; // get height of navbar
		const containerHight = linksContainer.getBoundingClientRect().height; // get height of menu dropdown
		const fiexdNav = navbar.classList.contains('fixed-nav'); // checking fixed or not fixed
		const id = e.target.getAttribute('href') != null ? e.target.getAttribute('href').slice(1) : e.target.parentElement.getAttribute('href').slice(1); // get id name
		const element = document.getElementById(id);
		let position = element.offsetTop - navHeight; // top -> position of element
		if(!fiexdNav) {
			position -= navHeight;
		}
		window.scrollTo({ // moving top going position
			left: 0, 
			top: position,
		});
	});
});
