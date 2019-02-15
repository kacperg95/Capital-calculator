import React from "react"
import { Line, Bar, Pie } from "react-chartjs-2"

function CapitalChart(props) {

    var labels = []
    for(var i = 0 ; i <= props.years; i++)
        labels.push(i)

    return (
        <Line
            data={{
                labels: labels,
                datasets: [{
                    label: 'Bez inflacji',
                    data: props.data.noInflation,
                    backgroundColor: 'rgba(137, 123, 175, 0.2)'
                },
                {
                    label: 'Z inflacją',
                    data: props.data.inflation,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)'
                }]
            }}
            options={{
                legend: {
                 display: true,
                    position: 'top'
                },
                tooltips: {
                    mode: "label",
                    label: "myabel",
                    callbacks: {
                        label: function(tooltipItem, data) {
                            let labelArray = tooltipItem.yLabel.toString().split(".");
                            return labelArray[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " zł";
                        }
                    }
                }
            }}
        />
    )
}

export default CapitalChart