import { TextField, Select, Box, MenuItem, Button, FormControl, InputLabel } from "@mui/material";


const SearchForm = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr' },
        border: '1px solid #E0E0E0',
        borderRadius: '4px',
      }}
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr' },
          borderRadius: '4px',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { sm: '1fr 1fr 1fr 1fr' },
            borderBottom: '1px solid #E0E0E0',
            padding: "15px",
            gap: 2
          }}
        >
          <TextField
            label="Ad Soyad"
          />
          <TextField
            label="İstifadəçi adı"
          />
          <TextField
            label="Vəzifə"
          />
          <TextField select label="Rollar">
            <MenuItem>Test 1</MenuItem>
            <MenuItem>Test 2</MenuItem>
            <MenuItem>Test 3</MenuItem>
          </TextField>

        </Box >

        <Box
        component="div"
        textAlign="right"
        sx={{
          padding: '15px',
        }}>
          <Button variant='text' color='inherit'>Təmizlə</Button>
          <Button variant='contained' color='primary' disableElevation sx={{
            marginLeft: '12px'
          }}>Axtar</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SearchForm;