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

const RoleMentee = ({ handleClose, open }) => {

    return (
        <Container maxWidth="md" sx={{ textAlign: "center", py: 8 }}>
            {/* Modal Component */}
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
                    Role of a Mentee 
                    </Typography>
                    <Box>
                        <Typography variant="body1" paragraph>
                            <strong>• Active Participation:</strong>
                            As a mentee, taking an active role in your learning journey is crucial. Regularly engaging with your mentor and asking questions ensures you gain the most from their expertise.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>• Goal Setting:</strong>
                            A successful mentee sets clear academic and personal goals. By working with a mentor to define these objectives, you create a roadmap to success and stay focused on achieving them.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>• Self-Discipline and Responsibility:</strong>
                            A mentee shows initiative by completing tasks on time and seeking feedback for continuous improvement. Taking responsibility for your learning is a key trait that drives success.
                        </Typography>
                          
                    </Box>
                </Paper>
            </Modal>
        </Container>
    );
};

export default RoleMentee;
