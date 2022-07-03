import Dialog from "@mui/material/Dialog";
import { ReactNode } from "react";

export interface Props {
  open: boolean;
  onClose?: (value: string) => void;
  children: ReactNode;
  backgroundColor?: string;
  blur?: boolean;
  className?: string;
}

export function Popup({
  open,
  onClose,
  children,
  backgroundColor = "rgba(48, 48, 48, 0.4)",
  blur = true,
  className = "",
}: Props) {
  return (
    <Dialog
      className={`${className} ${blur && "popup-filter"}`}
      fullWidth
      onClose={onClose}
      open={open}
      PaperProps={{
        style: {
          maxWidth: "calc(100% - 50px)",
          width: "fit-content",
          borderRadius: '10px',
          padding: 35
         
        },
      }}
      BackdropProps={{
        style: {
          backgroundColor,
        },
      }}
    >
      {children}
    </Dialog>
  );
}
