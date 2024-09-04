/*
interface PropV{
    data: string[]
}
function User({data}: PropV){
    const handleClick=(e: string)=>{
        console.log(e)
    }
     return(<ul>
        {data.map((elem)=>(<li key={elem} onClick={()=>handleClick(elem)}>{elem}</li>))}
        </ul>);
}
export default User*/























interface Prop{
    data: string[]
}
function List({data}: Prop){
    const printE=(e: string)=>{
        console.log(e)
    }
    /*return({data.map((elem)=>(<li>{elem}</li>))});*/
    return(<>{data.map((elemento)=>(<li onClick={()=>printE(elemento)} key={elemento}>{elemento}</li>))}</>);
}
export default List