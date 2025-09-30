export async function fetchUserData(userId, client) {
  try {
    const response = await client.get(
      "https://api.example.com/users/${userId}",
    );
    return response.data;
  } catch (error) {
    return {
      error: error.response?.status || 500,
      message: error.message,
    };
  }
}
