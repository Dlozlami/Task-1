import Cart from "./Cart";
import Gender from "./Gender";
import Search from "./Search";
import Menu from "./menu";

export default function NavBar({basket,addToBasket})
{
    return(
        <nav>
            {logo()}
            <Gender/>
            <Search/>
            <Cart  cart={basket}/>
            <Menu/>
        </nav>
    );
}
    function logo()
    {
        const myStyle = {
            fontFamily: 'Concert One',
            fontSize:'medium'
        }

        return(
            <div style={{display:'flex',width:'40vw'}}>
                <button className="ButtonUnboxed" style={myStyle}>Shotime</button>
            </div>
        );
    }
