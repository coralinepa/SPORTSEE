import styled from "styled-components";
import PropTypes from "prop-types";

const TooltipContent = styled.div`
  background-color: #e60000;
  padding: 4px 6px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  font-size: 9px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DATA_KEYS_ABBR = {
  calories: "Kcal",
  kilogram: "kg",
};

function Tooltip({ active, payload }) {
  if (active) {
    return (
      <TooltipContent>
        <List>
          {payload.map((entry, index) => (
            <ListItem
              key={`item-${index}`}
              style={{
                color: "#FFF",
              }}
            >
              {entry?.value}
              {DATA_KEYS_ABBR[entry?.dataKey]}
            </ListItem>
          ))}
        </List>
      </TooltipContent>
    );
  }
}

Tooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.number,
};

export default Tooltip;
