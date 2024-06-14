"use client";
import { useState } from "react";
import { Box, Chip, Button, Modal, Typography, IconButton } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
// components
import WarehouseTable from "../components/tables/WarehouseTable";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "5%",
  left: "50%",
  transform: "translateX(-50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "8px",
};

const Warehouse = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <PageContainer title="Warehouses" description="this is Warehouse page">
      <Chip label="Warehouse Manager" />

      <Box display="flex" justifyContent="space-between">
        <Box></Box>
        <Box>
          <Button
            variant="contained"
            className="bg-green"
            sx={{ marginBottom: "15px" }}
            onClick={handleOpen}
          >
            Add Warehouse
          </Button>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography id="modal-title" variant="h3" component="h2">
              Create Session
            </Typography>
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box mt={2}>
            <Typography variant="h1">Body</Typography>
           

    
          </Box>
        </Box>
      </Modal>

      <Box>
        <WarehouseTable />
      </Box>
    </PageContainer>
  );
};

export default Warehouse;