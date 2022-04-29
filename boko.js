
// deleting items
var bookName = document.querySelectorAll('.delete');

bookName.forEach(function (book) {
    book.addEventListener('click', function (e) {
        let li = book.parentElement;
        li.style.display = 'none';
    });
});

// preventing default action of form(add-book)

var addbook = document.querySelector('#add-book');
addbook.addEventListener('click', function (e) {
    e.preventDefault();
});


