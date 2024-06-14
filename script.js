function cal() {
    var inputList = [document.getElementById('atm').value];
    var list = []
    var splitInput = (inputList.toString()).split("")
    var sum = 0;
    for (s in splitInput) {
        if (/^(\d)$/.test(splitInput[s])) {
            list.push(splitInput[s])
        }
        else {
            var temp = list.join("");
            list = []
            if (parseInt(temp)) {
                sum += (parseInt(temp))
            }
        }
    }
    var temp = list.join("");
    if (parseInt(temp)) {
        var temp = list.join("");
        sum += parseInt(temp)
        list = []
    }

    while ((sum.toString()).length < 4) {
        sum = "0" + sum.toString()
    }
    document.getElementById('monitor').innerHTML = sum.toString();
}