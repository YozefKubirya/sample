import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import css from '../GallerySection/GallerySection.module.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { kitchenMidCenturyStyleData ,kitchensNordStyleData, woodTabledata} from '../../data/data';

export const GallerySection = () => {
   return(
      <>
      <section className={css.gallerySection}>
         <h2 className={css.gallerySectionTitle}>Our Work Gallery</h2>
      
         <Swiper 
         className={css.swiperContainer}
         modules={[Navigation]}
         grabCursor={true}
         initialSlide={1}
         centeredSlidesBounds={true}
         slidesPerView={1}
         speed={800}
         navigation={true}>
            <ul>
               {kitchenMidCenturyStyleData.map((data) => (
                  
                   <SwiperSlide key={data.id} className={css.swiperSlide}> 
                   <li>
                   <p className={css.swiperText}>{data.title}</p>
                      <img src={data.image} alt="image" className={css.swiperSlideImg} />
                      
                   </li>
                </SwiperSlide>
               )
              )}
            </ul>
         </Swiper>

         <Swiper 
         className={css.swiperContainer}
         modules={[Navigation]}
         grabCursor={true}
         initialSlide={1}
         centeredSlidesBounds={true}
         slidesPerView={1}
         speed={800}
         navigation={true}>
            <ul>
               {kitchensNordStyleData.map((data) => (
                   <SwiperSlide key={data.id} className={css.swiperSlide}>
                     
                   <li>
                      <p className={css.swiperText}>{data.title}</p>
                      <img src={data.image} alt="image" className={css.swiperSlideImg} />
                      
                   </li>
                </SwiperSlide>
               )
              )}
            </ul>
         </Swiper>

         <Swiper 
         className={css.swiperContainer}
         modules={[Navigation]}
         grabCursor={true}
         initialSlide={1}
         centeredSlidesBounds={true}
         slidesPerView={1}
         speed={800}
         navigation={true}>
            <ul>
               {woodTabledata.map((data) => (
                   <SwiperSlide key={data.id} className={css.swiperSlide}>
                     
                   <li>
                      <p className={css.swiperText}>{data.title}</p>
                      <img src={data.image} alt="image" className={css.swiperSlideImg} />
                      
                   </li>
                </SwiperSlide>
               )
              )}
            </ul>
         </Swiper>
      </section>
      </>
   )
}