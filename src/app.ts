// function publishItems(title:string,genre:string,description:string) : void {
//
//     let article: HTMLElement = document.createElement("article")
//     article.innerHTML =
//         "<h3>" + title + "</h3>" +
//         "<p>" + genre + "</p>" +
//         "<span>" + description + "</span>";
//
//
//     document.getElementById("items").appendChild(article);
//
// }
//
// publishItems("Matrix","Thriller","Did you know, Neo is the one?");
//
// publishItems("Moby Dick","Drama","Is this fish for real?");

let library:Library = new Library();
library.outputToHTML();


