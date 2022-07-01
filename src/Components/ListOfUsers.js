import { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";

function ListOfUsers() {
  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "name",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
  ];
  const [users, setUsers] = useState([]);
  let { parm1 } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/avgrating/${parm1}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div style={{ height: 650, width: "100%" }}>
      {users && (
        <DataGrid
          experimentalFeatures={{ newEditingApi: true }}
          //   getRowHeight={() => "auto"}
          rows={users}
          columns={columns}
          pageSize={10}
          columnSizer="Star"
          rowsPerPageOptions={[10]}
          components={{
            Toolbar: GridToolbar,
          }}
          sx={{
            m: 5,
            boxShadow: 2,
            border: 2,
            borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
        />
      )}
    </div>
  );
}
export default ListOfUsers;
