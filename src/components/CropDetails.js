const CropDetails = (props)=>{

    return(
        <div>
            <h3>{props.cropDetails.cropName}</h3>
            <p>{props.cropDetails.maximumRainfall}</p>
            <p>{props.cropDetails.minimumRainfall}</p>
            <p>{props.cropDetails.soilDrainage}</p>
            <p>{props.cropDetails.soilRootableDepth}</p>
            <p>{props.cropDetails.soilSurfaceDrainage}</p>
            <p>{props.cropDetails.maximumSoilPH}</p>
            <p>{props.cropDetails.minimumSoilPH}</p>
            <p>{props.cropDetails.maximumTemperature}</p>
            <p>{props.cropDetails.minimumTemperature}</p>
        </div>
    );
}

export default CropDetails