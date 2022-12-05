import "./Navigation.css"
import { Tonggle } from "../Index";
// import { FloatButton } from 'antd';
// import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
// import MediaQuery from 'react-responsive'


import {Link} from 'react-scroll'

export const Navbar = () => {

    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">
                    Ichal
                </div>
                <Tonggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>

                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                          <li>Home</li>  
                        </Link>
                        <Link spy={true} to='Service' smooth={true} activeClass='activeClass'>
                        <li>Service</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                        <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portofolio' smooth={true} activeClass='activeClass'>
                        <li>Portofolio</li>
                        </Link>
                    </ul>
                </div>
                
                {/* <MediaQuery maxDeviceWidth={480}>
                        <FloatButton.Group
                            shape="square"
                            style={{
                                right: 17,
                                display:'flex',
                                // height: 100,
                                width:'90%',
                                height:'10%',
                                padding: '10px 15px 0 15px',
                                background:'red',
                                // filter:'blur(9px)',
                                justifyContent:'space-between' ,
                                borderRadius:20
                            }}
                            >
                            <Link spy={true} to='Intro' smooth={true} activeClass='activeClass'>
                            <QuestionCircleOutlined />
                            </Link>
                            <Link spy={true} to='Service' smooth={true} activeClass='activeClass'>
                            <QuestionCircleOutlined />
                            </Link>
                            <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                            <QuestionCircleOutlined />
                            </Link>
                            <Link spy={true} to='Portofolio' smooth={true} activeClass='activeClass'>
                            <QuestionCircleOutlined />
                            </Link>
                        </FloatButton.Group>
                </MediaQuery> */}
                <button className="button n-button">
                    <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                        Contact Us
                    </Link>
                </button>
            </div>
        </div>
    )
}