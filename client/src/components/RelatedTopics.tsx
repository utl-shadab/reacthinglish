import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography, Paper } from '@mui/material';
import { topicsData } from '../data/topicsData';
import { Topic } from '../types';

interface RelatedTopicsProps {
  currentTopicId: string;
}

const RelatedTopics: React.FC<RelatedTopicsProps> = ({ currentTopicId }) => {
  const relatedTopics = React.useMemo(() => {
    // Find all topics and flatten them
    const allTopics = topicsData.flatMap(category => category.topics);
    
    // Find current topic
    const currentTopic = allTopics.find(topic => topic.id === currentTopicId);
    
    if (!currentTopic) return [];
    
    // Get related topics based on tags or category, excluding current topic
    return allTopics
      .filter(topic => 
        topic.id !== currentTopicId && 
        (topic.tags?.some(tag => currentTopic.tags?.includes(tag)) || 
         topic.category === currentTopic.category)
      )
      .slice(0, 3); // Limit to 3 related topics
  }, [currentTopicId]);
  
  if (relatedTopics.length === 0) return null;
  
  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>Related Topics</Typography>
      <Grid container spacing={2}>
        {relatedTopics.map((topic: Topic) => (
          <Grid item xs={12} sm={6} md={4} key={topic.id}>
            <Paper
              component={Link}
              to={`/topics/${topic.id}`}
              elevation={0}
              sx={{
                p: 2,
                display: 'block',
                textDecoration: 'none',
                color: 'text.primary',
                border: '1px solid var(--border-color)',
                borderRadius: 2,
                transition: 'all 0.2s',
                backgroundColor: 'var(--bg-secondary)',
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {topic.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {topic.shortDescription}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RelatedTopics;
