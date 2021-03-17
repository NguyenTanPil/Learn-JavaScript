const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let slidePosition = 0;
let totalSlide = slides.length;

prevBtn.addEventListener('click', (e) => {
	moveToPrevSlide();
});

nextBtn.addEventListener('click', (e) => {
	moveToNextSlide();
});

function updateSlidePosition() {
	slides.forEach((slide, index) => {
		slide.classList.remove('active');
		slide.classList.add('hidden');
	});
	slides[slidePosition].classList.add('active');
}

function moveToNextSlide () {
	updateSlidePosition();
	if(slidePosition === totalSlide - 1) {
		slidePosition = 0;
	}	else {
		slidePosition++;
	}
}

function moveToPrevSlide () {
	updateSlidePosition();
	if(slidePosition === 0) {
		slidePosition = totalSlide - 1;
	}	else {
		slidePosition--;
	}
}