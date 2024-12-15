import PropTypes from "prop-types";
import styled from "styled-components";

import {
  PieChart as PieChartPrimitive,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Title = styled.div`
  position: absolute;
  left: 50px;
  top: 35px;
  h2 {
    font-size: 15px;
    font-weight: 400;
  }
`;

const PieLegend = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 91px;
  left: 0;
  right: 0;
  span {
    font-size: 26px;
    font-weight: bold;
  }
`;

function PieChart({ data }) {
  return (
    <ResponsiveContainer width="100%">
      <Title>
        <h2>Score</h2>
      </Title>

      <PieChartPrimitive>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={70}
          outerRadius={85}
          startAngle={90}
        >
          {data.map((entry, index) =>
            index === 0 ? (
              <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0200" />
            ) : (
              <Cell key={`cell-${entry}`} fill="#FFF" />
            )
          )}
        </Pie>
      </PieChartPrimitive>
      <PieLegend
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          top: "91px",
          left: 0,
          right: 0,
        }}
      >
        <span>{data[0].value * 100}%</span>
        de votre <br /> objectif
      </PieLegend>
    </ResponsiveContainer>
  );
}

PieChart.propTypes = {
  data: PropTypes.array,
};

export { Pie };
export default PieChart;
