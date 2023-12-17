import { Grid, TextField, Typography } from "@mui/material";
import { useState } from 'react';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import useAuth from '../@core/hooks/useAuth'

function Copyright(props) {
  
  return (
    <Typography variant="h5" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000">
        ISSBANK
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();
  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.id === 'username') {
      setUsername(event.target.value);
    }
    else {
      setPassword(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    auth.login(data);
  };
  return (
    <>
      <Grid container sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800
                  }}
                >
                  SIGN IN
                </Typography>
              </Grid>
              <Grid item>
                <img
                  alt='thumbnail' //TODO - Add an alternative img
                  src='/bankicon.png'
                  style={{
                    height: 60
                  }}
                />
              </Grid>
            </Grid>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} width='100%' maxWidth='md'>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <FormControlLabel
                    control={<Checkbox value="remember" />}
                    label="Remember me"
                  />
                </Box>
              </Box>
              <Button
                type="submit"
                fullWidth
                sx={{ mt: 3, mb: 2, height: 50 }}
                color='success'
                size='large'
                variant='contained'
                disabled={(username === '' || password === '') ? true : false}
              >
                Sign In
              </Button>
              <Grid
                container
                sx={{
                  border: 2,
                  // borderColor: colors.whiteAccent[600],
                  height: 40
                }}
                alignItems="center"
                justifyContent="center"
                gap={0.5}
              >
                <Grid item>
                  New to ISSBANK?
                </Grid>
                <Grid item>
                  <Link underline='none' href='/signup'>
                    Create an account
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <ResetRequestDialog open={openReset} setOpen={setOpenRequest} /> */}
    </>
  );
};

export default Login
