import React from 'react'
import Table from './Table/table'
import LineGraph from './LineGraph/Linegraph'
import {CardContent} from '@material-ui/core'
import '../../App.css';

function rightcomponent({tableData,casesType}) {
    return (
        <div>
            <CardContent>
            <h4>Live cases by country</h4>
            <Table countries={tableData}/><br/>
            <h3>World wide new {casesType}</h3><br/>
            <LineGraph casesType={casesType}/>
            </CardContent>
        </div>
    )
}

export default rightcomponent
