function displayCard(arr) {
    const container = document.getElementById('cards');
    container.innerHTML = '';

    arr.forEach((book, index) => {
        container.innerHTML += `
        <div class="card">
                <div class="heading">
                    <p class="book-title">${book.title}</p>
                    <div class="icon">
                        <a class="edit-book" data-index="${index}"><img src="icon/edit.svg" alt="Edit Book" width="60px"></a>
                        <a class="delete-book" data-index="${index}"><img src="icon/delete.svg" alt="Delete Book" width="60px"></a>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="details">
                    <p class="author">Author: <span>${book.author}</span></p>
                    <p class="page">Pages: <span>${book.pages}</span></p>
                    <p class="status">
                        Read Status: <input type="checkbox" data-index="${index}" ${book.read === "Read" ? "checked" : ""}>
                    </p>
                </div>
            </div>
        `;
    });

    document.querySelectorAll('.delete-book').forEach((button) => {
        button.addEventListener('click', (e) => {
            const index = e.currentTarget.getAttribute('data-index');
            deleteBookFromLibrary(index);
        });
    });

    document.querySelectorAll('.edit-book').forEach((button) => {
        button.addEventListener('click', (e) => {
            alert('Under construction');
        });
    });

    document.querySelectorAll('.status input[type="checkbox"]').forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            const index = e.currentTarget.getAttribute('data-index');
            myLibrary[index].read = e.currentTarget.checked ? "Read" : "Not Read";
        });
    });
}
