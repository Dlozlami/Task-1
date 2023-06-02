
import { useState } from "react";
import Brands from "./Brands";
import BuyItem from "./BuyItem";
import OtherItem from "./OtherItem";
import PrevNext from "./PrevNext";

export default function PurchaseBay({product,index,moveQueue,basket,addToBasket})
{
    const [newItem,setNewItem] = useState(false);
    return(
        <article>
            <PrevNext sneakers={product}  isNew={newItem}/>
            {<BuyItem sneakers={product} buyButton={true} position={index} toggleNew={setNewItem} cart={basket} addItem={addToBasket}/>}
            <OtherItem sneakers={product}/>
            <Brands sneakers={product}/>
        </article>
    );
}
    
