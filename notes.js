class Note {

    constructor(noteAttributes) {

        //debugger
        this.id = noteAttributes.id;

        this.title = noteAttributes.title;
        this.content = noteAttributes.content;
        this.category_id = noteAttributes.category_id;

        Note.all.push(this)
    }

    renderNote() {
        return `
        <div id=${this.id}>
        <h3>Title: ${this.title} </h3>
        <h3>Content: </h3>
       <p> ${this.content} </p>
        </div>`;
    }
}

Note.all = [];
