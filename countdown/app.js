const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
let futureDate = new Date(`March 23 2021 8:00:00`);
giveaway.textContent = `giveaway ends on ${weekdays[futureDate.getDay()]}, ${futureDate.getDate()} ${months[futureDate.getMonth()]} ${futureDate.getFullYear()}, ${futureDate.getHours()}:${futureDate.getMinutes() < 10 ? '0' + futureDate.getMinutes() : futureDate.getMinutes()}`;
const futureTime = futureDate.getTime();
function format (item) {
	if(item < 10) {
		return `0${item}`;
	}
	return item;
}
function getRemainingTime() {
	const today = new Date().getTime();
	const t = futureTime - today;
	days = Math.floor(t / (1000 * 60 * 60 * 24));
	hours = Math.floor(t / (1000 * 60 * 60 ) % 24);
	mins = Math.floor(t / (1000 * 60) % 60);
	secs = Math.floor(t / (1000) % 60);
	values = [days, hours, mins, secs];
	if(t <= 0) {
		clearInterval(countdown);
		deadline.innerHTML = `<h4 class="expired">Sorry. This giveaway has expired</h4>`;
	} else {
		items.forEach((item, index) => {
			item.innerText = format(values[index]);
		});
	}
}
const countdown = setInterval(getRemainingTime, 1000);
