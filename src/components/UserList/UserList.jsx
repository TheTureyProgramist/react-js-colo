import { UserItem } from "../UserItem/UserItem";
import users from "../../data/user.json";

export const UserList = () => {
    return (
        <div>
            {users.map((user, idx) => (
                <UserItem key={user.tag || idx} user={user} />
            ))}
        </div>
    );
};