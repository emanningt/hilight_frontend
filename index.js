console.log('Hello World');

const categoryEndPoint = 'http://localhost:3000/api/v1/categories';
const noteEndPoint = 'http://localhost:3000/api/v1/notes';

document.addEventListener('DOMContentLoaded', () => {
	console.log('Hello Level Two');
	getCategories();
	getNotes();
});

function getCategories() {
	fetch(categoryEndPoint)
		.then(res => res.json())
		.then(cat => {
			cat.data.forEach(category => {
				const categoryMaker = `
				<h3> ${category.attributes.name} </h3>
				 `;

				document.querySelector('#category-container').innerHTML += categoryMaker
			})
			console.log(cat);
		});
}

function getNotes() {
	fetch(noteEndPoint)
		.then(res => res.json())
		.then(n => {
			n.data.forEach(note => {
				const noteMaker =
					`<h3> ${note.attributes.title} </h3>`;

				document.querySelector('#note-container').innerHTML += noteMaker
			})
			console.log(n);
		});
}
