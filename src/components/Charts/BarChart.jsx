import PropTypes from "prop-types";
import styled from "styled-components";
import {
  BarChart as BarChartPrimitive,
  Bar,
  CartesianGrid,
  YAxis,
  Tooltip as TooltipPrimitive,
  XAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

import TooltipContent from "./Tooltip";

const Title = styled.div`
  padding: 20px;
  h2 {
    font-size: 14px;
    font-weight: 400;
  }
`;

const LegendText = (value) => (
  <span
    style={{
      color: "#74798C",
      fontSize: "14px",
      fontWeight: 600,
    }}
  >
    {value}
  </span>
);

function BarChart({ data }) {
  return (
    <ResponsiveContainer height="70%">
      <Title>
        <h2>Activité quotidienne</h2>
      </Title>

      <BarChartPrimitive data={data}>
        <CartesianGrid vertical={false} strokeDasharray="1 1" />
        <XAxis
          dataKey="day"
          tickLine={false}
          tick={{ fontSize: 14 }}
          dy={15}
          stroke="1 1"
        />
        <YAxis
          yAxisId="kilogram"
          dataKey="kilogram"
          type="number"
          domain={["dataMin - 2", "dataMax + 1"]}
          tickCount="4"
          axisLine={false}
          orientation="right"
          tickLine={false}
          tick={{ fontSize: 14 }}
          dx={15}
        />
        <YAxis
          yAxisId="calories"
          dataKey="calories"
          type="number"
          domain={["dataMin - 20", "dataMax + 10"]}
          hide={true}
        />

        <TooltipPrimitive
          content={<TooltipContent />}
          cursor={{ fill: "#C4C4C4", fillOpacity: 0.5 }}
        />
        <Legend
          verticalAlign="top"
          align="right"
          iconSize={10}
          iconType="circle"
          wrapperStyle={{ top: "-40px", right: 0 }}
          formatter={LegendText}
        />
        <Bar
          yAxisId="kilogram"
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282D30"
          barSize={7}
          radius={[50, 50, 0, 0]}
        />
        <Bar
          yAxisId="calories"
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          barSize={7}
          radius={[50, 50, 0, 0]}
        />
      </BarChartPrimitive>
    </ResponsiveContainer>
  );
}

BarChart.propTypes = {
  data: PropTypes.array,
};

export { Bar };
export default BarChart;
