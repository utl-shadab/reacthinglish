import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Breadcrumbs,
  Button,
  Paper,
  Chip,
  Divider,
  IconButton,
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CodeIcon from '@mui/icons-material/Code';
import { motion } from 'framer-motion';
import { topicsData } from '../data/topicsData';
import { useProgress } from '../contexts/ProgressContext';
import CodeEditor from '../components/CodeEditor';
import RelatedTopics from '../components/RelatedTopics';
import { Topic } from '../types';

const TopicPage = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const { completedTopics, markTopicAsCompleted } = useProgress();

  // Find all topics in a flat array
  const allTopics = React.useMemo(() =>
    topicsData.flatMap(category => category.topics),
    []
  );

  // Find the current topic
  const topic = React.useMemo(() =>
    allTopics.find(t => t.id === topicId),
    [topicId, allTopics]
  );

  // Find the previous and next topics
  const currentIndex = allTopics.findIndex(t => t.id === topicId);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  const isCompleted = completedTopics.includes(topicId || '');

  // If topic doesn't exist, redirect to not found
  useEffect(() => {
    if (!topic && topicId !== undefined) {
      navigate('/not-found');
    }
  }, [topic, topicId, navigate]);

  // Mark topic as viewed, but not necessarily completed
  useEffect(() => {
    if (topic) {
      document.title = `${topic.title} - ReactMaster`;
    }
  }, [topic]);

  const handleMarkAsCompleted = () => {
    if (topic) {
      markTopicAsCompleted(topic.id);

      // If there's a next topic, navigate to it
      if (nextTopic) {
        navigate(`/topics/${nextTopic.id}`);
      }
    }
  };

  if (!topic) {
    return null; // Will redirect in the useEffect
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  const [showHint, setShowHint] = useState(false);
  const [solution, setSolution] = useState(false);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeIn}
      style={{ flexGrow: 1, overflow: 'auto' }}
    >
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Breadcrumbs sx={{ mb: 2 }}>
            <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Home
            </Link>
            <Link
              to="#"
              onClick={(e) => e.preventDefault()}
              style={{ color: 'var(--text-primary)', textDecoration: 'none' }}
            >
              {topic.category === 'beginner' ? 'Beginner' :
                topic.category === 'intermediate' ? 'Intermediate' : 'Advanced'}
            </Link>
            <Typography color="textPrimary">{topic.title}</Typography>
          </Breadcrumbs>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
              {topic.title}{topic.hindiTitle ? ` - ${topic.hindiTitle}` : ''}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton>
                <BookmarkBorderIcon />
              </IconButton>
              <IconButton>
                <ShareIcon />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)' }}>
              <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography variant="body2">
                Reading time: {topic.readingTime || 5} minutes
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Chip
                label={topic.level || 'Beginner'}
                size="small"
                sx={{
                  bgcolor: topic.level === 'Beginner' ? 'rgba(76, 175, 80, 0.1)' :
                    topic.level === 'Intermediate' ? 'rgba(255, 152, 0, 0.1)' :
                      'rgba(244, 67, 54, 0.1)',
                  color: topic.level === 'Beginner' ? 'rgb(76, 175, 80)' :
                    topic.level === 'Intermediate' ? 'rgb(255, 152, 0)' :
                      'rgb(244, 67, 54)',
                  fontWeight: 500,
                }}
              />
              {isCompleted && (
                <Chip
                  icon={<CheckCircleIcon fontSize="small" />}
                  label="Completed"
                  size="small"
                  sx={{
                    bgcolor: 'rgba(76, 175, 80, 0.1)',
                    color: 'rgb(76, 175, 80)',
                    fontWeight: 500,
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>

        {topic.image && (
          <Box sx={{ mb: 4, borderRadius: 3, overflow: 'hidden', boxShadow: 1 }}>
            <img
              src={topic.image}
              alt={topic.title}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box>
        )}

        <Paper
          sx={{
            mb: 4,
            p: 4,
            borderRadius: 3,
            backgroundColor: 'var(--bg-secondary)',
            boxShadow: 'none',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
            {topic.subtitle || `${topic.title} ki basic jankari`}
          </Typography>

          <Typography sx={{ mb: 3, whiteSpace: 'pre-line' }}>
            {topic.description}
          </Typography>

          {topic.keyPoints && (
            <>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
                {topic.keyPointsTitle || `${topic.title} ke fayde:`}
              </Typography>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {topic.keyPoints.map((point, index) => (
                  <li key={index} className="mb-2">
                    <span className="font-medium">{point.title}:</span> {point.description}
                  </li>
                ))}
              </ul>
            </>
          )}

          {topic.realLifeExample && (
            <Box
              sx={{
                p: 3,
                mt: 4,
                bgcolor: 'rgba(97, 218, 251, 0.1)',
                borderRadius: 2,
                border: '1px solid rgba(97, 218, 251, 0.2)'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LightbulbIcon sx={{ color: 'primary.main', mt: 0.3 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}>
                    Real life example
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--text-primary)' }}>
                    {topic.realLifeExample}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Paper>

        {topic.codeExample && (
          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              {topic.codeExampleTitle || `${topic.title} ka Example`}
            </Typography>
            <Typography sx={{ mb: 3 }}>
              {topic.codeExampleDescription || `Neeche humne ek simple example banaya hai:`}
            </Typography>

            <CodeEditor
              defaultCode={topic.codeExample}
              filename={topic.filename || 'App.js'}
            />
          </Box>
        )}

        {topic.codeExplanation && (
          <Paper
            sx={{
              mb: 6,
              p: 4,
              borderRadius: 3,
              backgroundColor: 'var(--bg-secondary)',
              boxShadow: 'none',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              Code Explanation
            </Typography>
            <Box className="space-y-4">
              {topic.codeExplanation.map((explanation, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Typography sx={{ fontWeight: 600 }}>{explanation.line}:</Typography>
                  <Typography sx={{ ml: 4 }}>{explanation.explanation}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        )}

        {topic.exercise && (
          <Paper
            sx={{
              mb: 6,
              overflow: 'hidden',
              borderRadius: 3,
              border: '1px solid var(--border-color)',
            }}
          >
            <Box
              sx={{
                px: 4,
                py: 3,
                borderBottom: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-secondary)',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Try It Yourself
              </Typography>
              <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>
                Neeche diye gaye exercise ko complete kijiye:
              </Typography>
            </Box>
            <Box
              sx={{
                p: 4,
                backgroundColor: 'rgba(255, 152, 0, 0.05)',
              }}
            >
              <Typography sx={{ fontWeight: 500, mb: 2 }}>Exercise:</Typography>
              <Typography sx={{ mb: 4 }}>{topic.exercise.description}</Typography>

              <CodeEditor
                defaultCode={topic.exercise.defaultCode}
                height={240}
              />

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#61DAFB',
                    color: 'black',
                    '&:hover': {
                      bgcolor: 'rgba(97, 218, 251, 0.9)',
                    }
                  }}
                >
                  Run & Check
                </Button>
              </Box>
            </Box>
          </Paper>
        )}

        {topic.challenge && (
          <Paper
            sx={{
              mb: 6,
              overflow: 'hidden',
              borderRadius: 3,
              border: '2px solid rgba(233, 30, 99, 1)',
            }}
          >
            <Box
              sx={{
                px: 4,
                py: 3,
                borderBottom: '1px solid rgba(233, 30, 99, 0.2)',
                backgroundColor: 'rgba(233, 30, 99, 0.05)',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'rgba(233, 30, 99, 1)' }}>
                Challenge
              </Typography>
              <Typography variant="body2">
                Apni samajh ko test karein:
              </Typography>
            </Box>
            <Box sx={{ p: 4 }}>
              <Typography sx={{ mb: 4 }}>Neeche diye gaye challenge ko complete kijiye:</Typography>
              <Typography sx={{ fontWeight: 500, mb: 2 }}>Challenge:</Typography>
              <Typography>{topic.challenge.description}</Typography>

              <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                 onClick={() => setShowHint(prev => !prev)}
                  startIcon={<HelpOutlineIcon sx={{ color: 'rgba(233, 30, 99, 1)' }} />}
                  sx={{
                    justifyContent: 'flex-start',
                    bgcolor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 2,
                    p: 1.5,
                    textAlign: 'left',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.03)'
                    }
                  }}
                >
                  Hint dekhein
                </Button>
                {showHint && (
                  <Typography variant="body2" sx={{ mt: 1, color: '#888' }}>
                    Hint Feature jald hi aayega!
                  </Typography>
                )}
                <Button
                  onClick={() => setSolution(prev => !prev)}
                  startIcon={<CodeIcon sx={{ color: '#61DAFB' }} />}
                  sx={{
                    justifyContent: 'flex-start',
                    bgcolor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 2,
                    p: 1.5,
                    textAlign: 'left',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.03)'
                    }
                  }}
                >
                  Solution dekhein
                </Button>
                {solution && (
                  <Typography variant="body2" sx={{ mt: 1, color: '#888' }}>
                    Solution feature jald hi aayega!
                  </Typography>
                )}
              </Box>
            </Box>
          </Paper>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 8, pt: 4, borderTop: '1px solid var(--border-color)' }}>
          {prevTopic ? (
            <Button
              component={Link}
              to={`/topics/${prevTopic.id}`}
              startIcon={<ArrowBackIcon />}
              sx={{ color: 'var(--text-secondary)' }}
            >
              Previous: {prevTopic.title}
            </Button>
          ) : (
            <Button disabled startIcon={<ArrowBackIcon />} sx={{ color: 'var(--text-secondary)' }}>
              Previous
            </Button>
          )}

          {!isCompleted && (
            <Button
              variant="contained"
              onClick={handleMarkAsCompleted}
              sx={{
                bgcolor: '#61DAFB',
                color: 'black',
                '&:hover': {
                  bgcolor: 'rgba(97, 218, 251, 0.9)',
                }
              }}
            >
              Mark as Completed
            </Button>
          )}

          {nextTopic ? (
            <Button
              component={Link}
              to={`/topics/${nextTopic.id}`}
              endIcon={<ArrowForwardIcon />}
              variant={isCompleted ? "contained" : "text"}
              sx={isCompleted ? {
                bgcolor: '#61DAFB',
                color: 'black',
                '&:hover': {
                  bgcolor: 'rgba(97, 218, 251, 0.9)',
                }
              } : {
                color: 'var(--text-secondary)'
              }}
            >
              Next: {nextTopic.title}
            </Button>
          ) : (
            <Button disabled endIcon={<ArrowForwardIcon />} sx={{ color: 'var(--text-secondary)' }}>
              Next
            </Button>
          )}
        </Box>

        <RelatedTopics currentTopicId={topic.id} />
      </Container>
    </motion.div>
  );
};

export default TopicPage;
