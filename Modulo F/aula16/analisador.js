let num = document.getElementById('num')
let lista = document.querySelector('#result')
let res = document.querySelector('#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function contar(){
    
     if (isNumero(num.value) && !inLista(num.value, valores)){

        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
         
     } else{    
        alert('[erro]Valor invalido insira um numero entre 1 e 100 ou que não foi adicionado')
     }
     num.value = ''
     num.focus()
     
}

function finalizar(){

    if (valores.length == 0){
        alert('Adicione um valor a lista')
    }

    else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for( let pos in valores){
            soma += valores[pos]
            media += (valores[pos]) / valores.length

            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerHTML = ''
        res.innerHTML +=   `<p>Numero de elementos adicionados: ${tot}</p>
                            <p>Maior numero adicionado: ${maior}</p>
                            <p>Menor numero adicionado: ${menor}</p>
                            <p>A Soma dos Valores adicionados é = ${soma}</p>
                            <p>A Média dos Valores adicionados é = ${media}</p>`
    }
    
}
