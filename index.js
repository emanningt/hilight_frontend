console.log('Hello World');

const categoryEndPoint = 'http://localhost:3000/api/v1/categories';
const noteEndPoint = 'http://localhost:3000/api/v1/notes';

document.addEventListener('DOMContentLoaded', () => {

	getCategories();

	const createCatForm = document.querySelector('#create-category');

	createCatForm.addEventListener('submit', (e) => createForHandlerCategory(e));
});

function getCategories() {
	fetch(categoryEndPoint)
		.then((res) => res.json())
		.then((cat) => {
			cat.data.forEach(category => {
				//console.log(cat)

				let newCat = new Category(category, category.attributes);

				//debugger
				document.querySelector('#category-container').innerHTML += newCat.renderCategory();
			})
			//console.log("layer 5 ");
			getNotes();
			const createPlayerForm = document.querySelector('#create-note');

			createPlayerForm.addEventListener('submit', (e) => createForHandlerNote(e));
		})

}

function createForHandlerCategory(e) {
	e.preventDefault();
	console.log(e)
	const catName = document.querySelector('#input-name').value;
	console.log(catName)
	postFetchCat(catName);
}

function postFetchCat(name) {
	console.log(name)
	fetch(categoryEndPoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: name
		})
	})
		.then((res) => res.json())
		.then((cat) => {
			//console.log(cat)
			//debugger
			const catData = cat.data;
			let newCategory = new Category(catData, catData.attributes);

			document.querySelector('#category-container').innerHTML += newCategory.renderCategory();
		});
}

function getNotes() {
	fetch(noteEndPoint)
		.then((res) => res.json())
		.then((notes) => {
			//debugger
			notes.data.forEach(note => {
				//debugger
				let newNote = new Note(note);
				let noteCat = note.attributes.category_id


				document.querySelector(`#note-content-${noteCat}`).innerHTML += newNote.renderNotes();
			})

		})
	//.catch(error => alert(error.message));
}

function createForHandlerNote(e) {
	e.preventDefault();
	//debugger
	const noteTitle = document.querySelector('#note-name').value;
	console.log(noteTitle)
	postFetchNote(noteTitle);
}

function postFetchNote(title) {
	console.log(title)
	//debugger
	fetch(noteEndPoint)

}
