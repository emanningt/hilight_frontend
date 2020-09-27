class Note {

    constructor(noteData, noteAttributes) {
        console.log("Note layer")
        //debugger
        this.id = noteData.id
        this.title = noteAttributes.title
        this.content = noteAttributes.content;
        this.category_id = noteAttributes.category_id;
        Note.all.push(this)
    }

    renderNotes() {
        return `
        <div data-id=${this.id}>
        <h3>Title: ${this.title} </h3>
        <h3>Content: ${this.content} </h3>
        </div>`
    }
}

Note.all = [];
