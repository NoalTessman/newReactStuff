import React from "react"

function ProductComponent(props){

    return(
        <div className="item">
            <h1>Item:  {props.product.name}</h1>
            <p>Price: ${props.product.price}</p>
            <p id="description">{props.product.description}</p>
        </div>
    )
}
export default ProductComponent