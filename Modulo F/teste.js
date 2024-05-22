const items = { dados:[
    { name: "Rodrigo", idade: 28 },
    { name: "Sheila", idade: 32 },
    { name: "Julio", idade: 45 },
    { name: "José", idade: 3 },
    { name: "Luigi", idade: 12 },
]};

    //organiza pela idade
  console.log(items.dados.sort((primeiroItem, segundoItem) => primeiroItem.idade - segundoItem.idade)) 


    const arr = [3, 1, 4, 1, 5, 9];
    const compareFn = (a, b) => (a > b ? 0 : -1);
    // arr.sort(compareFn);

    console.log(arr.sort(compareFn))