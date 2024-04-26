function handleTimeUnitChange() {
    var selectedOption = document.getElementById('timeUnit').value;
    var time = parseFloat(document.getElementById('time').value);

    if (isNaN(time)) {
        console.log('Invalid Time Input');
        return null;
    }

    switch (selectedOption) {
        case 'days':
            var timeInYearsFromDays = time / 365.25;
            // console.log(`${timeInYearsFromDays} year(s) `);
            return timeInYearsFromDays;

        case 'months':
            var timeInYearsFromMonths = time / 12.008;
            // console.log(`${timeInYearsFromMonths} year(s)`);
            return timeInYearsFromMonths;

        case 'years':
            console.log(`${time} year(s) `);
            return time;

        default:
            // console.log('No Time Option Was Picked');
            return null;
    }
}


function calculate() {
    var principal = parseFloat(document.getElementById('principal').value),
        rate = parseFloat(document.getElementById('rate').value),
        time = handleTimeUnitChange();

    if (time === null) {
        console.log('Invalid time unit or value');
        return;
    }

    var SI = (principal * rate * time) / 100,
        TA = SI + principal;

    console.log("Simple Interest:", SI);
    console.log("Total Amount:", TA);

    // document.write(SI)

    var si = document.getElementById('si')
    var ta = document.getElementById('ta')



    si.innerHTML = SI
    ta.innerHTML = TA

}


// innerText, textContent, innerHtml
