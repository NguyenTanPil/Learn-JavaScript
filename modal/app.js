let btnOpen = document.querySelector('.modal-btn');
let btnClose = document.querySelector('.close-btn');
let modal = document.querySelector('.modal-overlay');
btnOpen.addEventListener('click', (e) => {
	modal.classList.add('open-modal');
});
btnClose.addEventListener('click', (e) => {
	modal.classList.remove('open-modal');
});