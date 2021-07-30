import { useEffect, useState } from "react";
import UserListItem from './UserListItem';
import UserDetails from './UserDetails';
import AddUser from './AddUser';

const UserList = () => {
    // const users = ['User1', 'User2', 'User3'];
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser ] = useState(null);
    
    const fetchUsers = async () => {
        const res = await fetch('https://api.github.com/users');
        const users = await res.json();
        setUsers(users);
    };
    
    useEffect(() => {
        fetchUsers();
    }, []);
    // const liItems = users.map();

    const onSelectOfUserInUserListItem = (user) => {
        console.log(user);
        setSelectedUser(user);
    };

    const liItems = users.map(user => <UserListItem onSelect={onSelectOfUserInUserListItem} key={user.id} user={user} />);
    return (
        <div>
            <AddUser />
            <UserDetails selectedUser={selectedUser} />
            <ul>
                {liItems}
            </ul>
            
        </div>
    );
};

export default UserList;