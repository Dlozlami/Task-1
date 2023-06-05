export default function Menu()
{
    const iconStyles = {
        width:'13px',
        height:'13px',
    }
        
    return(
        <div style={{display:'flex',cursor:'pointer',alignItems:'center'}}>
            <button className="ButtonUnboxed">Menu</button>
            <img src='menu.png' style={iconStyles} alt='menu icon'/>
        </div>
    );      
}

