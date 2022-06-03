import {Marker,  Popup, useMap} from 'react-leaflet'
import {FaSeedling} from 'react-icons/fa'
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon, } from 'leaflet';
import leafletPip from "@mapbox/leaflet-pip"
import counties from '../data/counties.json'
import constituencies from '../data/constituencies.json'

const CustomMarker = (props)=>{


    
    const iconMarkup = renderToStaticMarkup(<FaSeedling size={20} color={'green'}/>);
    const customMarkerIcon = divIcon({
      html: iconMarkup,
      
    });

   
    const map = useMap();
    const L = window.L

    const countyLayer = L.geoJSON(counties)
    const constituencylayer = L.geoJSON(constituencies)

    const zoomPoints = (latitude,longitude)=>{
        map.flyTo([latitude,longitude],8)
        
    }
    const findCounty = (point)=>{
        const layer1 = leafletPip.pointInLayer([point.longitude,point.latitude],countyLayer)
        let countyName = layer1[0].feature.properties.COUNTY_NAM
        return countyName;
    }

    const findConstituency = (point)=>{
        const layer2 = leafletPip.pointInLayer([point.longitude,point.latitude],constituencylayer)
        let constituencyName = layer2[0].feature.properties.CONSTITUEN
        return constituencyName
    }

    return(
        <Marker key={props.index} position={[props.point.latitude,props.point.longitude]} icon={customMarkerIcon} eventHandlers={{
            click:()=>{
                zoomPoints(props.point.latitude,props.point.longitude)
            }
        }}>
            <Popup position={[props.point.latitude,props.point.longitude]} key={props.index}>
                <div className="popup-content">
                    <h4>COUNTY NAME</h4>
                    <p>{findCounty(props.point)}</p>
                    <h4>CONSTITUENCY NAME</h4>
                    <p>{findConstituency(props.point)}</p>
                    <h4>RANK</h4>
                    <p>{props.index+1}</p>
                </div>
                
            </Popup>
        </Marker>
    )
}

export default CustomMarker