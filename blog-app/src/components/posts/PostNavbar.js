function PostNavbar(props) {
    if (props.isNextPage && props.isPreviousPage) {
        return (
            <nav>
                <button onClick={props.getPreviousPage}>Back</button>
                <button onClick={props.getNextPage}>Next</button>
            </nav>
        )
    } else if (props.isNextPage && !props.isPreviousPage) {
        return (
            <nav>
                <button onClick={props.getNextPage}>Next</button>
            </nav>
        )
    } else if (!props.isNextPage && props.isPreviousPage) {
        return (
            <nav>
                <button onClick={props.getPreviousPage}>Back</button>
            </nav>
        )
    } else {
        return (
            <nav></nav>
        )
    }
}

export default PostNavbar;