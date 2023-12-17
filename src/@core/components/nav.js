import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Button, Grid } from "@mui/material";

function Nav() {
  const { authed, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Grid container justifyContent={"space-between"} flexWrap={'nowrap'} borderBottom={'solid 2px'} p={'2px 8px 2px 8px'}>
      <Grid item container gap={'10px'}>
        <Link to="/"><Button sx={{fontWeight: 600}}>Home</Button></Link>
        <Link to="/addApplication"><Button sx={{fontWeight: 600}}>Add Application</Button></Link>
        <Link to="/listApplication"><Button sx={{fontWeight: 600}}>List Application</Button></Link>
        <Link to="/listUsers"><Button sx={{fontWeight: 600}}>List Users</Button></Link>
      </Grid>
      {authed && (
        <Grid item>
          <Button onClick={handleLogout} variant="contained">Logout</Button>
        </Grid>
      )}
    </Grid>
  );
}

export default Nav;
