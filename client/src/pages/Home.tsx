import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  Button,
  Card,
  CardContent,
  Chip,
  Stack
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { topicsData } from '../data/topicsData';
import { useProgress } from '../contexts/ProgressContext';

const Home = () => {
  const { completedTopics } = useProgress();
  const allTopics = topicsData.flatMap(category => category.topics);
  const totalTopics = allTopics.length;
  
  // Get the first uncompleted topic or the first topic if all are completed
  const nextTopic = allTopics.find(topic => !completedTopics.includes(topic.id)) || allTopics[0];
  
  // If user has progress, get the last completed topic
  const lastCompletedTopicId = completedTopics[completedTopics.length - 1];
  const lastCompletedTopic = lastCompletedTopicId ? allTopics.find(topic => topic.id === lastCompletedTopicId) : null;
  
  // Recommended topics based on progress
  const recommendedTopics = React.useMemo(() => {
    if (completedTopics.length === 0) {
      // If no progress, recommend the first few beginner topics
      return allTopics.slice(0, 3);
    } else {
      // Find topics in the same category as the last completed topic
      const sameCategory = allTopics.filter(
        topic => !completedTopics.includes(topic.id) && 
        lastCompletedTopic && 
        topic.category === lastCompletedTopic.category
      );
      
      // If we have enough same category topics, return those
      if (sameCategory.length >= 3) {
        return sameCategory.slice(0, 3);
      }
      
      // Otherwise, add some topics from the next category
      const nextCategoryIndex = topicsData.findIndex(category => 
        category.id === lastCompletedTopic?.category
      ) + 1;
      
      if (nextCategoryIndex < topicsData.length) {
        const nextCategoryTopics = topicsData[nextCategoryIndex].topics.filter(
          topic => !completedTopics.includes(topic.id)
        );
        
        return [...sameCategory, ...nextCategoryTopics].slice(0, 3);
      }
      
      // If we still don't have 3 topics, just return any uncompleted topics
      return allTopics
        .filter(topic => !completedTopics.includes(topic.id))
        .slice(0, 3);
    }
  }, [completedTopics, lastCompletedTopic]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ flexGrow: 1, overflow: 'auto' }}
    >
      <Box 
        sx={{ 
          pt: 8, 
          pb: 10, 
          background: 'linear-gradient(to right, rgba(97, 218, 251, 0.1), rgba(233, 30, 99, 0.05))'
        }}
      >
        <Container maxWidth="lg">
          <motion.div variants={itemVariants}>
            <Typography 
              variant="h3" 
              component="h1" 
              sx={{ 
                mb: 2, 
                fontWeight: 700, 
                color: 'var(--text-primary)',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              React sikhiye Hinglish mein!
            </Typography>
            <Typography 
              variant="h6" 
              color="textSecondary" 
              sx={{ 
                mb: 4,
                maxWidth: 600,
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              React ki complete journey beginner se advanced tak - sirf aapke liye
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button 
                component={Link}
                to={`/topics/${nextTopic.id}`}
                variant="contained" 
                endIcon={<ArrowForwardIcon />}
                size="large"
                sx={{ 
                  bgcolor: '#61DAFB',
                  color: '#000000',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: '#4CB5DB',
                  }
                }}
              >
                {completedTopics.length > 0 ? 'Continue Learning' : 'Start Learning'}
              </Button>
              
              <Button 
                component={Link}
                to="/topics/what-is-react"
                variant="outlined"
                size="large"
                sx={{ 
                  borderColor: '#61DAFB',
                  color: '#61DAFB',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#4CB5DB',
                    bgcolor: 'rgba(97, 218, 251, 0.05)'
                  }
                }}
              >
                Shuruat se dekhein
              </Button>
            </Box>
          </motion.div>
          
          {completedTopics.length > 0 && (
            <motion.div variants={itemVariants}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box sx={{ height: 8, width: 8, borderRadius: '50%', bgcolor: 'success.main' }} />
                <Typography variant="body2" color="textSecondary">
                  Aapka progress: {completedTopics.length}/{totalTopics} topics ({Math.round((completedTopics.length / totalTopics) * 100)}%)
                </Typography>
              </Box>
            </motion.div>
          )}
        </Container>
      </Box>
      
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <motion.div variants={itemVariants}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ mb: 4, fontWeight: 700 }}
          >
            {completedTopics.length > 0 ? 'Aapke liye recommendations' : 'React ke fundamentals'}
          </Typography>
        </motion.div>
        
        <Grid container spacing={3}>
          {recommendedTopics.map((topic) => (
            <Grid item xs={12} sm={6} md={4} key={topic.id}>
              <motion.div variants={itemVariants}>
                <Card 
                  component={Link}
                  to={`/topics/${topic.id}`}
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                      {topic.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {topic.shortDescription}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 'auto', pt: 2 }}>
                      <Chip
                        label={topic.level}
                        size="small"
                        sx={{
                          bgcolor: topic.level === 'Beginner' ? 'success.main' : 
                                  topic.level === 'Intermediate' ? 'warning.main' : 'error.main',
                          color: 'white',
                        }}
                      />
                      {topic.readingTime && (
                        <Chip
                          label={`${topic.readingTime} mins`}
                          size="small"
                          sx={{ bgcolor: 'var(--bg-secondary)' }}
                        />
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        
        <motion.div variants={itemVariants}>
          <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid var(--border-color)' }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Categories
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {topicsData.map((category) => (
                <Grid item xs={12} sm={6} md={4} key={category.id}>
                  <Paper
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 2,
                      bgcolor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {category.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {category.description}
                    </Typography>
                    <Typography variant="body2">
                      {category.topics.length} topics
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Home;
