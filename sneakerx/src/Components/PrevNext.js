export default function PrevNext({sneakers,isNew,position,setPosition})
{
    const myStyle = {
        width:'20vw',
        alignItems:"start",
        justifyContent:'space-between',
        paddingBottom:'5vh'
    }

    return(
        <div  style={myStyle} className="flexContainer">
            {Message(isNew)}
            <div style={{display:'flex',marginTop:'20vh'}}>
                {nav('prev',position,setPosition)}
                {nav('next',position,setPosition)}
            </div>
        </div>
    );
}
    function nav(name, position,setPosition)
    {        
        const iconStyles = {
        width:'25px',
        height:'25px',
        
        }

        if(name === 'prev')
        { return(
            <div style={{display:'flex',alignItems:'center',cursor:'pointer',marginRight:"20px"}} >
                <img src='prev.png' style={iconStyles} alt='prev icon'/>
                <button className="ButtonUnboxed" style={{marginLeft:"5px",fontFamily: 'Concert One'}}>Prev</button>
            </div>
        );}

        return(
            <div style={{display:'flex',alignItems:'center',cursor:'pointer',marginLeft:"20px"}}>
                <button className="ButtonUnboxed" style={{marginRight:"5px",fontFamily: 'Concert One'}} >Next</button>
                <img src='next.png' style={iconStyles} alt='next icon'/>  
            </div>
        );
    }

    function Message(isNew)
    {
        const myStyles = {
            display:'flex'
        }

        let faded = isNew?{opacity:'100%'}:{opacity:'20%'};

        return(
            <div style={myStyles}>
                <img src='Discover.png' className="DiscoverNew" alt='Discover text'/>  
                <img src='new.png' style={faded} className="DiscoverNew" alt='new item indicator'/>  
            </div>
        );
    }

