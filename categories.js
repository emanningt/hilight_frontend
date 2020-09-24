class Category {
	constructor(categoryData, categoryAttributes) {
		console.log(categoryData);
		this.id = categoryData.id;
		this.name = categoryAttributes.name;

		Category.all.push(this);
	}

	renderCategory() {
		return `
    <div data-id=${this.id}>
        <h3>${this.title} </h3>
        <h3>${this.name} </h3>
        </div>`;
	}
}

Category.all = [];
