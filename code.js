


//Desafio: Quantidade de Palavras//
String = input("digite a sua frase");

console.log(`${string} ${string.length}`);


//Desafio: Número Solitário
//Neste desafio, seu objetivo é encontrar o(s) número(s) solitário(s) (que não se repete), a partir do array de números fornecido. Para resolver, crie uma função que recebe um array com os seguintes números://

//resposta//

let vetorA = [12, 17, 15, 19, 22, 17, 19, 12];
console.log('VetorA original ==>',vetorA)
let vetorB = [];

vetorA.forEach((elemem =>{
    if(!vetorB.includes(elemem)){
        vetorB.push(elemem)
    }
}));


vetorA.forEach(elemento =>{
    if(vetorB == elemento){
        vetorA.pop(elemento)
    }
})


vetorA.forEach(elemento =>{
    if(vetorB.includes(elemento)){
        vetorA.pop(elemento)
    }
})

for(let i=0; i<vetorA.length; i++){
    let tem = false;
    for(let j=0; j<vetorB.length; j++){
        if(vetorA[i] == vetorB[j]){
            tem = true;
        }
    }
    if(!false){
        vetorA.pop(vetorA[i])
    }
}

// 4. Qual é a saída do código a seguir?//
let n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j);
    }
}

//e. 1 1 2 1 2 3 1 2 3 4

//5. Qual é o resultado da expressão booleana abaixo?//
//null

//6. Qual o valor da saída do código abaixo?
// 2