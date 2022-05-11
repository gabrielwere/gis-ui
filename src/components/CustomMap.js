
import { useState } from 'react';
import { TileLayer,MapContainer} from 'react-leaflet'
import '../map.css'
import SideBar from './SideBar';
import CustomGEOJSON from './CustomGeoJSON';
import counties from '../data/counties.json'
import Points from './Points';

const CustomMap = (props)=>{

    const[mapRef,setMapRef] = useState();
    
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


    return(
    <div className="map">

        <MapContainer className="leaflet-container" center={[-0.023559,37.906193]} zoom={6} ref={setMapRef}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>

           
            {renderGEOJSON()}
        </MapContainer>

        <div className="sidebar-points">
            <SideBar counties={counties} map={mapRef}/>
            <Points coordinates={props.coordinates} map={mapRef}/>
        </div>
    
    </div>
    )
}

export default CustomMap