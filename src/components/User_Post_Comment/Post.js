import './Buttons.css'

const Post = ({post: {id, userId, title, body}, getPostId}) => {
    return (
        <div>
            <ul>
                <li><u>userId:</u> {userId}</li>
                <li><u>Id:</u> {id}</li>
                <li><u>title:</u> {title}</li>
                <li><u>body:</u> {body}</li>
            </ul>
            <button onClick={() => getPostId(id)}>Get Comments</button>
        </div>
    );
};

export default Post;