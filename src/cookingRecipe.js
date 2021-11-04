import React, { useState } from "react";
import axios               from "axios";
import { Loading }         from "./loading";

const CookingRecipe = () => {

    const [ typeOfFood, setTypeOfFood ] = useState([]);
    const [ indexOfResponse ]           = useState(0);
    const [ loading, setLoading ]       = useState(false)
    const handleRandomMeal              = () => {
        const dataOfMeal = async () => {
            await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
                .then((res) => {
                    setTypeOfFood(res.data.meals[indexOfResponse])
                    setLoading(true)
                })
        }
        return dataOfMeal
    }

    const renderElement = () => {
        if (loading) {
            return <div>
                <ul>
                    <li>
                        <img style={ { width: "300px" } } src={ typeOfFood.strMealThumb } alt={ typeOfFood.strTags }/>
                    </li>
                    <li>
                        { `Name of Meal: ${ typeOfFood.strMeal || '' } ` }
                    </li>
                    <li>
                        { `Area:${ typeOfFood.strArea || '' }` }
                    </li>
                    <li>
                        Video about it: { <a href={ typeOfFood.strYoutube }>Check</a> }
                    </li>
                </ul>
            </div>
        } else {
            return null;
        }
    }


    return (
        <div>
            <h1> Cooking Recipe</h1>
            <div className={'skeleton'}>
                <Loading/>
            </div>
            { renderElement() }
            <button onClick={ handleRandomMeal() }>Get Meal</button>
        </div>
    )

}
export default CookingRecipe
