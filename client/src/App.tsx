import { Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MobileSidebar from "./components/MobileSidebar";
import Home from "./pages/Home";
import TopicPage from "./pages/TopicPage";
import InterviewPrep from "./pages/InterviewPrep";
import { AnimatePresence } from "framer-motion";
import { ProgressProvider } from "./contexts/ProgressContext";

/**
 * Main application component
 */
function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ProgressProvider>
          <CssBaseline />

          {/* Main container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              width: "100vw",
              overflow: "hidden",
            }}
          >
            {/* Navbar - fixed at top with highest z-index */}
            <Navbar onMenuClick={handleDrawerToggle} />

            {/* Content area - contains sidebar and main content */}
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Sidebar - visible only on large screens */}
              <Sidebar />

              {/* Mobile sidebar - shown on demand */}
              <MobileSidebar open={mobileOpen} onClose={handleDrawerToggle} />

              {/* Main content area - no left margin since sidebar is fixed position */}
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  overflow: "auto",
                  width: "100%",
                  position: "relative",
                  pl: { xs: 0, lg: 0 }, // Use padding instead of margin
                }}
              >
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/topics/:topicId" element={<TopicPage />} />
                    <Route path="/interview-prep" element={<InterviewPrep />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </AnimatePresence>
              </Box>
            </Box>
          </Box>

          <Toaster />
        </ProgressProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
