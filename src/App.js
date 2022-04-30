import GetCropForm from './components/GetCropForm';
import { useState } from 'react';
import Button from './components/Button';
import CustomMap from './components/CustomMap';


function App() {
  const[cropDetails,setCropDetails] = useState({})
  const[coordinates,setCoordinates] = useState([])
 

  const fetchCropData = async (cropName,emphasisData)=>{
    const getCropDataUrl = `http://localhost:5000/crops/${cropName}`;
    const response = await fetch(getCropDataUrl);
    const data = await response.json()

    setCropDetails({...data,emphasis:emphasisData})
    console.log(cropDetails);
  }

  const fetchCoordinates = async()=>{
    const getCoordinatesUrl = `http://localhost:8080/gis_api/aggregation`
    const response = await fetch(getCoordinatesUrl,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(cropDetails)
    })
    const data = await response.json();
    setCoordinates(data)
  }

  return (
    <div className="container">
      <GetCropForm getCropDetails={fetchCropData}/>
      <Button onClick={fetchCoordinates}/>
      <CustomMap coordinates={coordinates}/>
    </div>
  );
}

export default App;
