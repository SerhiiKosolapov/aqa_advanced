import { fetchInvalidEndpoint } from "./task1.js";

describe("fetchInvalidEndpoint", () => {
  test("повертає повідомлення про помилку при неправильному URL", async () => {
    const result = await fetchInvalidEndpoint();
    expect(result).toMatch(/Помилка: 404 Not Found/);
  });
});
