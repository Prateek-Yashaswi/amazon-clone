import { SxProps } from "@mui/material";
import { Colors } from "../../constants/Colors";

const select: SxProps = {
  height: "3rem",
  width: "fit-content",
  maxWidth: "10rem",
  backgroundColor: Colors.White,
};

const autoComplete: SxProps = {
  width: "60rem",
  margin: "1rem",
  backgroundColor: Colors.White,
  borderRadius: 2,
};

const searchIconButton: SxProps = {
  backgroundColor: Colors.Yellow,
};

const addressBookList: SxProps = { maxHeight: "25rem", overflow: "auto" };

const addressBookListItem: SxProps = {
  borderRadius: 2,
  border: "2px solid",
  mb: 1,
  borderColor: Colors.Teal,
};

const navBarClickables: SxProps = {
  padding: ".5rem",
  ":hover": {
    cursor: "pointer",
    border: "1px solid",
    borderColor: Colors.White,
  },
};

const primaryToolbar: SxProps = { backgroundColor: Colors.DarkBlue };
const secondaryToolbar: SxProps = { backgroundColor: Colors.BlueGrey };

export const styles = {
  select,
  autoComplete,
  searchIconButton,
  navBarClickables,
  addressBookList,
  addressBookListItem,
  primaryToolbar,
  secondaryToolbar,
};
