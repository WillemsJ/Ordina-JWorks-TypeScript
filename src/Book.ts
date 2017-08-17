class Book extends Item{
    private _author:Author;


    constructor(title: string, genre: string, description: string, author: Author) {
        super(title, genre, description);
        this._author = author;
    }


    render(element: HTMLElement): void {
        let article: HTMLElement = document.createElement("article")
        article.innerHTML =
            "<h3>" + this._title + "</h3>" +
            "<p>" + this._genre + "</p>" +
            "<span>" + this._description + "</span>"+
            "<p>" + this._author._name + "</p>";


        element.appendChild(article);
    }

}