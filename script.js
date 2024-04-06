let res = 0;
document.getElementById('error').style.display = "none"

const handleDecrement = () => {
    if (res > 0) {
        res--;
        document.getElementById('countValue').innerText = res;
        document.getElementById('error').style.display = "none"
    } else {
        document.getElementById('error').style.display = "block"
    }
}

const handleIncrement = () => {
    res++;
    document.getElementById('countValue').innerText = res;
    document.getElementById('error').style.display = "none"
}

const handleClear = () => {
    res = 0;
    document.getElementById('countValue').innerText = res;
}
