const video = document.querySelector('.video-container');
const btn = document.querySelector('.switch-btn');
const preloader = document.querySelector('.preloader');
btn.addEventListener('click', (e) => {
	if(!btn.classList.contains('slide')) {
		btn.classList.add('slide');
		video.pause();
	} else {
		btn.classList.remove('slide');
		video.play();
	}
});
window.addEventListener('load', (e) => {
 	preloader.classList.add('hide-preloader');
});