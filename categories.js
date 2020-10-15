class Category {
	constructor(categoryAttributes) {
		//debugger
		this.id = categoryAttributes.id;
		this.name = categoryAttributes.name;
		this.notes = [];
		//debugger

		Category.all.push(this);
	}

	renderCategory() {
		return `
		
    	<div id=${this.id}>
		<h2>${this.name} </h3>
		</div>

		<form id="create-note" data-id="${this.id}">
		<input id="note-name" data-id=${this.id} type="text" name="name" value="" placeholder="Note Title" class="input-text"><br /><br/>
		<textarea id="content" style="margin: 0px; width: 212px; height: 79px;" cols="20" name="comments" rows="5"></textarea>
		<br> </br>
		<input id='create-button' type="submit" name="submit" value="hilight-it" class="submit">
		</form>
		<div id="note-content-${this.id}">
		</div>
		
		`;

	}
}

Category.all = [];
