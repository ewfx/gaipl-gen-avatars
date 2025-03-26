import React, { useState, useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { sendMessageToLLM } from "../services/llm.service";

const AIChatbot: React.FC = () => {
    const { chatHistory, setChatHistory } = useContext(ChatContext);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSendMessage = async () => {
        if (!userInput.trim()) return;

        const userMessage = { role: "user", content: userInput };
        setChatHistory([...chatHistory, userMessage]);

        setLoading(true);
        const botResponse = await sendMessageToLLM(userInput);
        setLoading(false);

        if (botResponse) {
            setChatHistory([...chatHistory, userMessage, { role: "assistant", content: botResponse }]);
        }
        setUserInput("");
    };

    return (
        <div className="chat-container">
            <div className="chat-history">
                {chatHistory.map((msg, index) => (
                    <div key={index} className={msg.role === "user" ? "user-message" : "bot-message"}>
                        {msg.content}
                    </div>
                ))}
            </div>
            {loading && <p>Loading...</p>}
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask me anything..."
            />
            <button onClick={handleSendMessage} disabled={loading}>Send</button>
        </div>
    );
};

export default AIChatbot;
