// add book popup

const dialog = document.getElementById('addBook');
const btn = document.querySelector('.add-btn');
const cancel = document.getElementById('cancel');
const addBookForm = document.getElementById('addBookForm');

btn.addEventListener('click', () => {
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