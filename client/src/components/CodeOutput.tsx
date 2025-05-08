import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

interface CodeOutputProps {
  children: ReactNode;
}

const CodeOutput: React.FC<CodeOutputProps> = ({ children }) => {
  return (
    <Box sx={{ width: '100%' }}>
      {children}
    </Box>
  );
};

export default CodeOutput;
