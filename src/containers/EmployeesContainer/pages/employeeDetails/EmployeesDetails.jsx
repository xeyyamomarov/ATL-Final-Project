import { Avatar, Box } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs/Breadcrumbs";
import { QueryTabs } from "containers/components/QueryTabs";
import { detailsTabs } from "containers/EmployeesContainer/constants";
import { useStyles } from "styles/Styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

const employee = {
  firstName: "Xəyalə",
  lastName: "Aslanova",
  patronymic: "Əliağa",
  avatar: "https://picsum.photos/200",
  gender: "Qadın",
  birthDay: "21/06/1985",
  age: "35",
  maritalStatus: "Evli",
  fin: "1QVRNU3",
  company: "Xəzan TV",
  departments: "Xəzan FM",
  positionStatus: "Fəhlə",
  position: "Aparıcı",
  citizenship: "Azərbaycan",
  nationality: "Azərbaycanlı",
  education: "Ali",
  email: "xeyale@gmail.com",
  staff: "Tam",
  workplace: "Əsas",
  mobile: "+994 55 342 32 23",
  corporateNumber: "-",
  internalNumber: "-",
  homeNumber: "-",
  relatives: "əyat yoldaşı",
  relativesPhoneNumber: "-",
  workingTime: "-",
  weeklyWorkingHours: "156",
}


const rows = [
  { name: "Ad Soyad Ata", value: `${employee.firstName} ${employee.lastName} ${employee.patronymic}` },
  { name: "Ailə vəziyyəti", value: employee.maritalStatus },
  { name: "Cinsi", value: employee.gender },
  { name: "FİN", value: employee.fin },
  { name: "Şəxsiyyət vəsiqənin seriya nömrəsi", value: `${employee.birthDay} (${employee.age} yaş)` },
  { name: "Vətəndaşlıq", value: employee.citizenship },
  { name: "Milliyyəti", value: employee.nationality },
  { name: "Təhsil", value: employee.education },
  { name: "E-ünvan", value: employee.email },
  { name: "Mobil nömrə", value: employee.mobile },
  { name: "Korporativ nömrə", value: employee.corporateNumber },
  { name: "Daxili nömrə", value: employee.internalNumber },
  { name: "Ev telefonu", value: employee.homeNumber },
  { name: "Yaxın qohumun kimliyi", value: employee.relatives },
  { name: "Yaxın qohum(mob)", value: employee.relativesPhoneNumber },
  { name: "Şirkət", value: employee.company },
  { name: "Şöbə", value: employee.departments },
  { name: "Vəzifə təsnifatı", value: employee.positionStatus },
  { name: "Vəzifə", value: employee.position },
  { name: "İş vaxtı", value: employee.workingTime },
  { name: "Həftəlik iş saatı", value: employee.weeklyWorkingHours },
  { name: "Ştat tutumu", value: employee.staff },
  { name: "İş yeri", value: employee.workplace }
]

export const EmployeesDetails = () => {

  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.breadcrumbBar}>
        <Breadcrumbs />
      </Box>
      <QueryTabs tabs={detailsTabs} value="mainDetails" />
      <Box sx={{ padding: "0 20px", margin: 2, border: "1px solid #C4C4C4", borderRadius: 1 }}>

        <TableContainer >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow
                key="avatar"
              >
                <TableCell
                  component="th"
                  scope="row"
                  variant="head"
                  sx={{
                    width: 244,
                    color: "gray",
                    padding: "0"
                  }}>
                  Foto şəkil
                </TableCell>
                <TableCell>
                  <Avatar
                    alt={employee.fullName}
                    src={employee.avatar}
                    sx={{ width: 160, height: 160 }}
                  />
                </TableCell>
              </TableRow>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    variant="head"
                    sx={{
                      width: 244,
                      color: "gray",
                      padding: "0"
                    }}>
                    {row.name}
                  </TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}