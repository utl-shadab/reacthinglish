import React from 'react';
import { Box, LinearProgress } from '@mui/material';

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress 
        variant="determinate" 
        value={value} 
        sx={{
          borderRadius: 5,
          height: 6,
          backgroundColor: 'rgba(97, 218, 251, 0.2)',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#61DAFB',
          }
        }}
      />
    </Box>
  );
};

export default ProgressBar;
