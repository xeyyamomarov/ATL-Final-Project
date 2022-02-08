import { MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";


export const InputSelect = ({ value, label, name, data, onChange}) => {

  return (
      <Select
        fullWidth
        name={name}
        select
        label={label}
        value={value}
        onChange={onChange}
      >
        {data.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
  );
}