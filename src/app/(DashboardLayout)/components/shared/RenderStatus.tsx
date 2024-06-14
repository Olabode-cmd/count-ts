import React from "react";
import { Chip } from "@mui/material";

export const renderStatus = (params: any) => {
  const { value } = params;
  let color:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning" = "default";

  switch (value) {
    case "upcoming":
      color = "info";
      break;
    case "ongoing":
      color = "primary";
      break;
    case "completed":
      color = "success";
      break;
    default:
      color = "default";
  }

  return <Chip label={value} color={color} />;
};