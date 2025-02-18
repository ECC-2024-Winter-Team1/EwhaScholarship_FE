export const fetchApi = async (url, options) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인을 먼저 해주세요.");
      return;
    }

    const response = await fetch(url, {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
