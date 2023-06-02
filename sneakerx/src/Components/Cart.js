
export default function Cart({cart})
{

    const myStyle = {
        marginLeft:'30px',
        marginRight:'30px'
    }

    return(
        <button className="ButtonUnboxed FloatRight" style={myStyle}>
        Cart {cart}
        </button>
    );
}
