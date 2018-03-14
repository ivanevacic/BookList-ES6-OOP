//  ES5

//  Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//  UI constructor
function UI(){

}
//  add book to list UI proto function
UI.prototype.addBookToList = function (book) {
    //grab html element we want to add new book in
    const list = document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');
    //append elements to row
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</td>
    `;
    //append row to list
    list.appendChild(row);
    console.log(row);
}
//  clear input after submit
UI.prototype.clearFields = function(){
    //  clear values of html elements by id after submitting
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//  Event Listeners
    //grab form
    document.getElementById('book-form').addEventListener('submit', function (e){
        // grab form values based on id
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;
            // instatiate book
            const book = new Book(title, author, isbn);
            //instatiate UI
            const ui = new UI();
            // UI add book to list
            ui.addBookToList(book);
            // clear input fields
            ui.clearFields();
        //  prevent default form behaviour
        e.preventDefault();
    });
