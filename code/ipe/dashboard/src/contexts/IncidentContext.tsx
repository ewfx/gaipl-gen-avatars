import { createContext, useState, ReactNode } from "react";
import * as React from "react";


interface Incident {
    id: string;
    title: string;
    severity: "High" | "Medium" | "Low";
    status: "Open" | "In Progress" | "Resolved";
}

interface IncidentContextType {
    incidents: Incident[];
    setIncidents: React.Dispatch<React.SetStateAction<Incident[]>>;
}

export const IncidentContext = createContext<IncidentContextType | undefined>(undefined);

export const IncidentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [incidents, setIncidents] = useState<Incident[]>([
        { id: "INC001", title: "Database Outage", severity: "High", status: "Open" },
        { id: "INC002", title: "Security Breach", severity: "High", status: "In Progress" },
    ]);

    return (
        <IncidentContext.Provider value={{ incidents, setIncidents }}>
            {children}
        </IncidentContext.Provider>
    );
};
