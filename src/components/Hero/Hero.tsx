import css from './Hero.module.css'
export const Hero = () => {
   return(
      <section className={css.heroSection}>
         <img src="/src/logo/imag.png" alt="imgHero" className={css.heroImg}/>
         <div className={css.heroDiv}>
            <div>
            <h1 className={css.heroTitle}>Solid  <br /> wood <br />products</h1>
            <p className={css.heroText}>Oak, beech, ash from <br /> 1700 CZK per m3</p>
            <button className={css.orderBtn}>Order</button>
           
            </div>
            
            <div className={css.imgWraper}>
            <img src="/src/images/image.png" alt="image1" className={css.sectionImg}/>
            <img src="/src/images/image (1).png" alt="image2" className={css.sectionImg}/>
            <img src="/src/images/image (2).png" alt="image3" className={css.sectionImg}/>
            </div>
         </div>
        
      </section>
   )
}