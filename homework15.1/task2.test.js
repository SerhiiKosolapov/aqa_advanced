import { jest } from "@jest/globals";
import { fetchWithHeadersAndParams } from "./task2.js";

const mockGet = jest.fn();
const mockAxios = { get: mockGet };

describe("fetchWithHeadersAndParams", () => {
  test("включає кастомні хедери та параметри в запит", async () => {
    const mockParams = { userId: 1 };
    const mockHeaders = { Authorization: "Bearer test-token" };

    mockGet.mockResolvedValue({ data: "OK" });

    await fetchWithHeadersAndParams(mockParams, mockHeaders, mockAxios);

    expect(mockGet).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: mockParams,
        headers: mockHeaders,
      },
    );
  });
});
