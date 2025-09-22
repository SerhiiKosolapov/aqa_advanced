import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function runTests() {
  try {
    const postsRes = await axios.get(`${BASE_URL}/posts`);
    console.assert(postsRes.status === 200, "GET /posts: статус не 200");
    console.assert(Array.isArray(postsRes.data), "GET /posts: data не масив");
    console.assert(
      Object.prototype.hasOwnProperty.call(postsRes.data[0], "title"),
      "GET /posts: немає title",
    );

    const postRes = await axios.get(`${BASE_URL}/posts/1`);
    console.assert(postRes.status === 200, "GET /posts/1: статус не 200");
    console.assert(postRes.data.id === 1, "GET /posts/1: неправильний id");

    const newPost = {
      title: "Test Title",
      body: "Test Body",
      userId: 1,
    };
    const createRes = await axios.post(`${BASE_URL}/posts`, newPost);
    console.assert(createRes.status === 201, "POST /posts: статус не 201");
    console.assert(
      createRes.data.title === newPost.title,
      "POST /posts: title не співпадає",
    );

    const commentsRes = await axios.get(`${BASE_URL}/posts/1/comments`);
    console.assert(
      commentsRes.status === 200,
      "GET /posts/1/comments: статус не 200",
    );
    console.assert(
      commentsRes.data.length > 0,
      "GET /posts/1/comments: немає коментарів",
    );

    const newComment = {
      name: "Serhii",
      email: "serhii@example.com",
      body: "Це тестовий коментар",
      postId: 1,
    };
    const commentRes = await axios.post(`${BASE_URL}/comments`, newComment);
    console.assert(commentRes.status === 201, "POST /comments: статус не 201");
    console.assert(
      commentRes.data.email === newComment.email,
      "POST /comments: email не співпадає",
    );

    console.log("Усі запити пройшли успішно");
  } catch (error) {
    console.error("Помилка в одному з запитів:", error.message);
  }
}

runTests();
