import * as React from "react";

import { Paper, Typography, List, ListItem, ListItemText, Box, Divider } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

interface Incident {
    id: string;
    title: string;
    severity: "High" | "Medium" | "Low";
    status: "Open" | "In Progress" | "Resolved";
}

const criticalIncidents: Incident[] = [
    { id: "INC001", title: "Database Outage", severity: "High", status: "Open" },
    { id: "INC002", title: "Security Breach Detected", severity: "High", status: "In Progress" },
    { id: "INC003", title: "Application Downtime", severity: "High", status: "Open" },
];

const CriticalIncidents: React.FC = () => {
    return (
        <Paper sx={{ padding: 2, textAlign: "center", bgcolor: "#ffebee" }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "#d32f2f" }}>
                <ErrorIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                Critical Incidents
            </Typography>
            <List>
                {criticalIncidents.map((incident, index) => (
                    <Box key={incident.id}>
                        <ListItem>
                            <ListItemText
                                primary={incident.title}
                                secondary={`Severity: ${incident.severity} | Status: ${incident.status}`}
                            />
                        </ListItem>
                        {index < criticalIncidents.length - 1 && <Divider />}
                    </Box>
                ))}
            </List>
        </Paper>
    );
};

export default CriticalIncidents;
