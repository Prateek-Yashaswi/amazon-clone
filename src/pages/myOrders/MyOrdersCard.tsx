import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { commonStyleSheet } from "../../common/Common.styles";
import { BasicInfoItem, CardData, OrderData } from "./MyOrders.interface";
import { styles } from "./MyOrders.styles";
import { cardContentButtons } from "./MyOrders.constants";

const OrderBasicInfoItem = (props: BasicInfoItem) => {
  return (
    <Stack
      alignItems="start"
      justifyContent="start"
      minWidth="7.5rem"
      maxWidth="7.5rem"
    >
      <Typography
        variant="body2"
        fontWeight="bold"
        sx={commonStyleSheet.ellipsisText}
      >
        {props.heading}
      </Typography>
      <Typography variant="subtitle2" sx={commonStyleSheet.ellipsisText}>
        {props.content}
      </Typography>
    </Stack>
  );
};

const OrderBasicInfo = (props: { data: BasicInfoItem[]; orderId: string }) => {
  return (
    <Box sx={styles.infoSection}>
      <Stack direction="row" alignItems="center">
        <Grid container direction="row" spacing={5}>
          {props.data.map((item) => (
            <Grid item>
              <OrderBasicInfoItem
                key={item.heading}
                heading={item.heading}
                content={item.content}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container maxWidth="20rem" minWidth="20rem" justifyContent="end">
          <Stack>
            <Typography variant="caption" sx={commonStyleSheet.ellipsisText}>
              Order #: {props.orderId}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link sx={commonStyleSheet.link}>
                <Typography variant="subtitle2">View Order Details</Typography>
              </Link>
              <Link sx={commonStyleSheet.link}>
                <Typography variant="subtitle2">Invoice</Typography>
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Stack>
    </Box>
  );
};

const CardMainContent = (props: OrderData) => {
  return (
    <CardContent>
      <Grid container direction="row" spacing={3} alignItems="center">
        <Grid item direction="column" spacing={2} maxWidth="70%" minWidth="70%">
          <Grid item>
            <Typography variant="body1" align="left" fontWeight="bold">
              Delivered on: {props.deliveryDate}
            </Typography>
            <Typography variant="subtitle2" align="left">
              Product was handed to: {props.handedToWhom}
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={3} alignItems="center">
              <img
                width={80}
                height={80}
                src={props.productImage}
                alt={props.productDetails + "_imag"}
              />
              <Stack>
                <Link sx={commonStyleSheet.link}>
                  <Typography align="left" variant="body2">
                    {props.productDetails}
                  </Typography>
                </Link>
                <Typography variant="caption" align="left">
                  Return window closes on: {props.returnWindow}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" sx={commonStyleSheet.button}>
                    Buy It Again
                  </Button>
                  <Button variant="contained" sx={commonStyleSheet.button}>
                    View Item
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Grid item maxWidth="30%" minWidth="30%">
          <Stack spacing={1}>
            {cardContentButtons.map((item) => (
              <Button
                sx={commonStyleSheet.transparentButton}
                key={item + "_button"}
                fullWidth
                variant="outlined"
              >
                {item}
              </Button>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </CardContent>
  );
};

const MyOrderCards = (props: { data: CardData }) => {
  return (
    <Card elevation={0} sx={styles.card}>
      <OrderBasicInfo
        data={props.data.basicInfoItem}
        orderId={props.data.orderId}
      />
      <CardMainContent
        deliveryDate={props.data.deliveryDate}
        handedToWhom={props.data.handedToWhom}
        productDetails={props.data.productDetails}
        productImage={props.data.productImage}
        returnWindow={props.data.returnWindow}
      />
      <Box sx={styles.infoSection}>
        <Grid container>
          <Link sx={commonStyleSheet.link}>
            <Typography variant="subtitle2">Archive Order</Typography>
          </Link>
        </Grid>
      </Box>
    </Card>
  );
};

export default MyOrderCards;
