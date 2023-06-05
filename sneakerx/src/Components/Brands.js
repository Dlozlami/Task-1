import { useState } from "react";

export default function Brands()
{
        const myStyle = {
            width:'20vw',
            alignItems:"end",
            justifyContent:'space-between',
            paddingBottom:'5vh'
        }
    
        return(
            <div  style={myStyle} className="flexContainer">
                <div className="flexContainer">
                    {Icons('nike.png','Nike logo')}
                    {Icons('adidas.png','Adidas logo')}
                    {Icons('newbalance.png','New Balance logo')}
                </div>
                <div style={{display:'flex',marginTop:'30vh',fontFamily: 'Concert One'}}>
                    {Socials({marginRight:'10px'},'https://za.pinterest.com','Pinterest')}
                    {Socials({marginLeft:'10px'},"https://www.facebook.com/",'Facebook')}
                </div>
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
            <button className="ButtonUnboxed" style={myStyle}>{name}</button>
        );
    }

