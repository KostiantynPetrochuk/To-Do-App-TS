import Snackbar from "@mui/material/Snackbar";
import React, { forwardRef } from "react";

import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";

export type THandleClose = ((event?: React.SyntheticEvent | Event, reason?: string) => void) | undefined;

type TNoticeProps = {
  openNotice: boolean;
  handleCloseNotice: THandleClose;
  noticeBody: string;
  severity: AlertColor | undefined;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Notice: React.FC<TNoticeProps> = (props: TNoticeProps) => {
  const { openNotice, handleCloseNotice, noticeBody, severity } = props;
  return (
    <Snackbar open={openNotice} autoHideDuration={6000} onClose={handleCloseNotice}>
      <Alert onClose={handleCloseNotice} severity={severity} sx={{ width: "100%" }}>
        {noticeBody}
      </Alert>
    </Snackbar>
  );
};

