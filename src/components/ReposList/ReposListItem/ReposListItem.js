import React, { useContext } from "react";
import { List, Avatar, Button } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";

import { SearchContext } from "../../../context/SearchContext";

const RepoListItem = ({ repo }) => {
  const { bookmarksRepos, toggleBookmark } = useContext(SearchContext);
  const isBookmarkedFound = bookmarksRepos.findIndex(
    (item) => item.id === repo.id
  );

  const handleBookmarkClick = () => {
    toggleBookmark(repo.id);
  };

  return (
    <List.Item
      actions={[
        <div>{repo.stargazers_count} stars</div>,
        <Button
          key="bookmark"
          icon={isBookmarkedFound !== -1 ? <StarFilled /> : <StarOutlined />}
          onClick={handleBookmarkClick}
        />,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={repo.owner.avatar_url} />}
        title={<a href={repo.html_url}>{repo.name}</a>}
        description={
          repo?.description?.length > 50
            ? `${repo.description.substring(0, 50)}...`
            : repo.description
        }
      />
    </List.Item>
  );
};

export default RepoListItem;
