import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import { useDarkMode } from "../../Context/DarkModeContext";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

const fakeData = [
  { label: "Jan-2022", totalSales: 480, revenue: 20 },
  { label: "Feb-2022", totalSales: 580, revenue: 100 },
  { label: "Mar-2022", totalSales: 550, revenue: 150 },
  { label: "Apr-2022", totalSales: 600, revenue: 50 },
  { label: "May-2022", totalSales: 700, revenue: 150 },
  { label: "Jun-2022", totalSales: 800, revenue: 150 },
  { label: "Jul-2022", totalSales: 700, revenue: 200 },
  { label: "Aug-2022", totalSales: 1650, revenue: 200 },
  { label: "Sep-2022", totalSales: 600, revenue: 300 },
  { label: "Oct-2022", totalSales: 550, revenue: 100 },
  { label: "Nov-2022", totalSales: 700, revenue: 100 },
  { label: "Dec-2022", totalSales: 800, revenue: 200 },
];

export default function SalesDataChart() {
  const { isDarkMode } = useDarkMode();
  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        revenue: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        revenue: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <>
      <StyledSalesChart>
        <ResponsiveContainer height={300} width="100%">
          <AreaChart data={fakeData}>
            <XAxis
              dataKey="label"
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <YAxis
              unit="$"
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <CartesianGrid strokeDasharray="4" />
            <Tooltip contentStyle={{ backgroundColor: colors.background }} />
            <Area
              dataKey="totalSales"
              type="monotone"
              stroke={colors.totalSales.stroke}
              fill={colors.totalSales.fill}
              strokeWidth={2}
              name="Total sales"
              unit="$"
            />
            <Area
              dataKey="revenue"
              type="monotone"
              stroke={colors.revenue.stroke}
              fill={colors.revenue.fill}
              strokeWidth={2}
              name="Extras sales"
              unit="$"
            />
          </AreaChart>
        </ResponsiveContainer>
      </StyledSalesChart>
    </>
  );
}
