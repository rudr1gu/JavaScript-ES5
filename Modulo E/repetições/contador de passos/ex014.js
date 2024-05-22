function contar(){

let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] preencha o formulario')
    }

    else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if ( i > f){ 
            for (c = i; c >= f; c -= p){
                res.innerHTML += ` Passo \u{1F9B6} ${c} <br> `
            }
        }else{
            for (c = i; c <= f; c += p){
            res.innerHTML += ` Passo \u{1F9B6} ${c} <br> `
            }
        }
    }
}


