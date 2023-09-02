import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";



import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./components/ProductCard";
import "./Headsecond/Home.css";

//import img
import img1 from "./img/product1.jpeg";
import img2 from "./img/product2.jpg";
import img3 from "./img/product3.jpg";
const ProductSlide1 = () => {
  return (
    <div>
      <h1 className="headingg">Students are Viewing</h1>
      <div className=" container  w-90 py-4 px-4 justify-content-center bg">
        <Swiper
          grabCursor={true}
          className="mySwiper"
          slidesPerView={5}
          spaceBetween={30}
        >
          <SwiperSlide>
            <ProductCard data={{ imgsrc: img1, price: "$10", title: "java" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgsrc: img2, price: "$10", title: "java" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgsrc: img3, price: "$10", title: "java" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgsrc: img1, price: "$10", title: "java" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgsrc: img1, price: "$10", title: "java" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgsrc: img1, price: "$10", title: "java" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgsrc: img2, price: "$10", title: "java" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgsrc: img3, price: "$10", title: "java" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgsrc: img1, price: "$10", title: "java" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgsrc: img1, price: "$10", title: "java" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgsrc: img1, price: "$10", title: "java" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgsrc: img2, price: "$10", title: "java" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgsrc: img3, price: "$10", title: "java" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgsrc: img1, price: "$10", title: "java" }} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={{ imgsrc: img1, price: "$10", title: "java" }} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlide1;