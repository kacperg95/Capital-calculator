module.exports.capital = function(initialCapital, monthlyPay, percent, capitalization, inflation, years){

    var resultsInflation = [];
    var resultsNoInflation = [];

    var capitalInflation = initialCapital;
    var capitalNoInflation = initialCapital;

    resultsInflation.push(initialCapital);
    resultsNoInflation.push(initialCapital);
    

    for(let i = 1; i <= years * 12; i++)
    {
        capitalInflation += monthlyPay;
        capitalNoInflation += monthlyPay;

        if((capitalization === "year" && i % 12 === 0) || capitalization === "month"){
            capitalInflation += capitalInflation * (percent / 100);
            capitalNoInflation += capitalNoInflation * (percent / 100);
        }

        if(i % 12 === 0)
            capitalInflation -= capitalInflation * (inflation / 100); 


        resultsInflation.push(capitalInflation);
        resultsNoInflation.push(capitalNoInflation);
    }

    var yearResultsInflation = [];
    var yearResultsNoInflation = [];
    for(let i = 0; i < resultsInflation.length; i++)
    {
        if(i % 12 === 0){
            yearResultsInflation.push(resultsInflation[i]);
            yearResultsNoInflation.push(resultsNoInflation[i]);
        }
    }

    var results = {
        inflation: yearResultsInflation,
        noInflation: yearResultsNoInflation
    }


    return results;
}


