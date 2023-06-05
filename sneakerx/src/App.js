import NavBar from "./Components/NavBar";
import PurchaseBay from "./Components/PurchaseBay";
import { useState } from "react";



export default function App() {
  
  const [cart,setCart] = useState(0);
  return (
    <>
      <NavBar basket={cart} addToBasket={setCart} />
      <PurchaseBay product={sneakers} basket={cart} addToBasket={setCart}/>
    </>
  );
}

const sneakers = [
  {name:'Nike Runx Stretch BN',price:960.95, gender:true,rdate:2020,brand:'nike',link:'nike-men.png'},
  {name:'Nike Airmax Bloodsport',price:1230.95, gender:true,rdate:2021,brand:'nike',link:'nike-men-1.png'},
  {name:'Nike AeroBAX BN',price:775.95, gender:false,rdate:2022,brand:'nike',link:'nike-women.png'},
  {name:'Nike HI-CITI Retro',price:1450.95, gender:false,rdate:2023,brand:'nike',link:'nike-women-1.png'}
];
