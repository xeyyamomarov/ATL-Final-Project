import { useState } from 'react';
import { Avatar, Table as ATable, Typography, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Box, Paper } from '@mui/material/';
import { MoreOptions } from 'pages/Users/components/MoreOptions';
import { EditUser } from 'pages/Users/components/EditUser';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  thead: {
    backgroundColor: '#F5F5F5',
    height: "48px",
    padding: "0 16px",
    fontSize: "12px",
    fontWeight: "700"
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
    <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 0, border: "1px solid #E0E0E0" }}>
      <TableContainer sx={{ maxHeight: 240 }}>
        <ATable stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {thead.map((column) => (
                <TableCell sx={{backgroundColor: '#F5F5F5', height: "48px", padding: "0 16px", fontSize: "12px", fontWeight: "700"}}
                  // className={classes}
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tbody.map((row) => {
              return (
                <TableRow hover role="checkbox" key={row.id}>
                  {thead.map((column) => {
                    if (column.id === "icons") {
                      return (
                        <TableCell key={column.id} sx={{ height: "48px", padding: "0 16px", fontSize: "12px", fontWeight: "700" }}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                              alignItems: 'center'
                            }}
                          >
                            <EditUser fontSize='small' userId={row.id} />
                            <MoreOptions userId={row.id} />
                          </Box>
                        </TableCell>
                      )
                    }
                    else {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} sx={{ height: "48px", padding: "0 16px" }}>
                          <Box display='flex' alignItems='center'>
                            {column.id === "fullName" && <Avatar
                              alt={`${value}`}
                              src={row.avatar}
                              sx={{
                                width: 28, height: 28, display: 'flex', marginRight: '10px'
                              }}
                            />}
                            <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
                              {value}
                            </Typography>
                          </Box>
                        </TableCell>
                      );
                    }
                  })}
                </TableRow>
              );
            })}
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