// Genre card path

document.querySelectorAll('.genre-card').forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = this.dataset.href;
    });
});

// Edit genre popup

const editDialog = document.getElementById('editDialog');
const editForm = document.getElementById('editForm');
const editIdInput = document.getElementById('editId');
const editGenreInput = document.getElementById('editGenre');
const editCancel = document.getElementById('edit-cancel');
const editButtons = document.querySelectorAll('.edit-btn');

editButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const genreId = btn.getAttribute('data-id');
        const genreName = btn.getAttribute('data-genre');
        
        editIdInput.value = genreId;
        editGenreInput.value = genreName;
        editDialog.showModal();
    });
});

editCancel.addEventListener('click', () => {
    editDialog.close();
});

editDialog.addEventListener('click', (e) => {
    if (e.target === editDialog) {
        editDialog.close();
    }
});

editForm.addEventListener('submit', () => {
    editDialog.close();
});

// Delete genre popup

const deleteDialog = document.getElementById('deleteDialog');
const deleteForm = document.getElementById('deleteForm');
const deleteIdInput = document.getElementById('deleteId');
const deleteButtons = document.querySelectorAll('.delete-btn');
const deleteCancel = document.getElementById('delete-cancel');

deleteButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const genreId = btn.getAttribute('data-id');
        
        deleteIdInput.value = genreId;
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