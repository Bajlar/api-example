const usersLoadData = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayShowUsers(data));
};

const displayShowUsers = (users) => {
  const usersContainer = document.getElementById("users-container");
  for (const user of users) {
    const { name, username, email, address, phone, website, company } = user;
    const div = document.createElement("div");
    div.classList.add("users");
    div.innerHTML = `
      <h2>Name: ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Username:</strong> ${username}</p>
      <p><strong>Address:</strong> ${address?.street}</p>
      <p><strong>Company:</strong> ${company?.name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Website:</strong> ${website}</p>
    `;
    usersContainer.appendChild(div);
  }
};

usersLoadData();
