class Category {
	constructor(categoryData, categoryAttributes) {
		//debugger
		console.log("layer 4 ");
		this.id = categoryData.id;
		this.name = categoryAttributes.name;


		Category.all.push(this);
	}

	renderCategory() {
		return `
    <div data-id=${this.id}>
		<h3>${this.name} </h3>
		</div>
		<div id="note-container-${this.id}">
    
			</div>
			<form id="note-form" data-id="${this.id}">
            <input id="note-name" data-id=${this.id} type="text" name="name" value="" placeholder="Note Title" class="input-text">
            <button class="input" data-id=${this.id}>Add Note</button>
            </form>`;

	}
}

Category.all = [];
