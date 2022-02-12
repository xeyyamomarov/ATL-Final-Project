import { Box, Grid} from "@mui/material";
import { ReactComponent as Logo } from "assets/logo.svg";


export const Login = () => {
    return (

      <Grid container spacing={2}>
  <Grid item xs={12} sm={6} >
    <Box sx={{backgroundColor: "#9B5AE1", height: '100vh', display:'flex', justifyContent: 'center', alignItems: "center"}}> 
    <Box>
    <Logo />
    </Box>
    
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} >
    <Box sx={{height: '100vh'}}>

    </Box>
  </Grid>

</Grid>

    )
}