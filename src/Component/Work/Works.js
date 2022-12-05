import "./Works.css"
import { Amazon, Shopify, Alwiros, Fiver , Upwork, Elnusa, Iconplus, Yazid} from "../../Assets/Index";

import { ThemeContext } from "../../Context/Context";
import { useContext } from "react";

import { motion } from "framer-motion";

export const Works = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
            <div className="works">
                <div className="awesome">
                    <span style={{ color: darkMode ? "white" : "" }}>Work for All these</span>
                    <span>Compenies</span>
                    <span>
                        Keep growing learning new things with new people
                        <br/>
                        be humble and passionate
                    </span>
                    <a href="https://wa.me/6285853722837?text=Halo,%20salam%20kenal"><button className='button w-button'> Contact Me</button></a>
                    <div className='blur s-blurl' style={{background: "#ABF1FF94"}}></div>
                </div>
                {/* Right Content */}
                <div className="w-right">
                    
                    <motion.div
                        initial={{ rotate: 45 }}
                        whileInView={{ rotate: 0 }}
                        viewport={{ margin: "-40px" }}
                        transition={{ duration: 3.5, type: "spring" }}
                        className="w-mainCircle">
                        {/* <div className="w-secCircle">
                            <img src={Upwork} alt=""/>
                        </div> */}
                        <div className="w-secCircle">
                            <img src={Alwiros} alt=""/>
                        </div>
                        <div className="w-secCircle">
                            <span >- NOW ON -</span>
                            <img src={Elnusa} alt=""/>
                        </div>
                        
                        <div className="w-secCircle">
                            <img src={Yazid} alt=""/>
                        </div>
                        <div className="w-secCircle">
                            <img src={Iconplus} alt=""/>
                        </div>
                    </motion.div>
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
                </div>
            </div>
        )
}