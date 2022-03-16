// Fetch-API-Fetch-Data-Firebase
// useEffect hook is needed for fetch API and the restored data from database
// can be saved as a state with useState hook.
import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import classes from './AvailableMeals.module.css';



const AvailableMeals = () => {
    // Fetch-API-Fetch-Data-Firebase
    // This hook is necessary to store the data that is fetched with 
    const [meals, setMeals] = useState([]);

    // Fetch-API-Fetch-Data-Firebase
    // Fetch-API-Fetch-Data-Loading-Message-Firebase
    // Because fetching the data from an API will take some time, 
    // we need to introduce a loading state to let the person know 
    // if we could have fetched a data and/or if our app is still busy 
    //getting the data from the external server (API). 
    const [isLoading, setIsLoading] = useState(true);

    // Fetch-API-Fetch-Data-Firebase
    // Fetch-API-Fetch-Data-Error-Handling-Firebase
    // We also need an error handling state
    // In case database fails to fetch the request.
    const [httpError, setHttpError] = useState();

    // Fetch-API-Fetch-Data-Firebase
    // useEffect function should not return a promise. Instead create another function if you need
    // to return a promise.
    useEffect(() => {
        // We create another nested function here which will return Promise.
        const fetchMeals = async () => {
            // This link is Firebase "Realtime Database" link
            // actual link is "https://food-order-app-database-fa642-default-rtdb.firebaseio.com/"
            // "meals.json" section is coming from the collection name "meals".
            const res = await fetch('https://food-order-app-database-fa642-default-rtdb.firebaseio.com/meals.json');
            const mealData = await res.json();

            const loadedMeals = [];

            for (const key in mealData) {
                loadedMeals.push({
                    id: key,
                    name: mealData[key].name,
                    description: mealData[key].description,
                    price: mealData[key].price
                });
            }

            setMeals(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals();

    }, []);

    // Fetch-API-Fetch-Data-Firebase
    // Fetch-API-Fetch-Data-Loading-Message-Firebase
    if (isLoading) {
        return (
            <section className={classes['meals-loading']}>
                <p>Loading... </p>
            </section>
        );
    }

    const mealList = meals.map(meal => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <ul>
                <Card>
                    {mealList}
                </Card>
            </ul>
        </section>
    );
};

export default AvailableMeals;