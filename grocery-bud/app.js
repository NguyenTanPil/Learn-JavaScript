// select item
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submit = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clear = document.querySelector('.clear-btn');

// edit option
let editEl;
let editFlag = false;
let editID = '';

// submit form
form.addEventListener('submit', addItem);
// clear item
clear.addEventListener('click', clearItem);
function addItem (e) {
	e.preventDefault();
	// value of input text
	const val = grocery.value;
	const id = new Date().getTime().toString();
	if(val && !editFlag) {
		// make new article tag
		const elem = document.createElement('article');
		// add class
		elem.classList.add('grocery-item');
		// add id
		const attr = document.createAttribute('data-id');
		attr.value = id;
		elem.setAttributeNode(attr);
		elem.innerHTML = `
			<p class="title">${val}</p>
			<div class="btn-container">
				<button class="edit-btn" type="button">
					<i class="fa fa-pencil" aria-hidden="true"></i>
				</button>
				<button class="delete-btn" type="button">
					<i class="fa fa-trash" aria-hidden="true"></i>
				</button>
			</div>
		`;
		// process item
		const deleteBtn = elem.querySelector('.delete-btn');
		const editBtn = elem.querySelector('.edit-btn');
		deleteBtn.addEventListener('click', deleteItem);
		editBtn.addEventListener('click', editItem);
		// add elem inside list
		list.appendChild(elem);
		// display alert
		displayAlert('add item', 'success');
		// show container
		container.classList.add('show-container');
		// set back to default
		setBackToDefault();
	} else if(val && editFlag) {
		submit.addEventListener('click', (e) => {
			editEl.innerText = grocery.value;
		});
		displayAlert('value changed', 'success');
		// edit local store
		setBackToDefault();
	} else {
		displayAlert('please enter value', 'danger');
	}
}
// display alert
function displayAlert(text, action) {
	alert.textContent = text;
	alert.classList.add(`alert-${action}`);
	// remove alert
	setTimeout(function() {
		alert.classList.remove(`alert-${action}`);
		alert.textContent = '';
	},1000);
}
// clear items
function clearItem() {
	const items = document.querySelectorAll('.grocery-item');
	if(items.length > 0) {
		// items.forEach((item) => {
		// 		list.removeChild(item);
		// });
		list.innerHTML = '';
	}
	container.classList.remove('show-container');
	displayAlert('empty list', 'danger');
	setBackToDefault();
}
// delete item
function deleteItem(e) {
	const elem = e.currentTarget.parentElement.parentElement;
	list.removeChild(elem);
	const id = elem.dataset.id;
	if(list.children.length == 0) {
		container.classList.remove('show-container');
	}
	displayAlert('remove item', 'danger');
	setBackToDefault();
}
// edit item
function editItem(e) {
	const elem = e.currentTarget.parentElement.parentElement;
	editEl = e.currentTarget.parentElement.previousElementSibling;
	editID = editEl.dataset.id;
	submit.textContent = 'Edit';
	grocery.value = editEl.textContent;
	editFlag = true;
}

// set back to default
function setBackToDefault() {
	grocery.value = '';
	editFlag = false; // Not edit
	editID = '';
	submit.innerText = 'Submit';
}