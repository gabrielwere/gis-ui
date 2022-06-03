import GetCropForm from './components/GetCropForm';
import { useState } from 'react';
import CustomMap from './components/CustomMap';
import Details from './components/Details';
import Header from './components/Header';
import NoDetails from './components/NoDetails';


function App() {
  const[cropDetails,setCropDetails] = useState()
  const[coordinates,setCoordinates] = useState([])
 

  const fetchCropData = async (cropName,emphasisData)=>{
    const getCropDataUrl = `http://localhost:5000/crops/${cropName}`;
    const response = await fetch(getCropDataUrl);
    const data = await response.json()

    setCropDetails({...data,emphasis:emphasisData})
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
    <>
    <Header/>
    
    <div className="crop-form">
      <GetCropForm getCropDetails={fetchCropData}/>
    </div>

    
    <div className="hiro">
      <div className="crop-container">
        {
        cropDetails ?<Details cropName={cropDetails.cropName} emphasis={cropDetails.emphasis} onClick={fetchCoordinates}/>
        : <NoDetails/>
        }
      </div>
    
    <CustomMap coordinates={coordinates}/>
    </div>
    
  
        
    </>
  );
}

export default App;
