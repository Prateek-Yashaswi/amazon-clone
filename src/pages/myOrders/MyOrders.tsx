import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select/SelectInput";
import { useState } from "react";
import { Colors } from "../../constants/Colors";
import { totalOrders, durations, tabItems } from "./MyOrders.constants";
import MyOrderCards from "./MyOrdersCard";

const MyOrders = () => {
  const [tabValue, setTabValue] = useState(0);
  const [durationSelector, setDurationSelector] = useState(durations[0]);

  const onDurationSelectorChange = (event: SelectChangeEvent) =>
    setDurationSelector(event.target.value as string);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <Grid container mt={15} spacing={1}>
        <Grid item width="100%" mb={2}>
          <Stack
            justifyContent="space-between"
            alignItems="center"
            direction="row"
          >
            <Typography variant="h4"> Your Orders</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <TextField
                label="Search All Orders"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: Colors.CharcoalGrey,
                  borderRadius: 5,
                  height: "2rem",
                }}
              >
                Search
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item width="100%">
          <Tabs
            value={tabValue}
            onChange={handleChange}
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                backgroundColor: Colors.Yellow,
              },
            }}
          >
            {tabItems.map((item) => (
              <Tab label={<Typography variant="caption">{item}</Typography>} />
            ))}
          </Tabs>
          <Divider />
        </Grid>
        <Grid item width="100%">
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" fontWeight="bold" fontSize="1rem">
              {totalOrders.length} Orders Placed in
            </Typography>
            <Select
              value={durationSelector}
              sx={{ height: "2rem" }}
              onChange={onDurationSelectorChange}
            >
              {durations.map((item) => (
                <MenuItem value={item} key={item}>
                  <Typography variant="caption">{item}</Typography>
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Grid>
        {totalOrders.map((item) => (
          <Grid item width="100%" mt={2}>
            <MyOrderCards data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyOrders;
