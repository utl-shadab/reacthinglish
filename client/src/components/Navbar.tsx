import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../contexts/ThemeContext";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        borderBottom: "1px solid var(--border-color)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ minHeight: "56px" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 1, display: { lg: "none" } }}
        >
          <MenuIcon />
        </IconButton>
<Link to="/" style={{ textDecoration: "none" }}>   
        <Box
          sx={{
            alignItems: "center",
            gap: 1,
            display: { xs: "flex", lg: "flex" },
          }}
        >
          <svg
            className="h-6 w-6 text-reactBlue"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
            />
            <path
              d="M15.5 8.5L8.5 15.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
          >
            ReactMaster
          </Typography>
        </Box>
        </Link>
        <Box sx={{ flexGrow: 1 }} />

        <Button
          component={Link}
          to="/interview-prep"
          startIcon={<SchoolIcon fontSize="small" />}
          sx={{
            mr: 2,
            fontSize: "0.875rem",
            color: "var(--text-primary)",
            "&:hover": {
              backgroundColor: "var(--bg-secondary)",
            },
          }}
        >
          Interview Prep
        </Button>

        <IconButton
          onClick={toggleTheme}
          sx={{ p: 1, borderRadius: "8px", color: "var(--text-primary)" }}
        >
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
