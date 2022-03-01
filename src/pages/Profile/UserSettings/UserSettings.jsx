import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  box: {
    display: "flex",
    marginTop: "10px",
    width: "100%",
  },
  boxContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #BDBDBD",
    minWidth: "250px",
    margin: "10px",
    borderRadius: "4px",

  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "5px",
    border: "1px solid #BDBDBD",
    margin: "10px",
  },
});
export const UserSettings = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Box className={classes.boxContent}>
        <AccountCircleIcon sx={{ fontSize: "80px", color: "gray" }} />
        <Typography fontSize="16px" variant="h6" color="black">
          Xəyalə Aslanova Əliağa
        </Typography>
        <Typography variant="h6" color="#BDBDBD">
          Aparıcı
        </Typography>
      </Box>
      <Card className={classes.form}>
        <CardContent>
          <Grid container>
            <Grid xs={12} item>
              <TextField label="İstifadəçi adı" variant="standard" fullWidth />
            </Grid>
            <Grid xs={12} item>
              <TextField label="Elektron poçt" variant="standard" fullWidth />
            </Grid>
            <Grid xs={12} item>
              <TextField label="Əlaqə nömrəsi" variant="standard" fullWidth />
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="İstifadəçi rolları"
                variant="standard"
                fullWidth
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
    //   </Card>
  );
};
