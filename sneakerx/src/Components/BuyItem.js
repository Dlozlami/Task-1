//import DateObject from "react-date-object";
export default function BuyItem({sneakers, buyButton,position,toggleNew,cart,addItem,backImg})
{
    const myStyle = {
        backgroundImage:backImg,
        width:'30vw',
        paddingBottom:'5vh'
    }
    
    return(
        <div className="panelBG flexContainer" style={myStyle}>
            {Index(position)}
            {Artwork(sneakers[position].link,sneakers[position].name)}
            {Name(sneakers[position].name)}
            {ReleaseDate(sneakers[position].rdate,toggleNew)}
            {Price(sneakers[position].price)}
            {buyButton ? AddToCart(cart,addItem):''}
        </div>
    );
}    
    
    
    function Index(position)
    {
        let normalIndex=position+1;
        const myStyles = {
            marginTop:"7vh",
            color:'white',
            fontSize:'4em',
            fontWeight:'800'
        }

        return(
            <p style={myStyles}  className="SneakerInfo">{normalIndex>9?'':0}{normalIndex}</p>
        );
    }
  
    function ReleaseDate(rdate,toggleNew)
    {
        // rdate>2021?toggleNew(true):toggleNew(false);
    }

    function Price(cost)
    {
        const iconStyles = {
            color:'pink',
            fontSize:'1.5em'
        }

        return(
            <p style={iconStyles}  className="SneakerInfo" >R{cost}</p>
        );   
    }
  
    function Artwork(url,name)
    {
        return(
            <img src={url} className="Sneakers" alt={name}/>
        );
    }
  
    function Name(name)
    {
        const iconStyles = {
            color:'white'
        }

        return(
            <p style={iconStyles}  className="SneakerInfo">{name}</p>
        );
    }
  
    function AddToCart(cart,addItem)
    {   
        const addToBasket = ()=>{
            addItem(cart+1);
        }

        return(
            <button className="ButtonUnboxed addToCart" onClick={addToBasket}>+</button>
        );
    }
