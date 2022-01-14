const Comment = ({postId, name, email, body}) => {
    return (
        <ul>
            <li>postId: {postId}</li>
            <li>name: {name}</li>
            <li>email: {email}</li>
            <li>body: {body}</li>
        </ul>
    );
}

export default Comment;