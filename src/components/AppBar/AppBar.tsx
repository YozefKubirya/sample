import { Navigation } from "../Navigation/Navigation.tsx"
import css from '../AppBar/AppBar.module.css'
export const AppBar = () =>{
   return <>
   <header className = {css.header}>
      <a href="/" className={css.logoLink}>
      <img src="/src/logo/Group 7.png" alt="logo" className={css.imgLogo}/>
      <p className={css.textLogo}>BIO<br />CWT</p>
      </a>
      <Navigation/>
   </header>
   </>
}