var nome = prompt("Qual é o seu nome?")

document.write(`Olá ${nome.toUpperCase()}, Seu nome tem ${nome.length} letras! <br>`)


var n1 = 3500

console.log(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

console.log(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}))

console.log(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}))