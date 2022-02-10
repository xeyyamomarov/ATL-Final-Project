import { MenuItem, Select } from "@mui/material";


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