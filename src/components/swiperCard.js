import { swiperCard } from "../utils/mockData";
import "./card.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const SwiperCard = () => {
  return (
    <div className="totalContainer">
      <div className="headingContainer">
        <h2>What the press has to say about us</h2>
      </div>
      <div className="swiperContainer">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="outer">
            {swiperCard.map((item) => (
              <SwiperSlide>
                <div className="box">
                  <div className="imageContainer">
                    <img
                      src={item.image}
                      alt=""
                      style={{
                        width: "140px",
                        textAlign: "center!important",
                      }}
                    />
                  </div>
                  <span className="block"></span>
                  <div className="cardInside">
                    <h4 style={{ margin: 0 }}>{item.heading}</h4>
                    <p>"{item.para}"</p>
                  </div>
                  <p className="viewStory">View Story</p>
                  <div className="backgroundGradient"></div>
                  <div className="whiteBackground"></div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default SwiperCard;
