import { useState } from 'react';
import { Avatar, Table as ATable, Typography, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Box, Paper } from '@mui/material/';
import { MoreOptions } from 'pages/Users/components/MoreOptions';
import { EditUser } from 'pages/Users/components/EditUser';
import { makeStyles } from '@mui/styles';
import { EditUserRoles } from 'pages/UserRoles/EditUserRoles';
import { RoleMoreOptions } from 'pages/UserRoles/RoleMoreOptions';

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

})

export default function Table({ tbody = [], thead = [], pagination, avatar }) {
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
    <Paper className={classes.paper}>
      <TableContainer className={classes.tcontainer}>
        <ATable stickyHeader aria-label="sticky table">
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
        </ATable>
      </TableContainer>
      {pagination && <TablePagination
        // className={{
        //   toolbar: classes.toolbar,
        //   caption: classes.caption,
        //   root: classes.root
        // }}
        rowsPerPageOptions={[4, 10, 25, 100]}
        component="div"
        count={tbody.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />}
    </Paper>
  );
}