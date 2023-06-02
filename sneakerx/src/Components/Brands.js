import { useState } from "react";

export default function Brands()
{
        const myStyle = {
            width:'20%',
            textAlign:'center'     
        }
    
        return(
            <div  style={myStyle}>
                {Icons('nike.png','Nike logo')}
                {Icons('adidas.png','Adidas logo')}
                {Icons('newbalance.png','New Balance logo')}
                {Socials({textDecoration:'none',display:'inline',marginRight:'10px'},'https://za.pinterest.com','Pinterest')}
                {Socials({textDecoration:'none',display:'inline',marginLeft:'10px'},"https://www.facebook.com/",'Facebook')}
            </div>
        );
}

    function Icons(link,name)
    {
        const [toggle,setToggle] = useState(false);
    
        const show = ()=>{
            toggle?setToggle(false):setToggle(true);
        }

        let faded = toggle?{opacity:'100%'}:{opacity:'20%'};
        
        return(
            <img src={link} className='brandIcons' alt={name} style={faded}  onClick={show}/>
        );
    }    


    function Socials(style,ref,name)
    {
        const myStyle = style;

        return(
            <a href={ref} style={myStyle} >
                {name}
            </a>
        );
    }

