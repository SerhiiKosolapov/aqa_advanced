import axiosInstance from "./axiosInstance.js";

async function runTests() {
  try {
    const res1 = await axiosInstance.get("/posts");
    const res2 = await axiosInstance.get("/posts/1");
    const res3 = await axiosInstance.post("/posts", {
      title: "Test Title",
      body: "Test Body",
      userId: 1,
    });
    const res4 = await axiosInstance.get("/posts/1/comments");
    const res5 = await axiosInstance.post("/comments", {
      name: "Serhii",
      email: "serhii@example.com",
      body: "Це тестовий коментар",
      postId: 1,
    });

    console.assert(res1.status === 200, "res1: статус не 200");
    console.assert(res2.data.id === 1, "res2: неправильний ID");
    console.assert(
      res3.data.title === "Test Title",
      "res3: title не співпадає",
    );
    console.assert(Array.isArray(res4.data), "res4: не масив");
    console.assert(
      res5.data.email === "serhii@example.com",
      "res5: email не співпадає",
    );

    console.log("Усі запити пройшли успішно");
  } catch (err) {
    console.error("Помилка в одному з запитів");
  }
}

runTests();
