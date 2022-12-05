
import "./Experience.css"

import { ThemeContext } from "../../Context/Context";
import { useContext } from "react";

export const Experience = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className="experience" id="Experience">
            <div className="achievement">
                <div className="circle" style={{color: darkMode?'var(--orange)':''}}>2+</div>
                <span>years</span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{color: darkMode?'var(--orange)':''}}>6+</div>
                <span>completed</span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
                <span>companies</span>
                <span>work</span>
            </div>
        </div>
    )
}