import Intro from "../Header/intro";
import Bglines from "./bglines";
import Navbar from "./navbar";
import Social_link from "./social_link";

export default function Header_index() {
    return (
        <div >
            <Intro />
            <Navbar />
            <Social_link />
            {/* <Bglines /> */}
        </div>
    )
}
