import { useState } from "react"
const GetCropForm = (props)=>{

    const[cropName,setCropName] = useState('Maize')
    const[emphasis,setEmphasis] = useState('Roads')

    const getCropDetails = (e)=>{

        window.scrollBy({
            top:95,
            left:0,
            behavior:'smooth',
        })
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
                    <option value="Avocados">Avocados</option>
                    <option value="Carrots">Carrots</option>
                    <option value="Cabbages">Cabbages</option>
                    <option value="Spinach">Spinach</option>
                    <option value="Peas">Peas</option>
                    <option value="Onions">Onions</option>
                </select>
            </div>
            

            <div className="form-control">
                <label>Choose criteria:</label>
                <select value={emphasis} onChange={(e)=>{
                    setEmphasis(e.target.value)
                }}>
                    <option value="roads">Roads</option>
                    <option value="urban">Urban Areas</option>
                    <option value="airfields">Airfields</option>
                    <option value="roads&urban">Roads & Urban Areas</option>
                    <option value="roads&airfields">Roads & Airfields</option>
                    <option value="urban&airfields">Urban Areas & Airfields</option>
                    <option value="all three criteria">Roads & Urban & Airfields</option>
                </select>
            </div>
            
            <div className="form-control">
                <input type="submit" value="Confirm Details" className="btn"/>
            </div>
        </form>
    )
}

export default GetCropForm