export default function Cart({cart})
{

    return(
        <div style={{display:'flex',cursor:'pointer',alignItems:'center'}}>
            <button className="ButtonUnboxed" style={{width:'10vw'}}>Cart {cart}</button>
        </div>
    );
}
