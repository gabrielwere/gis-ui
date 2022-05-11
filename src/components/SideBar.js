import turfBbox from "turf-bbox"
import { useState,useEffect } from "react"
import constituency from '../data/constituencies.json'

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
        const constituencyLayer = L.geoJSON(constituency,{
            onEachFeature:(feature,layer)=>{
                const constituencyName = feature.properties.CONSTITUEN
                layer.bindPopup(constituencyName)
            }
        })

        activeCounty.addTo(props.map)
        constituencyLayer.addTo(props.map)

        constituencyLayer.setStyle({
            color:"black",
            weight:1,
            fillOpacity:0.1,
        })
    }
    },[activeCounty])

    const zoomToLayer = (county)=>{

        //county layer
        const countyLayer =  L.geoJSON(county)

        const bboxArray = turfBbox(county)
        const corner1 = [bboxArray[1], bboxArray[0]];
        const corner2 = [bboxArray[3], bboxArray[2]];

        props.map.fitBounds([corner1,corner2])

        // remove old active county
        if(activeCounty){
            activeCounty.removeFrom(props.map)

        }
        
        setActiveCounty(countyLayer)
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
            
        </div>
    )
}

export default SideBar