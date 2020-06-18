import React from 'react';
import useResources from './useResources';

const UserList = () => {
    const users = useResources('users');

    return (
        <ul>
            {users.map(user => (
                <li key={user.key}>{user.name}</li>
            ))}
        </ul>
    );
};

export default UserList;
