import { useState } from 'react';
import { Avatar, Table as ATable, Typography, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Box, Paper } from '@mui/material/';
import { MoreOptions } from 'pages/Users/components/MoreOptions';
import { EditUser } from 'pages/Users/components/EditUser';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  paper: {
    width: '100%',
    overflow: 'hidden',
    boxShadow: 0,
    border: "1px solid #E0E0E0"
  },
  tcontainer: {
    maxHeight: 240,
  },
  thead: {
    backgroundColor: '#F5F5F5',
    height: "48px",
    padding: "0 16px",
    fontSize: "12px",
    fontWeight: "700",
  }
})

export default function Table({ tbody = [], thead = [] }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.paper}>
      <TableContainer className={classes.tcontainer}>
        <ATable>
          <TableHead>
            <TableRow>
              {thead.map((column) => (
                <TableCell
                  className={classes.thead}
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tbody.map(row => {
              return (
                <TableRow hover key={row.id}>
                  {thead.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id}>
                        <Typography>
                          {value}
                        </Typography>
                      </TableCell>
                    )
                  })
                  }
                </TableRow>
              )
            })
            }
          </TableBody>
        </ATable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tbody.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}