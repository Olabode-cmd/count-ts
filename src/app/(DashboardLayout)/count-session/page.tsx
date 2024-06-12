"use client";
import { Grid, Box, Chip } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

const CountSession = () => {
    return (
      <PageContainer title="Count Session" description="This is Count Session">
        <Chip label="Warehouse Manager" />
        
      </PageContainer>
    );
}