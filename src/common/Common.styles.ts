import { SxProps } from "@mui/material";
import { Colors } from "../constants/Colors";

const link: SxProps = {
  ":hover": {
    color: Colors.Orange,
    textDecoration: "underline",
    cursor: "pointer",
  },
  textDecoration: "none",
};

const whiteFont: SxProps = {
  color: Colors.White,
};

const ellipsisText: SxProps = { textOverflow: "ellipsis", overflow: "hidden" };

const button: SxProps = {
  backgroundColor: Colors.BrightYellow,
  borderRadius: 2,
  color: Colors.Black,
  fontSize: 10,
  ":hover": {
    backgroundColor: Colors.YelloDark,
  },
};

const transparentButton: SxProps = {
  borderRadius: 2,
  border: "1px solid",
  borderColor: Colors.Black,
  fontSize: 12,
  backgroundColor: "transparent",
  color: Colors.Black,
};

export const commonStyleSheet = {
  link,
  whiteFont,
  ellipsisText,
  button,
  transparentButton,
};
