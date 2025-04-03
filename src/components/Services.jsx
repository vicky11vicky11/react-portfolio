// import { content } from "../Content";

// const Services = () => {
//   const { services } = content;

//   return (
//     <section id="services">
//       <div className="md:container px-5 py-14">
//         <h2 className="title" data-aos="fade-down">
//           {services.title}
//         </h2>
//         <h4 className="subtitle" data-aos="fade-down">
//           {services.subtitle}
//         </h4>
//         <br />
//         {/* Wrap in group to enable hover blur effect */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 group">
//           {services.service_content.map((content, i) => {
//             const delay = (i % 3) * 200; // Delay based on column index (max 4 per row)
//             return (
//               <div
//                 key={i}
//                 data-aos="fade-up"
//                 data-aos-delay={delay} // Corrected delay logic
//                 className="h-full flex flex-col duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 group-hover:blur-sm hover:!blur-none"
//               >
//                 <img src={content.logo} alt="..." className="mx-auto mb-4" />
//                 <h6 className="my-3">{content.title}</h6>
//                 <p className="leading-7 flex-grow">{content.para}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay, FreeMode, Mousewheel } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Services = () => {
  const { services } = content;

  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            375: { slidesPerView: 1 },
            640: { slidesPerView: 2 }, // 2 items for tablets
            1024: { slidesPerView: 3 }, // 3 items for larger screens
            1280: { slidesPerView: 4 }, // 4 items for desktops
            // 1536: { slidesPerView: 5 },
          }}
          // navigation={true}
          pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 2, }}
          autoplay={{ delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true  }}
          freeMode={true}
          mousewheel={{forceToAxis: true,  sensitivity: 1,  releaseOnEdges: true}}
          loop={true}
          modules={[ Pagination, Autoplay, FreeMode ,Mousewheel]}
          className="mySwiper"
        >
          {services.service_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div className="h-[500px] flex flex-col duration-300 border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6">
                <img src={content.logo} alt="..." className="mx-auto mb-4" />
                <h6 className="my-3">{content.title}</h6>
                <p className="leading-7 flex-grow">{content.para}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
