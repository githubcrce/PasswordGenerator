import React from "react";
import { Snackbar, Alert } from "@mui/material";
function MessageComponent(props) {
  const { open, handleClose } = props;
  const message = props.message;
  const messageType = props.messageType;
  return (
    <div>
      {" "}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity={messageType} onClose={handleClose} anchorOrigin={{vertical:'bottom',horizontal:'center'}}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default MessageComponent;