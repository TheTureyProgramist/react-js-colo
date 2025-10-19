import styled from "styled-components";
export const DataItem = ({ item }) => {
  const key = Object.keys(item)[0];
  const { label, percentage } = item[key];
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};
