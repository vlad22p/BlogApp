import { useParams } from "react-router";

function FullPost(props) {
    
    let { id } = useParams();
    
    return(
        <div>This post has the following id: {id}</div>
    )
}

export default FullPost;