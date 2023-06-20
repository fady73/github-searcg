import React from "react";
import { Layout } from "antd";

import SearchContextProvider from "./context/SearchContext";

import Home from "./components/Home/Home";
import "./App.css";
const App = () => {
  const { Header, Content } = Layout;

  return (
    <div>
      <Layout>
        <Header className="br_header">
          <h1 className="br_header_text">GitHub Repository Search</h1>
        </Header>
        <Content className="br_content">
          <SearchContextProvider>
            <Home />
          </SearchContextProvider>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
