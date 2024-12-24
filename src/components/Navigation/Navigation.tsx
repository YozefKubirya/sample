import { Link } from "react-router-dom";
import css from '../Navigation/Navigation.module.css'
export const Navigation = () => {
   return (
     <>
     <div >
      <Link to='/' className={css.links}>Home</Link>
      <Link to='/gallery' className={css.links}>Gallery</Link>
      <Link to='/prices' className={css.links}>Prices for services</ Link>
      <Link to='/about' className={css.links}>About us</Link>
      <Link to='/contacts' className={css.links}>Contacts</Link>
     </div>
     
     </>
      
     
   )
}

