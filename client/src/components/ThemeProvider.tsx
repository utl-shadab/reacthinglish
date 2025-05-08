import React, { ReactNode } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as ThemeContextProvider } from "../contexts/ThemeContext";
import { CssBaseline } from "@mui/material";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  // Only pass the children prop to avoid React Fragment warnings
  const { children, ...restProps } = props;
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#61DAFB", // React blue
          },
          secondary: {
            main: "#E91E63", // Accent color
          },
          success: {
            main: "#4CAF50",
          },
          error: {
            main: "#F44336",
          },
          warning: {
            main: "#FF9800",
          },
          background: {
            default: mode === "light" ? "#ffffff" : "#282C34",
            paper: mode === "light" ? "#f5f5f5" : "#21252b",
          },
          text: {
            primary: mode === "light" ? "#333333" : "#eeeeee",
            secondary: mode === "light" ? "#666666" : "#a0a0a0",
          },
        },
        typography: {
          fontFamily: "'Inter', sans-serif",
          h1: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
          },
          h2: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
          },
          h3: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
          },
          h4: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
          },
          h5: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
          },
          h6: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
          },
        },
        shape: {
          borderRadius: 8,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                borderRadius: 8,
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: mode === "light" ? "#ffffff" : "#282C34",
                color: mode === "light" ? "#333333" : "#eeeeee",
              },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              paper: {
                backgroundColor: mode === "light" ? "#f5f5f5" : "#21252b",
                color: mode === "light" ? "#333333" : "#eeeeee",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContextProvider defaultTheme={mode} setTheme={setMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContextProvider>
  );
};
