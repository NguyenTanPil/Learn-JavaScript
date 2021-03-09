let btns = document.querySelectorAll('.question-btn');
btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		let question = e.currentTarget.parentElement.parentElement;
		question.classList.toggle('show-text');
	});
});

// 2
// let questions = document.querySelectorAll('.question');
// questions.forEach((question) => {
// 	let btn = question.querySelector('.question-btn');
// 	btn.addEventListener('click', (e) => {
// 		question.classList.toggle('show-text');
// 	});
// });