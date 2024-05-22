function multiplicar(){
    var tn1 = document.getElementById("txtn1")
    var tn2 = document.getElementById("txtn2")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 * n2
    res.innerHTML = `A Multiplicação entre ${n1} e ${n2} é igual a ${s}`
}