import { useState } from "react";
import emailjs from "emailjs-com";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSnackbar({
            open: true,
            message: "Message sent successfully!",
            severity: "success",
          });
          setFormData({ fullName: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setSnackbar({
            open: true,
            message: "Failed to send message. Please try again.",
            severity: "error",
          });
        }
      );
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "30px",
        boxShadow: "0 0 3px #ffffff4d",
        borderRadius: "8px",
        backgroundColor: "rgb(18, 18, 18, 0.3)",
        margin: 0,
        width: "100%",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
        Contact Me
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              flex: 1,
              minWidth: "100px",
              input: { color: "white" },
              label: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
                "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.4)",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": { color: "white" },
              },
            }}
          />
          <TextField
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              flex: 1,
              minWidth: "100px",
              input: { color: "white" },
              label: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
                "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.4)",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": { color: "white" },
              },
            }}
          />
        </Box>

        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          multiline
          rows={4}
          fullWidth
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
              "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(255, 255, 255, 0.4)",
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": { color: "white" },
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            maxWidth: "150px",
            backgroundColor: "#ff7300",
            "&:hover": { backgroundColor: "#e66a00" },
            alignSelf: "flex-start",
          }}
        >
          Send Message
        </Button>
      </Box>

      {/* Snackbar for Success/Error Messages */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
