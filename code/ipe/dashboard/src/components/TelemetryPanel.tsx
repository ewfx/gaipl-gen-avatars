import * as React from "react";

import { Paper, Typography } from "@mui/material";

const TelemetryPanel: React.FC = () => {
    return (
        <Paper sx={{ padding: 3, textAlign: "center" }}>
            <Typography variant="h4">Telemetry Insights</Typography>
            <Typography>Monitor system health, logs, and observability metrics.</Typography>
        </Paper>
    );
};

export default TelemetryPanel;
