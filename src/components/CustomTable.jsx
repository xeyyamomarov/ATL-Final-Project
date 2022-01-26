import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Edit, MoreHoriz } from '@mui/icons-material';

const columns = [
  { id: 'fullName', label: 'A.S.A.', minWidth: 220 },
  { id: 'username', label: 'İstifadəçi adı', minWidth: 120 },
  {
    id: 'email',
    label: 'Elektron poçt',
    minWidth: 170,
  },
  {
    id: 'position',
    label: 'Vəzifə',
    minWidth: 170,
  },
  {
    id: 'phone',
    label: 'Əlaqə nömrəsi',
    minWidth: 170,
  },
];

export default function CustomTable( {data} ) {
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
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
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
            {data.map((row) => {
              return (
                <TableRow hover role="checkbox" key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id}>
                        {value}
                      </TableCell>
                    );
                  })}
                  <TableCell key='icons'
                  sx={{
                    textAlign: 'right',
                  }}
                  >
                    <Edit />
                    <MoreHoriz />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}