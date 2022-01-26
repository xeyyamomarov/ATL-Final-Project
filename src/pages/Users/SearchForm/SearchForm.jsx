import { TextField, Box, MenuItem } from "@mui/material";
import GreyButton from "../components/Buttons/GreyButton";
import PurpleButton from "../components/Buttons/PurpleButton";


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
          <GreyButton text="Təmizlə" />
          <PurpleButton text="Axtar"/>
        </Box>
      </Box>
    </Box>
  );
}

export default SearchForm;