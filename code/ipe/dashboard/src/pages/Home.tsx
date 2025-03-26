import { useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "../components/Sidebar";
import IncidentDashboard from "../components/IncidentDashboard";
import AIChatbot from "../components/AIChatbot";
import AutomationPanel from "../components/AutomationPanel";
import TelemetryPanel from "../components/TelemetryPanel";

const Home: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<string>("IncidentDashboard");

    const renderComponent = () => {
        switch (selectedComponent) {
            case "AIChatbot":
                return <AIChatbot />;
            case "AutomationPanel":
                return <AutomationPanel />;
            case "TelemetryPanel":
                return <TelemetryPanel />;
            default:
                return <IncidentDashboard />; // Default to Incident Dashboard
        }
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Sidebar setSelectedComponent={setSelectedComponent} />
            <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "#fff", minHeight: "100vh" }}>
                <Toolbar />
                {renderComponent()}
            </Box>
        </Box>
    );
};

export default Home;
