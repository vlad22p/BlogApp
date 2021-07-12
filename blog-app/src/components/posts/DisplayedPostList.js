import PostPreview from "./PostPreview";

function DisplayedPostList(props) {
    
    function renderPosts(postsArray) {
        return postsArray.map((element) => <PostPreview key={element.id} post={element} /> )
    }

    return (
        <div>
            {renderPosts(props.postList)}
        </div>
    )
}

export default DisplayedPostList;