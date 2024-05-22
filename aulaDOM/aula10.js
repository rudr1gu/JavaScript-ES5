 //mdn web docs - bibliografia de referencia
        
        //---------------------------------------------------------------------------

        function clickar () {
            var area = document.getElementById("area").style.backgroundColor = ("green")
        }

        function mouse (){
            var mouse = document.getElementById("area").style.backgroundColor = ("blue")
        }

        function sair (){
            var sair = document.getElementById("area").style.backgroundColor = ("red")
        }

        //-----------------------------------------------------------------------------------

        //Evento dentro do JS

        var a = document.getElementById("area2")

            a.addEventListener('click', clicar)
            a.addEventListener('mouseenter', entrar)
            a.addEventListener('mouseout', exit)
            function clicar(){
                a.innerText = "Clicou"
            }

            function entrar (){
                a.style.backgroundColor = ('black')
            }

            function exit (){
                a.style.backgroundColor = ('yellow')
            }
