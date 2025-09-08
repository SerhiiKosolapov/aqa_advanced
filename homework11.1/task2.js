function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // перетворюємо відповідь у JSON
    })
    .catch(error => {
      console.error("Сталася помилка при запиті:", error.message);
    });
}

fetchTodo().then(todo => {
  if (todo) {
    console.log("Отриманий об'єкт todo:", todo);
  }
});