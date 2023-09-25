// server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/api/message", (req, res) => {
    const userMessage = req.body.message;
    // Implement logic to send the user's message to your AI and get a response
    const botResponse = "This is a placeholder bot response.";

    // Send the response back to the frontend
    res.json({ botResponse });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
