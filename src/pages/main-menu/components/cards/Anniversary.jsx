import { Card, CardContent, Typography, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useState } from "react";
import { Table } from "components/Table";

const Anniversary = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const thead=[
    {
      key: "fullName",
      label: "Adı",
    },
    {
      key: "year",
      label: "İl"
    },
    {
      key: "date",
      label: "Tarixi"
    }
  ]

  return (
    <Card sx={{marginBottom:2}}>
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
            Qarşıdan gələn il dönümü
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
          <Table tbody={data?.tbody} thead={thead} />
        </CardContent>
      </Card>
    </Card>
  );
};
export default Anniversary;
