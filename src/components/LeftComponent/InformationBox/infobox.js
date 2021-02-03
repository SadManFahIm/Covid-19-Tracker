import React from 'react'
import {Card,CardContent,Typography} from '@material-ui/core'
import './infobox.css'

function infobox({...props}) {
    return (
        <Card onClick={props.onClick} className={`infoBox ${props.active && 'infoBox--selected'} ${props.isRed && 'infoBox--red'}`}>
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                    {props.title}
                </Typography>
                <h2 className={`infoBox__cases ${!props.isRed && "infoBox__case--green"}`}>{props.cases}</h2>
                <Typography className="infoBox__total" color="textSecondary">
                    {props.total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default infobox
