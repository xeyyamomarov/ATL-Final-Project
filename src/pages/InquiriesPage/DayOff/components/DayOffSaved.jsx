import { Box, TableBody, TableCell, TableRow } from "@mui/material";
import DialogHead from "pages/InquiriesPage/components/FormHead";
import { InputSelect } from "pages/InquiriesPage/components/InputSelect";
import SubmitButton from "components/Buttons/SubmitButton";
import DateInput from "pages/InquiriesPage/components/DateInput";
import { QueryTabs } from "pages/InquiriesPage/components/QueryTabs";
import Breadcrumbs from "components/Breadcrumbs";
import { FormHead } from "pages/InquiriesPage/components";
import { Testquery } from "./Test";
import { InfoSection } from "pages/InquiriesPage/components/InfoSection";

// import { DatePicker, DesktopDatePicker } from "formik-mui-lab";
// import { Field } from "formik";

const dayOffTypes = [
  { value: "Tam", label: "Tam gün" },
  { value: "Yarım", label: "Yarım gün" },
  { value: "2 saat", label: "2 saat" }
]

const resultDatas = [
  { value: "DepartmentHead", label: "Departament rəhbərin göndərməsi" },
  { value: "HR", label: "HR göndərməsi" },
  { value: "Confirmed", label: "Təsdiqləndi" }
]

const tabs = [
  { value: "one", label: "Sorğunun formalaşdırılması" },
  { value: "two", label: "Departament rəhbərin göndərməsi" },
  { value: "three", label: "HR göndərməsi" },
]

export const DayOffSaved = () => {

  const rows = [
    { name: "Day Off tarixi", value: "25/05/2021" },
    { name: "Növü", value: "Tam iş günü" },
    { name: "Nəticə", value: "Departament rəhbərin göndərməsi" },
  ]
  return (
    <Box>
      <Box
        sx={{
          borderBottom: "1px solid #E0E0E0",
          padding: "12px 16px"
        }}
      >
        <Breadcrumbs />
      </Box>
      <QueryTabs tabs={tabs} />
      <Box padding="16px 93px">
        <Box display="flex" gap="16px" flexDirection="column">
            <InfoSection name="Lamiə Səyidova Əliağa" />
          <Box sx={{ border: "1px solid #E0E0E0", borderRadius: "4px" }}>
            <FormHead text="Sorğunun formalaşdırılması" />
            <Box padding="16px" display="flex" gap="14px" flexDirection="column">
              <TableBody>
                {rows.map((row) => (
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
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};