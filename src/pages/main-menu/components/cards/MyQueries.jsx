import { Card, CardContent, Typography, Tooltip } from "@mui/material";
import Table from "components/Table/Table";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useState } from "react";

const MyQuerises = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const thead=[
    {
      key: "type",
      label: "Tipi"
    },
    {
      key: "status",
      label: "Status"
    },
    {
      key: "date",
      label: "Tarixi"
    }
  ]

  return (
    <Card sx={{marginBottom:2}}>
      <Card
        sx={{ backgroundColor: "#F5F5F5", marginBottom: 2, boxShadow: "none" }}
      >
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
            Mənim sorğularım
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
export default MyQuerises;
