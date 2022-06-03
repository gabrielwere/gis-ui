const Pagination = (props)=>{

    const pageNumbers = []

    for(let i=1;i<=Math.ceil(props.totalPoints/props.pointsPerSelection);i++){
        pageNumbers.push(i)
    }
    return(
        <div className="pagination">
            
            <ul>
                {
                    pageNumbers.map((number)=>{
                        return(
                        <li key={number} onClick={()=>props.paginate(number)}>
                           {number}
                        </li>
                        )
                    })
                }
            </ul>
            
        </div>
    )
}
export default Pagination