console.log('Hello World');

const categoryEndPoint = 'http://localhost:3000/api/v1/categories';
const noteEndPoint = 'http://localhost:3000/api/v1/notes';

document.addEventListener('DOMContentLoaded', () => {
	console.log('Hello Level Two');
	getCategory;
});

function getCategory() {
	fetch(categoryEndPoint).then((res) => res.json()).then((cat) => {
		console.log(cat);
	});
}
