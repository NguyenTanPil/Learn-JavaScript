let toggleBtn = document.querySelector('.sidebar-toggle');
let closeBtn = document.querySelector('.close-btn');
let sidebar = document.querySelector('.sidebar');
toggleBtn.addEventListener('click', (e) => {
	sidebar.classList.toggle('show-sidebar');
});
closeBtn.addEventListener('click', (e) => {
	sidebar.classList.toggle('show-sidebar');
});