import React, { createContext, useState, ReactNode } from "react";

interface ChatMessage {
    role: "user" | "assistant";
    content: string;
}

interface ChatContextType {
    chatHistory: ChatMessage[];
    setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

export const ChatContext = createContext<ChatContextType>({
    chatHistory: [],
    setChatHistory: () => { },
});

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    return (
        <ChatContext.Provider value={{ chatHistory, setChatHistory }}>
            {children}
        </ChatContext.Provider>
    );
};
