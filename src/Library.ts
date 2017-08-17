class Library {

    movieItems:Movie[] = [];
    bookItems:Book[] = [];

    constructor() {
        let movie1:Movie = new Movie("Matrix", "Thriller", "Did you know, Neo is the one?", 17, "Restricted");
        let movie2:Movie = new Movie("Moby Dick", "Drama", "Is this fish for real?", 16, "16+")
        let book1:Book = new Book("De wetten van de magie", "Sience-Fiction, Fantasy", "Terry Goodkind creeerde met Richard Cypher een van de meest memorabele helden uit de moderne fantasy. ", new Author("Terry Goodkind"))

        this.bookItems.push(book1);
        this.movieItems.push(movie1);
        this.movieItems.push(movie2);
    }

    outputToHTML():void{
        let element: HTMLElement = document.getElementById("items");
        this.bookItems.forEach(value => value.render(element));
        this.movieItems.forEach(value => value.render(element));
    }
}