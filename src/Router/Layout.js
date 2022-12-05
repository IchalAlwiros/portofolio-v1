import { 
    Navbar, 
    Intro, 
    Services, 
    Experience, 
    Works, 
    Portofolio, 
    Testimonial, 
    Contact, 
    Footers
} from "../Component/Index";

import '../App.css';
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

export const Layouter = ()=>{
const theme = useContext(ThemeContext)
const darkMode = theme.state.darkMode
    return (
        <>
            <div className='App'
                style={{
                    background : darkMode? '#000814' : '',
                    color : darkMode ? 'white' : ''
                }}
            >
            <Navbar/>
            <Intro/>
            <Services/>
            <Experience/>
            <Works/>
            <Portofolio/>
            {/* <Testimonial/> */}
            <Contact/>
            <Footers/>
            </div>
            
        </>
    )
}