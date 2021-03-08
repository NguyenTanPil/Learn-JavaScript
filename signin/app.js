const usernameEl = document.querySelector("#username");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirm-password");

const form = document.querySelector("#signup");
const sb = document.querySelector("#submit");
form.addEventListener("submit", function (e) {
	e.preventDefault();
});
const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
	length < min || length > max ? false : true;
const isEmail = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};
const isPasswordSecure = (password) => {
	const re = new RegExp(
		"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
	);
	return re.test(password);
};
const showError = (input, message) => {
	const formField = input.parentElement;
	formField.classList.remove("success");
	formField.classList.add("error");
	const error = formField.querySelector("small");
	error.textContent = message;
};
const showSuccess = (input, message) => {
	const formField = input.parentElement;
	formField.classList.add("success");
	formField.classList.remove("error");
	const error = formField.querySelector("small");
	error.textContent = "";
};
const checkUsername = () => {
	let valid = false;
	const min = 3,
		max = 25;
	const userName = usernameEl.value.trim();
	if (!isRequired(userName)) {
		showError(usernameEl, "Username cannot be blank.");
	} else if (!isBetween(userName.length, min, max)) {
		showError(
			usernameEl,
			`Username must be between ${min} and ${max} characters.`
		);
	} else {
		showSuccess(usernameEl);
		valid = true;
	}
	return valid;
};
const checkEmail = () => {
	let valid = false;
	const email = emailEl.value.trim();
	if (!isRequired(email)) {
		showError(emailEl, "Email cannot be blank.");
	} else if (!isEmail(email)) {
		showError(emailEl, "Email is not valid.");
	} else {
		showSuccess(emailEl);
		valid = true;
	}
	return valid;
};
const checkPassword = () => {
	let valid = false;
	const password = passwordEl.value.trim();
	if (!isRequired(password)) {
		showError(passwordEl, "Password cannot be blank.");
	} else if (!isPasswordSecure(email)) {
		showError(
			passwordEl,
			"Password has eight characters or longer. And it must contain 1 lowercase character, 1 uppercase character, 1 number, and at least one special character in this set (!@#$%^&*)."
		);
	} else {
		showSuccess(passwordEl);
		valid = true;
	}
	return valid;
};
const checkConfirmPassword = () => {
	let valid = false;
	const password = passwordEl.value.trim();
	const confirmPassword = confirmPasswordEl.value.trim();
	if (!isRequired(confirmPassword)) {
		showError(confirmPasswordEl, "Please enter the password again");
	} else if (password !== confirmPassword) {
		showError(confirmPasswordEl, "Confirm password does not match");
	} else {
		showSuccess(confirmPasswordEl);
		valid = true;
	}
	return valid;
};
sb.addEventListener("click", function (e) {
	e.preventDefault();
	let isUsernameValid = checkUsername(),
		isEmailValid = checkEmail(),
		isPasswordValid = checkPassword(),
		isConfirmPasswordValid = checkConfirmPassword();
	let isFormValid =
		isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
	if (isFormValid) {
	}
});
const debounce = (fn, delay = 500) => {
	let timeoutId;
	return (...args) => {
		// cancel the previous timer
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		// setup a new timer
		timeoutId = setTimeout(() => {
			fn.apply(null, args);
		}, delay);
	};
};
form.addEventListener(
	"input",
	debounce(function (e) {
		switch (e.target.id) {
			case "username":
				checkUsername();
				break;
			case "email":
				checkEmail();
				break;
			case "password":
				checkPassword();
				break;
			case "confirm-password":
				checkConfirmPassword();
				break;
		}
	})
);
let openBtn = document.querySelector('.signup button');
let closeBtn = document.querySelector('.close-btn');
let container = document.querySelector('.container');
openBtn.addEventListener('click', (e) => {
	container.classList.add('show');
	closeBtn.classList.add('click-close-btn');
	openBtn.classList.add('click-open-btn');
});
closeBtn.addEventListener('click', (e) => {
	container.classList.remove('show');
	closeBtn.classList.remove('click-close-btn');
	openBtn.classList.remove('click-open-btn');
});
