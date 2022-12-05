
import './Services.css'
import { APIcon, FigmaIcon, ReactIcon } from "../../Assets/Index";
import Resume from "./Ichal_CV.pdf";
import { Card  } from "../Index";
import { ThemeContext } from "../../Context/Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import MediaQuery from 'react-responsive'

export const Services = () => {

    const transition = {duration : 2, type : 'spring'}

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="services" id='Service'>
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>skills</span>
                <span>Keep growing learning new things with new people
                    <br/>
                    keep learing by googling
                </span>
                <a href={Resume} download>
                <button className='button s-button'>Download CV</button>
                </a>
                <div className='blur s-blurl' style={{background: "#ABF1FF94"}}>

                </div>
            </div>
            {/* right side */}
            <div className="cards">
                <motion.div
                  initial={{ left: "34rem" }}
                  whileInView={{ left: "30rem" }}
                  transition={transition}
                >
                    <Card
                        emoji={APIcon}
                        heading={'Backend'}
                        detail={'NodeJs, Expressjs, Prisma, Mysql, Posgresql'}
                    />
                </motion.div>
                <motion.div 
                    initial={{top:"10rem", left: "5rem" }}
                    whileInView={{top:"12rem", left:'10rem' }}
                    transition={transition}
                    >
                    <Card
                        emoji={FigmaIcon}
                        heading={'Design'}
                        detail={'Figma, Corel Draw, Inkscape, Photoshop'}
                    />
                </motion.div>
                <motion.div 
                    initial={{ left:'29rem' }}
                    whileInView={{top:"22rem", left:'27rem'}}
                    transition={transition}
                >
                    <Card
                        emoji={ReactIcon}
                        heading={'Frontend'}
                        detail={'ReactJS, Html, Css, Javascript, Flutter'}
                    />
                </motion.div>
                {/* <MediaQuery minDeviceWidth={480}>
                </MediaQuery> */}

                <div className='blur s-blur2' style={{background : 'var(--purple)'}}>

                </div>
            </div>
        </div>
    )
}