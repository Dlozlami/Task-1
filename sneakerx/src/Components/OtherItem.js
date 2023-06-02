export default function OtherItem()
{  
    const myStyle = {
        width:'30%'
    }

    return(
        <div  style={myStyle}>
            {Index()}
            {Artwork()}
            {Name()}
        </div>
    );
}

    function Index()
    {
        const iconStyles = {

        }

        return(
                <p style={iconStyles} >02</p>
        );
    }
  
    function Artwork()
    {
        const iconStyles = {
            width:'90%'
        }

        return(
            <img src='nike-men-1.png' style={iconStyles} alt='nike men shoe'/>
        );
    }
  
    function Name()
    {
        const iconStyles = {

        }

        return(
                <p style={iconStyles} >Nike Airmax Bloodspot</p>
        );
    }