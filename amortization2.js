function calculate() {
    var lav = document.getElementById('la').value;
    var roiv = document.getElementById('roi').value;
    var nomv = document.getElementById('nom').value;



    if ((lav.trim() === '') || (roiv.trim() === '') || (nomv.trim() === '')) {
        document.getElementById("result").innerHTML = "<span style='color:red; font-size:1.5em;font-weight:bold;'>Enter Values, if interest is nill, Enter '0'</span>";
    } else if ((!(isNaN(nomv))) || (!(isNaN(roiv))) || (!(isNaN(lav)))) {
        if ((roiv.trim() === '') || (roiv === '0')) {
            roiv = 0;
            lav = parseFloat(lav);
            roiv = parseFloat(roiv);
            nomv = parseInt(nomv);
            document.getElementById("result").innerHTML = amort(lav, roiv, nomv);
        } else {
            lav = parseFloat(lav);
            roiv = parseFloat(roiv);
            nomv = parseInt(nomv);
            document.getElementById("result").innerHTML = amortb(lav, roiv, nomv);
        }
    }
}

function amort(lav, roiv, nomv) {
    var count;
    var payment = lav / nomv;
    // language=HTML
    var result;
    result = "EMI : <span style='color:red; font-size:2em;font-weight:bold;'>" + payment.toFixed(2) + "</span><br />" +
        "Loan Amount : " + lav.toFixed(2) + "<br />" +
        "No. of Months : " + nomv + "<br /><br />";
    result += "<table id='datatable' border='0'><tr><th>##</th><th>Balance</th><th>EMI</th>";

    for (count = 0; count < nomv; ++count) {
        var interest = 0;
        var monthlyPrincipal = 0;
        result += "<tr align=center>";
        //Months
        result += "<td>" + (count + 1) + "</td>";
        //Balance
        result += "<td>" + lav.toFixed(2) + "</td>";
        //EMI
        result += "<td>" + payment.toFixed(2) + "</td>";
        result += "</tr>";
        lav = lav - payment;
    }
    result += "</table>";
    return result;
}

function amortb(lav, roiv, nomv) {
    var count;
    var monthlyRate = roiv / 1200;
    var payment = lav * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -nomv)));
    // language=HTML
    var result;
    result = "EMI : <span style='color:red; font-size:2em;font-weight:bold;'>" + payment.toFixed(2) + "</span><br />" +
        "Loan Amount : " + lav.toFixed(2) + "<br />" +
        "Interest Rate : " + roiv.toFixed(2) + "%<br />" +
        "No. of Months : " + nomv + "<br />" +
        "Interest to Pay : " + ((payment * nomv) - lav).toFixed(2) + "<br />" +
        "Total to Pay : " + (payment * nomv).toFixed(2) + "<br /><br />";
    result += "<table id='datatable' border='0'><tr><th>##</th><th>Balance</th>" + "<th>Interest</th><th>Principal</th><th>EMI</th>";

    for (count = 0; count < nomv; ++count) {
        var interest = 0;
        var monthlyPrincipal = 0;
        result += "<tr align=center>";
        //Months
        result += "<td>" + (count + 1) + "</td>";
        //Balance
        result += "<td>" + lav.toFixed(2) + "</td>";
        //Interest
        interest = lav * monthlyRate;
        result += "<td>" + interest.toFixed(2) + "</td>";
        //Principal
        monthlyPrincipal = payment - interest;
        result += "<td>" + monthlyPrincipal.toFixed(2) + "</td>";
        //EMI
        result += "<td>" + payment.toFixed(2) + "</td>";
        result += "</tr>";
        lav = lav - monthlyPrincipal;
    }
    result += "</table>";
    return result;
}

function reset() {
    document.getElementById('la').value = '';
    document.getElementById('roi').value = '';
    document.getElementById('nom').value = '';
    document.getElementById('result').innerHTML = '';
}
