import Customer_review from "./customer_review";
import Contact from "./contact";
import Projects from "./projects";
import Services from "./services";
import Whayme from "./whayme";

export default function Body_index() {
    return (
        <div>
            <Services />
            <Whayme />
            <Projects />
            <Customer_review />
            <Contact />
        </div>
    )
}
