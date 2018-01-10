function calculate() {
    var la = document.getElementById('loanamount').value;
    var roiv = document.getElementById('roi').value;
    var roipm = roiv / 1200;
    var nomv = document.getElementById('nom').value;
    var emi = la * roipm / (1 - (Math.pow(1 / (1 + roipm), nomv)));
    var emib = la / nomv;
    if (la == 0 || nomv == 0) {
        ons.notification.alert('Please enter values to proceed.');
    } else {
        if (roiv === '') {
            ons.notification.alert('Please enter Rate of Interest!');
        } else {
            if (roiv == 0) {
                document.getElementById('emivalue').innerHTML = Number(Math.round(emib + 'e2') + 'e-2');
            } else {
                document.getElementById('emivalue').innerHTML = Number(Math.round(emi + 'e2') + 'e-2');
            }
        }
    }
};

function reset() {
    document.getElementById('loanamount').value = '';
    document.getElementById('roi').value = '';
    document.getElementById('nom').value = '';
    document.getElementById('emivalue').innerHTML = '';
    document.getElementById('result').innerHTML = '';
}

