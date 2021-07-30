

const UserListItem = ({user, onSelect}) => {
    const onBtnClick = () => {
        onSelect(user);
    };

    return (
        <li>
            {user.login}
            <button onClick={onBtnClick}>View Details</button>
        </li>
    )
}

export default UserListItem;

//state