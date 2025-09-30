import { jest } from "@jest/globals";
import { fetchUserData } from "./task3.js";

const mockGet = jest.fn();
const mockAxios = { get: mockGet };

describe("fetchUserData", () => {
  test("успішний запит повертає дані користувача", async () => {
    const mockData = { id: 1, name: "Serhii" };
    mockGet.mockResolvedValue({ data: mockData });

    const result = await fetchUserData(1, mockAxios);
    expect(result).toEqual(mockData);
  });

  test("невдалий запит повертає помилку", async () => {
    const error = {
      response: { status: 404 },
      message: "Not Found",
    };
    mockGet.mockRejectedValue(error);

    const result = await fetchUserData(999, mockAxios);
    expect(result).toEqual({ error: 404, message: "Not Found" });
  });
});
