import { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";

function ListOfUsers() {
  const columns = [
    {
      field: "id",
      headerName: "id",
      headerAlign: "center",
      align: "center",
      flex: 1
    },
    {
      field: "name",
      headerName: "name",
      headerAlign: "center",
      align: "center",
      flex: 1
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
    <>
      {users && (
        <DataGrid
          rows={users}
          autoHeight
          showCellRightBorder={true}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      )}
    </>
  );
}
export default ListOfUsers;
