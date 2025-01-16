import React from 'react';
import { Modal, Box, IconButton, Typography, Fade } from '@mui/material';
import { WhatsApp, Telegram } from '@mui/icons-material';
import CloseIcon from "@mui/icons-material/Close";

const SocialMediaModal = ({ open, handleClose }) => {
    const handleWhatsAppClick = () => {
        // Open WhatsApp directly if the app is installed, or fallback to web URL
        window.open('https://wa.me/8529477906', '_blank'); // Replace with your WhatsApp number
    };

    const handleTelegramClick = () => {
        // Open Telegram directly if the app is installed, or fallback to web URL
        window.open('https://t.me/yourtelegramusername', '_blank'); // Replace with your Telegram username
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            disableAutoFocus
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Fade in={open}>
                <Box
                    sx={{
                        width: '180px',
                        height: '150px',
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 12,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        transform: open ? 'scale(1)' : 'scale(0.95)',
                        border: '1px solid #e0e0e0',
                        overflow: 'hidden',
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: "absolute", top: "5px", right: "10px" }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {/* Title Section */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                            marginBottom: 3,
                            textAlign: 'center',
                            fontSize: '1.1rem',
                        }}
                    >
                        Connect With Us
                    </Typography>

                    {/* Icons Section */}
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                        <IconButton
                            color="success"
                            onClick={handleWhatsAppClick}
                            sx={{
                                fontSize: 50,
                                transition: '0.3s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            <WhatsApp sx={{ fontSize: 'inherit' }} />
                        </IconButton>

                        <IconButton
                            color="info"
                            onClick={handleTelegramClick}
                            sx={{
                                fontSize: 50,
                                transition: '0.3s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            <Telegram sx={{ fontSize: 'inherit' }} />
                        </IconButton>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};

export default SocialMediaModal;
