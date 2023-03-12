import React,{useEffect,useState} from 'react';
import ProductCard from '../cards/cards';
import { getProducts } from '../functions/product';
import Jumbotron from "../cards/Jumbotron";



const  Home = () => {

    const [products,setProducts] = useState([]);
    // const [Price,setPrice]=useState([]);

    
    useEffect(() => {
        loadAllProducts();
    }, [])

    const loadAllProducts = () => {
        
        getProducts()
            .then((res) => {
                //console.log(res.data)
                setProducts(res.data)
                
            })
            .catch((err) => {
                console.log("GET PRODUCTS BY COUNT ERROR", err)
            })
    }
   

    return(
        <><div className={'container '} >
            <div className={"jumbotron text-danger h1 font-weight-bold text-center "}>
                <Jumbotron text={['Scrapper For Your Cart','By Purvi Giriya']}/>
            </div>
        </div>
            
        

<div className={"container"} >
{ 
    (<div className={"row"}>
            {products.map((product) => (
                <div className={"col-md-4"} key={product._id}>
                    <ProductCard product={product}/>
                </div>
            ))}
        </div>
    )}
</div>


        </>
    );
};

export default Home;