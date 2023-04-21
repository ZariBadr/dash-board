import React from 'react'
import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react"; 

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 200},
    { field: 'email', headerName: 'Email', width: 200},
    { field: 'status', headerName: 'Status', width: 160},
    { field: 'transaction', headerName: 'Transaction', width: 150},
    { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
    return (
      <>
        <Link to={"/user/" + params.row.id}>
          <button className="userListEdit">Edit</button>
        </Link>
        <DeleteOutlineOutlinedIcon className='userListDelete' onClick={()=>handleDelete(params.row.id)} />
      </>
    )
  }}
];
  return (
    <div className='userList'>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={10} checkboxSelection />
        </div>
    </div>
  )
}
