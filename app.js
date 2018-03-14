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


//show alert
UI.prototype.showAlert = function(message, className) {
	//create div
	const div = document.createElement('div');
	//add class
	div.className = `alert ${className}`;
	//add text
	div.appendChild(document.createTextNode(message));
	//insert into dom
		//get parent
		const container = document.querySelector('.container');
		//get form
		const form = document.querySelector('#book-form');
		//insert alert(div before form)->over the form
		container.insertBefore(div, form);

		//error timeout after 3s
		setTimeout(function(){
			document.querySelector('.alert').remove();
		}, 2000);//3 s timeout
}
//  clear input after submit
UI.prototype.clearFields = function(){
    //  clear values of html elements by id after submitting
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//
UI.prototype.deleteBook = function(target){
	if(target.className === 'delete'){
		// remove tr,parent of a parent of a tag which has delete class
		target.parentElement.parentElement.remove();
	}
}

//  Event Listener for add book
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

            //validate input
            if(title === ''){
							//error alert
							inputError = 'Title is empty!';
							ui.showAlert('Please fill in all fields!', 'error');//(text, style class)
						}	else {
							// UI add book to list
							ui.addBookToList(book);
							//	show success alert
							ui.showAlert('Book added!', 'success')
							// clear input fields
							ui.clearFields();
						}           
        //  prevent default form behaviour
        e.preventDefault();
		});


//event listener for delete
		//parent
			document.getElementById('book-list').addEventListener('click', function(e){
				const ui = new UI();
				//call deleteBook proto function of UI class
					// delete book with click on (x) icon 
						ui.deleteBook(e.target);
				//show alert
				ui.showAlert('Book deleted', 'error');
				//prevent default behaviour
				e.preventDefault();
			});


