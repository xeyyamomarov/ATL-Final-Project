
import { DialogContent, DialogTitle, Dialog, DialogActions, Typography} from "@mui/material";
import { Button, CloseButton } from 'components/Buttons';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLES_SELECTORS, TOGGLES_ACTIONS } from "store/Toggles";

const DeleteRoleDialog = () => {
  const dispatch = useDispatch();

  const open = useSelector(TOGGLES_SELECTORS.getDeleteRoleDialogToggle)
  const handleClose = () => dispatch(TOGGLES_ACTIONS.setDeleteRoleDialog())

  return (
    <Dialog open={open}>

          <DialogTitle sx={{ padding: "12px 16px" }}>
            Rolun silinməsi
          </DialogTitle>
          <DialogContent dividers sx={{ padding: "16px" }}>
            <Typography>
              <strong>{`Admin `}</strong>
              rolunu silmək istədiyinizə əminsiniz?
            </Typography>
          </DialogContent>
          <DialogActions sx={{ padding: "12px 16px" }}>
            <CloseButton onClick={handleClose} text="İmtina et"/>
            <Button color="error" text="Sil" />
          </DialogActions>

    </Dialog>
  );
}

export default DeleteRoleDialog;