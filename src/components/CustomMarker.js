import {Marker,  Popup, useMap} from 'react-leaflet'
import {FaSeedling} from 'react-icons/fa'
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon, } from 'leaflet';
import leafletPip from "@mapbox/leaflet-pip"
import counties from '../data/counties.json'
import constituencies from '../data/constituencies.json'
import { useState } from 'react';
import turfBbox from 'turf-bbox';

const CustomMarker = (props)=>{

    const[countyName,setCountyName] = useState('')
    const[constituencyName,setConstituencyName] = useState('')
    const map = useMap();

    const L = window.L
    const iconMarkup = renderToStaticMarkup(<FaSeedling size={25}/>);
    const customMarkerIcon = divIcon({
      html: iconMarkup,
    });

    const countyLayer = L.geoJSON(counties)
    const constituencylayer = L.geoJSON(constituencies)

    const zoomPoints = (latitude,longitude)=>{
        const layer1 = leafletPip.pointInLayer([longitude,latitude],countyLayer)
        const layer2 = leafletPip.pointInLayer([longitude,latitude],constituencylayer)

        const bboxArray = turfBbox(layer1[0].feature)
        const corner1 = [bboxArray[1], bboxArray[0]];
        const corner2 = [bboxArray[3], bboxArray[2]];

        setCountyName(layer1[0].feature.properties.COUNTY_NAM)
        setConstituencyName(layer2[0].feature.properties.CONSTITUEN)

        map.fitBounds([corner1,corner2])
        
    }

    return(
        <Marker key={props.index} position={[props.point.latitude,props.point.longitude]} icon={customMarkerIcon} eventHandlers={{
            click:()=>{
                zoomPoints(props.point.latitude,props.point.longitude)
            }
        }}>
            <Popup position={[props.point.latitude,props.point.longitude]} key={props.index}>
                <div className="popup-content">
                    <h4>COUNTY</h4>
                    <p>{countyName}</p>
                    <h4>CONSTITUENCY</h4>
                    <p>{constituencyName}</p>
                </div>
                
            </Popup>
        </Marker>
    )
}

export default CustomMarker