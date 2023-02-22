import { List, ListItem, ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  navItems: object[];
}

const DrawerMenu = (props: Props) => {
  const { navItems } = props;

  return (
    <List>
      {navItems.map((item: any) => (
        <ListItem key={item.link} disablePadding>
          <NavLink
            end
            style={({ isActive }) => ({
              color: isActive ? "blue" : "#000",
            })}
            to={item.link}
          >
            <ListItemButton
              sx={{
                textAlign: "center",
              }}
            >
              {item.name}
            </ListItemButton>
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
};

export default DrawerMenu;
