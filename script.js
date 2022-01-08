function compute()
{
    principal = document.getElementById("principal").value;
	rate = document.getElementById("rateInput").value;
	years = document.getElementById("yearSelection").value;
    interest  = principal*rate*years/100;
	output = document.getElementById("outputValue");
    endYear = new Date().getFullYear()+parseInt(years);
    output.innerText= "If you deposit " + principal + ",\nat an interest rate of " + rate + "%,\nYou will receive an amount of " + Math.round(interest) +",\nin the year " + endYear +"\n";

}

function updateSliderText(val) {
       var output = document.getElementById("sliderSelectedValue");
       var input = document.getElementById("rateInput");
       output.innerText = input.value + "%";
}
        
        