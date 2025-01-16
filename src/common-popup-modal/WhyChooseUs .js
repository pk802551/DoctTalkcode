import React from "react";
import {
    Container,
    Button,
    Box,
    Typography,
    Modal,
    Paper,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"

const WhyChooseUs = ({ handleClose, open }) => {

    return (
        // <Container maxWidth="md" sx={{ textAlign: "center", py: 8 }}>
            <Modal open={open} onClose={handleClose}>
                <Paper
                    elevation={4}
                    sx={{
                        width: "80%",
                        maxWidth: "700px",
                        mx: "auto",
                        my: "10%",
                        p: 4,
                        position: "relative",
                        borderRadius: "16px",
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: "absolute", top: "16px", right: "16px" }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Modal Content */}
                    <Typography variant="h4" fontWeight="bold" textAlign="center" mb={2}>
                        One To One Mentorship
                    </Typography>
                    <Box>
                        <Typography variant="body1" paragraph>
                            <strong>• Tailored Learning Path:</strong> We create a customized study plan that fits your learning style and pace, ensuring maximum efficiency.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>• In-Depth Concept Clarity:</strong> Receive detailed explanations for even the toughest concepts, ensuring you grasp each topic fully.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>• Regular Progress Tracking:</strong> Stay on track with frequent performance reviews, helping you focus on areas that need improvement.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>• Real-Time Feedback:</strong> Get immediate insights on your assignments and tests, so you can improve continuously.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>• Boost Your Confidence:</strong> With constant support and guidance, you’ll gain the confidence to tackle any challenge in your NEET preparation.
                        </Typography>
                    </Box>

    
                </Paper>
            </Modal>
        // </Container>
    );
};

export default WhyChooseUs;
