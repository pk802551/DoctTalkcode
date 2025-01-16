import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    InputBase,
    useScrollTrigger,
    Slide,
    useMediaQuery,
    useTheme
} from '@mui/material';
import {
    Menu as MenuIcon,
    Search as SearchIcon,
    School as SchoolIcon,
    Close as CloseIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { IMAGE_TYPES } from '../utility-files/default-values/DefaultValues';

// Custom hook for scroll direction
const useScrollDirection = () => {
    const [scrollDir, setScrollDir] = useState("up");

    useEffect(() => {
        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                setScrollDir("up");
                return;
            }

            if (currentScroll > lastScroll && scrollDir !== "down") {
                setScrollDir("down");
            } else if (currentScroll < lastScroll && scrollDir !== "up") {
                setScrollDir("up");
            }
            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollDir]);

    return scrollDir;
};

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [logoColor, setLogoColor] = useState('#2C3E50');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const scrollDirection = useScrollDirection();

    const navItems = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Blog', path: '/blog' },
        { title: 'Contact', path: '/contact' }
    ];

    // Change logo color on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            const newColor = `hsl(${scroll % 360}, 50%, 50%)`;
            setLogoColor(newColor);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SchoolIcon sx={{ mr: 1, color: logoColor }} />
                <Typography variant="h6">
                    Doct Talk
                </Typography>
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} component={Link} to={item.path}>
                        <ListItemText
                            primary={item.title}
                            sx={{
                                textAlign: 'center',
                                '& .MuiTypography-root': {
                                    color: 'text.primary'
                                }
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Slide appear={false} direction="down" in={scrollDirection === "up"}>
            <AppBar
                position="fixed"
                sx={{
                    background: 'rgba(44, 62, 80, 0.95)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Logo Section */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)'
                            }
                        }}
                        component={Link}
                        to="/"
                    >
                        {/* Logo Image */}
                        <img
                            src={IMAGE_TYPES.USER_LOGIN}
                            alt="Doct Talk Logo"
                            style={{
                                height: '40px', // Adjust height as per your design
                                marginRight: '10px', // Space between logo and text
                                transition: 'opacity 0.3s ease',
                            }}
                        />

                        {/* Gradient Typography */}
                        <Typography
                            variant="h6"
                            sx={{
                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            Doct Talk
                        </Typography>
                    </Box>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {!isSearchOpen ? (
                                <>
                                    {navItems.map((item) => (
                                        <Button
                                            key={item.title}
                                            component={Link}
                                            to={item.path}
                                            sx={{
                                                color: 'white',
                                                position: 'relative',
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: '50%',
                                                    width: 0,
                                                    height: '2px',
                                                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                                    transition: 'all 0.3s ease',
                                                },
                                                '&:hover::after': {
                                                    width: '100%',
                                                    left: 0,
                                                }
                                            }}
                                        >
                                            {item.title}
                                        </Button>
                                    ))}
                                    <IconButton
                                        color="inherit"
                                        onClick={() => setIsSearchOpen(true)}
                                        sx={{ ml: 1 }}
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </>
                            ) : (
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <InputBase
                                        placeholder="Search..."
                                        sx={{
                                            color: 'inherit',
                                            ml: 1,
                                            flex: 1,
                                            '& .MuiInputBase-input': {
                                                padding: '8px',
                                                borderRadius: '4px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                }
                                            }
                                        }}
                                        autoFocus
                                    />
                                    <IconButton
                                        color="inherit"
                                        onClick={() => setIsSearchOpen(false)}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                            )}
                        </Box>
                    )}

                    {/* Mobile Navigation */}
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>

                {/* Mobile Drawer */}
                <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true // Better mobile performance
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 240,
                            background: 'rgba(44, 62, 80, 0.95)',
                            backdropFilter: 'blur(8px)',
                            color: 'white'
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </AppBar>
        </Slide>
    );
};

export default Header;

