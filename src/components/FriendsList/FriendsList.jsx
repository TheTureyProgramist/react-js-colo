import friends from "../../data/friends.json";
import { FriendsItem } from "../FriendsItem/FriendsItem";

export const FriendsList = () => {
  return (
    <section className="friends">
      <ul className="friend-list">
        {friends.map((friend) => (
          <FriendsItem key={friend.id} friends={friend} />
        ))}
      </ul>
    </section>
  );
};