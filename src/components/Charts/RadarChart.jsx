import PropTypes from "prop-types";
import {
  RadarChart as RadarChartPrimitive,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

function RadarChart({ data }) {
  console.log(data);
  return (
    <ResponsiveContainer borderRadius="5px" width="100%">
      <RadarChartPrimitive cx="50%" cy="50%" outerRadius="65%" data={data}>
        <PolarGrid gridType="polygon" />
        <PolarAngleAxis
          dataKey="label"
          stroke="white"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 10 }}
        />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChartPrimitive>
    </ResponsiveContainer>
  );
}

RadarChart.propTypes = {
  data: PropTypes.array,
};

export default RadarChart;
