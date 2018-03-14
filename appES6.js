//es6

class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    // class functions
    addBookToList(book){
        //  get list with books html elements
        const list = document.getElementById('book-list');
        //  create tr element
        const row = document.createElement('tr');
        //insert columns(rows) into tr
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X<a></td>
        `;
        //  append that row to the book list
        list.appendChild(row);
        
    }
    showAlert(message, className){

    }
    deleteBook(target){

    }
    clearFields(){

    }
}