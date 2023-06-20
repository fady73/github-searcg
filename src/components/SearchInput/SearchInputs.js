import React, { useContext } from "react";
import { Button, Col, Input } from "antd";

import { SearchContext } from "../../context/SearchContext";

const { Search } = Input;

const SearchInput = () => {
  const { searchTerm, setSearchTerm, handleSearchTermChange } =
    useContext(SearchContext);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchTermChange(searchTerm);
    }
  };

  return (
    <Col span={24}>
      <Search
        placeholder="Search repositories"
        value={searchTerm}
        onKeyDown={handleKeyDown}
        onChange={handleSearchInputChange}
        enterButton={
          <Button type="primary" onClick={handleSearchTermChange}>
            Search
          </Button>
        }
      />
    </Col>
  );
};

export default SearchInput;
