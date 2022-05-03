import { useState } from "react"
const GetCropForm = (props)=>{

    const[cropName,setCropName] = useState('Maize')
    const[emphasis,setEmphasis] = useState('None')

    const getCropDetails = (e)=>{
        e.preventDefault();

        props.getCropDetails(cropName,emphasis)

    }

    return(
        <form onSubmit={getCropDetails}>
            <div className="form-control">
                <label>Select Crop:</label>
                <select value={cropName} onChange={(e)=>{
                    setCropName(e.target.value)
                    }}>
                    <option value="Maize">Maize</option>
                    <option value="Beans">Beans</option>
                    <option value="French Beans">French Beans</option>
                    <option value="Green Gram">Green Gram</option>
                    <option value="Bananas">Bananas</option>
                </select>
            </div>
            

            <div className="form-control">
                <label>Choose criteria:</label>
                <select value={emphasis} onChange={(e)=>{
                    setEmphasis(e.target.value)
                }}>
                    <option value="none">No emphasis</option>
                    <option value="roads">Close to Roads</option>
                    <option value="urban">Close to Urban Areas</option>
                    <option value="airfields">Close to Airfields</option>
                </select>
            </div>
            
            <div className="form-control">
                <input type="submit" value="Confirm Details" className="btn"/>
            </div>
        </form>
    )
}

export default GetCropForm