import classes from './page.module.css';
import Link from "next/link"
import MealsGrid from '@/components/meals/meals-grid';
import {getMeals} from '@/lib/meals';
export default async function MealsPage(){
    const meals = await getMeals();

    return (<>
    <header className={classes.header}>
        <h1>
            Delicius meals, created {''}
        </h1>
        <span className={classes.highlight}>
            by you
        </span>
        <p>
            Choose your favorite recipe and cook it yourself.
        </p>
        <p className={classes.cta}>
            <Link href="/meals/share">
                Share Your Favorite Recipe
            </Link>
        </p>
        <main className={classes.main}>
                <MealsGrid meals={meals} />
        </main>
    </header>
    </>)
}