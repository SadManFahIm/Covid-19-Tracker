import React, {useState,useEffect} from 'react'
import {Card} from '@material-ui/core'
import {sortData} from '../../util'
import LeftComponent from '../LeftComponent/leftcomponent'
import RightComponent from '../RightComponent/rightcomponent'

function CoronaVirus() {

    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState(["worldWide"])
    const [countryInfo, setCountryInfo] = useState({})
    const [tableData,setTableData] = useState([])
    const [mapCenter,setMapCenter] = useState({ lat: 0.00000, lng: 0.00000 })
    const [mapZoom,setMapZoom] = useState(3)
    const [mapContries,setMapContries] = useState([])
    const [casesType,setCasesType] = useState("cases")
  
    useEffect(() => {
      getInitialAllCountry()
      getCountriesData()
    }, [])
  
    const getInitialAllCountry = async()=>{
      await  fetch('https://disease.sh/v3/covid-19/all')
      .then(response=>response.json())
      .then(data=>{
          setCountryInfo(data)
      })
    }
  
    const getCountriesData = async() => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then(res=>res.json())
      .then(data=>{
        //console.log(data)
        const allCountries = data.map(everyCountry=>({
          name:everyCountry.country,
          value:everyCountry.countryInfo.iso2
        }));
        const sortedData = sortData(data)
        setTableData(sortedData)
        setCountries(allCountries)
        setMapContries(data)
      })
    }
  
  
    const onCountryChange = async(event) => {
      const countryCode = event.target.value
  
      const url = countryCode==='worldWide' ? 'https://disease.sh/v3/covid-19/all':`https://disease.sh/v3/covid-19/countries/${countryCode}`
      
      await fetch(url)
      .then(response=>response.json())
      .then(data=>{
        console.log(data)
          setCountry(countryCode)
          setCountryInfo(data)
  
          setMapCenter([data.countryInfo.lat,data.countryInfo.long])
          setMapZoom(4)
      })
    }
  



    return (
        <> 
        <div className="app__left">
            <LeftComponent
            onCountryChange={onCountryChange}
            country={country}
            countries={countries}
            casesType={casesType}
            countryInfo={countryInfo}
            mapContries={mapContries}
            mapCenter={mapCenter}
            mapZoom={mapZoom}
            setCasesType={setCasesType}
            />
        </div>

        <Card className="app__right">
            <RightComponent
            tableData={tableData}
            casesType={casesType}
            />
        </Card>
        </>
    )
}

export default CoronaVirus
