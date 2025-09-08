class TodoService {
  static async fetchTodo(id = 1) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      if (!response.ok) throw new Error(`Помилка запиту todo: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("TodoService:", error.message);
    }
  }
}

class UserService {
  static async fetchUser(id = 1) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) throw new Error(`Помилка запиту user: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("UserService:", error.message);
    }
  }
}

async function runCombinedRequests() {
  try {
    const [todo, user] = await Promise.all([
      TodoService.fetchTodo(),
      UserService.fetchUser()
    ]);
    console.log("Promise.all:");
    console.log("Todo:", todo);
    console.log("User:", user);

    const fastest = await Promise.race([
      TodoService.fetchTodo(),
      UserService.fetchUser()
    ]);
    console.log("Promise.race:", fastest);
  } catch (error) {
    console.error("Загальна помилка:", error.message);
  }
}

runCombinedRequests();