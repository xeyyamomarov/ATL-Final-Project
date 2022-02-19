import { Box, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { FormHead } from "containers/components";
import { InfoSection } from "containers/components/InfoSection";
import { makeStyles } from "@mui/styles";

const tabs = [
  { value: "one", label: "Sorğunun formalaşdırılması" },
  { value: "two", label: "Departament rəhbərin göndərməsi" },
  { value: "three", label: "HR göndərməsi" },
]

const useStyles = makeStyles({
  breadcrumbBar: {
    borderBottom: "1px solid #E0E0E0",
    padding: "12px 16px"
  },
  container: {
    padding: "16px 93px",
  },
  dataContainer: {
    display: "flex",
    gap: "16px",
    flexDirection: "column"
  },
  formBox: {
    border: "1px solid #E0E0E0",
    borderRadius: "4px",
  },
  button: {
    textAlign: "end"
  }
})

export const BusinessTripFormWorkerSaved = () => {
  const classes = useStyles();

  const rows = [
    { name: "Day Off tarixi", value: "25/05/2021" },
    { name: "Növü", value: "Tam iş günü" },
    { name: "Nəticə", value: "Departament rəhbərin göndərməsi" },
  ]
  return (
    <Box>
      <Box className={classes.breadcrumbBar}>
        <Breadcrumbs />
      </Box>
      <QueryTabs tabs={tabs} value="one"/>
      <Box className={classes.container}>
        <Box className={classes.dataContainer}>
          <InfoSection name="Lamiə Səyidova Əliağa" />
          <Box sx={{ border: "1px solid #E0E0E0", borderRadius: "4px" }}>
            <FormHead
              text="Sorğunun formalaşdırılması"
            />
            <Box padding="0 16px" display="flex" gap="14px" flexDirection="column">
              <TableContainer>
                <Table>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow
                        key={row.name}
                      >
                        <TableCell>
                          {row.name}
                        </TableCell>

                        <TableCell>
                          {row.value}
                        </TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};