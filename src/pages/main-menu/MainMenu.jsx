import {
  LastQueries,
  MyQuerises,
  Employees,
  Anniversary,
  DayOff,
  Vacation,
  NextBirthdays,
  Trip
} from "./components/cards";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CARDS_ACTIONS, CARDS_SELECTORS } from "store/Cards";
import { Box } from "@mui/material";


const MainMenu = () => {
  const  data = useSelector(CARDS_SELECTORS.getCards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CARDS_ACTIONS.fetchCards());
  }, [dispatch]);
  return (
    <Box padding="16px">
      <LastQueries data={data.lastQueries} />
      <MyQuerises data={data.myQueries} />
      <Employees data={data.employees} />
      <Anniversary data={data.anniversary} />
      <DayOff data={data.dayOff} />
      <Vacation data={data.vacation}/>
      <NextBirthdays data={data.birthday}/>
      <Trip data={data.trip}/>
    </Box>
  );
};
export default MainMenu;
