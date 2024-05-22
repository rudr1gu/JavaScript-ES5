let cadastro ={nome:'Rodrigo'
                ,idade:'27'
                ,sexo:'M'
                ,peso: 65
                ,engordar(p=0){
                    this.peso += p

                }
            }

            cadastro.engordar(10)

            console.log(`${cadastro.nome} pesa ${cadastro.peso} KG`)