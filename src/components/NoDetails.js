const NoDetails = ()=>{
    return(
        <div className="details blank-details">
            <h3>Details</h3>
            <div className="details-section">
                <span className="title">Crop Name:</span>
                <span className="content">Select a crop</span>
            </div>

            <div className="details-section">
                <span className="title">Order by:</span>
                <span className="content">Select a criteria</span>
            </div>
            <button className="btn" onClick={()=>{
                window.alert('Fill the form')
            }}>Get coordinates</button>
        </div>
    )
}

export default NoDetails