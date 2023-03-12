import React  from 'react'
import {Card } from "antd";
// import { getProducts } from '../functions/product';


const ProductCard = ({product}) => {

    const {title, price} = product;

return (

    <>
       

    <Card 
    hoverable >

        <Card.Meta
            
            title={ "Product: "+title}
            description={"Price: Rs. "+price}/>

    </Card>

    </>


)
}

export default ProductCard;