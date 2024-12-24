import css from '../AboutSection/AboutSection.module.css'
export const AboutSection = () => {

   return(
      <>
      <section className={css.aboutSection}>
         <div className={css.aboutContainer}>
            <p className={css.text}>BIO CWT  - We manufacture solid wood products according to individual drawings. We make chairs, armchairs, wardrobes, beds and much more in our own workshop, equipped with all the necessary industrial equipment.</p>
          
         </div>
      
         <div className={css.aboutContainer}>
            <p className={css.text}>
            Founded in 2014, we specialize in product types, e.g., custom furniture, decorative home accents, and unique gifts, blending traditional techniques with modern designs to bring your vision to life.
            </p>

         </div>
      
         <div className={css.aboutContainer}>
            <p className={css.text}>
            Our mission is to create high-quality, eco-friendly products that inspire warmth, elegance, and a connection to nature. Whether you’re looking for a custom piece or a thoughtful gift, our creations are made to last and designed to be cherished.


            </p>

         </div>
      </section>
      </>
   )
}