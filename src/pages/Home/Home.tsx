import { Hero } from "../../components/Hero/Hero.tsx"
import { AdventagesSection } from "../../components/AdventagesSection/AdventagesSection.tsx"
import css from './Home.module.css'
import { WoodWorking } from "../../components/WoodWorking/WoodWorking.tsx"
export const Home = () => {
   return (
      <>
      <main className={css.main}>
         <Hero/>
         <AdventagesSection/>
         <WoodWorking/>
         
      </main>
      </>
   )
}