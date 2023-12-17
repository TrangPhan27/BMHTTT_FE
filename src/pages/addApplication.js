import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper, Typography } from '@mui/material';
import client from "../@core/hooks/useApi";
import { useNavigate } from 'react-router';

export default function AddApplication() {
  const navigate = useNavigate()
  const [dataForm, setDataForm] = React.useState({
    c_name: '',
    acc_type: '',
    climit: '',
    c_cccd: '',
    c_addr: '',
    c_email: '',
    c_phone_num: '',
    c_income: ''
  })
  const handleChange = (field, value) => {
    setDataForm({...dataForm, [field]: value})
  }
  const onSubmit = async ()=>{
    const data = new FormData()
    Object.entries(dataForm).forEach(field => {
      data.append(field[0], field[1])
    })
    const res = await client.post('/api/applications', data)
    if(res && res.status === 200){
      alert('Successfully')
      navigate("/")
    }
    else {
      alert(res.message)
    }
  }
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
      onSubmit={onSubmit}
    >

      <Box sx={{
        // ml:20
      }}>
        <TextField
          required
          id="outlined-required"
          label="Name"
          sx={{width:"40%"}}
          value={dataForm.c_name}
          onChange={(e) => handleChange('c_name', e.target.value)}
        />
         <TextField
          required
          id="outlined-required"
          label="Loai tai khoan"
          sx={{width:"20%"}} 
          value={dataForm.acc_type}
          onChange={(e) => handleChange('acc_type', e.target.value)}
        />
         <TextField
         type = {'number'}
          required
          id="outlined-required"
          label="Han muc"
          sx={{width:"30%"}} 
          value={dataForm.climit}
          onChange={(e) => handleChange('climit', e.target.value)}
        />
      </Box>
      
      <div>
        <TextField
          required
          id="outlined-required"
          label="CCCD"
          sx={{width:"50%"}}
          value={dataForm.c_cccd}
          onChange={(e) => handleChange('c_cccd', e.target.value)}
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
          value={dataForm.c_addr}
          onChange={(e) => handleChange('c_addr', e.target.value)}
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
          value={dataForm.c_email}
          onChange={(e) => handleChange('c_email', e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          type={'number'}
          id="outlined-required"
          label="Số điện thoại"
          sx={{width:"30%"}}
          value={dataForm.c_phone_num}
          onChange={(e) => handleChange('c_phone_num', e.target.value)}
        />
         <TextField
          required
          type={'number'}
          id="outlined-required"
          label="Thu nhập"
          sx={{width:"30%"}}
          value={dataForm.c_income}
          onChange={(e) => handleChange('c_income', e.target.value)}
        />
      </div>

    <stack spacing={2} direction="row">
      <Button variant="contained" sx={{width:"20%", ml:"30%", mr:"2%", mt:"5%", mb:"5%"}} onClick = {() => navigate("/")}>hủy bỏ</Button>
      <Button variant="outlined" sx={{width:"20%", mt:"5%", mb:"5%"}} onClick = {onSubmit}>Nộp hồ sơ</Button>
    </stack>
    </Paper>
    </text>
  );
}
