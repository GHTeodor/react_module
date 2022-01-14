const Post = ({userId, title, body}) => {
    return (
        <ul>
            <li>userId: {userId}</li>
            <li>title: {title}</li>
            <li>body: {body}</li>
        </ul>
    );
}

export default Post;