import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Drawer, Typography, InputAdornment, TextField, List, ListItem, ListItemText, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { topicsData } from "../data/topicsData";
import { useProgress } from "../contexts/ProgressContext";
import ProgressBar from "./ProgressBar";

const drawerWidth = 260;

const Sidebar = () => {
  const location = useLocation();
  const { completedTopics } = useProgress();
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredTopics = React.useMemo(() => {
    if (!searchTerm) return topicsData;
    
    return topicsData.filter(category => {
      const matchingTopics = category.topics.filter(topic => 
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (topic.hindiTitle && topic.hindiTitle.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      
      if (matchingTopics.length === 0) return false;
      
      return {
        ...category,
        topics: matchingTopics
      };
    });
  }, [searchTerm]);

  const totalTopics = topicsData.reduce((acc, category) => 
    acc + category.topics.length, 0);

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', lg: 'block' },
        width: drawerWidth,
        flexShrink: 0,
        position: 'relative',
        zIndex: 1,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          border: 'none',
          backgroundColor: 'var(--bg-secondary)',
          borderRight: '1px solid var(--border-color)',
          position: 'fixed',
          top: '56px', // Match navbar height
          height: 'calc(100% - 56px)' // Adjust height to account for navbar
        },
      }}
      open
    >
      <Box sx={{ p: 2, borderBottom: '1px solid var(--border-color)', position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'var(--bg-secondary)' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'var(--text-primary)' }}>
          Topics
        </Typography>
        <TextField
          fullWidth
          placeholder="Topics khojo..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              backgroundColor: 'var(--bg-primary)',
            }
          }}
        />
      </Box>
      <Box sx={{ overflow: 'auto', p: 2 }}>
        {filteredTopics.map((category, index) => (
          <div key={category.id}>
            <Typography 
              variant="caption" 
              sx={{ 
                textTransform: 'uppercase', 
                color: 'var(--text-secondary)', 
                fontWeight: 600, 
                letterSpacing: '0.05em',
                display: 'block',
                mb: 1,
                mt: index > 0 ? 3 : 0
              }}
            >
              {category.name}
            </Typography>
            <List dense disablePadding>
              {category.topics.map((topic) => {
                const isActive = location.pathname === `/topics/${topic.id}`;
                const isCompleted = completedTopics.includes(topic.id);
                
                return (
                  <ListItem 
                    key={topic.id} 
                    component={Link} 
                    to={`/topics/${topic.id}`}
                    sx={{
                      borderRadius: '6px', 
                      mb: 0.5,
                      py: 0.75,
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      fontWeight: 500,
                      borderLeft: isActive ? '3px solid #61DAFB' : '3px solid transparent',
                      backgroundColor: isActive ? 'rgba(97, 218, 251, 0.1)' : 'transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(97, 218, 251, 0.05)'
                      }
                    }}
                  >
                    <ListItemText 
                      primary={topic.title}
                      primaryTypographyProps={{
                        style: { fontSize: '0.875rem' }
                      }}
                    />
                    {isCompleted && (
                      <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
                    )}
                  </ListItem>
                );
              })}
            </List>
          </div>
        ))}
        
        <Box 
          sx={{ 
            mt: 4, 
            p: 2, 
            borderRadius: 2,
            background: 'linear-gradient(to right, rgba(97, 218, 251, 0.1), rgba(233, 30, 99, 0.1))',
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Aapki Progress
          </Typography>
          <Box sx={{ mt: 1 }}>
            <ProgressBar 
              value={(completedTopics.length / totalTopics) * 100} 
            />
          </Box>
          <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'var(--text-secondary)' }}>
            {completedTopics.length}/{totalTopics} topics complete
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
