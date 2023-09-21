function getElementLoadPost() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayShowData(data));
}

function displayShowData(posts) {
  const postsContainer = document.getElementById("posts-container");
  for (const post of posts) {
    const { title, body } = post;
    const div = document.createElement("div");
    div.classList.add('posts');
    div.innerHTML = `
      <h1>${title}</h1>
      <p>${body}</p>
    `;
    postsContainer.appendChild(div);
  }
}

getElementLoadPost();
