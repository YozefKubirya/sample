import css from '../AdventagesSection/AdventagesSection.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination,Navigation } from 'swiper/modules';
// import { SwiperOptions } from 'swiper/types';
import { dataAdventages } from '../../data/data.ts'
import { Adventages } from '../Adventages/Adventages.tsx'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// const swiperParams: SwiperOptions = {
//    slidesPerView: 2,
//    modules:[Pagination,Navigation],
//    grabCursor:true,
//    initialSlide:1,
//    centeredSlidesBounds:true,
//    speed:800,
//    slideToClickedSlide:true,
//    pagination:{el:'swiper-pagination', clickable:true},
//    navigation:true,
//  };

export const AdventagesSection = () => {
   return(
      <section>
         <h2 className={css.adventageTitle}>
            Advantages <br />
            working with us
         </h2>
         <div>
            
            <Swiper
               modules={[Navigation,Pagination]}
               className={css.swiperContainer}  
               grabCursor={true}
               initialSlide={1}
               centeredSlidesBounds={true}
               slidesPerView={1.8}
               speed={800}
               slideToClickedSlide={true}
               pagination={{el:'swiper-pagination', clickable:true}}
               navigation={true}
            >
               <ul className={css.list}>
                  {dataAdventages.map((data) => (
                     <SwiperSlide key={data.id}>
                        <li className={css.listItem}>
                           <Adventages title={data.title} image={data.photo} text={data.text} />
                        </li>
                     </SwiperSlide>
                  ))}
               </ul>
            </Swiper>
         </div>
      </section>
   )
}
