import { useState } from "react";
import Brands from "./Brands";
import BuyItem from "./BuyItem";
import PrevNext from "./PrevNext";

export default function PurchaseBay({product,basket,addToBasket})
{
    const [newItem,setNewItem] = useState(false);
    const [index,setIndex]= useState(0);
    let list = [1,2,3];
    return(
        <div id="purchaseBay">
            <PrevNext sneakers={product}  isNew={newItem} position={index} setPosition={setIndex} array={list}/>
            <BuyItem sneakers={product} buyButton={true} position={index} toggleNew={setNewItem} cart={basket} addItem={addToBasket} backImg={'url("first.png")'}/>
            <BuyItem sneakers={product} buyButton={false} position={index+1} toggleNew={setNewItem} cart={basket} addItem={addToBasket} backImg={'url("second.png")'}/>
            <Brands sneakers={product}/>
        </div>
    );
}
    
