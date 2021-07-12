import PostPreview from "./PostPreview";

function DisplayedPostList(props) {
    
    function renderPosts(postsArray) {
        return postsArray.map((element) => <PostPreview post={element} /> )
    }

    return (
        <div>
            {renderPosts(props.postList)}
        </div>
    )
}

export default DisplayedPostList;