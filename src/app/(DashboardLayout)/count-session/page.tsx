"use client";
import { useState } from "react";
import {
  Grid,
  Box,
  Chip,
  Button,
  Modal,
  Typography,
  IconButton,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import CountSessionTable from "../components/tables/CountSessionTable";
import CloseIcon from "@mui/icons-material/Close";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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

const CountSession = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [lead, setLead] = useState("");

  const handleLeadChange = (event: SelectChangeEvent) => {
    setLead(event.target.value as string);
  };

  return (
    <PageContainer title="Count Session" description="This is Count Session">
      <Chip label="Warehouse Manager" sx={{ marginBottom: "20px" }} />

      <Box display="flex" justifyContent="space-between">
        <Box></Box>
        <Box>
          <Button
            variant="contained"
            className="bg-green"
            sx={{ marginBottom: "15px" }}
            onClick={handleOpen}
          >
            Create Session
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
            {/* <Typography variant="h1">Body</Typography> */}
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size={"small"}
              sx={{ width: "100%", marginBottom: "10px" }}
            />

            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Count Lead</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lead}
                label="Count"
                onChange={handleLeadChange}
              >
                <MenuItem value={1}>Mr Joe</MenuItem>
                <MenuItem value={2}>Mary Doe</MenuItem>
                <MenuItem value={3}>Matthew</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Modal>

      <CountSessionTable />
    </PageContainer>
  );
};

export default CountSession;
