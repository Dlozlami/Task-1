import Cart from "./Cart";
import Menu from "./menu";

export default function NavBar({basket,addToBasket})
{
    return(
        <nav>
            {logo()}
            {Men()}
            {Women()}
            {Search()}
            <Cart  cart={basket}/>
            <Menu/>
        </nav>
    );
}
    function logo()
    {
        const myStyle = {
            marginLeft:'30px',
            marginRight:'30px'
        }
        return(
            <a href='index.html' style={myStyle} className="w3-left-align"><h4 style={{display:'inline',fontFamily: 'Concert One'}}>Shotime</h4> </a>
        );
    }

    function Men()
    {
        const myStyle = {
            marginRight:"10px",
            marginLeft:"20%"
        }
        return(
            <button className="ButtonUnboxed invertHover" style={myStyle}>Men</button>
        );
    }

    function Women()
    {
        const myStyle = {
            marginRight:"20%",
            marginLeft:"10px"
        }
        return(
            <button className="ButtonUnboxed invertHover" style={myStyle}>Women</button>
        );
    }


    function Search()
    {
        const iconStyles = {
            width:'20px',
            height:'20px',
        }
        
        return(
            <form action="#"  className="ButtonUnboxed FloatRight"  style={{marginLeft:'30px',marginRight:'30px'}}>
                <button className="ButtonUnboxed" type="submit"><img src='002.png' style={iconStyles} alt='magnifying glass'/></button>
                <input className="ButtonUnboxed" type="text" name="search"/>
            </form>
        );
    }
