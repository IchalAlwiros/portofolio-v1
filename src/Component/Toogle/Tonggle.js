import './Tonggle.css'
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";

import { ThemeContext } from "../../Context/Context";
import { useContext } from "react";

export const Tonggle = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleClick = () => {
        theme.dispatch({type: 'toggle'})
    }
    return(
        <div className='toggle'>
            <Sun/>
            <Moon/>
            <div className='t-button'
                onClick={handleClick}
                style={
                    darkMode? {left: '2px'} : {right : '2px'}
                }
            >

            </div>
        </div>
    )
}