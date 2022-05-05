
// deleting items

var bookList = document.querySelector('.book-list');

bookList.addEventListener('click', function (e) {
    if (e.target.textContent == "delete") {

        // e.target.parentElement.style.display = 'none';
        e.target.parentElement.remove();
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

    if (value == "") {
        return;
    }

    deleteBtn.textContent = "delete";
    newBook.textContent = value;

    deleteBtn.classList.add("delete");
    newBook.classList.add("title");

    newLi.appendChild(newBook);
    newLi.appendChild(deleteBtn);

    const ul = document.querySelector('.book-list');

    ul.appendChild(newLi);

    addbook.querySelector('input').value = "";
});



// building search module for filtering out books

const search = document.forms[0].querySelector('input');

search.addEventListener('keyup', function (e) {

    const searchTerm = search.value.toLowerCase();
    const title = bookList.getElementsByTagName('li');
    
    Array.from(title).forEach(function (titleName) {
        const BookName = titleName.querySelector('span').textContent.toLowerCase();

        if (BookName.indexOf(searchTerm) != -1) {
            titleName.style.display = 'block';
        }
        else {
            titleName.style.display = 'none';
        }
    });
});
