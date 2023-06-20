import React from "react";
import { List } from "antd";

import RepoListItem from "./ReposListItem/ReposListItem";

const ReposList = ({ repos }) => {
  return (
    <List
      grid={{ gutter: 22, sm: 1, xs: 1, column: 2, xxl: 3 }}
      itemLayout="vertical"
      size="large"
      dataSource={repos}
      renderItem={(repo) => <RepoListItem repo={repo} />}
    />
  );
};

export default ReposList;
