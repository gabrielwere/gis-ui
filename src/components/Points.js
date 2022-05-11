import {FaSeedling} from 'react-icons/fa'
import { divIcon, } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import leafletPip from "@mapbox/leaflet-pip"
import counties from '../data/counties.json'
import constituencies from '../data/constituencies.json'


const Points = (props)=>{
    const L = window.L
    const map = props.map
    const markers = []

    const iconMarkup = renderToStaticMarkup(<FaSeedling size={25}/>);
    const customMarkerIcon = divIcon({
        html: iconMarkup,
    });
   
    const countyLayer = L.geoJSON(counties)
    const constituencylayer = L.geoJSON(constituencies)


    return(
    <div className="points">
        {props.coordinates.map((point,index)=>{

            const layer1 = leafletPip.pointInLayer([point.longitude,point.latitude],countyLayer)
            const layer2 = leafletPip.pointInLayer([point.longitude,point.latitude],constituencylayer)

            let countyName = layer1[0].feature.properties.COUNTY_NAM
            let constituencyName = layer2[0].feature.properties.CONSTITUEN

            const marker = L.marker([point.latitude,point.longitude]).addTo(map).bindPopup(
                `<div class='popup-content'>
                <h4>COUNTY</h4>
                <p>${countyName}</p>
                <h4>CONSTITUENCY</h4>
                <p>${constituencyName}</p>
                </div>`
            )
            marker.setIcon(customMarkerIcon)
            markers.push(marker)


            
            return (
            <span key={index} onClick={()=>{
               
                
                markers[index].openPopup()
                map.flyTo([point.latitude,point.longitude],9)
            }}>
                <h4>[{point.latitude},{point.longitude}]</h4>
            </span>
            )
        })}
    </div>
    )
}

export default Points