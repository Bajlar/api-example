const commentsLoadData = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayShowComments(data));
};

const displayShowComments = (comments) => {
  const commentsContainer = document.getElementById('comments-container');
  for (const comment of comments) {
    const { name, email, body } = comment;
    const div = document.createElement('div');
    div.classList.add('comments');
    div.innerHTML = `
      <h2>Name: ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p>${body}</p>
    `;
    commentsContainer.appendChild(div);
  }
}

commentsLoadData();