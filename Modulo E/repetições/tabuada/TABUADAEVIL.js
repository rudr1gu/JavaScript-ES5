function contar(){

    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    let tab = document.getElementById('result')

    if (inicio == 0  && fim == 0){
        alert('[ERRO] Preencha o formulario.')
    }

    else{
        tab.innerHTML =''
            for (a = 1; a <= 10; a++){
                let item = document.createElement('option')
                item.text = `${inicio} x ${a} = ${a * inicio}`
                document.getElementById('result').appendChild(item)
                
                while(a == 10 && inicio < fim){
                    inicio++ ; a-= 10}
            }
    }
  
}