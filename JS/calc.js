
let res = document.getElementById('result');

function numero(num) {
    let number = res.innerHTML;
    res.innerHTML = number + num;
}

function backall() {
    res.innerHTML = "";
}

function backone() {
    let result = res.innerHTML;
    res.innerHTML = result.substring(0, result.length -1);
}

function equal() {
    let result = res.innerHTML;
    if(result) {
       res.innerHTML = eval(result)
    }else {
        res.innerHTML = "";
    }
}