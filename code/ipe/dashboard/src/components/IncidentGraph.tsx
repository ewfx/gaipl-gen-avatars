import * as React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Paper, Typography } from "@mui/material";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IncidentGraph: React.FC = () => {
    // Sample data for incidents
    const data = {
        labels: ["Network", "Database", "Server", "Security", "Application"],
        datasets: [
            {
                label: "Incidents Count",
                data: [15, 20, 10, 8, 25], // Replace with real API data later
                backgroundColor: ["#ff3d00", "#ff9100", "#ffea00", "#00e676", "#2979ff"],
            },
        ],
    };

    // Graph options
    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" as const },
            title: { display: true, text: "Incident Ratio by Category" },
        },
    };

    return (
        <Paper sx={{ padding: 3, textAlign: "center" }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
                Incident Ratio Overview
            </Typography>
            <Bar data={data} options={options} />
        </Paper>
    );
};

export default IncidentGraph;
