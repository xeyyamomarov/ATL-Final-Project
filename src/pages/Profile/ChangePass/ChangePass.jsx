import {
  Card,
  Typography,
  TextField,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { makeStyles } from "@mui/styles";
import { SubmitButton, CloseButton } from "components/Buttons";
import { useSelector} from "react-redux";
import { TOGGLES_SELECTORS } from "store/Toggles";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const useStyles = makeStyles({
  typography: {
    fontSize: "12px",
    position: "relative",
    left: "25px",
  },
  icon: {
    position: "relative",
    top: "5px",
    cursor: "pointer",
  },
  cardContent: {
    background: "#FAFAFA",
    margin: "10px",
    border: "1px solid #BDBDBD",
    boxShadow: "none",
    height: "400px",
    position: "relative",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    background: "#FAFAFA",
    alignItems: "center",
  },
  btn: {
    margin: "5px",
    position: "absolute",
    top: "250px",
    left: "225px",

  },
});
export const ChangePass = () => {
  const passwordRepeatHidden = useSelector(
    TOGGLES_SELECTORS.getPasswordRepeatHidden
  );

  const classes = useStyles();
  return (
    <Card className={classes.cardContent}>
      <Box
        sx={{
          margin: "10px",
          background: "#FAFAFA",
          borderBottom: "1px solid #BDBDBD",
        }}
      >
        <Typography variant="h6">
          <KeyIcon className={classes.icon} />
          Şifrəni dəyişdir
        </Typography>
        <Typography className={classes.typography}>
          Başqa bir yerdə istifadə etmədiyin güclü bir şifrədən istifadə etməyin
          yaxşı fikirdir.
        </Typography>
      </Box>
      <Box className={classes.card}>
        <TextField
          sx={{ width: "600px" }}
          type={passwordRepeatHidden ? "password" : "text"}
          label=" Cari şifrə"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  {passwordRepeatHidden ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ width: "600px" }}
          type={passwordRepeatHidden ? "password" : "text"}
          label=" Yeni şifrə"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  {passwordRepeatHidden ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ width: "600px" }}
          type={passwordRepeatHidden ? "password" : "text"}
          label=" Yeni şifrənin təkrarı"
          name="passwordRepeat"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  {passwordRepeatHidden ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box className={classes.btn}>
          <SubmitButton/>
          <CloseButton  />
        </Box>
      </Box>
    </Card>
  );
};
