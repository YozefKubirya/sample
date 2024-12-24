import css from '../Footer/Footer.module.css'
import { FiPhoneCall, } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
export const Footer = () => {
   return (
   <>
   <footer className={css.footer}>
      <div >
      <a href="/" className={css.logoLink}>
      <img src="/src/logo/Group 7.png" alt="logo" className={css.imgLogo}/>
      <p className={css.textLogo}>BIO<br />CWT</p>
      </a>
      </div>
      <div className={css.contContainer}>
         <div className={css.phoneContainer}>
            
            <FiPhoneCall className={css.footerIcon}/>
            <p>+420 000 000 000</p>
            
         
         </div>
         <div className={css.phoneContainer}>
            
            <GrLocation className={css.footerIcon}/>
            <p>
                Na Plzeňce 1166/0150 00
            </p>  
            
         
         </div>
         

      </div>
   </footer>
   
   </>)
}