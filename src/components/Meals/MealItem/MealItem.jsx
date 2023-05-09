import React from 'react'
import classes from './MealItem.module.css'

function MealItem(props) {

    const price = `$${props.price.toFixed(2)}`
    const text = `hello ${priyanshu}`
    console.log(text)

  return (
    <li>
        <div>
            <h3>{props.name}</h3>
            <div>{props.description}</div>
            <div>{props.price}</div>
        </div>
        <div></div>
    </li>
  )
}

export default MealItem