
import css from '../AdventagesSection/AdventagesSection.module.css'

type Props = {
   title: string;
   image: string;
   text: string
 };
export const Adventages = ({ title , image, text } : Props ) => {
   return (
      <div className={css.cardContainer}>
         <img src={image} alt={title} className={css.image} />
         <div className={css.textContent}>
            <h3 className={css.title}>{title}</h3>
            <p className={css.text}>{text}</p>
         </div>
      </div>
   );
};
