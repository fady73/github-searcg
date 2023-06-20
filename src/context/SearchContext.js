import React, { createContext, useEffect, useState } from "react";
import { searchRepositories } from "../service/api";

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [repos, setRepos] = useState([]);
  const [bookmarksRepos, setBookmarksRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchTermChange = () => {
    if (searchTerm.length > 0) {
      setPage(1);
      fetchData(1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    fetchData(pageNumber);
  };

  const toggleBookmark = (repoId) => {
    const index = bookmarksRepos.findIndex((item) => item.id === repoId);
    if (index === -1) {
      const repoData = repos.find((repo) => repo.id === repoId);
      setBookmarksRepos((prev) => [...prev, repoData]);
    } else {
      setBookmarksRepos([
        ...bookmarksRepos.filter((item) => item.id !== repoId),
      ]);
    }
  };

  const fetchData = async (pageNumber) => {
    setIsLoading(true);

    try {
      const data = await searchRepositories(searchTerm, pageNumber);
      setRepos(data.items);
      setTotalPages(Math.ceil(data.total_count / 10));
      setErrorMessage("");
      setIsLoading(false);
    } catch (error) {
      setRepos([]);
      setTotalPages(0);
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarksRepos(JSON.parse(storedBookmarks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarksRepos));
  }, [bookmarksRepos]);

  const contextValues = {
    searchTerm,
    handleSearchTermChange,
    page,
    handlePageChange,
    repos,
    bookmarksRepos,
    totalPages,
    toggleBookmark,
    setSearchTerm,
    isLoading,
    errorMessage,
  };

  return (
    <SearchContext.Provider value={contextValues}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
