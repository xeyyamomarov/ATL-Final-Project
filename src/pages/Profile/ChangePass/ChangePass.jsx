import React from "react";
import {
  Card,
  Typography,
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { makeStyles } from "@mui/styles";
import { SubmitButton, CloseButton } from "components/Buttons";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const useStyles = makeStyles({
  typography: {
    fontSize: "12px",
  },
  icon: {
    cursor: "pointer",
  },
  cardContent: {
    background: "#FAFAFA",
    margin: "10px",
    border: "1px solid #BDBDBD",
    boxShadow: "none",
    height: "400px",
    display: "flex",
    flexDirection: "column",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    background: "#FAFAFA",
    alignItems: "center",
    padding: " 0 100px",
    gap: 5,
  },
  btn: {
    margin: "5px",
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    gap: 10,
  },
});
export const ChangePass = () => {
  const [passValue, setPassValue] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [newPassValue, setNewPassValue] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [newPassRepeat, setNewPassRepeat] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setPassValue({ ...passValue, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPassValue({
      ...passValue,
      showPassword: !passValue.showPassword,
    });
  };

  const handleChangeNew = (prop) => (event) => {
    setNewPassValue({ ...newPassValue, [prop]: event.target.value });
  };

  const handleClickNewPassword = () => {
    setNewPassValue({
      ...newPassValue,
      showPassword: !newPassValue.showPassword,
    });
  };

  const handleChangeRepeat = (prop) => (event) => {
    setNewPassRepeat({ ...newPassRepeat, [prop]: event.target.value });
  };

  const handleClickRepeattPassword = () => {
    setNewPassRepeat({
      ...newPassRepeat,
      showPassword: !newPassRepeat.showPassword,
    });
  };

  const classes = useStyles();
  return (
    <Card className={classes.cardContent}>
      <Box
        sx={{
          background: "#FAFAFA",
          borderBottom: "1px solid #BDBDBD",
          display: "flex",
          gap: 2,
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            transform: "rotate(45deg)",
          }}
        >
          <KeyIcon className={classes.icon} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">Şifrəni dəyişdir</Typography>
          <Typography className={classes.typography}>
            Başqa bir yerdə istifadə etmədiyin güclü bir şifrədən istifadə
            etməyin yaxşı fikirdir.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.form}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Cari şifrə
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={passValue.showPassword ? "text" : "password"}
            value={passValue.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {passValue.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Cari şifrə"
          />
        </FormControl>

        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Yeni şifrə
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={newPassValue.showPassword ? "text" : "password"}
            value={newPassValue.password}
            onChange={handleChangeNew("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickNewPassword} edge="end">
                  {newPassValue.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Yeni şifrə"
          />
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Yeni şifrənin təkrarı
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={newPassRepeat.showPassword ? "text" : "password"}
            value={newPassRepeat.password}
            onChange={handleChangeRepeat("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickRepeattPassword} edge="end">
                  {newPassRepeat.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Yeni şifrənin təkrarı"
          />
        </FormControl>
        <Box className={classes.btn}>
          <SubmitButton />
          <CloseButton />
        </Box>
      </Box>
    </Card>
  );
};
