import React, { useContext } from "react";
import { Alert, Col, Row, Spin } from "antd";

import { SearchContext } from "../../context/SearchContext";

import SearchInput from "../SearchInput/SearchInputs";
import ReposList from "../ReposList/ReposList";
import Pagination from "../Paginations/Paginations";

const Home = () => {
  const { isLoading, errorMessage } = useContext(SearchContext);
  const { bookmarksRepos, repos } = useContext(SearchContext);
  return (
    <>
      <Row gutter={[24, 24]}>
        <SearchInput />
        {isLoading ? (
          <Col span={24}>
            <Row justify="center">
              <Spin size="large" />
            </Row>
          </Col>
        ) : errorMessage.length === 0 ? (
          <>
            <Col span={24}>
              <ReposList repos={repos} />
              <Pagination />
            </Col>
          </>
        ) : (
          errorMessage && (
            <Col span={24}>
              <Alert message={errorMessage} type="error" />
            </Col>
          )
        )}
        <Col span={24}>
          <h1>bookmark section</h1>
          <ReposList repos={bookmarksRepos} />
        </Col>
      </Row>
    </>
  );
};

export default Home;
