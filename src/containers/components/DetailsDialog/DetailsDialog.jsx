import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  Grid,
  TextField as MuiTextField,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { CloseButton } from "components/Buttons";
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from "yup";
import { TOGGLES_ACTIONS, TOGGLES_SELECTORS } from "store/Toggles";
import { TextFieldWrapper } from "./TextFieldWrapper";
import { Table } from "components/Table/Table";

export const EditUserDialog = () => {

  const dispatch = useDispatch();
  const open = useSelector(TOGGLES_SELECTORS.getEditDialogToggle)
  const handleClose = () => dispatch(TOGGLES_ACTIONS.setEditDialog())

  return (
    <Dialog open={open} onClose={handleClose}>

      <DialogTitle sx={{ padding: '12px 16px' }}>
        Sorğunun detalları
      </DialogTitle>

      <DialogContent dividers sx={{ padding: '16px' }}>
        <TableContainer>
          <Table>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  key={row.name}
                >
                  <TableCell>
                    {row.name}
                  </TableCell>

                  <TableCell>
                    {row.value}
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </DialogContent>

      <DialogActions sx={{ padding: '12px 16px' }}>
        <CloseButton onClick={handleClose} />
      </DialogActions>

    </Dialog>
  );
};