console.log('Hello World');

const categoryEndPoint = 'http://localhost:3000/api/v1/categories';
const noteEndPoint = 'http://localhost:3000/api/v1/notes';

document.addEventListener('DOMContentLoaded', () => {

	getCategories();

	document.addEventListener('submit', createForHandlerCategory);
});

function getCategories() {
	fetch(categoryEndPoint)
		.then((res) => res.json())
		.then((cat) => {
			cat.data.forEach(category => {
				//console.log(cat)

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
				if (newCat.notes.length > 0) {
					//debugger
					newCat.notes.forEach(note => {
						//debugger
						document.querySelector(`#note-content-${note.category_id}`).innerHTML += note.renderNote();
					});

				};
			})

			document.addEventListener('submit', createForHandlerNote)

		})

}

function createForHandlerCategory(e) {
	e.preventDefault();
	console.log(e)
	//debugger
	const catName = e.target.elements.title.value;
	//debugger
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

			//debugger
			let newNote = new Note(note.data.attributes);
			// add the new note to the category 
			debugger



			document.querySelector(`#note-content-${newNote.category_id}`).innerHTML += newNote.renderNote();
		})

}
