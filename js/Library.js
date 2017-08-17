var Library = (function () {
    function Library() {
        this.movieItems = [];
        this.bookItems = [];
        var movie1 = new Movie("Matrix", "Thriller", "Did you know, Neo is the one?", 17, "Restricted");
        var movie2 = new Movie("Moby Dick", "Drama", "Is this fish for real?", 16, "16+");
        var book1 = new Book("De wetten van de magie", "Sience-Fiction, Fantasy", "Terry Goodkind creeerde met Richard Cypher een van de meest memorabele helden uit de moderne fantasy. ", new Author("Terry Goodkind"));
        this.bookItems.push(book1);
        this.movieItems.push(movie1);
        this.movieItems.push(movie2);
    }
    Library.prototype.outputToHTML = function () {
        var element = document.getElementById("items");
        this.bookItems.forEach(function (value) { return value.render(element); });
        this.movieItems.forEach(function (value) { return value.render(element); });
    };
    return Library;
}());
//# sourceMappingURL=Library.js.map