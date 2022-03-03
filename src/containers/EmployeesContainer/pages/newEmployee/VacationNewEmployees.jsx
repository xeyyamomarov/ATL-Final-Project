import { Table } from "components/Table";
import { Box} from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { tabs } from "containers/EmployeesContainer/constants";
import { useStyles } from "containers/loginLayout/Styles";
import { Breadcrumbs } from "components/Breadcrumbs/Breadcrumbs";

const thead = [
    {
        key: "year",
        label: "İş ili",
        style: { minWidth: 170 },
    },
    {
        key: "main",
        label: "Əsas",
        minWidth: { minWidth: 170 }
    },
    {
        key: "extra",
        label: "Əlavə",
        minWidth: { minWidth: 170 }
    },
    {
        key: "used",
        label: "İstifadə edilmiş",
        minWidth: { minWidth: 170 }
    },
    {
        key: "rest",
        label: "Qalıq",
        minWidth: { minWidth: 170 }
    }
]
const tfoot = [
    {
        key: "total",
        value: "Total",
    },
    {
        key: "mainTotal",
        value: "33",
    },
    {
        key: "extraTotal",
        value: "33",
    },
    {
        key: "usedTotal",
        value: "33",
    },
    {
        key: "rest",
        value: "Qalıq",
    }
]

const data = [
    {
        id: '1',
        year: '25/06/2020 - 25/06/2021',
        main: '30',
        extra: '5',
        used: '2',
        rest: '33',
    },
    {
        id: '2',
        year: '25/06/2020 - 25/06/2021',
        main: '30',
        extra: '5',
        used: '2',
        rest: '33',
    },
    {
        id: '3',
        year: '25/06/2020 - 25/06/2021',
        main: '30',
        extra: '5',
        used: '2',
        rest: '33',
    }
]

export const NewEmployeesVacation = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.breadcrumbBar}>
                <Breadcrumbs />
            </Box>
            <QueryTabs tabs={tabs} value="vacation" />
            <Box sx={{ margin: 2 }}>
                <Table thead={thead} tfoot={tfoot} title="Əmək məzuniyyətləri" tbody={data} pagination />
            </Box>
        </>
    );
}