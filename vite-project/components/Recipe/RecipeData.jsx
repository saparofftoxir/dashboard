import React from 'react'
import "./Recipe.css"
function RecipeData({ item }) {
    return (
        <div className='recipe-container-card'>
            <div className='recipe-card'>
                <img src={item?.recipe?.image} alt="" />
                <h2>K:{item?.recipe?.calories}</h2>
                <h2>{item?.recipe?.source}</h2>
                <h2>{item?.recipe?.dishType}</h2>
                <h2>{item?.recipe?.label}</h2>
            </div>

        </div>
    )
}

export default RecipeData;