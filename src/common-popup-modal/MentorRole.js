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

const MentorRole = ({ handleClose, open }) => {

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
                      Our Mentor's Role
                    </Typography>
                    <Box>
                        <Typography variant="body1" paragraph>
                            <strong>• Guidance Beyond Academics:</strong> 
                            A mentor provides valuable insights and advice that go beyond textbooks, helping students navigate both their academic and personal growth. They act as a trusted advisor, guiding students through challenges and helping them make informed decisions.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>•  Building Confidence and Motivation:</strong>
                            A mentor helps instill confidence in students, pushing them to strive for their best. By offering personalized support, mentors empower students to overcome self-doubt and stay motivated even during difficult times.                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>• Developing Critical Life Skills:</strong> 
                             Mentors are instrumental in teaching essential life skills such as time management, problem-solving, and effective communication. These skills are not only crucial for exam success but also for success in life beyond academics.
                        </Typography>
                    </Box>

          
                </Paper>
            </Modal>
        </Container>
    );
};

export default MentorRole;
