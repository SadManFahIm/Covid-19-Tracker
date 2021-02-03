import React from 'react'
import InfoBox from './InformationBox/infobox'
import Map from '../LeftComponent/Map/Map'
import {FormControl,MenuItem,Select} from '@material-ui/core'
import {prettyPrintStat} from '../../util'


function leftcomponent(props) {
    return (
        <>
         <div className="app__header">
          <h1>Covid 19 tracker</h1>
          <FormControl className="app__dropdown">
            <Select
            variant="outlined"
            onChange={props.onCountryChange}
            value={props.country}
            >
              <MenuItem value="worldWide">WorldWide</MenuItem>
              {props.countries.map((everyCountry,i)=> <MenuItem value={everyCountry.value} key={i}>{everyCountry.name}</MenuItem>)}
              
            </Select>
          </FormControl>
        </div>


        <div className="app_stats">
          <InfoBox
           isRed 
           active={props.casesType ==="cases"}
           onClick={()=>props.setCasesType("cases")}
           title="Coronavirus cases" cases={prettyPrintStat(props.countryInfo.todayCases)} total={prettyPrintStat(props.countryInfo.cases)}/>
          <InfoBox 
           active={props.casesType ==="recovered"}
           onClick={()=>props.setCasesType("recovered")}
           title="Recovered" cases={prettyPrintStat(props.countryInfo.todayRecovered)} total={prettyPrintStat(props.countryInfo.recovered)}/>
          <InfoBox
           isRed
           active={props.casesType ==="deaths"} 
           onClick={()=>props.setCasesType("deaths")}
           title="Deaths" cases={prettyPrintStat(props.countryInfo.todayDeaths)} total={prettyPrintStat(props.countryInfo.deaths)}/>
        </div>


        <Map 
        casesType={props.casesType}
        countries={props.mapContries}
        center={props.mapCenter} 
        zoom={props.mapZoom}
        />
        </>
    )
}

export default leftcomponent
