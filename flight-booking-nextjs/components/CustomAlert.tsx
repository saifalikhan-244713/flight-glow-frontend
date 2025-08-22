// components/CustomAlert.tsx
import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
// import { LockIcon } from "@heroicons/react/solid"; // Correct import for Heroicons

interface CustomAlertProps {
  title?: string;
  message: string;
  onClose: () => void;
  severity: any;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  title,
  message,
  onClose,
  severity,
}) => {
  return (
    <Alert
      variant="outlined"
      severity={severity}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={onClose}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {/* {message} */}
    </Alert>
  );
};

export default CustomAlert;
