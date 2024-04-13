import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import RecipeData from './RecipeData';
import "./Recipe.css"
function Recipe() {
    const App_ID = "f724d2c4";
    const App_KEY = "181b9a77d1a1c3c5c43eac5266591591 ";
    const [loading, setLoading] = useState(false)
    const [success, setSucces] = useState(false)
    const [error, setError] = useState("recipe nomini togri kiriting")
    const [recipe, setRecipe] = useState(null)
    const inputVal = useRef("")
    const [query, setQuery] = useState("")

    const showdata = () => {
        setLoading(true)
        axios.get(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`)
            .then(res => {
                setLoading(false)
                setSucces(true)
                setRecipe(res.data)
            })
            .catch(err => {
                setLoading(false)
                setError("recipe nomini togri kiriting")
            })


    }
    useEffect(() => {
        query && showdata();
    }, [query])
    const searchHandle = () => {
        setQuery(inputVal.current.value)
    }
    console.log(recipe)
    console.log(error)
    return (
        <div className='recipe-container'>
            <div className="recipe-form">

                <input ref={inputVal} type="text" placeholder='enter recipe name' />
                <button onClick={searchHandle}>Search</button>
                {loading && <h2>Loading..</h2>}
            </div>
            <h2 className='error-text'>

                {recipe?.hits?.length === 0 && <h2>{error}</h2>}
            </h2>


            <div className='recipe-container-card' >

                {success && recipe?.hits?.map((item, index) => (
                    <RecipeData key={index} item={item} />
                ))}
            </div>

        </div>
    )
}

export default Recipe