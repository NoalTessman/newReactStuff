import React from "react"
import ProductComponent from "./Components/productComponent"
import ProductList from "./Components/productList"
function App(){
    const ProductsLoad = ProductList.map(item => <ProductComponent key={item.id} product={item}/>)
    return(
        <div>
        <div className="header">Item Shop</div>
        <div className="itemContainer">
            {ProductsLoad}
        </div>
        </div>
    )
}
export default App