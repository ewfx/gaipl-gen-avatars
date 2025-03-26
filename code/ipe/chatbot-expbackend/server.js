require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { OpenAI } = require("openai");

const app = express();
const port = 5000;

app.use(cors({ origin: "http://localhost:3055" }));
app.use(bodyParser.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/api/chat", async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            console.error(" Error: No message provided");
            return res.status(400).json({ error: "Message is required" });
        }

        console.log(`🔹 Received message: ${message}`);

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // Change from "gpt-4" to "gpt-3.5-turbo"
            messages: [{ role: "user", content: message }],
        });

        if (!response.choices || response.choices.length === 0) {
            console.error("❌ Error: No response from OpenAI API");
            return res.status(500).json({ error: "No response from LLM" });
        }

        console.log(`OpenAI Response: ${response.choices[0].message.content}`);

        res.json({ reply: response.choices[0].message.content });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: "Failed to process request", details: error.message });
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
