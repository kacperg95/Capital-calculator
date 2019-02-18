import React from "react"

import Calculator from "./Calculator.js"

function FormComponent(props) {
    return (
        <div id="content">
            <div id="formFrame">
                <h1>Capital calculator</h1>
                <form>
                    <label for="initialCapital">Initial capital</label>
                    <input name="initialCapital" placeholder="Initial capital" onChange={props.handleChange} />
                    <label for="monthlyPay">Month contribution</label>
                    <input name="monthlyPay" placeholder="Month contribution" onChange={props.handleChange} />
                    <lubel for="percent">Percentage</lubel>
                    <input name="percent" placeholder="Percentage (%)" onChange={props.handleChange} />
                    <div id = "radioboxes">
                        <input type="radio" name="capitalization" value="month" onChange={props.handleChange} /> <label>Monthly</label>
                        <input type="radio" name="capitalization" value="year" onChange={props.handleChange} /> <span>Yearly</span>
                    </div>
                    <hr />
                    <label for="inflation">Inflation</label>
                    <input name="inflation" placeholder="Inflation (%)" onChange={props.handleChange} />
                    <label for="years">Years</label>
                    <input name="years" placeholder="Number of years" onChange={props.handleChange} />
                </form>
            </div>
            <Calculator data={props.data} />
        </div>


    )
}

export default FormComponent