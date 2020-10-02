class Note {

    constructor(note, noteAttributes) {

        //debugger
        this.id = note.id;

        this.title = note.attributes.title;
        this.content = noteAttributes.content;
        this.category_id = noteAttributes.category_id;

        Note.all.push(this)
    }

    renderNotes() {
        return `
        <div id=${this.id}>
        <h3>Title: ${this.title} </h3>
        <h3>Content: ${this.content} </h3>
        </div>`;
    }
}

Note.all = [];
