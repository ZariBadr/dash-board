import React from 'react'
import "./productList.css"
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react"; 

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };
      const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'price', headerName: 'Price', width: 200 },
        { field: 'status', headerName: 'Status', width: 200 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
            return (
              <>
                <Link to={"/product/" + params.row.id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutlineOutlinedIcon className='productsListDelete' onClick={()=>handleDelete(params.row.id)} />
              </>
            )
          }}
        ];
  return (
    <div className='productList'>
              <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                checkboxSelection />
    </div>
  )
}
