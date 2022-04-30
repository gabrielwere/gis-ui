import { GeoJSON } from "react-leaflet"
import counties from '../data/counties.json'

const CustomGEOJSON = (props)=>{

    const countryStyle={
        fillColor:"blue",
        fillOpacity:0.1,
        color:"black",
        weight:0.1
    }

    return(
        <GeoJSON data={counties} style={countryStyle}/>
    )
}

export default CustomGEOJSON