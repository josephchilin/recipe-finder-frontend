import React from 'react'

class RecipeItem extends React.Component {

    render(){
console.log(this.props.recipe, "inside recipe item")

        let {name, instruction, serving_size, time, image_url} = this.props.recipe

        // console.log (name)
        return(

            <li>
                <h3>{name}</h3>
                <p>Yield: {serving_size}</p>
                <p>Time: {time}</p>
                <img src={image_url} alt={name} width="200"/>
            </li>

        )
    }

}

export default RecipeItem