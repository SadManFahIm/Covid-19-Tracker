import React from 'react'
import numeral from 'numeral'
import './table.css'
function table(props) {
    return (
        <div className="table">
            {/* <table> */}
                {/* <tbody> */}
                {props.countries.map((country,i)=>{
                    return (
                        <tr key={i}>
                            <td>{country.country}</td>
                            <td><strong>{numeral(country.cases).format(",")}</strong></td>
                        </tr>
                    )
                })}
                {/* </tbody> */}
            {/* </table> */}
        </div>
    )
}

export default table
