// add book popup

const dialog = document.getElementById('addBook');
const addBtn = document.querySelector('.add-btn');
const cancel = document.getElementById('cancel');
const addBookForm = document.getElementById('addBookForm');

addBtn.addEventListener('click', () => {
    dialog.showModal();
});
    
cancel.addEventListener('click', () => {
    dialog.close();
});

dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
        dialog.close();
    }
});

addBookForm.addEventListener('submit', () => {
    dialog.close();
});

// Update book popup

const updateDialog = document.getElementById('update-book');
const updateForm = document.getElementById('update-book-form');
const updateButtons = document.querySelectorAll('.edit-btn');
const updateCancel = document.getElementById('update-book-cancel');
const idInput = document.getElementById('edit-book-id');
const priceInput = document.getElementById('update-price');
const ratingInput = document.getElementById('update-rating');

updateButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const bookId = btn.getAttribute('data-id');
        const genreId = btn.getAttribute('data-genre');
        const price = btn.getAttribute('data-price');
        const rating = btn.getAttribute('data-rating');

        updateForm.action = `/books/${genreId}/${bookId}/update`;

        idInput.value = bookId;
        priceInput.value = price;
        ratingInput.value = rating;

        updateDialog.showModal();
    }); 
});

updateCancel.addEventListener('click', () => {
    updateDialog.close();
});

updateDialog.addEventListener('click', (e) => {
    if (e.target === updateDialog) {
        updateDialog.close();
    }
});

updateForm.addEventListener('submit', () => {
    updateDialog.close();
});


// Delete book popup

const deleteDialog = document.getElementById('deletebook');
const deleteForm = document.getElementById('deleteBookForm');
const deleteIdInput = document.getElementById('deleteBookId');
const deleteButtons = document.querySelectorAll('.delete-btn');
const deleteCancel = document.getElementById('deleteBookCancel');

deleteButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const bookId = btn.getAttribute('data-id');
        const genreId = btn.getAttribute('data-genre');

        deleteForm.action = `/books/${genreId}/${bookId}/delete`;
        
        deleteIdInput.value = bookId;
        deleteDialog.showModal();
    });
});

deleteCancel.addEventListener('click', () => {
    deleteDialog.close();
});

deleteDialog.addEventListener('click', (e) => {
    if (e.target === deleteDialog) {
        deleteDialog.close();
    }
});

deleteForm.addEventListener('submit', () => {
    deleteDialog.close();
});