import React from "react";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import BaseCard from "../shared/DashboardCard";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const InventoryLevels = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const optionsinventorylevels: any = {
    chart: {
      height: 350,
      type: "line",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      //   title: {
      //     text: "Inventory Count",
      //   },
    },
  };
  const seriesinventorylevels: any = [
    {
      name: "Ample Admin",
      data: [255, 190, 400, 250, 90, 140, 305, 390, 200, 350, 190, 380],
    },
  ];
  return (
    <BaseCard title="Inventory Levels">
      <Chart
        options={optionsinventorylevels}
        series={seriesinventorylevels}
        type="line"
        height="295px"
      />
    </BaseCard>
  );
};

export default InventoryLevels;
