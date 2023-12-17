import React, { useEffect, useState } from "react";
import "./File.scss";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Typography, Grid } from "@mui/material";
import TableDashboard from "./TableDashboard";
import client from '../@core/hooks/useApi'
import { useNavigate } from "react-router";

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
  const handleReadComment = (id) => () => {
    // setOpenReadComment(true)
    setIdApp(id)
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
  }, [openAddComment])
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
          <TableDashboard list={listAppli} onAddComment={handleAddComment} onReadComment={handleReadComment}/>
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
