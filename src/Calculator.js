import React from "react"
import CapitalChart from "./CapitalChart"
var Count = require("./modules/Count")

function Calculator(props)
{
    var initialCapital = Number(props.initialCapital)
    var percent = Number(props.percent)
    var monthlyPay = Number(props.monthlyPay)
    var capitalization = props.capitalization;
    var inflation = Number(props.inflation);
    var years = Number(props.years);

    var results = Count.capital(initialCapital, monthlyPay, percent, capitalization, inflation,  years)

    return(
        <div id = "calculator"> 
            <CapitalChart data={results} years={years}/>
        </div>
    )

}


export default Calculator