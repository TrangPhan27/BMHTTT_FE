import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"
import { useEffect, useState } from "react";
import client from "../@core/hooks/useApi"

const columns = [
    { id: "uuid", label: "Id", minWidth: 150 },
    { id: "username", label: "Username", minWidth: 100 },
    {
      id: "phone_num",
      label: "Số điện thoại",
      minWidth: 150,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "email",
      label: "Email",
      minWidth: 150,
      align: "center",
    },
    {
      id: "gender",
      label: "Gioi tính",
      minWidth: 80,
      align: "right",
    },
  ];
const ListUsers = ()=>{
    const [list, setList] = useState([])
    useEffect(()=>{
        const fetchData = async() => {
            const res = await client.get('/api/getall')
            if(res && res.status === 200){
                setList(res.data)
            } else {
                alert(res.message)
            }
            fetchData()
        }
    }, [])
    return(
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 600, color: "gray" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                        return (
                            <TableCell key={column.id} align={column.align} style={{ borderBottom: "none" }}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                        );
                      
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={5}
        component="div"
        count={list.length}
      />
    </Paper>
    )
}

export default ListUsers