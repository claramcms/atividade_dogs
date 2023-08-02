//essa variável armazena a minha idade em anos humanos.
let myAge = 16;

/*esses são os dois primeiros anos da vida de um cão, 
que contam mais do que os anos subsequentes.
 */
let earlyYears = 2;

//a quantidade de "anos de cão" que cada um dos dois primeiros anos humanos representa.
earlyYears *= 10.5;

/*como foi contabilizado dois anos em earlyYears eu subtraiu esse valor de myAge,
e o guardo em uma nova variável
 */
let laterYears = (myAge - 2);

/*Multipliquei laterYears por 4 (que é a quantidade de "anos de cão",
que cada ano humano adicional representa).
 */
laterYears *= 4

console.log(earlyYears)
console.log(laterYears)

//representa a minha idade em "anos de cão".
let myAgeInDogYears = earlyYears + laterYears


let myName = 'Maria'.toLowerCase()

//essa linha de código está convertendo seu nome para letras minúsculas.


console.log(`Meu nome é ${myName}. Tenho ${myAge} anos em anos humanos, que são ${myAgeInDogYears} anos em anos de cão`)