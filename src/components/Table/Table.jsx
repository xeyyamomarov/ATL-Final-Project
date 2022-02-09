import { useState } from 'react';
import { Table as MuiTable, Typography, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Box, Paper } from '@mui/material/';
import { Description } from '@mui/icons-material'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  paper: {
    width: '100%',
    overflow: 'hidden',
    boxShadow: "none",
    border: "1px solid #E0E0E0"
  },
  thead: {
    backgroundColor: '#F5F5F5',
    height: "48px",
    padding: "0 16px",
    fontSize: "12px",
    fontWeight: "700",
  },
  tbody: {
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

export default function Table({ tbody, thead = [], pagination }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    {tbody ? 
    <Paper className={classes.paper}>
    <TableContainer>
      <MuiTable>
        <TableHead>
          <TableRow>
            {thead.map((column) => (
              <TableCell
                className={classes.thead}
                key={column.key}
                minWidth={column.minWidth}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tbody.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow hover key={row.id}>
                  {thead.map((column) => {
                    if (column.render) {
                      return (
                        <TableCell key={column.key} className={classes.tbody}>
                          <Box className={classes.iconsBox}>
                            {column.render(row)}
                          </Box>
                        </TableCell>
                      )
                    } else {
                      const value = row[column.key];
                      return (
                        <TableCell key={column.key} className={classes.tbody}>
                          <Box className={classes.iconsBox}>
                            <Typography className={classes.data}>
                              {value}
                            </Typography>
                          </Box>
                        </TableCell>
                      )
                    }
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </MuiTable>
    </TableContainer>
    {pagination && <TablePagination
      rowsPerPageOptions={[4, 10, 25, 100]}
      component="div"
      count={tbody.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />}
  </Paper> :
  <Box className={classes.noDataContainer}>
    <Description className={classes.noDataIcon}/>
    <Typography className={classes.noDataText}>Sənəd mövcud deyil</Typography>
  </Box>
  }
    </>
  );
}