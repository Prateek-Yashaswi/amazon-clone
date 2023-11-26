import { SxProps } from "@mui/material";
import { Colors } from "../../constants/Colors";

const infoSection: SxProps = {
  backgroundColor: Colors.LightGrey,
  padding: 2,
};

const card: SxProps = {
  borderRadius: 2,
  border: "1px solid",
  borderColor: Colors.Grey,
};

export const styles = { infoSection, card };
