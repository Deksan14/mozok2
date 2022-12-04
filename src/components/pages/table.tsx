import React, { useState, useEffect } from "react";
import { DataGrid, GridRowParams } from "@material-ui/data-grid";
import { useNavigate } from "react-router-dom";
import "../pages/table.css";

interface Quote {
  quote_id: number;
  quote: string;
  author: string;
  series: string;
}

const DataTable = () => {
  const [tableData, setTableData] = useState<Quote[]>([]);
  const [select, setSelected] = useState<Quote>();

  let navigate = useNavigate();
  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/quotes")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  function ageRange(params: any) {
    if (params.row.age) {
      if (params.row.age < 51) {
        return "👶";
      }
      if (params.row.age > 50) {
        return "👨‍🦳";
      }
    } else {
      return "";
    }
  }

  const columns = [
    { field: "quote_id", headerName: "ID", hideable: false },
    { field: "quote", headerName: "Quote", width: 1000 },
    { field: "author", headerName: "Author", width: 200 },
    {
      field: "age",
      headerName: "Predict Age",
      valueGetter: ageRange,
      width: 200,
    },
  ];
  console.log(tableData);
  function handleRowSelection(params: any) {
    setSelected(params.row);
  }

  useEffect(() => {
    if (select) {
      const name = select.author.split(" ")[0];

      fetch(`https://api.agify.io/?name=${name}`)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          const newData = { ...select, age: data.age };
          const row = tableData.findIndex(
            (obj: Quote) => obj?.quote_id === select.quote_id
          );
          let oldTableData = [...tableData];

          if (newData) {
            oldTableData.splice(row, 1, newData);
          }
          setTableData(oldTableData);
        });
    }
  }, [select]);
  console.log(select);
  return (
    <div className="table" style={{ height: "650px", width: "100%" }}>
      <nav>
        <button
          className="button"
          onClick={() => {
            navigate("/random");
          }}
        >
          Get Random Quotes
        </button>
      </nav>

      <DataGrid
        onRowClick={handleRowSelection}
        rows={tableData}
        columns={columns}
        getRowId={(row) => row.quote_id}
        pageSize={10}
        loading={!tableData.length}
      />
      <footer className="ft"> Mozok Project</footer>
    </div>
  );
};

export default DataTable;
