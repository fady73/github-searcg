import React, { useContext } from "react";
import { Pagination as AntPagination, Row } from "antd";

import { SearchContext } from "../../context/SearchContext";

const Pagination = () => {
  const { totalPages, page, handlePageChange } = useContext(SearchContext);

  return (
    <Row justify="center">
      <AntPagination
        current={page}
        total={totalPages * 10}
        pageSize={10}
        pageSizeOptions={[]}
        onChange={handlePageChange}
      />
    </Row>
  );
};

export default Pagination;
