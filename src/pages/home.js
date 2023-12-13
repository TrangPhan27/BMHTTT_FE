import { Grid, Button } from "@mui/material"
import { useNavigate } from "react-router"


const Home = () => {
    const navigate = useNavigate()
    const handleAddApplication = () => {
        navigate('/addApplication')
    }
    const handleListApplication = () => {
        navigate('/listApplication')
    }
    return (
        <Grid container>
        <Button onClick={handleAddApplication}>
        Add Application
        </Button>
        <Button onClick={handleListApplication}>
        List Applications
        </Button>
        </Grid>
    )
}
export default Home