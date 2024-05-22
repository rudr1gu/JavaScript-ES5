function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO]Verifique e tente novamente!')
    }

    else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (sex[0].checked){
            genero = 'Homen'

            if(idade >= 0 && idade < 15){
                //criança
                img.setAttribute('src', 'img/criança.jpg')
            } else if (idade < 39 ){
                // jovem adulto
                img.setAttribute('src', 'img/rudr1gu.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }

        else if (sex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 15){
                //criança
                img.setAttribute('src', 'img/menina.jpg')
            } else if (idade < 39 ){
                // jovem adulto
                img.setAttribute('src', 'img/mulher.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.innerHTML=`<p>Você é ${genero} e tem ${idade} anos.</p>`
        res.appendChild(img)
    }
}