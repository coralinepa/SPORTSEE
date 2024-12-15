import { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  LineChart as LineChartPrimitive,
  Line,
  Tooltip as TooltipPrimitive,
  YAxis,
  XAxis,
  ResponsiveContainer,
} from "recharts";

const Title = styled.div`
  position: absolute;
  left: 35px;
  top: 34px;
  h2 {
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    opacity: 50%;
  }
`;

function TooltipContent({ payload }) {
  if (!payload || payload?.length === 0) return null;
  const sessionLength = payload[0]?.value;

  return (
    <div
      style={{
        color: "#000",
        backgroundColor: "#FFF",
        padding: "5px",
        fontSize: "8px",
      }}
    >
      <p>{`${sessionLength} min`}</p>
    </div>
  );
}

TooltipContent.propTypes = {
  payload: PropTypes.array,
};

function LineChart({ data }) {
  const containerRef = useRef();
  const backgroundRef = useRef();

  const handleMouseMove = (e) => {
    if (e.isTooltipActive) {
      const { width } = containerRef.current.getBoundingClientRect();
      backgroundRef.current.style.width = `${width - e.activeCoordinate.x}px`;
    }
  };

  const handleMouseLeave = () => {
    backgroundRef.current.style.width = 0;
  };

  return (
    <ResponsiveContainer height="100%" width="100%" ref={containerRef}>
      <div
        ref={backgroundRef}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          pointerEvents: "none",
          backgroundColor: "#e60200",
        }}
      ></div>
      <Title>
        <h2>
          Durée moyenne des <br />
          sessions
        </h2>
      </Title>
      <LineChartPrimitive
        data={data}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        margin={{
          bottom: 30,
        }}
      >
        <XAxis
          dataKey="day"
          stroke="transparent"
          tick={{ fontSize: 13, stroke: "white", opacity: 0.8 }}
          padding={{ left: 5, right: 5 }}
          tickMargin={10}
          transform="translate(15, 40) scale(0.9, 0.9)"
        />

        <YAxis
          dataKey="sessionLength"
          domain={[0, "dataMax + 30"]}
          hide={true}
        />
        <TooltipPrimitive
          content={<TooltipContent />}
          cursor={{ stroke: "transparent" }}
        />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
        />
      </LineChartPrimitive>
    </ResponsiveContainer>
  );
}

LineChart.propTypes = {
  data: PropTypes.array,
};

export default LineChart;
