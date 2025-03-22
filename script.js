function openModal(title, description) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}