import React from 'react'
import numeral from 'numeral'
import {Circle, Popup} from 'react-leaflet'

const casesTypeColor = {
    cases:{
        hex:'#CC1034',
        multiplier:800,
    },
    recovered:{
        hex:'#7dd17d',
        multiplier:1200,
    },
    deaths:{
        hex:'#fb4443',
        multiplier:2000,
    },
}

export const sortData = data => {
    const sortedData = [...data]

    return sortedData.sort((a,b)=>b.cases - a.cases)
}

export const prettyPrintStat = stat => stat? `+${numeral(stat).format("0.0a")}`:"+0"

// Draw Circle on the map interactive
export const showDataOnMap = (data,casesType='recovered')=> (
    data.map(country=>(
        <Circle
         center={[country.countryInfo.lat,country.countryInfo.long]}
         fillOpacity={0.4}
         color={casesTypeColor[casesType].hex}
         fillColor={casesTypeColor[casesType].hex}
         radius={
             Math.sqrt(country[casesType]) * casesTypeColor[casesType].multiplier
         }
        >

            <Popup>
               <div className="info-container">
                   <div className="info-flag" style={{backgroundImage: `url(${country.countryInfo.flag})`}}/>
                   <div className="info-name">{country.country}</div>
                   <div className="info-confirm">Cases: {numeral(country.cases).format("0.0")}</div>
                   <div className="info-recovered">Recovered: {numeral(country.recovered).format("0.0")}</div>
                   <div className="info-death">Deaths: {numeral(country.deaths).format("0.0")}</div>
               </div>
            </Popup>

        </Circle>
    ))
)

