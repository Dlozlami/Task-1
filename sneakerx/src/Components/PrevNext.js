export default function PrevNext({sneakers,isNew})
{
    const myStyle = {
        width:'20%',
        textAlign:'center'
    }

    return(
        <div  style={myStyle}>
        {Message(isNew)}
        <br/>
        {nav('prev')}
        {nav('next')}
        </div>
    );
}
    function nav(name)
    {        
        const iconStyles = {
        width:'15px',
        height:'15px',
        }

        if(name === 'prev')
        { return(
            <button className="ButtonUnboxed" style={{marginRight:"20px",marginTop:"200px"}}>
                <img src='prev.png' style={iconStyles} alt='prev icon'/>
                <span>Prev</span>  
            </button>
        );}

        return(
                <button className="ButtonUnboxed" style={{marginLeft:"20px",marginTop:"200px"}}>
                <span>Next</span>
                <img src='next.png' style={iconStyles} alt='next icon'/>  
                </button>
        );
    }

    function Message(isNew)
    {
        const myStyles = {
            rotate:'-90deg',
        }

        let faded = isNew?{opacity:'100%'}:{opacity:'20%'};

        return(
            <div style={myStyles}>
                <h1 style={{fontFamily: 'Lato'}} className="w3-jumbo">
                    Discover
                </h1>
                <h3 style={faded}>
                    new
                </h3>
            </div>
        );
    }

