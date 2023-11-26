import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AmazonLogo from "../../assets/amazon-logo-white.svg";

import {
  AppBar,
  Autocomplete,
  Box,
  Button,
  Container,
  Dialog,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  List,
  ListItemButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  SwipeableDrawer,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../constants/Colors";
import {
  addressBook,
  categoryMenuItems,
  drawerItems,
  languageMenuItems,
  secondaryToolbarItems,
  top100Films,
} from "./Navbar.constants";
import { styles } from "./Navbar.styles";
import { commonStyleSheet } from "../../common/Common.styles";

const Navbar = () => {
  const [categorySelected, setCatagorySelected] = useState("All");
  const [languageSelected, setLanguageSelected] = useState("EN");
  const [addressSelected, setAddressSelected] = useState("Select an address");
  const [nameFromAddress, setNameFromAddress] = useState("");
  const [adressBookDialogIsOpen, setAddressBookDialogIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [pinCode, setPincode] = useState("");
  const navigator = useNavigate();

  const onLocationClick = () => setAddressBookDialogIsOpen(true);

  const onDialogClose = (props: { address?: string; name?: string }) => {
    if (props.address !== undefined) {
      setAddressSelected(props.address);
    }

    if (props.name !== undefined) {
      setNameFromAddress(props.name);
    }

    setAddressBookDialogIsOpen(false);
  };

  const onCategorySelectionChange = (event: SelectChangeEvent) => {
    setCatagorySelected(event.target.value as string);
  };

  const onLanguageSelectionChange = (event: SelectChangeEvent) => {
    setLanguageSelected(event.target.value as string);
  };

  const closeDrawer = () => setIsDrawerOpen(false);
  const openDrawer = () => setIsDrawerOpen(true);

  return (
    <AppBar position="fixed">
      <Toolbar sx={styles.primaryToolbar}>
        <Grid container justifyContent="space-evenly" alignItems="center">
          <Grid
            item
            onClick={() => navigator("/")}
            sx={styles.navBarClickables}
          >
            <img src={AmazonLogo} alt="amazon-logo" />
          </Grid>
          <Grid item maxWidth="10rem">
            <Box onClick={onLocationClick} sx={styles.navBarClickables}>
              <Typography
                variant="body2"
                noWrap
                sx={commonStyleSheet.ellipsisText}
              >
                Deliver to {nameFromAddress}
              </Typography>
              <Typography
                noWrap
                variant="body2"
                sx={commonStyleSheet.ellipsisText}
              >
                {addressSelected}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Autocomplete
              disablePortal
              options={top100Films}
              sx={styles.autoComplete}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  fullWidth
                  placeholder="Search Amazon.in"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <Select
                          onChange={onCategorySelectionChange}
                          value={categorySelected}
                          sx={styles.select}
                        >
                          {categoryMenuItems.map((item) => (
                            <MenuItem value={item} key={item}>
                              <Typography variant="caption">{item}</Typography>
                            </MenuItem>
                          ))}
                        </Select>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton sx={styles.searchIconButton}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>
          <Grid item>
            <Select
              sx={styles.select}
              value={languageSelected}
              onChange={onLanguageSelectionChange}
            >
              {languageMenuItems.map((item) => (
                <MenuItem value={item} key={item}>
                  <Typography variant="caption">{item}</Typography>
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item sx={styles.navBarClickables}>
            <Typography variant="caption" align="left">
              Hello {nameFromAddress}
            </Typography>
            <Typography variant="subtitle1">Account And Lists</Typography>
          </Grid>
          <Grid item>
            <Box
              sx={styles.navBarClickables}
              onClick={() => navigator("/myOrders")}
            >
              <Typography variant="caption">Returns </Typography>
              <Typography variant="body2">& Orders</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={commonStyleSheet.button}>
              Cart
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
      {adressBookDialogIsOpen && (
        <Dialog
          open={adressBookDialogIsOpen}
          maxWidth="xs"
          closeAfterTransition
          onClose={() => onDialogClose({})}
        >
          <Stack padding="1rem" spacing={2}>
            <Typography variant="h5" gutterBottom>
              Choose Your Location
            </Typography>
            <Divider />
            <Typography variant="body1">
              Select a delivery location to see product availability and
              delivery options
            </Typography>
            <List sx={styles.addressBookList}>
              {addressBook.map((item, idx) => (
                <ListItemButton
                  key={idx}
                  sx={styles.addressBookListItem}
                  onClick={() =>
                    onDialogClose({
                      address: item.fullAddress,
                      name: item.name,
                    })
                  }
                >
                  <Stack spacing={2}>
                    <Typography align="left" color={Colors.Black}>
                      <b>{item.name}</b> {item.fullAddress}
                    </Typography>
                    {item.isDefault && (
                      <Typography
                        fontWeight="bold"
                        align="left"
                        variant="caption"
                        color={Colors.Grey}
                      >
                        Default Address
                      </Typography>
                    )}
                  </Stack>
                </ListItemButton>
              ))}
            </List>
            <Link sx={commonStyleSheet.link}>
              Add an address or a pickup point
            </Link>
            <Divider />
            <Grid
              container
              justifyContent="space-evenly"
              alignItems="center"
              direction="row"
            >
              <Grid item>
                <TextField
                  required
                  label="Enter an Indian Pincode"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setPincode(event.target.value as string)
                  }
                />
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={() => onDialogClose({ address: "", name: pinCode })}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Dialog>
      )}
      <Toolbar variant="dense" sx={styles.secondaryToolbar}>
        <Grid container>
          <Grid
            item
            justifyContent="space-between"
            alignItems="center"
            onClick={openDrawer}
            sx={styles.navBarClickables}
          >
            <Stack direction="row" spacing={1}>
              <MenuIcon />
              <Typography variant="body1" fontWeight="bold">
                All
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={2}>
              {secondaryToolbarItems.map((item) => (
                <Typography variant="body1" sx={styles.navBarClickables}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
        {isDrawerOpen && (
          <React.Fragment>
            <SwipeableDrawer
              anchor="left"
              open={isDrawerOpen}
              onOpen={openDrawer}
              onClose={closeDrawer}
            >
              <Stack
                sx={{ backgroundColor: Colors.DarkBlue, padding: 2, mb: 2 }}
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <AccountCircleIcon
                  sx={commonStyleSheet.whiteFont}
                  fontSize="medium"
                />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={commonStyleSheet.whiteFont}
                >
                  Hello {nameFromAddress}
                </Typography>
              </Stack>

              {drawerItems.map((item) => (
                <Container sx={{ mb: 2 }}>
                  <Typography variant="h6">{item.heading}</Typography>
                  <List>
                    {item.items.map((buttons) => (
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={8}
                      >
                        <ListItemButton>
                          <Typography variant="subtitle2">{buttons}</Typography>
                        </ListItemButton>
                        <IconButton disableRipple>
                          <ArrowForwardIosIcon />
                        </IconButton>
                      </Stack>
                    ))}
                  </List>
                  <Divider />
                </Container>
              ))}
            </SwipeableDrawer>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
