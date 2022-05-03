const Details = (props)=>{
    return(
        <div className="details">
            <h3>Details</h3>
            <div className="details-section">
                <span className="title">Crop Name:</span>
                <span className="content">{props.cropName}</span>
            </div>

            <div className="details-section">
                <span className="title">Order by:</span>
                <span className="content">{props.emphasis}</span>
            </div>

            <button className="btn"onClick={()=>props.onClick()}>
            Get coordinates
            </button>
        </div>
    )
}

export default Details