import styled from 'styled-components';
import friends from "../../data/friends.json";
import { FriendsItem } from "../FriendsItem/FriendsItem";
const List = styled.ul`
display: flex;
flex-direction: column;
gap: 25px;
`;
export const FriendsList = () => {
  return (
    <section className="friends">
      <List>
        {friends.map((friend) => (
          <FriendsItem key={friend.id} friend={friend} />
        ))}
      </List>
    </section>
  );
};