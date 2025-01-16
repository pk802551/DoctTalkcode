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

const ResourcesBoost = ({ handleClose, open }) => {

    return (
        <Container maxWidth="md" sx={{ textAlign: "center", py: 8 }}>
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
                        Resources to Boost Your NEET Preparation
                    </Typography>
                    <Box>
                        <Typography variant="body1" paragraph>
                            <strong>• Quality Study Material:</strong>
                            A mentor helps identify reliable and comprehensive study materials for NEET preparation, ensuring you have access to the best resources to cover all topics efficiently.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>• Personalized Study Plans:</strong>
                            With the guidance of a mentor, you can develop a customized study plan tailored to your strengths and weaknesses, ensuring focused and systematic preparation for NEET.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>• Regular Practice and Mock Tests:</strong>
                            A mentor emphasizes the importance of regular practice and taking mock tests, helping you assess your progress, identify areas for improvement, and improve your exam-taking strategies.
                        </Typography>
                    </Box>


                </Paper>
            </Modal>
        </Container>
    );
};

export default ResourcesBoost;
