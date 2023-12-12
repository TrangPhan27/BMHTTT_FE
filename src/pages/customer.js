import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper, Typography } from '@mui/material';



export default function Customer() {
  return (
    <text>
    <Typography sx={{mt:5, mb:2, ml:40}}>THÔNG TIN CÁ NHÂN </Typography>

    <Paper
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1},
        ml:40,
        width:"800px"
      }}
      noValidate
    >

      <Box sx={{
        // ml:20
      }}>
        <TextField
          required
          id="outlined-required"
          label="Name"
          sx={{width:"40%"}}
        />
         <TextField
          required
          id="outlined-required"
          label="Job"
          sx={{width:"20%"}} 
        />
         <TextField
          required
          id="outlined-required"
          label="Birth"
          sx={{width:"30%"}} 
        />
      </Box>
      
      <div>
        <TextField
          required
          id="outlined-required"
          label="CCCD"
          sx={{width:"50%"}}
        />
          <TextField
          required
          id="outlined-required"
          label="Mã số thuế"
          sx={{width:"42%"}}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Địa chỉ thường trú"
          sx={{width:"94%"}}         
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Địa chỉ hiện tại"
          sx={{width:"94%"}}  
        />
      </div>

      <div>
        <TextField
          required
          id="outlined-required"
          label="Giới tính"
          sx={{width:"30%"}} 
        />
         <TextField
          required
          id="outlined-required"
          label="Quốc tịch"
          sx={{width:"30%"}} 
        />
        <TextField
          required
          id="outlined-required"
          label="Tôn giáo"
          sx={{width:"30%"}} 
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          sx={{width:"94%"}} 
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Số điện thoại"
          sx={{width:"30%"}}
         
        />
         <TextField
          required
          id="outlined-required"
          label="Thu nhập"
          sx={{width:"30%"}}
        />
      </div>

    <stack spacing={2} direction="row">
      <Button variant="contained" sx={{width:"20%", ml:"30%", mr:"2%", mt:"5%", mb:"5%"}}>hủy bỏ</Button>
      <Button variant="outlined" sx={{width:"20%", mt:"5%", mb:"5%"}}>Nộp hồ sơ</Button>
    </stack>


    
    </Paper>

    </text>











  );
}