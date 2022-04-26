import {Marker,  Popup, useMap} from 'react-leaflet'
import {FaSeedling} from 'react-icons/fa'
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';

const CustomMarker = (props)=>{

    const iconMarkup = renderToStaticMarkup(<FaSeedling size={20}/>);
    const customMarkerIcon = divIcon({
      html: iconMarkup,
    });

    const map = useMap();

    return(
        <Marker key={props.index} position={[props.point.latitude,props.point.longitude]} icon={customMarkerIcon} eventHandlers={{
            click:()=>{
                map.setView([props.point.latitude,props.point.longitude],12)
            }
        }}>
            <Popup position={[props.point.latitude,props.point.longitude]}>
                <h4>{props.point.latitude},{props.point.longitude}</h4>
                <p>Double click for details</p>
            </Popup>
        </Marker>
    )
}

export default CustomMarker