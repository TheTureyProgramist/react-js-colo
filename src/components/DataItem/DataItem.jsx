import styled from "styled-components";
const DataFixer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 85px;
  border: 5px solid red;
`;
const Text = styled.p`
font-size: 25px;
`;
export const DataItem = ({ item }) => {
  const key = Object.keys(item)[0];
  const { label, percentage } = item[key];
  return (
    <DataFixer>
      <Text>{label}</Text>
      <Text>{percentage}%</Text>
    </DataFixer>
  );
};
