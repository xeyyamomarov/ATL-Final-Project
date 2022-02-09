import {
  LastQueries,
  MyQuerises,
  Employees,
  Anniversary,
  DayOff,
  Vacation,
  NextBirthdays,
  Trip,
  // Advertisements,
  // VacationBalance
} from "./components/cards";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CARDS_ACTIONS, CARDS_SELECTORS } from "store/Cards";


const MainMenu = () => {
  const  data = useSelector(CARDS_SELECTORS.getCards);
  const dataLoading=useSelector(CARDS_SELECTORS.getCardsLoading);
  console.log(dataLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CARDS_ACTIONS.fetchCards());
  }, [dispatch]);
  return (
    <>
      <LastQueries  dataLoading  data={data.lastQueries} />
      <MyQuerises data={data.myQueries} />
      <Employees data={data.employees} />
      <Anniversary data={data.anniversary} />
      <DayOff data={data.dayOff} />
      <Vacation data={data.vacation}/>
      <NextBirthdays data={data.birthday}/>
      <Trip data={data.trip}/>
      {/* <Advertisements data={data.advertisements}/>
      <VacationBalance data={data.vacationbalance}/> */}
    </>
  );
};
export default MainMenu;
