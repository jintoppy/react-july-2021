

const UserDetails = ({selectedUser}) => {
    console.log(selectedUser);
    return (
        <div>
            User Details
            {selectedUser ? selectedUser.login : 'No Selected User'}
        </div>
    )
}

export default UserDetails;

//state