import React from 'react';

const User = ({user}) => {
    return (
        <ul>
            <li><b>ID:</b> <i>{user.id}</i></li>
            <li><b>name:</b> <i>{user.name}</i></li>
            <li><b>username:</b> <i>{user.username}</i></li>
            <li><b>email:</b> <i>{user.email}</i></li>
            <ul title='address'>
                <li><b>street:</b> <i>{user.address.street}</i></li>
                <li><b>suite:</b> <i>{user.address.suite}</i></li>
                <li><b>city:</b> <i>{user.address.city}</i></li>
                <li><b>zipcode:</b><i>{user.address.zipcode}</i></li>
                <ul title='geo'>
                    <li><b>lat:</b> <i>{user.address.geo.lat}</i></li>
                    <li><b>lng:</b> <i>{user.address.geo.lng}</i></li>
                </ul>
            </ul>
            <li><b>phone:</b> <i>{user.phone}</i></li>
            <li><b>website:</b> <i>{user.website}</i></li>
            <ul title='Company'>
                <li><b>name:</b> <i>{user.company.name}</i></li>
                <li><b>catchPhrase:</b> <i>{user.company.catchPhrase}</i></li>
                <li><b>bs:</b> <i>{user.company.bs}</i></li>
            </ul>
        </ul>
    );
};

export default User;