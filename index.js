console.log('Hello World');

const categoryEndPoint = 'http://localhost:3000/api/v1/categories';
const noteEndPoint = 'http://localhost:3000/api/v1/notes';

document.addEventListener('DOMContentLoaded', () => {
	console.log('Hello Level Two');
	getCategories();
	getNotes();
});

function getCategories() {
	fetch(categoryEndPoint).then((res) => res.json()).then((cat) => {
		console.log(cat);
	});
}

function getNotes() {
	fetch(noteEndPoint).then((res) => res.json()).then((note) => {
		console.log(note);
	});
}
