
// deleting items

var bookList = document.querySelector('.book-list');

bookList.addEventListener('click', function (e) {
    if (e.target.textContent == "delete") {

        e.target.parentElement.style.display = "none";
    };
});

// preventing default action of form(add-book)

var addbook = document.querySelector('#add-book');


addbook.addEventListener('submit', function (e) {
    e.preventDefault();

    const newLi = document.createElement('li');
    const newBook = document.createElement('span');
    const deleteBtn = document.createElement('span');
    
    const value = addbook.querySelector('input').value; 

    deleteBtn.textContent = "delete";
    newBook.textContent = value;

    deleteBtn.classList.add("delete");
    newBook.classList.add("title");

    newLi.appendChild(newBook);
    newLi.appendChild(deleteBtn);

    const ul = document.querySelector('.book-list');

    ul.appendChild(newLi);
});


