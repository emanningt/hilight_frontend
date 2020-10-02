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
			cat.data.forEach(category => {

				//debugger
				let catId = category.id

				const getButtons = document.querySelector('#button');
				//debugger
				const createPlayerForm = document.querySelector(`#note-content-${catId}`);
				debugger
				createPlayerForm.addEventListener('submit', (e) => createForHandlerNote(e));

			})

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
				let newNote = new Note(note, note.attributes);



				document.querySelector(`#note-content-${newNote.category_id}`).innerHTML += newNote.renderNotes();
			})

		})
	//.catch(error => alert(error.message));
}

function createForHandlerNote(e) {
	e.preventDefault();
	const noteTitle = document.querySelector('#note-name').value;
	const noteContent = document.querySelector('#content').value;
	const noteCategoryId = document.querySelector('#create-note').dataset.id;
	//debugger
	console.log(noteCategoryId);

	postFetchNote(noteTitle, noteContent, noteCategoryId);
}

function postFetchNote(title, content, category_id) {
	console.log(title, content, category_id)
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
		.then((res) => res.json())
		.then((note) => {
			console.log(note)

			let noteData = note.data
			let newNote = new Note(noteData, noteData.attributes);
			//debugger



			document.querySelector(`#note-content-${noteData.attributes.category_id}`).innerHTML += newNote.renderNotes();
		})

}
