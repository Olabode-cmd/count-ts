'use client'
import { Grid, Box, Chip } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import TopCard from './components/shared/TopCard';
import RecentStockCount from './components/tables/RecentStockCount';


const Dashboard = () => {

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Chip label="Warehouse Manager" />
      <Box mt={3}>
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <TopCard title="Total Warehouses" value={7} change={6} link="#" />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TopCard title="Count Leads" value={25} change={9} link="#" />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TopCard title="Total Items" value="25,000" change={3} link="#" />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TopCard
              title="Active Count Sessions"
              value={4}
              change={0}
              link="#"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <SalesOverview />
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <RecentStockCount />
            {/* <CustomDataTable columns={columns} data={data} /> */}
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

export default Dashboard;
