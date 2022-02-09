import { SearchBar } from "components/SearchBar";
import { Box } from '@mui/material';
import { AddButton } from "components/Buttons";
import { SearchButton } from "components/Buttons";
import { useState } from "react";

const Vacation = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const addNewHandleClick = () => console.log("some function");

  return (
    <>
      <SearchBar buttons={
        <>
          <SearchButton onClick={() => {
            setSearchOpen(!searchOpen);
          }} />
          <AddButton onClick={addNewHandleClick} />
        </>
      } />
      <Box padding="16px">
        {/* Business trip component body */}
      </Box>
    </>
  );
}

export default Vacation;