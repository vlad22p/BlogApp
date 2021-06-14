import "./NavOption.css";
import SearchPostsGraphic from "./nav options svg/SearchPostsGraphic";
import AllPostsGraphic from "./nav options svg/AllPostsGraphic";
import AboutGraphic from "./nav options svg/AboutGraphic";

function NavOption(props) {
    if (props.title === "All posts") {
        return (
            <div className="home-option posts-option">
                <div className="option-title">
                    {props.title}
                </div>
                <div className="option-graphic">
                    <AllPostsGraphic />
                </div>
            </div>
        )
    } else if (props.title === "Search") {
        return (
            <div className="home-option">
                <div className="option-title">
                    {props.title}
                </div>
                <div className="option-graphic">
                    <SearchPostsGraphic />
                </div>
            </div>
        )
    } else if (props.title === "About") {
        return (
            <div className="home-option">
                <div className="option-title">
                    {props.title}
                </div>
                <div className="option-graphic">
                    <AboutGraphic />
                </div>
            </div>
        )
    }
}

export default NavOption;