import turfBbox from "turf-bbox"
import { useState,useEffect } from "react"
import constituency from '../data/constituencies.json'
import leafletPip from "@mapbox/leaflet-pip"
import county from '../data/counties.json'

const SideBar = (props)=>{

    const[activeCounty,setActiveCounty] = useState()
  

    const L = window.L

    useEffect(()=>{
        if(activeCounty){
            activeCounty.setStyle({
                fillColor:"#F5F5DC",
                fillOpacity:0.7,
                color:"blue",
                weight:1
            })

        //constituency layer
        //add constituency layer after county layer
        //this will ensure constituencies can be clicked
        const countyLayer = L.geoJSON(county,{
            onEachFeature:(feature,layer)=>{
                const countyName = feature.properties.COUNTY_NAM
                layer.bindPopup(countyName)
            }
        })

        activeCounty.addTo(props.map)
        countyLayer.addTo(props.map)

        countyLayer.setStyle({
            color:"black",
            weight:1,
            fillOpacity:0.1,
        })
    }
    },[activeCounty])

    const zoomToLayer = (county)=>{

        //county layer
        const countyLayer =  L.geoJSON(county)
        const targetCountyName = county.properties.COUNTY_NAM

        const bboxArray = turfBbox(county)
        const corner1 = [bboxArray[1], bboxArray[0]];
        const corner2 = [bboxArray[3], bboxArray[2]];

        props.map.fitBounds([corner1,corner2])

        // remove old active county
        if(activeCounty){
            activeCounty.removeFrom(props.map)

        }
        
        setActiveCounty(countyLayer)

        //ugly code!!!
        if(props.points.length > 0){

            let countyArray = []
            props.points.map((point)=>{
                const layer1 = leafletPip.pointInLayer([point.longitude,point.latitude],countyLayer)

                if(layer1[0] != undefined && layer1[0].feature.properties.COUNTY_NAM===targetCountyName){
                    countyArray.push(layer1[0].feature.properties.COUNTY_NAM)
                }
            })

            if(countyArray.length <= 0){
                window.alert('No points found in '+targetCountyName)
            }
        }
    }

    const showKenya = ()=>{
        props.map.setView([-0.023559,37.906193],6)
    }
    
    return(
        <div className="sidebar-nav" >

            <button className="btn" onClick={()=>showKenya()}>VIEW KENYA</button>
            <form>
                <select onChange={ (e)=> zoomToLayer(JSON.parse(e.target.value))}>
                {
                    props.counties.features.map((county,index)=>{

                        county.toString = ()=>{
                            return JSON.stringify(county)
                        }
                        return(<option key ={index} value={county}>{county.properties.COUNTY_NAM}</option>)
                    })
                }
                </select>
            </form>
            <div>

            </div>
        </div>
    )
}

export default SideBar