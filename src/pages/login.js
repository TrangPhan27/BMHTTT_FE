import { Card, CardActions, CardContent, CardHeader, Grid, TextField, Typography } from "@mui/material";

const Login = () => {
  return (
    <Card>
      <CardHeader title="Login" />
      <CardContent>
      <Grid container>
      <Typography>Username</Typography>
      <TextField />
      </Grid>
      <Grid container>
      <Typography>Password</Typography>
      <TextField />
      </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default Login
