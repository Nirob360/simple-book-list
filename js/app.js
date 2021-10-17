const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbn = document.querySelector("#isbn");
const button = document.querySelector("#btn");
const bookList = document.querySelector("#body-list");

button.addEventListener("click", () => {
  if (titleInput.value == "" && authorInput.value == "" && isbn.value == "") {
    alert("plese Fill up your input box");
  } else {
    const bookListRow = document.createElement("tr");

    const newTitle = document.createElement("td");
    newTitle.innerHTML = titleInput.value;
    bookListRow.appendChild(newTitle);

    const newAuthor = document.createElement("td");
    newAuthor.innerHTML = authorInput.value;
    bookListRow.appendChild(newAuthor);

    const newIsbn = document.createElement("td");
    newIsbn.innerHTML = isbn.value;
    bookListRow.appendChild(newIsbn);

    bookList.appendChild(bookListRow);
  }
});
