import GetCropForm from './components/GetCropForm';
import { useState } from 'react';
import CustomMap from './components/CustomMap';
import Details from './components/Details';


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
    <div className="container">
      <div className="cropDetails">
        <GetCropForm getCropDetails={fetchCropData}/>
        {
          cropDetails ? <Details cropName={cropDetails.cropName} emphasis={cropDetails.emphasis} onClick={fetchCoordinates}/>
          : ''
        }
      </div>

      <div>
        <CustomMap coordinates={coordinates}/>
      </div>
    </div>
  );
}

export default App;
