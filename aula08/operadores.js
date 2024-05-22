const enviar  = document.getElementById('enviar')
enviar.addEventListener('click', function(e){
    e.preventDefault()

    var nome = document.getElementById('nome').value
    var idade = document.getElementById('idade').value
    var r = idade >=16 && idade <=23 ? 'Elegivel' : 'Não Elegivel'

    document.write(`<p> ${r}</p>`)
    })

    //5==5 true  5=='5' true 5==='5' false
    // (! negação) (&& conjução) (|| disjunção)

    /* ordem de precendencia
    () ** /
    > < >=
    ! && ||
    */

    /*   var x = 8
    var res = x % 2 == 0 ? 5: 9
    */
