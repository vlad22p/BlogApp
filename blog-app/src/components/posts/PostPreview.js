import { Link } from "react-router-dom";

function PostPreview(props) {
    return (
        <Link to={`/posts/${props.post.id}`}>
            <div>
                <h1>{props.post.title}</h1>
                <h3>{props.post.author.displayName}</h3>
            </div>
        </Link>
    )
}

export default PostPreview;