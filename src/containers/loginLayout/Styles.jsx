import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    formWrapper:{
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    form: {
        display: 'flex', 
        flexDirection: 'column',
    },
    formItem: {
        height: 70,
        '&.MuiOutlinedInput-focused': {
            color:'red'
        }
    },
    loginButton: {
        width: 322,
        height: 53,
        '&.MuiButton-contained':{
            textTransform: 'none',
            backgroundColor:'#9B5AE1',
            '&:hover': {
                backgroundColor: '#A66CE4',
            }
        },
    }
})