import * as React from "react";

import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";

interface SidebarProps {
    setSelectedComponent: (component: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setSelectedComponent }) => {
    const menuItems = [
        { text: "Incident Dashboard", component: "IncidentDashboard" },
        { text: "AI Chatbot", component: "AIChatbot" },
        { text: "Automation Panel", component: "AutomationPanel" },
        { text: "Telemetry Insights", component: "TelemetryPanel" },
    ];

    return (
        <Drawer variant="permanent" sx={{ width: 250, flexShrink: 0 }}>
            <Toolbar />
            <List>
                {menuItems.map(({ text, component }) => (
                    <ListItem button={Boolean(true)} key={text} onClick={() => setSelectedComponent(component)}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
