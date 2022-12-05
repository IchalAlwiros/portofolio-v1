import './Testiomonial.css'

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";


import { Profile1, Profile2, Profile3, Profile4 } from "../../Assets/Index";



export const Testimonial = ()=>{
    const clients = [
        {
          img: Profile1,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: Profile2,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: Profile3,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: Profile4,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
      ];

    return(
        <div className='t-wrapper'>
            <div className='t-heading'>
                <span>Client always get</span>
                <span>Exceptional work</span>
                <span>from me..</span>
                <div className='blur t-blur1' style={{background:"var(--purple)"}}></div>
                <div className='blur t-blur1' style={{background:"skyblue"}}></div>
            </div>

            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    clients.map((client, index)=> {
                        return (
                            <SwiperSlide key={index}>
                              <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                              </div>
                            </SwiperSlide>
                          );
                    })
                }
            </Swiper>
        </div>
    )
}