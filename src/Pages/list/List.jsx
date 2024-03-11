import React from "react";

import "./list.scss";
import DataTable from "../../components/datatable/DataTable";

function List() {
  return (
    <div className="list">
      <div className="listsContainer">
        <DataTable />
      </div>
    </div>
  );
}

export default List;
