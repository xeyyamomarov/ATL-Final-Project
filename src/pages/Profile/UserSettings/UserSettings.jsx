import {
  Typography,
  Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ResultTable } from "containers/components/ResultTable/ResultTable";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  box: {
    display: "flex",
    gap:"16px",
    width:"100%"
  },
  boxContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #BDBDBD",
    minWidth: "250px",
    borderRadius: "4px",

  },
  tableBox: {
    padding: "4px 16px",
    width:"550px",
    gap: "16px",
    border:"1px solid #BDBDBD",
    borderRadius:"4px",
  }
});


const data=[
  {
    name:"İstifadəçi adı",
    value:"xeyalea"
  },
  {
    name:"Elektron poçt",
    value:"xeyalea@xezertv.az"
  },
  {
  name:"Əlaqə nömrəsi",
  value:"994505005050"
  },
  {
    name:"İstifadəçi rolları",
    value:"Admin, Reporter"
  }
]
export const UserSettings = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Box className={classes.boxContent}>
        <AccountCircleIcon sx={{ fontSize: "80px", color: "gray" }} />
        <Typography fontSize="16px"  color="#424242">
          Xəyalə Aslanova Əliağa
        </Typography>
        <Typography  color="#BDBDBD">
          Aparıcı
        </Typography>
      </Box>
        <Box className={classes.tableBox}>
          <ResultTable data={data} />
        </Box>
    </Box>
  );
};
