import { SearchBar } from "components/SearchBar";
import { Box } from '@mui/material';
import { AddButton } from "components/Buttons";

const EmployeesPage = () => {

  const addNewHandleClick = () => console.log("some function");

    return (
        <>
          <SearchBar buttons={
              <AddButton onClick={addNewHandleClick} />
          } />
          <Box padding="16px">
            {/* Emekdaslar component body */}
          </Box>
        </>
      );
    }

export default EmployeesPage;