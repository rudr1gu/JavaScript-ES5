function carregar(){

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `<p>Agora são ${hora} horas </p>`



    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.getElementById('msg').innerHTML += 'Bom dia!'
        document.body.style.background = '#6e92d6'
    }

    else if(hora >= 12 && hora < 18) {
        document.getElementById('msg').innerHTML += 'Boa tarde!'
         img.src = 'tarde.png'
        document.body.style.background = '#0546bd'
    }

    else{
        document.getElementById('msg').innerHTML += 'Boa noite!'
        img.src = 'noite.png'
        document.body.style.background = '#000099'
    }
}