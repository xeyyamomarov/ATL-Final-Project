import { TextField } from "@mui/material";
import { useField } from "formik";

export const TextFieldWrapper = ({
  name,
  ...otherProps
}) => {

  const [field, meta] = useField(name)

  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,

  }

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <TextField {...configTextField}
      // sx={{
      //   "& .MuiFilledInput-root": {
      //     backgroundColor: "white",
      //     borderRadius: "4px",
      //     border: "1px solid rgba(0, 0, 0, 0.23)",
      //     "&::before" : {
      //       borderBottom: "none"
      //     },
      //     "&:hover": {
      //       backgroundColor: "white",
      //       border: "1px solid black",
      //       "&:before" : {
      //         borderBottom: "none"
      //       }
      //     }
      //   }
      // }}
    />
  );
};