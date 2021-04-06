const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.btn-container');
const contents = document.querySelectorAll('.content');
about.addEventListener('click', (e) => {
	const id = e.target.dataset.id;
	// remove all active class from other btn
	btns.forEach((btn) => {
		btn.classList.remove('active');
	});
	contents.forEach((content) => {
		content.classList.remove('active');
	});
	e.target.classList.add('active');
	const active = document.getElementById(id);
	active.classList.add('active');
});