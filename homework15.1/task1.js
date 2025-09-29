import axios from "axios";

export async function fetchInvalidEndpoint() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/invalid-url",
    );
    return response.data;
  } catch (error) {
    return `Помилка: ${error.response?.status} ${error.response?.statusText}`;
  }
}
