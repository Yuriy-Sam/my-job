import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Button,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "./Drawer";

interface Props {
  window?: () => Window;
}

export default function Header(props: Props) {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")!));
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const drawerWidth = 240;

  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("auth")!));
  }, [JSON.parse(localStorage.getItem("auth")!)]);

  const { t } = useTranslation();
  const navItems = [
    { name: t("menu.home"), link: "/" },
    { name: t("menu.news"), link: "/news" },
    {
      name: auth ? t("menu.profile") : t("menu.auth"),
      link: auth ? "/profile" : "/auth",
    },
  ];
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <NavLink
                  key={item.link}
                  end
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "inherit",
                    textDecoration: "none",
                  })}
                  to={item.link}
                >
                  <Button color="inherit">{item.name}</Button>
                </NavLink>
              ))}
            </Box>
            <LanguageSelector />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <DrawerMenu navItems={navItems} />
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
