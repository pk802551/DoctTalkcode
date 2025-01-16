import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  IconButton,
  InputAdornment,
  TextField,
  Chip,
  Avatar,
  Fade
} from '@mui/material';
import { 
  Search, 
  Favorite, 
  Share, 
  AccessTime, 
  BookmarkBorder, 
  Bookmark
} from '@mui/icons-material';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Master NEET Biology: Complete Study Guide",
    category: "Biology",
    image: "/placeholder.svg?height=200&width=400",
    readTime: "8 min",
    excerpt: "Comprehensive guide to ace NEET Biology section with proven strategies and important topics...",
    author: {
      name: "Dr. Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  },
  {
    id: 2,
    title: "Physics Problem-Solving Techniques",
    category: "Physics",
    image: "/placeholder.svg?height=200&width=400",
    readTime: "10 min",
    excerpt: "Learn effective problem-solving techniques for NEET Physics with step-by-step examples...",
    author: {
      name: "Prof. Robert Chen",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  },
  {
    id: 3,
    title: "Chemistry Formula Sheet & Tips",
    category: "Chemistry",
    image: "/placeholder.svg?height=200&width=400",
    readTime: "6 min",
    excerpt: "Essential chemistry formulas and quick tips to boost your NEET preparation...",
    author: {
      name: "Dr. Emily White",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  }
];

const categories = ["All", "Biology", "Physics", "Chemistry", "Study Tips", "Success Stories"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [savedPosts, setSavedPosts] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const toggleSavePost = (postId) => {
    setSavedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Box sx={{ 
      padding: '100px 20px', 
      backgroundColor: '#f5f5f5', 
      minHeight: '100vh'
    }}>
      {/* Header Section */}
      <Box sx={{ 
        textAlign: 'center', 
        marginBottom: '40px'
      }}>
      
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #18BC9C 30%, #2196F3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px'
          }}
        >
          NEET Preparation Blogs
        </Typography>
        <Typography variant="h6" sx={{ color: '#666', marginBottom: '30px' }}>
          Your Gateway to NEET Success: Expert Tips, Strategies & Success Stories
        </Typography>
      </Box>

      {/* Search and Categories */}
      <Box sx={{ marginBottom: '40px' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={handleSearch}
          sx={{ marginBottom: '20px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => handleCategoryClick(category)}
              color={selectedCategory === category ? "primary" : "default"}
              sx={{ 
                '&:hover': { 
                  transform: 'translateY(-2px)',
                  transition: 'transform 0.2s'
                }
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Blog Posts */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {filteredPosts.map((post) => (
          <Fade in={true} key={post.id} timeout={1000}>
            <Card sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease'
              }
            }}>
              <CardMedia
                component="img"
                sx={{ 
                  width: { xs: '100%', md: '300px' },
                  height: { xs: '200px', md: 'auto' }
                }}
                image={post.image}
                alt={post.title}
              />
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Chip 
                    label={post.category} 
                    size="small" 
                    color="primary" 
                    sx={{ backgroundColor: '#18BC9C' }}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccessTime sx={{ fontSize: 16, color: '#666' }} />
                    <Typography variant="caption" color="text.secondary">
                      {post.readTime}
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {post.title}
                </Typography>
                
                <Typography variant="body1" color="text.secondary" paragraph>
                  {post.excerpt}
                </Typography>

                <Box sx={{ 
                  mt: 'auto', 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar src={post.author.avatar} />
                    <Typography variant="subtitle2">
                      {post.author.name}
                    </Typography>
                  </Box>
                  
                  <Box>
                    <IconButton onClick={() => toggleSavePost(post.id)}>
                      {savedPosts.includes(post.id) ? <Bookmark /> : <BookmarkBorder />}
                    </IconButton>
                    <IconButton>
                      <Favorite />
                    </IconButton>
                    <IconButton>
                      <Share />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Fade>
        ))}
      </Box>

      {/* Load More Button */}
      <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
        <Button 
          variant="contained" 
          size="large"
          sx={{ 
            backgroundColor: '#18BC9C',
            '&:hover': {
              backgroundColor: '#15a589'
            },
            padding: '12px 30px',
            borderRadius: '30px'
          }}
        >
          Load More Blogs
        </Button>
      </Box>
    </Box>
  );
};

export default Blog;

