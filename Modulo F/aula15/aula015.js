let carro = ['fusca','soul','fusion','parati']
    carro[4] = 'Jeep Willy'
    carro.push('landau')
    carro.sort()
    carro.length
    
console.log(`O carro é o ${carro}`)

/*for (pos = 0; pos < carro.length ; pos++){
console.log(`${carro[pos]}`)
}
*/

for (pos in carro){
    console.log(`${pos} carro ${carro[pos]}`)
} //só  funciona para array e object

let p = carro.indexOf('landau') //se não tive o valor dentro do array o resultado sera -1



if (p == -1){ 
    console.log(`Não exite`)
} 

else {
    console.log(`O Carro esta na posição ${p}`)
}
