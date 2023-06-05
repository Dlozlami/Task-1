export default function Gender(){
    return(
        <div style={{display:'flex',width:'20vw'}}>
            {men()}
            {women()}
        </div>
    );    
}

function men()
{
    return(
        <button className="ButtonUnboxed GenderStyles">Men</button>
    );
}

function women()
{
    return(
        <button className="ButtonUnboxed GenderStyles">Women</button>
    );
}