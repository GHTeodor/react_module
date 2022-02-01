import React from 'react';

import './User.css';


const User = ({
                  user: {
                      id,
                      name,
                      username,
                      email,
                      phone,
                      website,
                      address: {
                          street, suite, city, zipcode,
                          geo: {lat, lng}
                      },
                      company: {catchPhrase, bs},
                      company
                  }
              }) => {

    return (
        <ul>
            <li><b>ID:</b> <i>{id}</i></li>
            <li><b>name:</b> <i>{name}</i></li>
            <li><b>username:</b> <i>{username}</i></li>
            <li><b>email:</b> <i>{email}</i></li>
            <ul title='address'>
                <li><b>street:</b> <i>{street}</i></li>
                <li><b>suite:</b> <i>{suite}</i></li>
                <li><b>City:</b> <i>{city}</i></li>
                <li><b>zipcode:</b> <i>{zipcode}</i></li>
                <ul title='geo'>
                    <li><b>lat:</b> <i>{lat}</i></li>
                    <li><b>lng:</b> <i>{lng}</i></li>
                </ul>
            </ul>
            <li><b>phone:</b> <i>{phone}</i></li>
            <li><b>website:</b> <i>{website}</i></li>
            <ul title='Company'>
                <li><b>name:</b> <i>{company.name}</i></li>
                <li><b>catchPhrase:</b> <i>{catchPhrase}</i></li>
                <li><b>bs:</b> <i>{bs}</i></li>
            </ul>
        </ul>
    );
};

export default User;