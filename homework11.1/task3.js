async function fetchTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) throw new Error(`Помилка: ${response.status}`);
    const todo = await response.json();
    return todo;
  } catch (error) {
    console.error("Помилка при отриманні todo:", error.message);
  }
}

async function fetchUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) throw new Error(`Помилка: ${response.status}`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Помилка при отриманні user:", error.message);
  }
}

Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
    console.log("Результат Promise.all:");
    console.log("Todo:", todo);
    console.log("User:", user);
  })
  .catch(error => {
    console.error("Помилка в Promise.all:", error.message);
  });

Promise.race([fetchTodo(), fetchUser()])
  .then(result => {
    console.log("Результат Promise.race:", result);
  })
  .catch(error => {
    console.error("Помилка в Promise.race:", error.message);
  });