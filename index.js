console.log('Hello World');

const categoryEndPoint = 'http://localhost:3000/api/v1/categories';
const noteEndPoint = 'http://localhost:3000/api/v1/notes';

document.addEventListener('DOMContentLoaded', () => {
	console.log('Hello Level Two');
	getCategories();

	const createCatForm = document.querySelector('#create-category');

	createCatForm.addEventListener('submit', (e) => createForHandlerCategory(e));
});

function getCategories() {
	fetch(categoryEndPoint)
		.then(res => res.json())
		.then(cat => {
			cat.data.forEach(category => {
				console.log(cat)
				let newCat = new Category(category, category.attributes);
				//debugger
				document.querySelector('#category-container').innerHTML += newCat.renderCategory();
			})
			console.log("layer 5 ");
		});
	getNotes();

	//const createPlayerForm = document.querySelector('button');

	//createPlayerForm.addEventListener('click', (e) => createForHandlerNote(e));
}

function createForHandlerCategory(e) {
	e.preventDefault();
	console.log(e)
	//debugger
	const catName = document.querySelector('#input-name').value;
	console.log(catInput)
	postFetchCat(catName);
}

function postFetchCat(catInput) {

	fetch(categoryEndPoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(catInput)
	})
		.then(res => res.json())
		.then(cat => {
			//debugger
			const catData = cat.data;
			let newCategory = new Category(catData, catData.attributes);

			document.querySelector('#category-container').innerHTML += newCategory.renderCategory();
		});
}

function getNotes() {
	fetch(noteEndPoint)
		.then(res => res.json())
		.then(n => {
			//debugger
			n.data.forEach((note) => {
				//debugger
				console.log("nextlayer")
				console.log(note)
				let newNote = new Note(note, note.attributes);

				//debugger

				//document.querySelector('#note-container').innerHTML += newNote.renderNotes();
			});

		});
}
