import React, { useEffect, useState } from "react";
import "./File.scss";
import { Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import TableDashboard from "./TableDashboard";
import client from '../@core/hooks/useApi'
import { Button } from "@mui/base";
import { useNavigate } from "react-router";

function File() {
  const navigate = useNavigate()
  const [listAppli, setListApp] = useState([])
  const [comment, setComment] = useState('')
  const handleSubmitComment = () => {
    
  }
  const fetchList = async () => {
    const res = await client.get('/api/applications')
    if(res && res.status === 200){
      setListApp(res.data)
    } else {
      alert(res.message)
    }
  }
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
          {/* <div className="sortbox">
            <select name="cars" id="cars" className="sortinput">
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div> */}
        </div>
        <div className="table">
          <TableDashboard list={listAppli}/>
        </div>
        
      </div>
      <Dialog >
          <DialogTitle>
          Thêm nhận xét vào hồ sơ của 
          </DialogTitle>
          <DialogContent>
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
