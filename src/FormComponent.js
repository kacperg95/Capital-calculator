import React from "react"

import Calculator from "./Calculator.js"

function FormComponent(props) {
    return (
        <div id="content">
            <div id="formFrame">
                <h1>Kalkulator kapitałowy</h1>
                <form>
                    <input name="initialCapital" placeholder="Kapitał startowy (zł)" onChange={props.handleChange} />
                    <input name="monthlyPay" placeholder="Miesięczna składka (zł)" onChange={props.handleChange} />
                    <input name="percent" placeholder="Oprocentowanie (%)" onChange={props.handleChange} />
                    <div id = "radioboxes">
                        <input type="radio" name="capitalization" value="month" onChange={props.handleChange} /> <span>Miesięczne</span>
                        <input type="radio" name="capitalization" value="year" onChange={props.handleChange} /> <span>Roczne</span>
                    </div>
                    <hr />
                    <input name="inflation" placeholder="Inflacja (%)" onChange={props.handleChange} />
                    <input name="years" placeholder="Lata" onChange={props.handleChange} />
                </form>
            </div>
            <Calculator initialCapital={props.initialCapital} monthlyPay={props.monthlyPay} percent={props.percent} capitalization={props.capitalization} inflation={props.inflation} years={props.years} />
        </div>


    )
}

export default FormComponent