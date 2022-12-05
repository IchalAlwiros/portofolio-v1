import "./Portofolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import MediaQuery from 'react-responsive'
// import MediaQuery from 'react-responsive'
import { Porto1, Porto2, Porto3, Porto4, Porto5, Porto6, Porto7, Porto8 } from "../../Assets/Index";

import { ThemeContext } from "../../Context/Context";
import { useContext } from "react";

export const Portofolio = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    // const isMobileDevice = useMediaQuery({
    //     query: "(min-device-width: 480px)",
    //   });

    return (
        <div className="portfolio" id="Portofolio">
        {/* heading */}
        <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <span>Portfolio</span>

        <MediaQuery maxDeviceWidth={480}>
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            grabCursor={true}
            className="portfolio-slider"
            >
            <SwiperSlide>
                <img src={Porto1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Porto5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Porto2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Porto3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Porto4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Porto6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Porto7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Porto8} alt="" />
            </SwiperSlide>
            </Swiper>
        </MediaQuery>
  
        {/* slider */}
        <MediaQuery minDeviceWidth={480}>
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
            >
            <SwiperSlide>
                <img src={Porto1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Porto2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Porto3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Porto4} alt="" />
            </SwiperSlide>
            </Swiper>
        </MediaQuery>
      </div>
    )
}