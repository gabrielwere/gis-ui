import {Marker,  Popup, useMap} from 'react-leaflet'
import {FaSeedling} from 'react-icons/fa'
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon, } from 'leaflet';

const CustomMarker = (props)=>{

    const iconMarkup = renderToStaticMarkup(<FaSeedling size={25}/>);
    const customMarkerIcon = divIcon({
      html: iconMarkup,
    });
    const map = useMap();

    const zoomPoints = (latitude,longitude)=>{
        map.flyTo([latitude,longitude],8)
        
    }

    return(
        <Marker key={props.index} position={[props.point.latitude,props.point.longitude]} icon={customMarkerIcon} eventHandlers={{
            click:()=>{
                zoomPoints(props.point.latitude,props.point.longitude)
            }
        }}>
            <Popup position={[props.point.latitude,props.point.longitude]} key={props.index}>
                <h4>{props.point.latitude},{props.point.longitude}</h4>
            </Popup>
        </Marker>
    )
}

export default CustomMarker