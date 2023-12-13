import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, IconButton } from "@mui/material";
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import IconButton from '@mui/material/IconButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';



const columns = [
  { id: "name", label: "Tên", minWidth: 150 },
  { id: "Uuid", label: "Mã số hồ sơ", minWidth: 100 },
  {
    id: "phone",
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
    id: "country",
    label: "Thành phố",
    minWidth: 80,
    align: "right",
  },
  {
    id: "Action",
    label: "Action",
    minWidth: 150,
    align: "center",

  },
];

function createData(name, Uuid, phone, email, country, Action) {
  return { name, Uuid, phone, email, country };
}

const rows = [
  createData(
    "Jane Cooper",
    "123456789123",
    "(028) xxx-xxx",
    "abc@gmail.com",
    "Thu Duc",
    "Accept"
  ), createData(
    "Jane Cooper",
    "123456789123",
    "(028) xxx-xxx",
    "abc@gmail.com",
    "Thu Duc",
    "Accept"
  ), createData(
    "Jane Cooper",
    "123456789123",
    "(028) xxx-xxx",
    "abc@gmail.com",
    "Thu Duc",
    "Accept"
  ), createData(
    "Jane Cooper",
    "123456789123",
    "(028) xxx-xxx",
    "abc@gmail.com",
    "Thu Duc",
    "Accept"
  ), createData(
    "Jane Cooper",
    "123456789123",
    "(028) xxx-xxx",
    "abc@gmail.com",
    "Thu Duc",
    "Accept"
  ), createData(
    "Jane Cooper",
    "123456789123",
    "(028) xxx-xxx",
    "abc@gmail.com",
    "Thu Duc",
    "Accept"
  ), createData(
    "Jane Cooper",
    "123456789123",
    "(028) xxx-xxx",
    "abc@gmail.com",
    "Thu Duc",
    "Accept"
  ), createData(
    "Jane Cooper",
    "123456789123",
    "(028) xxx-xxx",
    "abc@gmail.com",
    "Thu Duc",
    "Accept"
  ), createData(
    "Jane Cooper",
    "123456789123",
    "(028) xxx-xxx",
    "abc@gmail.com",
    "Thu Duc",
    "Accept"
  ), createData(
    "Jane Cooper",
    "123456789123",
    "(028) xxx-xxx",
    "abc@gmail.com",
    "Thu Duc",
    "Accept"
  ), createData(
    "Jane Cooper",
    "123456789123",
    "(028) xxx-xxx",
    "abc@gmail.com",
    "Thu Duc",
    "Accept"
  ), createData(
    "Jane Cooper",
    "123456789123",
    "(028) xxx-xxx",
    "abc@gmail.com",
    "Thu Duc",
    "Accept"
  ), createData(
    "Jane Cooper",
    "123456789123",
    "(028) xxx-xxx",
    "abc@gmail.com",
    "Thu Duc",
    "Accept"
  ), createData(
    "Jane Cooper",
    "123456789123",
    "(028) xxx-xxx",
    "abc@gmail.com",
    "Thu Duc",
    "Accept"
  ),
];



export default function TableDashboard({ list, onAddComment, onReadComment }) {

  return (
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
            {rows
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.label !== "Action") {
                        return (
                            <TableCell key={column.id} align={column.align} style={{ borderBottom: "none" }}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                        );
                      }
                      return (
                        <TableCell key={column.id} align={column.align} style={{ borderBottom: "none" }}>
                          <Button variant="contained" sx = {{mr:"1%"}} onClick={onAddComment}>Thêm</Button>
                          <Button variant="outlined" onClick = {onReadComment}>Xem</Button>
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
        count={rows.length}
      />
    </Paper>
  );
  // const ActionMenu = ({ row }) => {
  //   const [anchorEl, setAnchorEl] = React.useState(null);

  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };

  //   const handleView = () => {
  //     // Xử lý logic khi chọn 'Xem đánh giá'
  //     handleClose();
  //   };

  //   const handleAddReview = () => {
  //     // Xử lý logic khi chọn 'Thêm đánh giá'
  //     handleClose();
  //   };

  //   return (
  //     <div>
  //       <IconButton
  //         aria-controls="simple-menu"
  //         aria-haspopup="true"
  //         onClick={handleClick}
  //       >
  //         <MoreVertIcon />
  //       </IconButton>
  //       <Menu
  //         id="simple-menu"
  //         anchorEl={anchorEl}
  //         keepMounted
  //         open={Boolean(anchorEl)}
  //         onClose={handleClose}
  //       >
  //         <MenuItem onClick={handleView}>Xem đánh giá</MenuItem>
  //         <MenuItem onClick={handleAddReview}>Thêm đánh giá</MenuItem>
  //       </Menu>
  //     </div>
  //   );
  // };

}
