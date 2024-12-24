import css from './WoodItems.module.css'
type Props = {
   photo: string;
   type: string;
   advantages: Array<string>,

 };
 
export const WoodItems = ({ photo,type,advantages }:Props) => {
   return (
      <>
      <div>
         <img src={photo} alt="photo of wood" />
         <h3 className={css.woodTitle}>{type}</h3>
         {advantages.map((adv)=>
         <p className={css.woodText}>{adv}</p>)}
      </div>
      </>
   )
}