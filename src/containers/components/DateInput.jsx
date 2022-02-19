import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/lab";


export const DateInput = ({ label, value, onChange }) => {
  // const [value, setValue] = useState('')
  // const handleChange = input => setValue(input);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        inputFormat="dd/MM/yyyy"
        InputAdornmentProps={{ position: "start" }}
        value={value}
        onChange={onChange}
        renderInput={ props => <TextField fullWidth {...props} />}
      />
    </LocalizationProvider>
  );
};