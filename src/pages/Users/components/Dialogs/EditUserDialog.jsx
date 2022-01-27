import { DialogContent, Select, DialogTitle, Dialog, DialogActions, TextField, MenuItem, Box, Grid, InputLabel } from "@mui/material";
import { useState } from "react";
import GreenButton from "../Buttons/GreenButton";
import GreyButton from "../Buttons/GreyButton";

const EditUserDialog = (props) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [position, setPosition] = useState([]);
  const [chipData, setChipData] = useState([
    { key: 0, label: 'User' },
    { key: 1, label: 'Reporter' },
    { key: 2, label: 'Admin' },
    { key: 3, label: 'Manager' },
  ]);
  const { open, close } = props;

  const handleSuccess = () => console.log(name, username, position);
  const handleClose = () => close(prev => !prev);

  return (
    <Dialog open={open}>

      <DialogTitle sx={{ padding: '12px 16px' }}>
        İstifadəçinin redaktəsi
      </DialogTitle>

      <DialogContent dividers sx={{ padding: '16px !important' }}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField select fullWidth
                label="Əməkdaş*"
                disabled
                value={name}
                onChange={e => setName(e.target.value)}
                sx={{
                  minWidth: "263px",
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      border: "2px dotted"
                    }
                  }
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth
                value={username}
                onChange={e => setUsername(e.target.value)}
                label="İstifadəçi adı*"
                sx={{
                  minWidth: "263px",
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <InputLabel id='rollar'>Rollar</InputLabel>
              <Select multiple labelId="rollar" fullWidth
                value={chipData}
                onChange={e => setPosition(e.target.value)}
              >
                {chipData.map(item => {
                  return (
                    <MenuItem key={item.key} value={item.label}>{item.label}</MenuItem>
                  )
                })}
              </Select>
            </Grid>

          </Grid>
        </Box>
      </DialogContent>

      <DialogActions sx={{ padding: '12px 16px' }}>
        <GreyButton text="Bağla" onClick={handleClose} />
        <GreenButton text="Yadda Saxla" onClick={handleSuccess} />
      </DialogActions>

    </Dialog>
  );
}

export default EditUserDialog;