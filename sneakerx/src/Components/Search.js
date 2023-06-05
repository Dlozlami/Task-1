export default function Search(){

    const iconStyles = {
        width:'17px',
        height:'17px',
    }
        
    return(
        <div style={{display:'flex',cursor:'pointer',width:'20vw',alignSelf:'center',alignItems:'center'}}>
            <img src='002.png' style={iconStyles} alt='magnifying glass'/>
            <input className="ButtonUnboxed" type="text" name="search"/>
        </div>
    );    
}