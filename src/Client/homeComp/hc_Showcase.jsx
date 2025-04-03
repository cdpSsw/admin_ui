import React, { useEffect, useRef, useState } from "react";
import Axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";

import SplitText from "../components/SplitText";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/effect-coverflow";

import ev1 from "../../DAssets/exposter/ev1.png";
import ev2 from "../../DAssets/exposter/ev1.png";
import ev3 from "../../DAssets/exposter/ev1.png";

const API_URL = import.meta.env.VITE_API_URL;

const hc_Showcase = () => {
  const showcase_info = [
    { topic: "Our Showcase" },
    {
      desc: "เวทีแสดงศักยภาพ ความคิดสร้างสรรค์ และผลงานสุดโดดเด่นจากนักศึกษามหาวิทยาลัยศรีปทุม ที่นี่คือพื้นที่สำหรับการนำเสนอไอเดีย แรงบันดาลใจ และความสามารถของนักศึกษาผ่านผลงานที่หลากหลาย",
    },
  ];

  const showcase = [
    {
      topic: "ex image #1",
      description: "ex. first description",
      image: ev1,
    },
    {
      topic: "ex image #2",
      description: "ex. second description",
      image: ev2,
    },
    {
      topic: "ex image #3",
      description: "ex. third description",
      image: ev3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const imgRefs = useRef([]);
  const text1Refs = useRef([]);
  const text2Refs = useRef([]);

  useEffect(() => {
    imgRefs.current.forEach((img, idx) => {
      gsap.to(img, {
        scale: idx === activeIndex ? 1 : 0.8,
        filter: idx === activeIndex ? "grayscale(0)" : "grayscale(100%)",
        duration: 0.3,
      });

      gsap.to(text1Refs.current[idx], {
        opacity: idx === activeIndex ? 1 : 0,
        y: idx === activeIndex ? 0 : 100,
        duration: 0.6,
        ease: "power2.inOut",
      });

      gsap.to(text2Refs.current[idx], {
        opacity: idx === activeIndex ? 1 : 0,
        y: idx === activeIndex ? 0 : -100,
        duration: 0.6,
        ease: "power2.inOut",
      });
    });
  }, [activeIndex]);

  return (
    <main className="client-showcase-container">
      <article className="top-container row m-0">
        <section className="top-left col-md-8">
          {showcase_info.map((info, idx) => (
            <section className="text-top-box" key={idx}>
              <h1 className="topic">
                <SplitText
                  text={info.topic}
                  delay={50}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,80px,0)",
                  }}
                  animationTo={{
                    opacity: 1,
                    transform: "translate3d(0,50px,0)",
                  }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-20px"
                />
              </h1>
              <p className="desc">{info.desc}</p>
            </section>
          ))}
        </section>

        <section className="top-right col-md-4">
          <button ref={prevRef} className="btn btn-prev">
            <i className="bi bi-arrow-left"></i>
          </button>
          <button ref={nextRef} className="btn btn-next">
            <i className="bi bi-arrow-right"></i>
          </button>
        </section>
      </article>

      <article className="content-container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: -55,
            },
          }}
          initialSlide={1}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: -30,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper-desktop"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {showcase.map((showcaseItem, idx) => (
            <SwiperSlide key={idx}>
              <section className="content-swiper">
                <img
                  ref={(el) => (imgRefs.current[idx] = el)}
                  src={showcaseItem.image}
                  // src={`${API_URL}/images/stu_showcase/${showcaseItem.image}`}
                  alt={showcaseItem.topic}
                  className="content-img"
                  onClick={() => setSelectedImg(showcaseItem.image)}
                />
                <section className="text-container">
                  <section className="topic-container">
                    <h1
                      ref={(el) => (text1Refs.current[idx] = el)}
                      className="topic"
                    >
                      {showcaseItem.topic}
                    </h1>
                  </section>

                  <section className="desc-container">
                    <p
                      ref={(el) => (text2Refs.current[idx] = el)}
                      className="desc"
                    >
                      {showcaseItem.description}
                    </p>
                  </section>
                </section>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </main>
  );
};

export default hc_Showcase;
