import * as React from "react";

import { Paper, Typography } from "@mui/material";

const AutomationPanel: React.FC = () => {
    return (
        <Paper sx={{ padding: 3, textAlign: "center" }}>
            <Typography variant="h4">Automation Execution</Typography>
            <Typography>Run Ansible scripts, health checks, and automated resolutions.</Typography>
        </Paper>
    );
};

export default AutomationPanel;
