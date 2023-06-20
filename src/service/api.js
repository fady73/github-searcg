import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const searchRepositories = async (searchTerm, page) => {
  try {
    const perPage = 10;

    const response = await api.get(
      `/search/repositories?q=${searchTerm}&page=${page}&per_page=${perPage}`
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else if (error.request) {
      throw new Error("No response from the server. Please try again later.");
    } else {
      throw new Error(
        "An error occurred while processing the request. Please try again later."
      );
    }
  }
};
