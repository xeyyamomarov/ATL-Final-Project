import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Avatar, Table as ATable, Typography, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Box, } from '@mui/material/';
import MoreOptions from 'pages/Users/components/MoreOptions/MoreOptions';
import EditUser from 'pages/Users/components/EditUser/EditUser';

export default function Table({ tbody = [], thead = [] }) {
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
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 352 }}>
        <ATable stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {thead.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth, backgroundColor: '#F5F5F5' }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell
                key='icons'
                style={{ minWidth: '100px', backgroundColor: '#F5F5F5' }}
              >
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tbody.map((row) => {
              return (
                <TableRow hover role="checkbox" key={row.id}>
                  {thead.map((column) => {
                    if (column === "icons") {
                      return (
                        <TableCell key={column}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                              alignItems: 'center'
                            }}
                          >
                            <EditUser fontSize='small' userId={row.id} />
                            <MoreOptions />
                          </Box>
                        </TableCell>
                      )
                    }
                    else {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id}>
                          <Box display='flex' alignItems='center'>
                            {column.id === "fullName" && <Avatar
                              alt={`${value}`}
                              src={row.avatar}
                              sx={{
                                width: 28, height: 28, display: 'flex', marginRight: '10px'
                              }}
                            />}
                            <Typography>
                              {value}
                            </Typography>
                          </Box>
                        </TableCell>
                      );
                    }
                  })}
                  <TableCell key='icons'>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                      }}
                    >
                      <EditUser fontSize='small' userId={row.id} />
                      <MoreOptions />
                    </Box>
                  </TableCell>
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