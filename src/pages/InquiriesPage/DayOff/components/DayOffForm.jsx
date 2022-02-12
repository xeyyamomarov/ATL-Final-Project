import { Box } from "@mui/material";
import { InputSelect } from "pages/InquiriesPage/components/InputSelect";
import SubmitButton from "components/Buttons/SubmitButton";
import { DateInput } from "pages/InquiriesPage/components/DateInput";
import { QueryTabs } from "pages/InquiriesPage/components/QueryTabs";
import Breadcrumbs from "components/Breadcrumbs";
import { FormHead } from "pages/InquiriesPage/components";


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

export const DayOffForm = () => {


  return (
    <Box>
      <Box 
      sx={{
        // display: 'flex',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        borderBottom: "1px solid #E0E0E0",
        padding: "12px 16px"
      }}
      >
        <Breadcrumbs />
      </Box>
      <QueryTabs tabs={tabs} />
      <Box padding="16px 93px" textAlign="end">
        <Box display="flex" gap="16px" flexDirection="column">
          <Box sx={{ border: "1px solid #E0E0E0", borderRadius: "4px" }}>
            <FormHead text="Sorğunun formalaşdırılması" />
            <Box padding="16px" display="flex" gap="14px" flexDirection="column">
              <DateInput label="Day Off tarixi" />
              <InputSelect label="Növü" data={dayOffTypes} />
              <InputSelect label="Nəticə" data={resultDatas} />
            </Box>

            {/* <Testquery /> */}
          </Box>
          <Box>
            <SubmitButton text="Yadda saxla və yönləndir" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};