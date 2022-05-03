const Points = (props)=>{

    return(
    <div className="points">
        {props.coordinates.map((point,index)=>{
            return (
            <span key={index}>
                <h4>{point.latitude}</h4>
                <h4>{point.longitude}</h4>
            </span>
            )
        })}
    </div>
    )
}

export default Points