import Intro from "./Intro.1";
import Bglines from "./bglines";
import Navbar from "./navbar";
import Social_link from "./social_link";

export default function Header_index() {
    return (
        <div className="pt-16 pb-16 bg-custom-color flex flex-col items-center bg-shapes">
            <Intro />
            <Navbar />
            <Social_link />
            {/* <Bglines /> */}
        </div>
    )
}
