import { SearchBar } from "components/SearchBar";
import { Box } from '@mui/material';
import { AddButton } from "components/Buttons";

const NotificationsPage = () => {

  const addNewHandleClick = () => console.log("some function");

    return (
        <>
          <SearchBar buttons={
              <AddButton onClick={addNewHandleClick} />
          } />
          <Box padding="16px">
            {/* Elanlar component body */}
          </Box>
        </>
      );
    }

export default NotificationsPage;