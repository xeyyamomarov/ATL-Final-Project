import { useState } from 'react';
import { Table as MuiTable, Typography, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Box, Paper, CircularProgress } from '@mui/material';
import { Description } from '@mui/icons-material'
import _ from "lodash";
import { useStyles } from "./TableStyle";

export function Table({ tbody = [], thead = [], pagination, loading }) {
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
    <TableContainer
      component={Paper}
      className={classes.paper}
    >

      <MuiTable stickyHeader aria-label="sticky table"
        sx={{ minWidth: 900, border: "1px solid blue" }}
      >
        <TableHead>
          <TableRow>
            {thead.map((column) => (
              <TableCell
                className={classes.thead}
                key={column.key}
              style={column.style}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {!loading && !_.isEmpty(tbody) &&
          <TableBody>
            {tbody.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover key={row.id}>
                    {thead.map((column) => {
                      if (column.render) {
                        return (
                          <TableCell key={column.key}
                          className={classes.tcell}
                          >
                            <Box className={classes.iconsBox}>
                              {column.render(row)}
                            </Box>
                          </TableCell>
                        )
                      } else {
                        const value = row[column.key];
                        return (
                          <TableCell key={column.key}
                          className={classes.tcell}
                          >
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
        }
      </MuiTable>

      {loading ?
        <Box className={classes.noDataContainer}>
          <CircularProgress />
        </Box>
        :
        _.isEmpty(tbody) &&

        <Box className={classes.noDataContainer}>
          <Description className={classes.noDataIcon} />
          <Typography className={classes.noDataText}>Sənəd mövcud deyil</Typography>
        </Box>
      }

      {pagination && !_.isEmpty(tbody) && <TablePagination
        rowsPerPageOptions={[4, 10, 25, 100]}
        component="div"
        count={tbody.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />}

    </TableContainer>
  );
}