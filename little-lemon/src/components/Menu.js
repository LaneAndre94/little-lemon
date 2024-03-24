import React from 'react'
import recipes from '../recipes'

const Menu = () => {
    const handleOrder = (id) => {
        console.log(id, "id is clicked");
    }

  return (
    <div className='menu-container'>
        <div className='menu-header'>
            <h2>Specials</h2>
            <button>Online Menu</button>
        </div>

        <div className='cards'>
            {
                recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                   <img src={recipe.image} alt=''/>
                   <div className='menu-container'>
                      <div className='heading'>
                        <h5>{recipe.title}</h5>
                        <p>{recipe.price}</p>
                      </div>
                      <p>{recipe.description}</p>
                      <button className='orderbtn' onClick={() => handleOrder(recipe.id)}>Order Now</button>
                   </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default Menu