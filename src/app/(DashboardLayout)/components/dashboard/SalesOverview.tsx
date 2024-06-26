import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Chip } from "@mui/material";
import dynamic from "next/dynamic";
import BaseCard from "../shared/DashboardCard";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesOverview = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const optionssalesoverview: any = {
    grid: {
      show: true,
      borderColor: "transparent",
      strokeDashArray: 2,
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "42%",
        endingShape: "rounded",
        borderRadius: 5,
      },
    },

    colors: ["#015e63", "#fd5900"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      offsetX: -15,
      toolbar: {
        show: false,
      },
      foreColor: "#adb4bb",
      fontFamily: "inherit",
      sparkline: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      show: true,
      min: 100,
      max: 400,
      tickAmount: 3,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    tooltip: {
      theme: "dark",
    },
  };
  const seriessalesoverview: any = [
    {
      name: "Inventory Level",
      data: [355, 390, 300, 350, 390, 180, 355, 390, 300, 350, 390, 180],
    },
    {
      name: "Stock Variances",
      data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215, 250, 310],
    },
  ];
  return (
    <BaseCard title="Overview">
      <Box>
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center">
            <Typography>Inventory Level:</Typography>
            <Chip
              sx={{
                borderRadius: "0",
                padding: "1px",
                marginLeft: "5px",
                backgroundColor: "#015e63",
              }}
            ></Chip>
          </Box>

          <Box display="flex" alignItems="center" sx={{ marginLeft: "10px"}}>
            <Typography>Stock Variances:</Typography>
            <Chip
              sx={{
                borderRadius: "0",
                padding: "1px",
                marginLeft: "5px",
                backgroundColor: "#fd5900",
              }}
            ></Chip>
          </Box>
        </Box>

        <Chart
          options={optionssalesoverview}
          series={seriessalesoverview}
          type="bar"
          height="295px"
        />
      </Box>
    </BaseCard>
  );
};

export default SalesOverview;
