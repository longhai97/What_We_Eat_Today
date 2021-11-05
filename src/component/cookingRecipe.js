import React, { useEffect, useState } from "react";
import axios                          from "axios";
import { Loading }                    from "./loading";

const CookingRecipe = () => {

    const [ typeOfFood, setTypeOfFood ] = useState([]);
    const [ indexOfResponse ]           = useState(0);
    const [ loading, setLoading ]       = useState(true);

    const handleRandomMeal = () => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then((res) => {
                setLoading(false)
                setTimeout(() => {
                    const dataResult = res.data.meals[indexOfResponse]
                    setTypeOfFood(dataResult)
                    if (dataResult) {
                        setLoading(true)
                    }
                }, 500)

            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        handleRandomMeal()
    }, []);


    return (
        <div>
            <h1> Cooking Recipe </h1>
            { loading === false
                ?
                <Loading/>
                :
                <div>
                    <ul className={ "detail-information" }>
                        <li>
                            <img className={ "img-thumb" } src={ typeOfFood.strMealThumb }
                                 alt={ typeOfFood.strTags }/>
                        </li>
                        <li>
                            { `Name: ${ typeOfFood.strMeal || '' } ` }
                        </li>
                        <li>
                            { `Tag: ${ typeOfFood.strTags || '😎 Comming soon 😎' } ` }
                        </li>
                        <li>
                            { `Area: ${ typeOfFood.strArea || '' }` }
                        </li>
                        <li>
                            { 'Video about: ' }
                            {
                                <a href={ typeOfFood.strYoutube }>{ typeOfFood.strYoutube ? 'Check it ' : '' }</a>
                            }
                        </li>
                        <li>
                            <p>
                                { `Instructions: ${ typeOfFood.strInstructions || '' } ` }
                            </p>
                        </li>
                    </ul>
                </div> }

            <button onClick={ handleRandomMeal }>Get Some New Stuff</button>
        </div>
    )

}
export default CookingRecipe;
