import React from "react"
import CapitalChart from "./CapitalChart"
var Count = require("./modules/Count")

function Calculator(props)
{

    var initialCapital = Number(String(props.data.initialCapital).replace(",","."));
    var percent = Number(String(props.data.percent).replace(",","."));
    var monthlyPay = Number(String(props.data.monthlyPay).replace(",","."));
    var capitalization = props.data.capitalization;
    var inflation = Number(String(props.data.inflation).replace(",","."));
    var years = Number(String(props.data.years).replace(",","."));

    var results = Count.capital(initialCapital, monthlyPay, percent, capitalization, inflation,  years)

    return(
        <div id = "calculator"> 
            <CapitalChart data={results} years={years}/>
        </div>
    )

}


export default Calculator