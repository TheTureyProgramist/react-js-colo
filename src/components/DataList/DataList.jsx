import data from "../../data/data.json";
import { DataItem } from "../DataItem/DataItem";
import styled from "styled-components";
export const DataList = () => {
  const DataTitle = styled.h2`
  color: green;
  font-size: 34px;
  `
  const DataStatic = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  `;
  const DataList = styled.ul`
  display: flex;
  background-color: skyblue;
  padding: 0;
  `;
  return (
    <DataStatic>
      <DataTitle>Upload stats</DataTitle>
      <DataList>
        {data.map((item, idx) => (
          <DataItem key={idx} item={item} />
        ))}
      </DataList>
    </DataStatic>
  );
};