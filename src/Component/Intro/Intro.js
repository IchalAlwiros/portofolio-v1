import "./Intro.css"
import {Vektor1, Vektor2, APIcon,JsIcon,Boy,Boy1, Item1 } from "../../Assets/Index";
import { FloatingDiv } from "../Index";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Behance from "@iconscout/react-unicons/icons/uil-behance";
import Linkedin from "@iconscout/react-unicons-monochrome/icons/uim-linkedin-alt";

import { ThemeContext } from "../../Context/Context";
import { useContext } from "react";
import Typewriter from 'typewriter-effect';

import { motion } from "framer-motion";

export const Intro = ()=>{

    const transition = {duration : 2, type : 'spring'}

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="Intro">
            <div className="i-left">
                <div className="i-name">
                    
                    
                    <span style={{ color: darkMode ? "white" : "" }}>Hy! I am </span>
                    <span>
                    <Typewriter
                    options={{
                        strings: ['Ichal Wira'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                    </span>
                    <span style={{ color: darkMode ? "white" : "" }}>a software enthusiast who has 
                    expertise in developing frontend and 
                    backend. always want to keep growing</span>
                </div>
                <a href="https://wa.me/6285853722837?text=Halo,%20salam%20kenal"><button className="button i-button">Contact me</button></a>
                <div className="i-icons">
                    <a href="https://github.com/IchalAlwiros">
                        <Github color="var(--orange)"  />
                    </a>
                    <a href="https://www.linkedin.com/in/ichal-wira-sukmana-27a3381b4/">
                        <Linkedin color="var(--orange)" />
                    </a>
                    <a href="https://www.instagram.com/ichalwira/">
                        <Insta color="var(--orange)" />
                    </a>
                    <a href="https://www.behance.net/gerilyakarya">
                        <Behance color="var(--orange)"/>
                    </a>
                </div> 
            </div>
            <div className="i-right">
                <img src={Vektor1}/>
                <img src={Vektor2}/>
                <img src={Boy1}/>
                <motion.img
                initial={{left: '-36%'}}
                whileInView={{left:'-24%'}}
                transition={transition}
                src={Item1}/>

               
                <motion.div
                  initial={{ top: "-4%", left: "74%" }}
                  whileInView={{ left: "68%" }}
                  transition={transition}
                  className="floating-div"
                >
                    <FloatingDiv image={APIcon} text1='Backend' text2='Developer'/>
                </motion.div>
                
                <motion.div
                  initial={{ left: "9rem", top: "18rem" }}
                  whileInView={{ left: "0rem" }}
                  transition={transition}
                  className="floating-div"
                >
                    <FloatingDiv image={JsIcon} text1='Web' text2='Developer'/>
                </motion.div>
                {/* Blur Div */}
                <div className="blur" style={{background:"#ffffb7"}}></div>
                <div className="blur" style={{top:'17rem',left:'-9rem',width:'21rem', height:'11rem',background:"#C1F5FF"}}></div>
            </div>
        </div>
    )
}