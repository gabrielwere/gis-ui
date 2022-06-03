
import { useState } from 'react';
import { TileLayer,MapContainer} from 'react-leaflet'
import '../map.css'
import SideBar from './SideBar';
import CustomGEOJSON from './CustomGeoJSON';
import counties from '../data/counties.json'
import CustomMarker from './CustomMarker';
import Pagination from './Pagination';

const CustomMap = (props)=>{

    const[mapRef,setMapRef] = useState();
    const[currentPoint,setCurrentPoint] = useState(1)
    const[pointsPerSelection,setPointsPerSelection] = useState(4)

    const indexOfLastPoint = currentPoint * pointsPerSelection
    const indexOfFirstPoint = indexOfLastPoint - pointsPerSelection
    let currentPoints = []

    if(props.coordinates != "undefined"){
        currentPoints = props.coordinates.slice(indexOfFirstPoint,indexOfLastPoint)
    }
    
    
    let time;
    const renderGEOJSON = ()=>{
        if(mapRef){
            clearTimeout(time)
            return (<CustomGEOJSON map={mapRef}/>)
        }else{
            time = setTimeout(renderGEOJSON,40)
            clearTimeout(time)
        }
    }

    const paginate = (pageNumber)=> setCurrentPoint(pageNumber)
   


    return(
    <div className="map">

        <MapContainer className="leaflet-container" center={[-0.023559,37.906193]} zoom={6} ref={setMapRef}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
            
            {  
            currentPoints.map((point,index)=>{
                return(
                    <CustomMarker point={point} key={index} index={index}/>
                )
            })
            
           }
            {renderGEOJSON()}
        </MapContainer>

        <div className="sidebar-points">
            <SideBar counties={counties} map={mapRef} points={props.coordinates}/>
            <Pagination paginate={paginate}pointsPerSelection={pointsPerSelection} totalPoints={props.coordinates.length}/>
        </div>

    
    </div>
    )
}

export default CustomMap