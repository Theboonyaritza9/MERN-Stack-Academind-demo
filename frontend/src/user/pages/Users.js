import React from 'react'

import UserList from '../components/UserList';

export default function Users() {
    const USERS = [
        {
            id: 'u1',
            name: 'Yukino',
            image: 'https://f.ptcdn.info/083/046/000/odr6r77nnA5k1CdKCJm-o.png',
            places: 3
        }
    ];
    
    return (
        <UserList items={USERS} />
    )
}