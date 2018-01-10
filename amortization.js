function calculate() {
    var balance = parseFloat(document.getElementById('loanamount').value);
    var interestRate = parseFloat(document.getElementById('roi').value);
    var terms = parseInt(document.getElementById('nom').value);

    var div = document.getElementById('result');
    div.innerHTML = '';

    var balVal = validateInputs(balance);
    var intrVal = validateInputs(terms);

    if (balVal && intrVal) {
        div.innerHTML += amort(balance, interestRate, terms);
    } else {
        div.innerHTML += "Please Check your inputs and retry - invalid values.";
    }
}

function amort(balance, interestRate, terms) {

    if (interestRate == 0) {
        var monthlyRate = 0;
        var payment = balance / terms;
        var result = "EMI : <span style='color:red; font-size:2em;font-weight:bold;'>" + payment.toFixed(2) + "</span><br />" +
            "Loan Amount : " + balance.toFixed(2) + "<br />" +
            "Interest Rate : " + (interestRate * 1).toFixed(2) + "%<br />" +
            "No. of Months : " + terms + "<br />" +
            "Interest to Pay : " + ((payment * terms) - balance).toFixed(2) + "<br />" +
            "Total to Pay : " + (payment * terms).toFixed(2) + "<br /><br />";

        result += "<table id='datatable' border='0'><tr><th>Month</th><th>Balance</th>" +
            "<th>Interest</th><th>Principal</th><th>EMI</th>";

        for (var count = 0; count < terms; ++count) {
            var interest = 0;
            var monthlyPrincipal = 0;
            result += "<tr align=center>";
            result += "<td>" + (count + 1) + "</td>";
            result += "<td>" + balance.toFixed(2) + "</td>";
            interest = balance * 0;
            result += "<td>" + interest.toFixed(2) + "</td>";
            monthlyPrincipal = payment - interest;
            result += "<td>" + monthlyPrincipal.toFixed(2) + "</td>";
            result += "<td>" + payment.toFixed(2) + "</td>";
            result += "</tr>";
            balance = balance - monthlyPrincipal;
        }
        result += "</table>";
        return result;
    } else {
        var monthlyRate = interestRate / 1200;
        var payment = balance * (monthlyRate / (1 - Math.pow(
            1 + monthlyRate, -terms)));
        var result = "EMI : <span style='color:red; font-size:2em;font-weight:bold;'>" + payment.toFixed(2) + "</span><br />" +
            "Loan Amount : " + balance.toFixed(2) + "<br />" +
            "Interest Rate : " + (interestRate * 1).toFixed(2) + "%<br />" +
            "No. of Months : " + terms + "<br />" +
            "Interest to Pay : " + ((payment * terms) - balance).toFixed(2) + "<br />" +
            "Total to Pay : " + (payment * terms).toFixed(2) + "<br /><br />";

        result += "<table id='datatable' border='0'><tr><th>Month</th><th>Balance</th>" +
            "<th>Interest</th><th>Principal</th><th>EMI</th>";

        for (var count = 0; count < terms; ++count) {
            var interest = 0;
            var monthlyPrincipal = 0;
            result += "<tr align=center>";
            result += "<td>" + (count + 1) + "</td>";
            result += "<td>" + balance.toFixed(2) + "</td>";
            interest = balance * monthlyRate;
            result += "<td>" + interest.toFixed(2) + "</td>";
            monthlyPrincipal = payment - interest;
            result += "<td>" + monthlyPrincipal.toFixed(2) + "</td>";
            result += "<td>" + payment.toFixed(2) + "</td>";
            result += "</tr>";
            balance = balance - monthlyPrincipal;
        }
        result += "</table>";
        return result;
    }

}
/*
function amortzero(balance, terms) {
    var payment = balance / terms;
    var result = "EMI : <span style='color:red; font-size:2em;font-weight:bold;'>" + payment.toFixed(2) + "</span><br />" +
        "Loan Amount : " + balance.toFixed(2) + "<br />" +
        "No. of Months : " + terms + "<br />" +
        "Interest to Pay : " + ((payment * terms) - balance).toFixed(2) + "<br />" +
        "Total to Pay : " + (payment * terms).toFixed(2) + "<br /><br />";

    result += "<table id='datatable' border='0'><tr><th>Month</th><th>Balance</th>" +
        "<th>Interest</th><th>Principal</th><th>EMI</th>";

    for (var count = 0; count < terms; ++count) {
        var interest = 0;
        var monthlyPrincipal = 0;
        result += "<tr align=center>";
        result += "<td>" + (count + 1) + "</td>";
        result += "<td>" + balance.toFixed(2) + "</td>";
        interest = balance * 0;
        result += "<td>" + interest.toFixed(2) + "</td>";
        monthlyPrincipal = payment - interest;
        result += "<td>" + monthlyPrincipal.toFixed(2) + "</td>";
        result += "<td>" + payment.toFixed(2) + "</td>";
        result += "</tr>";
        balance = balance - monthlyPrincipal;
    }
    result += "</table>";
    return result;
}*/

function validateInputs(value) {
    //some code here to validate inputs
    if ((value == null) || (value == "")) {
        return false;
    } else {
        return true;
    }
}

function reset() {
    document.getElementById('loanamount').value = '';
    document.getElementById('roi').value = '';
    document.getElementById('nom').value = '';
    document.getElementById('result').innerHTML = '';
}