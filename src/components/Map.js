
import { TileLayer,MapContainer , GeoJSON , } from 'react-leaflet'
import constituencies from '../data/constituencies.json'
import '../map.css'
import CustomMarker from './CustomMarker';



const Map = (props)=>{

    const countryStyle={
        fillColor:"blue",
        fillOpacity:0.2,
        color:"black",
        weight:1
    }
    
    const onEachCountry = (country,layer)=>{
        const countyName = country.properties.COUNTY_NAM;
        const constituencyName = country.properties.CONSTITUEN
        layer.bindPopup(countyName + '<br>' + constituencyName.toLowerCase(),{closeButton:false});
        layer.on('mouseover',()=>{
            layer.openPopup()
        })
        layer.on('mouseout',()=>{
            layer.closePopup()
        })

    }
    return(
    <div>
    <MapContainer className="leaflet-container" center={[-0.023559,37.906193]} zoom={6}>
        {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/> */}

        {props.coordinates.map((point,index)=>{
            return(
                <CustomMarker point={point} index={index}/>
            )
        })}
        <GeoJSON data={constituencies.features} style={countryStyle} onEachFeature={onEachCountry}/>
     </MapContainer>
     </div>
    )
}

export default Map