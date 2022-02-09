import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";


const DateInput = ({label, value, onChange}) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        renderInput={(props) => <TextField fullWidth {...props} />}
        value={value}
        label={label}
        onChange={onChange}
        inputFormat="dd/MM/yyyy"
        InputAdornmentProps={{ position: "start" }}
      />
    </LocalizationProvider>
  );
}

export default DateInput;