// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

// CRUD

const createPost = async (post) => {
  try {
    console.log("3");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log("4");
    console.log(response);
    const json = await response.json();
    console.log("5");
    console.log(json.title);
    return json;
  } catch (error) {
    console.log(error);
  }
};

const post = {
  title: "foo",
  body: "bar",
  userId: 1,
};

// console.log(JSON.stringify(post));

// console.log("1");
// createPost(post).then((post) => console.log(post));
// console.log("2");

const readPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const readPost = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

// readPosts().then((posts) => console.log(posts));

readPosts().then((posts) => {
  const body = document.querySelector("body");
  const main = document.createElement("main");

  posts.forEach((post) => {
    const html = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
    main.innerHTML += html;
  });

  body.appendChild(main);
});

// readPost(53).then((post) => console.log(post));

const updatePost = async (post, id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const post2 = {
  title: "foo 2",
  body: "bar 2",
  userId: 1,
};

// updatePost(post2, 3).then((post) => console.log(post));

const deleteTodo = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "DELETE",
      }
    );
    console.log(response);
    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
};

// deleteTodo(3);

// ---

axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });
