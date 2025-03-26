import * as React from "react";

import { Paper, Typography, Box, Grid } from "@mui/material";
import IncidentGraph from "./IncidentGraph";
import CriticalIncidents from "./CriticalIncidents";

const IncidentDashboard: React.FC = () => {
    return (
        <Box>
            <Paper sx={{ padding: 3, textAlign: "center", mb: 3 }}>
                <Typography variant="h4">Integrated Platform Environment -  Dashboard</Typography>
                <Typography>Displays active incidents with AI insights.</Typography>
            </Paper>

            <Grid container spacing={2}>
                {/* Incident Ratio Graph */}
                <Grid item xs={12} md={8}>
                    <IncidentGraph />
                </Grid>

                {/* Critical Incidents List */}
                <Grid item xs={12} md={4}>
                    <CriticalIncidents />
                </Grid>
            </Grid>
        </Box>
    );
};

export default IncidentDashboard;
