export const FriendsItem = ({ friends }) => {
  const { id, avatar, isOnline, name } = friends;
  return (
    <li className="item">
      <span className={`status${isOnline ? " online" : ""}`}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
