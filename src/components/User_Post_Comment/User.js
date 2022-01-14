const User = ({id, name, username, email, phone, website, cName, cCP, cBs, aStreet, aSuite, aCity, aZipcode, lat, lng }) => {

    return (
        <ul>
            <li>ID: {id}</li>
            <li>name: {name}</li>
            <li>username: {username}</li>
            <li>email: {email}</li>
            <ul title='address'>
                <li>street: {aStreet}</li>
                <li>suite: {aSuite}</li>
                <li>City: {aCity}</li>
                <li>zipcode: {aZipcode}</li>
                <ul title='geo'>
                    <li>lat: {lat}</li>
                    <li>lng: {lng}</li>
                </ul>
            </ul>
            <li>phone: {phone}</li>
            <li>website: {website}</li>
            <ul title='Company'>
                <li>name: {cName}</li>
                <li>catchPhrase: {cCP}</li>
                <li>bs: {cBs}</li>
            </ul>
        </ul>
    );
}

export default User;