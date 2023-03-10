import React from "react";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import "@ui5/webcomponents/dist/TableCell";
import "@ui5/webcomponents/dist/Button";
// import "@ui5/webcomponents/dist/Icon";
import data from "../../table-data/tabledata.js";

import './master-table.css';

const MasterTable = (props) => {
  return (
    <>
      <ui5-table
        className="demo-table"
        id="table"
        no-data-text="No Data"
        show-no-data
      >
        <ui5-table-column slot="columns" style={{ width: "12rem" }}>
          <span style={{ lineHeight: "1.4rem" }}>Product</span>
        </ui5-table-column>

        <ui5-table-column slot="columns" min-width="800" popin-text="Supplier">
          <span style={{ lineHeight: "1.4rem" }}>Supplier</span>
        </ui5-table-column>

        <ui5-table-column
          slot="columns"
          min-width="600"
          popin-text="Dimensions"
          demand-popin
        >
          <span style={{ lineHeight: "1.4rem" }}>Dimensions</span>
        </ui5-table-column>

        <ui5-table-column
          slot="columns"
          min-width="600"
          popin-text="Weight"
          demand-popin
        >
          <span style={{ lineHeight: "1.4rem" }}>Weight</span>
        </ui5-table-column>

        <ui5-table-column slot="columns">
          <span style={{ lineHeight: "1.4rem" }}>Price</span>
        </ui5-table-column>

        {/* <ui5-table-column slot="columns">
          <span style={{ lineHeight: "1.4rem" }}>Actions</span>
        </ui5-table-column> */}

        {data.map((d) => (
          <TableRow {...d} key={d.model} />
        ))}
      </ui5-table>
    </>
  );
};

// const showData = () => {
//   alert('test')
// };

const TableRow = (props) => {

  return (
    <ui5-table-row
      ui5-table-row=""
      _tab-index="0"
      slot="default-1"
      style={{ textAlign: "left" }}
    >
      <ui5-table-cell ui5-table-cell="" first-in-row="" slot="default-1">
        <div className="double-line-content">
          <span>
            <b>{props.name}</b>
          </span>
          <span style={{ marginTop: "0.5rem" }}><p>{props.model}</p></span>
        </div>
      </ui5-table-cell>
      <ui5-table-cell ui5-table-cell="" slot="default-2">
        <span className="middle">{props.supplier}</span>
      </ui5-table-cell>
      <ui5-table-cell ui5-table-cell="" slot="default-3">
        <span className="middle">{props.dim}</span>
      </ui5-table-cell>
      <ui5-table-cell ui5-table-cell="" slot="default-4">
        <span style={{ color: "#2b7c2b" }} className="middle">
          <b>{props.weight}</b>
          {props.weightUnit}
        </span>
      </ui5-table-cell>
      <ui5-table-cell ui5-table-cell="" last-in-row="" slot="default-5">
        <span className="middle">
          <b>{props.price}</b>
          {props.priceUnit}
        </span>
      </ui5-table-cell>
       {/* <ui5-table-cell>
        <ui5-button design="Default" icon="edit" onClick={showData}></ui5-button>
      </ui5-table-cell>  */}
    </ui5-table-row>
  );
};

export default MasterTable;
