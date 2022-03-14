var btn = document.getElementById("btn");
btn.onclick = function () {
    var code = document.getElementById("code").value;
    var result = document.getElementById("result");
    let res = data.find(e => e.code == parseInt(code));
    if (res == undefined) {
        result.innerHTML = "Bunday kod mavjud emas";
        result.style.color = "red"
    } else {
        result.innerHTML = res.description;
        result.style.color = "green"
    }
}