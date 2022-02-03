import { Card, CardContent, Typography, Tooltip } from "@mui/material";
import Table from "components/Table/Table";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useState } from "react";

const Employees = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const thead=[
    {
      id: "fullName",
      label: "Adı"
    },
    {
      id: "position",
      label: "Vəzifə"
    },
    {
      id: "status",
      label: "Status"
    }
  ]

  return (
    <Card >
      <Card sx={{ backgroundColor: "#F5F5F5", boxShadow: "none" }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 0,
            height: "50px",
          }}
        >
          <Typography
            variant="h6"
            position="relative"
            top="10px"
            left="15px"
            color="black"
            gutterBottom
          >
            Əməkdaşlar haqqında son məlumat
          </Typography>
          <Typography
            fontSize="18px"
            position="relative"
            top="12px"
            right="15px"
            gutterBottom
          >
            <Tooltip title="Refresh">
              <RefreshIcon
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setIsLoading(!isLoading);
                }}
              />
            </Tooltip>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, marginBottom: 2, boxShadow: "none" }}>
        <CardContent>
          <Table thead={thead} tbody={data?.tbody} />
        </CardContent>
      </Card>
    </Card>
  );
};
export default Employees;
