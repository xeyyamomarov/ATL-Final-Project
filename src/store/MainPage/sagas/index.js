import { all,fork } from "redux-saga/effects";
import { watchFetchLastQueries } from "./fetch-lastQueries.saga";
import { watchDeleteLastQueries } from "./delete-lastQueries.saga";
import { watchFetchMyQueries } from "./fetch-myQueries.saga";
import { watchDeleteMyQueries } from "./delete-myQueries.saga";
import {watchFetchEmployees} from "./fetch-employees.saga";
import { watchDeleteEmployees } from "./delete-employees.saga";
import { watchFetchAnniversary } from "./fetch-anniversary.saga";
import { watchDeleteAnniversary } from "./delete-anniversary.saga";
import { watchFetchDayOff } from "./fetch-dayOff.saga";
import { watchDeleteDayOff } from "./delete-dayOff.saga";
import { watchFetchVacation } from "./fetch-vacation.saga";
import { watchDeleteVacation } from "./delete-vacation.saga";
import { watchFetchNextBirthdays } from "./fetch-nextBirthdays.saga";
import { watchDeleteNextBirthdays } from "./delete-nextBIrthdays.saga";
import { watchFetchTrip } from "./fetch-trip.saga";
import { watchDeleteTrip } from "./delete-trip.saga";
import { watchFetchAdvertisements } from "./fetch-advertisements.saga";
import { watchDeleteTAdvertisements } from "./delete-advertisements.saga";
import {  watchDeleteVacationBalance } from "./delete-vacationBalance.saga";
import { watchFetchVacationBalance} from "./fetch-vacationBalance.saga";

function* mainPageSaga(){
    yield all([
        fork(watchFetchLastQueries),
        fork(watchDeleteLastQueries),
        fork(watchFetchMyQueries),
        fork(watchDeleteMyQueries),
        fork(watchDeleteEmployees),
        fork(watchFetchEmployees),
        fork(watchDeleteAnniversary),
        fork(watchFetchAnniversary),
        fork(watchDeleteDayOff),
        fork(watchFetchDayOff),
        fork(watchDeleteVacation),
        fork(watchFetchVacation),
        fork(watchDeleteNextBirthdays),
        fork(watchFetchNextBirthdays),
        fork(watchDeleteTrip),
        fork(watchFetchTrip),
        fork(watchDeleteTAdvertisements),
        fork(watchFetchAdvertisements),
        fork(watchDeleteVacationBalance),
        fork(watchFetchVacationBalance)
    ])
}
export {
    mainPageSaga
}