import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme/theme";
import { useNavigate } from "react-router-dom";
import { baseURLs } from "../config/baseurl";
import useAuthService from "../hooks/useAuthService";
import { log } from "console";
import { Logout } from "@mui/icons-material";

const pages = ["Home", "Appointments", "History", "About Us"];
const pageRoutes = ["/", "/appointments", "/history", "/about"];

const settings = ["Profile", "Logout"];
const iconRoutes = ["/login"];
const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const { handleLogOut } = useAuthService();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (index: number) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [clickedStates, setClickedStates] = useState(
    Array(pages.length).fill(false)
  );

  const handleButtonClick = (index: number) => {
    const newClickedStates = Array(pages.length).fill(false);
    newClickedStates[index] = true;
    setClickedStates(newClickedStates);
    navigate(pageRoutes[index]);
  };

  const handleIconClick = (currvalue: string) => {
    navigate(currvalue);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* for mobile display */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleButtonClick(index);
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* containg the app bar items */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "inline-flex", gap: 48 },
              }}
            >
              {pages.map((page, index) => (
                <Box
                  height={48}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  // mx={2}
                  key={index}
                  borderBottom={clickedStates[index] ? 1 : 0}
                  borderColor="white"
                  onClick={() => handleButtonClick(index)}
                >
                  <Button
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu(index);
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                </Box>
              ))}
            </Box>

            {/* containg icons (profile, notification, contact us) */}
            <Box sx={{ flexGrow: 0 }}>
              <Box
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                gap={4}
              >
                <Tooltip title="Contact Us">
                  <IconButton
                    style={{ color: theme.palette.background.default }}
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                  >
                    <SupportAgentIcon fontSize="large" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Notifications">
                  <IconButton
                    style={{ color: theme.palette.background.default }}
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                  >
                    <NotificationsIcon fontSize="large" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                    style={{ color: theme.palette.background.default }}
                  >
                    <AccountCircleIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* options after cliking profile button */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={
                      setting !== "Logout" ? handleCloseUserMenu : handleLogOut
                    }
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
