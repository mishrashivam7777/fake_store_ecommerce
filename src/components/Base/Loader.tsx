import * as React from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";

function Loader() {
  return (
    <div>
      <Modal aria-labelledby="spinner" aria-describedby="modal-spinner">
        <ModalDialog>
          <ModalClose />
          <Typography>
            <CircularProgress value={25} variant="soft" />
          </Typography>
        </ModalDialog>
      </Modal>
    </div>
  );
}

export default Loader;
