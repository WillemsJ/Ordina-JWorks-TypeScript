var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(title, genre, description, author) {
        var _this = _super.call(this, title, genre, description) || this;
        _this._author = author;
        return _this;
    }
    Book.prototype.render = function (element) {
        var article = document.createElement("article");
        article.innerHTML =
            "<h3>" + this._title + "</h3>" +
                "<p>" + this._genre + "</p>" +
                "<span>" + this._description + "</span>" +
                "<p>" + this._author._name + "</p>";
        element.appendChild(article);
    };
    return Book;
}(Item));
//# sourceMappingURL=Book.js.map