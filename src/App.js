
import CropDetails from './components/CropDetails';
import GetCropForm from './components/GetCropForm';

import { useState } from 'react';
import Button from './components/Button';
import Map from './components/Map';

function App() {
  const[cropDetails,setCropDetails] = useState({})
  const[coordinates,setCoordinates] = useState([])
  const[activeLocation,setActiveLocation] = useState(true)
 

  const fetchCropData = async (cropName)=>{
    const getCropDataUrl = `http://localhost:5000/crops/${cropName}`;
    const response = await fetch(getCropDataUrl);
    const data = await response.json()

    setCropDetails(data)
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

  const popupPoint =(point)=>{
    setActiveLocation(point)
  }

  

  return (
    <div className="container">
      <GetCropForm getCropDetails={fetchCropData}/>
      <CropDetails cropDetails={cropDetails}/>
      <Button onClick={fetchCoordinates}/>
      <Map coordinates={coordinates} popupPoint={popupPoint}/>
      


       
    </div>
  );
}

export default App;
