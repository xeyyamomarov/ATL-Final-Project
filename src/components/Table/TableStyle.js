import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  paper: {
    width: '100%',
    overflow: 'hidden',
    boxShadow: "none",
    // border: "1px solid #E0E0E0"
    border: "1px solid red"
  },
  thead: {
    backgroundColor: '#F5F5F5',
    height: "48px",
    padding: "0 16px",
    fontSize: "12px",
    fontWeight: "700",
  },
  tableBody: {
    // width: "90vh",
  },
  tcell: {
    height: "48px",
    padding: "0 16px",
  },
  data: {
    fontSize: "14px",
    fontWeight: "400"
  },
  iconsBox: {
    display: 'flex',
    alignItems: 'center'
  },
  pagination: {
    fontSize: "12px",
    fontWeight: 400
  },
  noDataContainer: {
    width: '100%',
    height: '126px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  noDataIcon: {
    fontSize: '35px',
    color: "#9B5AE1"
  },
  noDataText: {
    color: "#9B5AE1"
  }
})