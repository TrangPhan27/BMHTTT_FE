import React, { useEffect, useState } from "react";
import "./File.scss";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Typography, Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from "@mui/material";
import client from '../@core/hooks/useApi'
import { useNavigate } from "react-router";
const columns = [
  { id: "c_name", label: "Tên", minWidth: 150 },
  { id: "id", label: "Mã số hồ sơ", minWidth: 100 },
  {
    id: "c_phone_num",
    label: "Số điện thoại",
    minWidth: 150,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "c_email",
    label: "Email",
    minWidth: 150,
    align: "center",
  },
  {
    id: "c_addr",
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
function File() {
  const navigate = useNavigate()
  const [listAppli, setListApp] = useState([])
  const [comment, setComment] = useState('')
  const [openAddComment, setOpenAddComment] = useState(false)
  const [listComment, setListComment] = useState([])
  const [idApp, setIdApp] = useState('')
  const handleSubmitComment = async () => {
    const data = new FormData()
    data.append('id', idApp)
    data.append('comment', comment)
    const res = await client.post('api/applications', data )
    if(res && res.status === 200){
      setOpenAddComment(false)
    }
    else {
      alert(res.message)
    }
  }
  const handleAddComment = (id) => () => {
    setOpenAddComment(true)
    setIdApp(id)
  }
  const handleDeleteAppli = (id) => async() => {
    const res = await client.delete('api/applications', {id})
    if(res && res.status === 200){
      alert('Delete successfully')
      fetchList()
    } else {
      alert(res.message)
    }
  }
  const fetchList = async () => {
    const res = await client.get('/api/applications')
    if(res && res.status === 200){
      setListApp(res.data)
    } else {
      alert(res.message)
    }
  }
  useEffect(()=>{
    const fetchListComment = async () => {
      const res = await client.get(`/api/applications/${idApp}`)
      if(res && res.status === 200){
        setListComment(res.data)
      } else {
        alert(res.message)
      }
    }
    if(openAddComment){
      fetchListComment()
    }
  }, [openAddComment, idApp])
  useEffect(() => {
    fetchList()
  }, [])
  return (
    <div className="Customer-container">
      <div className="allbox">
        <div className="labelbox">
          <p className="textlable">DANH SÁCH HỒ SƠ</p>
          <div className="searchbox">
            <input type="text" className="searchinput" />
          </div>
        </div>
        <div className="table">
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
              {listAppli.length && listAppli.map((row) => {
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
                            <Button variant="contained" sx = {{mr:"1%"}} onClick={handleAddComment(row.id)}>{'Comment'}</Button>
                            <Button variant="contained" sx = {{mr:"1%"}} onClick={handleDeleteAppli(row.id)}>Delete</Button>
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
          count={listAppli.length}
        />
      </Paper>
        </div>
        
      </div>
      <Dialog open={openAddComment} onClose={() => setOpenAddComment(false)}>
          <DialogTitle>
          Thêm nhận xét vào hồ sơ của {idApp}
          </DialogTitle>
          <DialogContent>
          <Grid container flexDirection="column" spacing={6}>
          {listComment.map(comment => <Typography variant="body1">{comment}</Typography>)}
          </Grid>
          <TextField 
          multiline
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          />
          </DialogContent>
          <DialogActions>
          <Button onClick={handleSubmitComment}>Submit</Button>
          <Button onClick={()=> navigate('/listApplication')}>Cancle</Button>
          </DialogActions>
      </Dialog>
    </div>
  );
}

export default File;
