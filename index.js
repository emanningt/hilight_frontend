console.log('Hello World');

const categoryEndPoint = 'http://localhost:3000/api/v1/categories';
const noteEndPoint = 'http://localhost:3000/api/v1/notes';

document.addEventListener('DOMContentLoaded', () => {
	const searchButton = document.querySelector('#search-button')
	searchButton.addEventListener('click', searchBar);

	// const clearButton = document.querySelector('#clear-button')
	// //debugger
	// clearButton.addEventListener('click', removeSearched);

	getCategories();

	document.addEventListener('submit', createForHandlerCategory);

	//debugger
});

function getCategories() {
	fetch(categoryEndPoint)
		.then((response) => response.json())
		.then((cat) => {
			//debugger
			cat.data.forEach(category => {
				//console.log(cat)
				//debugger
				let newCat = new Category(category.attributes);
				//debugger
				category.attributes.notes.forEach(note => {
					//debugger
					let newNote = new Note(note);
					newCat.notes.push(newNote);
					//debugger
				})
				//debugger
				document.querySelector('#category-container').innerHTML += newCat.renderCategory();

				//debugger
				for (let i = 0; i < newCat.notes.length; i++) {
					//debugger
					if (newCat.notes[i]) {
						document.querySelector(`#note-content-${newCat.id}`).innerHTML += newCat.notes[i].renderNote();
					}

				}
			})
			//debugger
			document.addEventListener('submit', createForHandlerNote)
			//debugger
		})

}

function createForHandlerCategory(e) {
	e.preventDefault();
	//debugger
	const catName = e.target.elements.title.value;
	//debugger
	postFetchCat(catName);

}

function postFetchCat(name) {

	fetch(categoryEndPoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: name
		})
	})
		.then((response) => response.json())
		.then((cat) => {
			//console.log(cat)
			//debugger
			const catData = cat.data;
			let newCategory = new Category(catData.attributes);

			document.querySelector('#category-container').innerHTML += newCategory.renderCategory();

		});

}

function createForHandlerNote(e) {
	e.preventDefault();
	//debugger
	const noteTitle = e.target.elements.name.value;
	const noteContent = e.target.elements.content.value;
	const noteCategoryId = e.target.dataset.id;
	//debugger

	postFetchNote(noteTitle, noteContent, noteCategoryId);
}

function postFetchNote(title, content, category_id) {
	//debugger
	fetch(noteEndPoint, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			title: title,
			content: content,
			category_id: category_id
		})
	})
		.then((response) => response.json())
		.then((note) => {

			//debugger
			let newNote = new Note(note.data.attributes);
			// add the new note to the category 
			//debugger



			document.querySelector(`#note-content-${newNote.category_id}`).innerHTML += newNote.renderNote();

		})

}

function searchBar() {
	console.log("click")
	const searchValue = document.querySelector('#search-bar').value
	const allCategories = Category.all

	const searchCat = allCategories.filter(cat => {
		const category = cat.name.toLowerCase();
		//debugger
		return category.includes(searchValue.toLowerCase())
	})
	console.log(searchCat)
	for (i = 0; i < searchCat.length; i++) {
		console.log(searchCat[i].name)
		const searchedCat = searchCat[i].name
		const searchDiv = document.getElementById("search-container");

		const searchedList = document.createElement('li');
		searchedList.innerHTML = searchedCat;
		searchedList.classList.add('searched-category');

		searchDiv.appendChild(searchedList);
	}
	//debugger
	//debugger
	//if O passed in 
	// i want the dom to update 
}

function removeButton() {
	const list = document.querySelector('#search-container')
	while (list.hasChildNodes()) {
		list.removeChild(list.firstChild);
	}
}

