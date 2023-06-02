//import DateObject from "react-date-object";
export default function BuyItem({sneakers, buyButton,position,toggleNew,cart,addItem})
{
    const myStyle = {
        width:'30%',
        backgroundImage:'url("first.png")'
    }

    return(
        <div  style={myStyle}>
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
        const iconStyles = {

        }

        return(
                <p style={iconStyles} >{position}</p>
        );
    }
  
    function ReleaseDate(rdate,toggleNew)
    {
            rdate>2021?toggleNew(true):toggleNew(false);
    }

    function Price(cost)
    {
        const iconStyles = {

        }

        return(
                <p style={iconStyles} >R{cost}</p>
        );   
    }
  
    function Artwork(url,name)
    {
        const iconStyles = {
            width:'90%'
        }

        return(
            <img src={url} style={iconStyles} alt={name}/>
        );
    }
  
    function Name(name)
    {
        const iconStyles = {

        }

        return(
                <p style={iconStyles} >{name}</p>
        );
    }
  
    function AddToCart(cart,addItem)
    {
        const myStyle = {
            paddingRight:'20px',
            paddingLeft:'20px',
            backgroundColor:'white',
            borderRadius:'10px'
        }
        
        const addToBasket = ()=>{
            addItem(cart+1);
        }

        return(
            <button className="ButtonUnboxed invertHover w3-large" style={myStyle} onClick={addToBasket}>+</button>
        );
    }
