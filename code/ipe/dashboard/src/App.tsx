import * as React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import { ChatProvider } from "./contexts/ChatContext";
import { IncidentProvider } from "./contexts/IncidentContext";

const theme = createTheme({
    palette: {
        primary: {
            main: "#d32f2f", // Red for primary actions
            contrastText: "#ffffff", // White text on primary buttons
        },
        secondary: {
            main: "#ffffff", // White for secondary actions
            contrastText: "#d32f2f", // Red text on secondary buttons
        },
        background: {
            default: "#ffffff", // White background
            paper: "#f5f5f5", // Slightly off-white for paper components
        },
        text: {
            primary: "#d32f2f", // Red text for headings
            secondary: "#757575", // Gray text for secondary content
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <IncidentProvider>
                <ChatProvider>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </Router>
                </ChatProvider>
            </IncidentProvider>
        </ThemeProvider>
    );
}

export default App;
