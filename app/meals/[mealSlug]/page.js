import classes from './page.module.css';
import Image from 'next/image';
import { getMeal } from '@/lib/meals';
export default function MealsDetailsPage({ params }) {
    // console.log(params);
    const meal = getMeal(params.mealSlug);
    return (<>
    <header className={classes.header}>
        <div className={classes.image}>
            <Image fill />
        </div>
        <div className={classes.headerText}>
                <h1>{meal.title}</h1>
            <p className={classes.creator}>
                by <a href=''></a>
            </p>
            <p className={classes.summary}>summary</p>
        </div>
    </header>
    <main>
      <p className={classes.instructions} dangerouslySetInnerHTML={{
        __html:'...', 
      }}>

      </p>
    </main>
    </>)
}