import "./Footers.css"
import { Wave } from "../../Assets/Index";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Behance from "@iconscout/react-unicons/icons/uil-behance";
import Gitlab from "@iconscout/react-unicons/icons/uil-gitlab";


export const Footers = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{width: '100%'}}/>
            <div className="f-content">
                <span>ichalwiradev@gmail.com</span>
                <div className="f-icons">
                    <a href="https://github.com/IchalAlwiros">
                        <Github color="white" size={'3rem'}  />
                    </a>
                    <a href="https://www.instagram.com/ichalwira/">
                        <Insta color="white"size={'3rem'} />
                    </a>
                    <a href="https://www.behance.net/gerilyakarya">
                        <Behance color="white" size={'3rem'}/>
                    </a>
                    <a href="https://gitlab.com/IchAlwiros">
                        <Gitlab color="white" size={'3rem'}/>
                    </a>
                </div>
            </div>
        </div>
    )
}