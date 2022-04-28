
// deleting items
var bookName = document.querySelectorAll('.delete');

bookName.forEach(function (book) {
    book.addEventListener('click', function (e) {
        let li = book.parentElement;
        li.style.display = 'none';
    });
});

// Adding items i.e. books!

// function addbook() {

// }

var newLi = bookName[0].parentElement;

let ul = document.querySelector('ul');
console.log(ul);

ul.appendChild(newLi);