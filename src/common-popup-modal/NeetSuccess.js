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

const NeetSuccess = ({ handleClose, open }) => {

    return (
            <Modal open={open} onClose={handleClose}>
                <Paper
                    elevation={4}
                    sx={{
                        width: "80%",
                        maxWidth: "700px",
                        mx: "auto",
                        my: "10%", // Adjusts vertical spacing to center the modal
                        p: 4, // Padding around the content inside the modal
                        position: "relative",
                        borderRadius: "16px",
                        display: "flex", // Ensures the modal content is centered
                        flexDirection: "column",
                        justifyContent: "center",
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
                        Approaches to Neet Success
                    </Typography>
                    <Box>
                        <Typography variant="body1" paragraph>
                            <strong>• Strong Foundation in Basics:</strong>
                            A mentor ensures you have a solid understanding of the fundamental concepts, helping you build a strong foundation for NEET preparation, making advanced topics easier to grasp.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>• Time Management Skills:</strong>
                            A mentor helps you develop effective time management skills, balancing study sessions, rest, and revision. This approach ensures you’re well-prepared without feeling overwhelmed.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>• Consistent Revision:</strong>
                            Regular revision is key to retaining what you’ve learned. A mentor encourages frequent revision, helping reinforce key concepts and ensuring that you stay ahead.
                        </Typography>
                      
                       
                    </Box>


                    {/* Image Section */}
                    <Box
                        component="img"
                        src="https://via.placeholder.com/300" // Replace with actual image URL
                        alt="Confused Students"
                        sx={{
                            display: "block",
                            mx: "auto",
                            mt: 2,
                            maxWidth: "100%",
                            borderRadius: "8px",
                        }}
                    />
                </Paper>
            </Modal>
 
    );
};

export default NeetSuccess;
