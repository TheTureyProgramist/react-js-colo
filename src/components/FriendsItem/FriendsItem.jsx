import styled from "styled-components";
const Names = styled.p`
  color: blue;
  font-size: 20px;
  margin-bottom: 10px;
`;
const Item = styled.li`
  display: flex;
  height: 100px;
  width: 100%;
  gap: 20px;
`;
const Photo = styled.img`
  height: 100px;
  width: auto;
`;

export const FriendsItem = ({ friend }) => {
  const { id, avatar, isOnline, name } = friend;
  return (
    <Item>
      <span className={`status${isOnline ? " online" : ""}`}></span>
      <Photo src={avatar} alt={name} width="48" />
      <Names>{name}</Names>
    </Item>
  );
};
