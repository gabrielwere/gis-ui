import { useState } from "react"
const GetCropForm = (props)=>{

    const[cropName,setCropName] = useState('Maize')

    const getCropDetails = (e)=>{
        e.preventDefault();

        props.getCropDetails(cropName)

    }

    return(
        <form onSubmit={getCropDetails}>
            <label>Enter Crop</label> : 
            <select placeholder="Crop Name" value={cropName} onChange={(e)=>{
                setCropName(e.target.value)
            }}>
                <option value="Maize">Maize</option>
                <option value="Beans">Beans</option>
                <option value="French Beans">French Beans</option>
                <option value="Green Gram">Green Gram</option>
                <option value="Bananas">Bananas</option>
            </select>
            <input type="submit" value="Get Crop"/>
        </form>
    )
}

export default GetCropForm