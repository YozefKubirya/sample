import { workingWoodData } from '../../data/data'
import css from '../WoodWorking/WoodWorking.module.css'
import { WoodItems } from './WoodItems/WoodItems.tsx'
export const WoodWorking = () => {

   return (
      <>
      <section>
         <h2 className = {css.title}>THE WOOD <br /> WE WORK WITH</h2>
         <ul className={css.list}>
            {workingWoodData.map((data) =>
            <li key = {data.id}>
               <WoodItems photo = {data.image} type = {data.woodType} advantages = {data.advantages}/>
            </li>)}
         </ul>

      </section>
      
      </>
   )
}