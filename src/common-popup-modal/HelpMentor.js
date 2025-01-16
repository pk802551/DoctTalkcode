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

const HelpYou = ({ handleClose, open }) => {

    return (
         
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
                        How a mentor help you
                    </Typography>
                    <Box>
                        <Typography variant="body1" paragraph>
                            <strong>• Guiding Academic Pathways:</strong>
                            A mentor provides valuable insights into the student's academic journey, offering advice on course selection, study strategies, and navigating challenges.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>• Providing Emotional Support:</strong>
                            In moments of stress, a mentor offers a listening ear, helping students cope with pressure, maintain motivation, and stay focused on their goals.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>• Sharing Practical Knowledge:</strong>
                            Mentors share their personal experiences, helping students understand real-world applications of their studies and offering career advice.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>• Building Confidence:</strong>
                            A mentor encourages students to believe in their abilities, helping them overcome self-doubt and take on new challenges with confidence.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>• Setting Goals and Expectations:</strong>
                            By working with students to set clear goals and expectations, mentors help them stay organized, focused, and motivated throughout their educational journey.
                        </Typography>
                       
                    </Box>
                </Paper>
            </Modal>
    );
};

export default HelpYou;
