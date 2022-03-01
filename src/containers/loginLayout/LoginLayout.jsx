import { Alert, Box, Button, Grid, Snackbar } from "@mui/material";
import { ReactComponent as Logo } from "assets/logo.svg";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { useStyles } from './Styles';
import { LS } from 'utils';
import { useNavigate } from "react-router-dom";
import { appConfig } from "configs";
import CloseIcon from '@mui/icons-material/Close';
import { Warning } from "@mui/icons-material";


export const LoginLayout = () => {

    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const [snackBar, setSnackBar] = useState(false);


    const handleClose = () => {
        setSnackBar(false);
    };

    const [values, setValues] = useState({
        username: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const action = (

        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    console.log(error)
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={snackBar}
                onClose={handleClose}
                key='error'
                action={action}
            >
                <Alert onClose={handleClose} icon={<Warning fontSize="inherit" />} variant="filled" severity="error" sx={{}} >
                    İstifadəçi adı və ya şifrə yanlış daxil edilib
                </Alert>
            </Snackbar>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                    <Box sx={{ backgroundColor: "#9B5AE1", height: '100vh', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                        <Box>
                            <Logo />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Box className={classes.formWrapper}>
                        <Box
                            component="form"
                            onSubmit={event => {
                                event.preventDefault();
                                setLoading(true);
                                if (values.username === "admin" && values.password === "admin") {
                                    LS.setItemLocalStorage(appConfig.userData, JSON.stringify(values));
                                    navigate("/", { replace: true });
                                } else {
                                    setError(true);
                                    setSnackBar(true);
                                }
                                setLoading(false);
                            }
                            }
                            noValidate
                            autoComplete="off"
                            className={classes.form}>
                            <FormControl className={classes.formItem} error={error} variant="filled">
                                <InputLabel htmlFor="filled-adornment-password">İstifadəçi adı</InputLabel>
                                <OutlinedInput
                                    id="filled-adornment-text"
                                    type='text'
                                    value={values.username}
                                    onChange={handleChange('username')}
                                />
                            </FormControl>
                            <FormControl className={classes.formItem} error={error} variant="filled">
                                <InputLabel htmlFor="filled-adornment-password">Şifrə</InputLabel>
                                <OutlinedInput
                                    id="filled-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}

                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <Button variant="contained" type='submit' className={classes.loginButton}>Daxil ol</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
