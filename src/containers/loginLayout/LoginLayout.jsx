import { Box, Button, Grid } from "@mui/material";
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
import { loginUser } from 'lib/api/login';
import {LS} from 'utils';


export const LoginLayout = () => {

    const classes = useStyles();
    const [loading, setLoading] = useState(false);
   // const navigate = useNavigate();

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


    return (
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
                            console.log(values);
                            setLoading(true);
                            // loginUser({ username: values.username, password: values.password })
                            //     .then((data) => {
                            //         LS.setItemLocalStorage(appConfig.userData, JSON.stringify(data));
                            //         navigate("/", { replace: true });
                            //     })
                            //     .catch((err) => alert("Xeta bas verdi"))
                            //     .finally(() => {
                            //         setLoading(false);
                            //     });
                        }
                        }
                        noValidate
                        autoComplete="off"
                        className={classes.form}>
                        <FormControl className={classes.formItem} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">İstifadəçi adı</InputLabel>
                            <OutlinedInput
                                id="filled-adornment-text"
                                type='text'
                                value={values.userName}
                                onChange={handleChange('username')}
                            />
                        </FormControl>
                        <FormControl className={classes.formItem} variant="filled">
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
    )
}
