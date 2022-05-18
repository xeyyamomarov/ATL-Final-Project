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
    "@media (max-width: 920px)": {
     flexDirection:"column",
     alignItems:"center"
    }
  },
  boxContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #BDBDBD",
    borderRadius: "4px",
    width:"30%",
    "@media (max-width:920px)": {
      width:"50%"
     }

  },
  tableBox: {
    padding: "4px 16px",
    border:"1px solid #BDBDBD",
    borderRadius:"4px",
    width:"70%",
    "@media (max-width: 920px)": {
      width:"100%"
     }
  }
});


const data=[
  {
    name:"İstifadəçi adı",
    value:"xeyalea"
  },
  {
    name:"Elektron poçt",
    value:"xeyalea@xezantv.az"
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
        <Typography fontSize="16px"  color="#424242" textAlign="center">
          Xəyalə Aslanova Əliağa
        </Typography>
        <Typography  color="#9E9E9E">
          Aparıcı
        </Typography>
      </Box>
        <Box className={classes.tableBox}>
          <ResultTable data={data} />
        </Box>
    </Box>
  );
};
