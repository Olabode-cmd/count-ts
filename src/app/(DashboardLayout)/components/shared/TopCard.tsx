// src/components/DashboardCard.tsx
import { Card, CardContent, Typography, Box, Link, Icon } from "@mui/material";
import { green, red } from "@mui/material/colors";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface TopCardProps {
  title: string;
  value: number | string;
  change: number;
  link: string;
}

const TopCard: React.FC<TopCardProps> = ({
  title,
  value,
  change,
  link,
}) => {
  return (
    <Card variant="outlined" sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="h1" component="div">
            {value}
          </Typography>
          <Box display="flex" alignItems="center" ml={1}>
            <Icon
              sx={{
                color: change > 0 ? green[500] : red[500],
                verticalAlign: "middle",
              }}
            >
              {change > 0 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
            </Icon>
            <Typography
              variant="body2"
              sx={{ color: change > 0 ? green[500] : red[500] }}
            >
              {`${Math.abs(change)}%`}
            </Typography>
          </Box>
        </Box>
        <Link href={link} variant="body2" color="#015e63">
          View Analytics
        </Link>
      </CardContent>
    </Card>
  );
};

export default TopCard;
