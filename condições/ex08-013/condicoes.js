function calcular() {
    var txtv = document.getElementById('txtvel').value
    var res = document.getElementById('res')
    res.innerHTML = `<p>Sua Velocidade é de  ${txtv} Km/h</p>`
    res.innerHTML += `<p>Diriga sempre com sinto de seguraça</p>`

    if (txtv > 60) {
        res.innerHTML += `<p>Acima da Velocidade Permitida</p>`
    }

    else {res.innerHTML += `<p>dentro do limite de velocidade</p>`}

}