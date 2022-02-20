var eu =['eu','sou','sic','e'];
eu[0]='cuzinho';// aqui eu substituo o primeiro indice que no caso começa com 0 pela palavra cuzinho
console.log(eu[0]); //aqui eu mostro o primeiro indice
console.log(eu); //aqui mostra o array todo

let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James

let femaleNames = names[0];
console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia

let users =[ //colocando objetos dentro de uma array
    {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
    },//usando virgula para separa os arrays
    {
        name: "Mateus",
        surname: "Pinto",
        age: 21,
        email: "MateusPinto@dayrep.com"
    }
];

console.log(users[0].name); // -> Calvin
console.log(users[1].age); // -> 21
users[2] = { //adicionando um novo array de objeto na indice 2
    name: "Irene",
    surname: "Purnell",
    age: 32,
    email: "IreneHPurnell@rhyta.com"
}




let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log (names.length); // -> 4

nomes [5] = "Amelia";
console.log (names.length); // -> 6

console.log (nomes); // -> ["Olivia", "Emma", "Mateo","Samuel", indefinido, "Amelia"];
console.log (nomes [3]); // -> Samuel
console.log (nomes [4]); // -> indefinido
console.log (nomes [5]); // -> Amelia



//IndexOf
//O método indexOf é usado para pesquisar a matriz para localizar um determinado valor. Se o valor for encontrado (o elemento está no array), seu índice (posição) será retornado. O método retorna -1 se o elemento não for encontrado. Se houver mais de um elemento com o mesmo valor na matriz, o índice do primeiro elemento é retornado.
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.indexOf("Mateo")); // -> 2
console.log(names.indexOf("Victor")); // -> -1


//push
//O método push coloca o elemento fornecido como seu argumento no final da matriz. O comprimento da matriz é aumentado em 1 e o novo elemento é inserido à direita (ele tem o maior índice de todos os elementos).

let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

names.push("Amelia");
console.log(names.length); // -> 5
console.log(names); // - > ["Olivia", "Emma", "Mateo", "Samuel", "Amelia"]


var nomes= ['Emerson','Cris','Douglas','Silva'];
nomes.push('Gustavo');
nomes.push('Jovem'); // adicionando ao ultimo array
nomes.unshift('GOKU') //adicionando ao primeiro indice do array
console.log(nomes.length)
console.log(nomes);


var nomes= ['Emerson','Cris','Douglas','Silva'];
nomes.push('Gustavo');
nomes.push('Jovem');
nomes.unshift('GOKU');
nomes.pop(); //remove o ultimo array
nomes.shift(); // remove o primeiro array
console.log(nomes.length)
console.log(nomes);
var preso = nomes.slice(1) // apartir do indice 1 para o lado direito vai ser adicionado todos
var preso = nomes.slice(1,-2) // apartir do indice 1 menos os ultimos 2 array

console.log(preso);


let names = ["Olivia", "Emma", "Mateo", "Samuel"];
let otherNames = ["William", "Jane"];
let allNames = names.concat( otherNames); // adicionando todos array da variavel otherNames dentro da variavel names, so que colocando tudo dentro da variavel ALLNAMES

console.log(names); // -> ["Olivia", "Emma", "Mateo","Samuel"]
console.log(otherNames); // -> ["William", "Jane"]
console.log(allNames); // -> ["Olivia", "Emma", "Mateo","Samuel", "William", "Jane"]
let x = 2e5; // aqui sera adicionado 2 e 0 5 200000
console.log(names);

var bahia=['goku'];
console.log(bahia)




// aqui e um comando pop up para aparecer em um navegador 
let decision = window.confirm('Is it OK?') // aqui colocamos na variavel deissao um alerta perguntao se e ok ou nao o windows alert tem valores boleano sempre retorna true ou false depednendo da tomada de decisao
console.log(decision) //console diz oque que for afirma no pop up se aperta em ok o valor sera true se aperta em cancela sera false

let remove = confirm('Remove all data?') // aqui crio uma variavel remove para nao deixa solto e faço uma pergunt para aparrecer no pop up caso aperta em ok o valor sera true ou vise versa
let message = remove ? 'Deleting Data' : 'Cancelled' //aqui e outra varavel que atribuo a variavel remove fazendo uma validação booleana em tenario se remove e true primeira condição e feita se não a cancelled e feita

console.log(message)
 

window.alert(); //pop up que aparece no navegar 
var popup = confirm('Hello?');
var popupconfirme = popup ? "Seu gostoso": "Vai toma no seu cu então";
console.log(popup);
console.log(popupconfirme);


var popup = confirm('Hello?');
var popupconfirme = popup ? window.alert('Seu gostoso'):alert('Vai toma no seu cu entao');
console.log(popup);
console.log(popupconfirme);



let apelido = window.prompt("What is your name?", "Emerson"); // promp e onde aparece um caixa de texto para o usuariio digitar primeiro parametro e o texto que deve ser exibido e o segundo parametro e a caixinha se for texto temos que declarar antes uma string
apelido = apelido ? apelido : "anonymous"; // aqui chamamos ja a variavel apelido e fazemos um boleano se apelido recebe algum valor true se nao anonymoys

let age = prompt("Hello " + apelido + " how old are you?"); //aqui a caixinha vai aparece e oque for digitado vai ser armazenado no age
alert(apelido + " is " + age + " years old");

let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady) {
    alert("User ready!");
}


let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(total);
}
// se coloca console fora do bloco de execução nãso funcionara pois as varivaeis dentro do bloco sao locais e nao global


let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;

if (userAge > 21) {
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
    }
}

console.log(shippingCost);

if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
    shippingCost = 0;
}





//so the if ... else syntax looks like this:

if (condition) {
  condition - true code
} else {
  condition - false code
}

const INSURANCE_COST = 2.99;

let shippingCost = 9.99;
let isOrderValid = true;

let userAge = 22;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;

/** calculate shipping cost*/
if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
shippingCost = 0;
} else if (userAge < 21 && hasParentsApproval) {
shippingCost = shippingCost - 5;
} else if (userAge < 21) {
isOrderValid = false;
}

/** take account of insurance */
if (isOrderValid && addInsurance && !hasPromoCode) {
shippingCost += INSURANCE_COST;
}

/** show message */
if (isOrderValid) {
console.log(shippingCost);
} else {
console.log("Cannot order if under 21");
}



let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
    case "a":
        alert("Gate A: empty");
        break;
    case "b":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}

if (win) {
    alert("Winner!");
}


let n = 0; 
while(n < 91) { //while enquanto seja menos que 91 continue mostra n
    console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
    n += 10;// aqui tem uma atribuição de valores sem substituição +=
}
let decision = window.confirm("Is it OK?"); //aqui aparecera um promp com ok ou cancela caso cancela o resultado vai ser boleano ou false ou true
console.log(decision);



/*Caixa de diálogo de prompt
A última das caixas de diálogo é a caixa de diálogo de prompt. É um desenvolvimento adicional do pop-up de confirmação. Como a caixa de diálogo de confirmação, ela contém os botões OK e Cancelar, mas também contém um campo de texto de linha única que permite ao usuário inserir texto.

Tal como acontece com outras caixas de diálogo, o prompt aceita um parâmetro opcional como uma mensagem que será exibida. O prompt também aceita um segundo parâmetro opcional, que é o valor padrão do campo de texto visível na janela de diálogo. Da mesma forma que confirmar, o método prompt retornará um resultado que depende da entrada do usuário.

Se o usuário fechar a janela com o botão OK, qualquer coisa no campo de texto será retornada do método de prompt como uma string. Se a caixa de diálogo for fechada com o botão Cancelar, o método retornará um valor nulo. Devido ao fato de que ao pressionar o botão OK o valor retornado será do tipo String, às vezes precisamos convertê-lo para outro tipo, por exemplo, para um tipo de Número. Como acontece com todas as entradas do usuário, precisamos estar preparados para o fato de que os dados fornecidos pelo usuário podem ser inválidos, por engano ou propositalmente, portanto, sempre trate valores como esses com cuidado extra.

let name = window.prompt ("Qual é o seu nome?", "John Doe");
nome = nome? nome: "anônimo";

let age = prompt ("Hello" + name + "quantos anos você tem?");
alerta (nome + "é" + idade + "anos");*/
let name = window.prompt("What is your name?", "John Doe"); // aceitando segundo parametro como texto para ser digitao
name = name ? name : "anonymous"; //tenario 

let age = prompt("Hello " + name + " how old are you?");
alert(name + " is " + age + " years old");

var idade= 0;
console.log(idade)
do {
console.log('Google');
idade++
} while (idade < 10);




let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

/*
para de
Além do loop for regular, existem duas versões específicas, uma das quais, for ... of, é dedicada ao uso com matrizes (e outras estruturas iterativas, que estão, entretanto, além do escopo deste curso). Em um loop desse tipo, não especificamos explicitamente nenhuma condição ou número de iterações, pois ele é executado exatamente tantas vezes quanto o número de elementos no array indicado.

Vamos voltar ao nosso exemplo somando os números da matriz de quatro elementos. Neste exemplo, usamos um loop for simples:

deixe os valores = [10, 30, 50, 100];
deixe soma = 0;
para (deixe i = 0; i <valores. comprimento; i ++) {
    soma + = valores [i];
}
console.log (soma); // -> 190

A versão deste programa que usa o loop para ... de será um pouco diferente:

deixe os valores = [10, 30, 50, 100];
deixe soma = 0;
para (deixe número de valores) {
    soma + = número;
}
console.log (soma); // -> 190

Entre colchetes após a palavra para, você não encontrará três campos separados por ponto-e-vírgula. Há uma declaração de variável, seguida pela palavra de e, em seguida, um array, os elementos dos quais faremos um loop (variável ou literal). Em nosso exemplo, for (deixe o número de valores) significa que a variável de número conterá os elementos subsequentes da matriz de valores em cada iteração. A sintaxe deste loop é a seguinte:

para (variável da matriz) {
    bloco de código
}

Na prática, com muito mais frequência do que as diferentes versões do loop for, o método forEach é usado para iterar por meio de elementos de array. Este é um dos métodos do tipo array. Seu uso requer a habilidade de escrever suas próprias funções, portanto, voltaremos a ele na seção de funções do curso.

Vejamos mais um exemplo. Desta vez, declaramos um array cities, que contém objetos que descrevem algumas das maiores cidades do mundo. Cada objeto contém campos de nome e população. Usando o loop for ... of, percorremos essa matriz e exibimos informações sobre todas as cidades com mais de 20 milhões de habitantes.

deixe cidades = [
    {nome: "Nova York", população: 18,65e6},
    {nome: "Cairo", população: 18,82e6},
    {nome: "Mumbai", população: 19,32e6},
    {nome: "São Paulo", população: 20,88e6},
    {nome: "Cidade do México", população: 21,34e6},
    {nome: "Xangai", população: 23,48e6},
    {nome: "Delhi", população: 25,87e6},
    {nome: "Tóquio", população: 37,26e6}
];

para (deixe cidade das cidades) {
    if (cidade.população> 20e6) {
        console.log ('$ {city.name} ($ {city.population})');
    }
}

Execute o código e, em seguida, experimente as condições (por exemplo, exiba todas as cidades com mais de 20 milhões de habitantes, mas menos de 25 milhões, etc.).
*/

let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
    console.log(key); // -> name, surname, age, email
};



/**
 * para ... em
Também existe uma versão do loop for que nos permite percorrer os campos do objeto. Isto é para ... em construção. Ele itera por todos os campos do objeto indicado, colocando os nomes desses campos (ou chaves) na variável. No exemplo, usamos um objeto que contém dados sobre um usuário:

let user = {
    nome: "Calvin",
    sobrenome: "Hart",
    idade: 66,
    email: "CalvinMHart@teleworm.us"
};

para (deixe digitar o usuário) {
    console.log (chave); // -> nome, sobrenome, idade, e-mail
};

Em cada iteração do loop, os nomes dos campos sucessivos do objeto de usuário são atribuídos à variável-chave, ou seja: nome, sobrenome, idade, e-mail. Então, nós os escrevemos no console. Mas e se quisermos recuperar os valores armazenados nos campos com esses nomes? Para ter acesso ao campo especificado, usamos a notação de ponto (a parte do curso dedicada aos tipos de dados) ou seja, após o nome do objeto, escrevemos um ponto e o nome do campo (chave). A chave fornecida nesta notação é sempre tratada como um literal. No loop for ... in, essa abordagem não funcionará, porque o nome do campo (chave) é colocado em uma variável. Felizmente, temos uma solução alternativa, a notação de colchetes. Ele permite que você se refira ao campo do objeto selecionado usando colchetes (como em matrizes). No colchete atrás do nome do objeto, colocamos o nome do campo, que pode ser um literal ou uma variável contendo esse nome.

console.log (user.name); // -> Calvin
console.log (usuário [nome]); // -> Calvin

Usando a notação de colchetes, melhoramos nosso exemplo exibindo não apenas as chaves, mas também seus valores atribuídos.

para (deixe digitar o usuário) {
    console.log ('$ {key} -> $ {user [key]}');
};
*/
function somar(nu,nu2){
    return nu+nu2
  }
  console.log(somar(1111,2))
// parametros servem como varivaeis locais




a{
    color: #666666;
    text-decoration: none;
    transition: all 0.2s ease-out 0.1s;
}
    /*
A propriedade transition assim define:

Todas as propriedades definidas pelo hover serão afetadas (se quisermos limitar a uma propriedade, poderíamos usar border, por exemplo, no lugar de all).
A transição para o estilo definido por :hover acontecerá em 0,2 segundo.
O método de transição é ease-out (outras opções são ease, ease-in, ease-in-out e cubic-bezier()).
A animação começará com um atraso de 0,1 segundo.
*/
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function operation(func, first, second) {
    return func(first, second);
}

console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200

/*
Expressões de função
Para armazenar uma função em uma variável ou passá-la como um argumento para chamar uma função, você não precisa necessariamente declará-la previamente e usar seu nome. Vamos voltar ao nosso exemplo com a função add:

function add (a, b) {
    retornar a + b;
}

deixe meuAdicionar = adicionar;
console.log (meuAdicionar (10, 20)); // -> 30
console.log (adicionar (10, 20)); // -> 30

Primeiro declaramos a função add e, em seguida, a armazenamos na variável myAdd. Podemos chamar a mesma função usando o nome add e a variável myAdd. Podemos encurtar essa notação e declarar a função armazenando-a em uma variável.

deixe myAdd = function add (a, b) {
    retornar a + b;
}

console.log (meuAdicionar (10, 20)); // -> 30
console.log (adicionar (10, 20)); // -> 30

No exemplo, declaramos novamente a função add e, ao mesmo tempo, a armazenamos na variável myAdd. Essa forma de definir uma função é chamada de expressão de função. Nesse caso, é especificamente uma expressão de função nomeada, porque a função tem um nome (adicionar). Se houver uma expressão de função nomeada, provavelmente também haverá uma expressão de função não nomeada ou, precisamente, uma expressão de função anônima. Na verdade, simplesmente remova o nome após a palavra-chave function para alterar a função de nomeada para anônima.

deixe myAdd = function (a, b) {
    retornar a + b;
}

console.log (meuAdicionar (10, 20)); // -> 30
*/

function add(a, b) {
    return a + b;
}

let myAdd = add;
console.log(myAdd(10, 20));     // -> 30
console.log(add(10, 20));   // -> 30

let myAdd = function add(a, b) {
    return a + b;
}

console.log(myAdd(10, 20)); // -> 30
console.log(add(10, 20)); // -> 30


let myAdd = function(a, b) {
    return a + b;
}

console.log(myAdd(10, 20)); // -> 30

 //chamando funcao chamando outra
let inner = function() {
    console.log('inner 1');
}

let outer = function(callback) {
    console.log('outer 1');
    callback();
    console.log('outer 2');
}

console.log('test 1');
outer(inner);
console.log('test 2');

let inner = function() {
    console.log('inner 1');
    }
    
    let outer = function(callback) {
    console.log('outer 1');
    setTimeout(callback, 5000) /*ms*/;
    console.log('outer 2');
    }
    
    console.log('test 1');
    outer(inner);
    console.log('test 2');
/* 
unções setTimeout e setInterval
A função setTimeout é usada quando você deseja causar uma ação atrasada. Uma função semelhante é setInterval.
*/





let inner = function() {
    console.log('inner 1');
    }
    
    let outer = function(callback) {
    console.log('outer 1');
    let timerId = setInterval(callback, 1000) /*ms*/;
    console.log('outer 2');
    
    setTimeout(function(){
        clearInterval(timerId);
    }, 5500);
    }
    
    console.log('test 1');
    outer(inner);
    console.log('test 2');



    let names = ['Alice', 'Eve', 'John'];
function showName(element) {
    console.log(element);
}
names.forEach(showName); // -> Alice, Eve, John
/*A função showName foi passada como um argumento de chamada para o método forEach da matriz de nomes. Portanto, showName será chamado três vezes, para cada elemento da matriz de nomes, e em cada chamada seu parâmetro será igual ao nome sucessivo, ou seja, por sua vez: Alice, Eva e João. A única coisa que showName precisa fazer é exibir o elemento recebido (nome).

O mesmo efeito pode ser obtido passando uma função de seta anônima para o método forEach. Nem mesmo o armazenamos em uma variável, porque presumimos que o usaremos apenas aqui e não faremos referência a ele novamente.
*/




let multiply = (a,b) => a + b; 
let result = multiply(10, 20);
console.log(result);
try {
    console.log('abc'); // -> abc
    conole.log('abc');
} catch (error) {  
    console.log(error.message); // -> conole is not defined 
}
try {
    // code to try
} catch (error) {
    // code to run in case of an error, which throw an exception
}

try {
    let a = b;
} catch (error) {
    console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
}
console.log("We handled the exception!"); // -> we handled the exception!



let a = -2;
try {
    a = b;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
        a = -2;
    } else {
        console.log("Other error - " + error);
    }
}
console.log(a); // -> -2




try {
    // code to try
} finally {
    // this will be always executed
}

let a = 10;
try {
    a = 5;
} finally {
    console.log(a); // -> 5
}
console.log(a); // -> 5


let a = 10;
try {
    a = b;  // ReferenceError
} catch (error) {
    console.log("An Error!"); // -> An Error!
} finally {
    console.log("Finally!"); // -> Finally!
}
console.log(a); // -> 10

window.document.write("Olá mundo")
/* exibe na pagina Olá mundo */

//selecionando um tag via dom 
var p1 = window.document.getElementsByTagName('p');
//aqui estou selecionando todas tag p e colocando na variavel p1

var p1 = window.document.getElementsByTagName('p')[0];
//pegando primeiro elemento da tag p e colocando na variavel p1

p1.style.color = blue;
//aqui estou acessando a variável p1 que foi declarada acima indo ate style e mudando a propriedade de cor para azul

var identfi = window.document.getElementById('tu');
//acessando pelo ID

identfi.style.color=green; // acessando variavel identfi indo para style>color e alterando para green

var varie = window.document.getElementsByClassName(2);
//acessando pela classe

varie.innerHTML="hello"// acessando a variavel da classe 2, que altera o texto da classe 2 para hello 

var google = window.document.querySelector('p'); 
google.style.background = yellow; // alterando estilo pela tag p 


//document e o no raiz e por ele que conseguimos acessar o html,body etc...
//O documentobjeto em JavaScript é a porta para a estrutura DOM

/*

Um nó pai é o nó conectado mais próximo de outro nó na direção da raiz.

Um nó filho é o nó conectado mais próximo a outro nó na direção oposta à raiz. 
*/

window.document.body;
//acessando a tag body da pagina do html

window.document.body.innerHTML ="Hello";
//aqui estou acessando via dom, indo no corpo da pagina, e definindo um texto com innerHTML que se resulta em 'Hello'


window.document.body.innerHTML ="<h1> Seja Bem Vindo </h1>";
//também consigo adicionar uma nova tag dentro de body usando a formatação correta com innerHTML
//innerHTML ele substitui e coloca a string que voce deseja

window.document.querySelector('p');
//estou acessando um seletor CSS pelo metodo querySelector

window.document.getElementById('corpo');
//com esse metodo getElementById consigo acessar um elemento DOM atraves do ID

let blueElement = document.querySelector('.blue'); //esta sendo colocado o seletor de classe .blue, dentro da variavel blueElement
blueElement.style.backgroundColor = 'blue';// e aqui abaixo esta acessando a variavel blueElement, entrando dentro de style, depois na propriedade e sendo alterado para blue

document.querySelector('.blue').style.fontFamily = 'Roboto';
//acessando a arvore DOM, depois seleciona o seletor de classe (.blue) em seguida vai em style, fonte, e o novo valor que e atribuido que e Roboto



let paragraph = document.createElement('p'); //criando uma nova tag com o createElement, a tag nesse contexto sera <p>
 
paragraph.id = 'info'; //acessando a variavel paragraph em seguida atribuido um ID
 
paragraph.innerHTML = 'The text inside the paragraph'; // aqui e adiciona um texto na variavel paragraph
 
document.body.appendChild(paragraph); //o metodo appendChild serve para adicionar como ultimo nó filho do elemento que no caso seria filho de body
//e necessario passar a variavel que deseja dentro do argumento do metodo appenChild



let newDestination = document.createElement('li'); // foi criado uma tag li
//e colocado na variavel newDestination

newDestination.id = 'oaxaca'; //atribuição de um nome de ID

newDestination.innerHTML = 'Oaxaca, Mexico'; //adiconando strings ou seja palavras

document.getElementById('more-destinations').appendChild(newDestination);
//aqui esta sendo acessado o id de more-destinations, e usando o metodo appendChild e passando newDestination
//resumindo esta colocando Oaxaca, Mexico como ultimo li dentro da lista





let paragraph = document.querySelector('p');//selecionando a tag p
document.body.removeChild(paragraph); //remove o elemento

document.getElementById('sign').hidden = true; //acessando um elemetno via ID e usando as propriedade de visibilidade, ativando para true
//assim o elemento e escondido caso fosse false estaria visivel



let elemento = document.querySelector("button"); //seletor de classe

function TornaButaoVermelho (){ //função
elemento.style.backgroundColor = "red"; //aqui usa a variavel acima que no caso resumindo e acessando a classe button e alterando a cor de fundo para vermelho
elemento.style.color = "white";//aqui altera a cor do texto para branco
elemento.innerHTML = "Red Button"; //e aqui muda a escrita de texto para Red button
}
//a função acima so sera chamada se houver um click no elemento indicado pelo querySelector, no caso se o elemento button for clicado a função acima sera chamada 
element.onclick = TornaButaoVermelho; // para dizer que dever ser chamada a função e necessario apenas atribuir o nome completo da função
//aqui diz, elemento (buttton) tiver algum clique, chame a função TornaButaoVermelho, que sera executado todo codigo dentro do bloco de codigo





let eventTarget = document.getElementById('juvenal'); //destino de evento
 
eventTarget.addEventListener('click', function() {//aqui click e um tipo de evento que se for clicado acontecera a função ao lado
 //aqui e o bloco de codigo que sera executado a função
});

/* Selecionamos nosso destino de evento no DOM usando document.getElementById('juvenal').
Usamos o .addEventListener()método no elemento DOM eventTarget.
O .addEventListener()método leva dois argumentos: um nome de evento em formato de string e uma função de manipulador de eventos. Aprenderemos sobre os diferentes valores que podemos usar como nomes de eventos em uma lição posterior.
Neste exemplo, usamos o 'click'evento, que dispara quando o usuário clica em eventTarget.
O bloco de código na função de manipulador de eventos será executado quando o 'click'evento for detectado.

*/


//Em vez de usar uma função anônima como manipulador de eventos, é uma prática recomendada criar uma função de manipulador de eventos nomeada. Seu código permanecerá organizado e reutilizável dessa maneira, mesmo se ele se tornar complexo. Verifique a sintaxe:

function eventHandlerFunction() { //uma função
  // this block of code will run when click event happens
}
 
eventTarget.addEventListener('click', eventHandlerFunction);
//A função nomeada eventHandlerFunction é passada como o segundo argumento do .addEventListener()método em vez de definir uma função anônima dentro do método!






let readMore = document.getElementById('read-more'); //um id e atribuido a variavel read more
let moreInfo = document.getElementById('more-info');//um id e atribuido a variavel more infor

// Write your code here:
function showInfo(){ //função nomeada
    //codigo quando a função showInfo for chamada
  moreInfo.style.display = 'block'; // alterara o style para block
}

readMore.addEventListener('click', showInfo); // quando for clicado o seletor (readmore) sera chamada a função ShowInfo


eventTarget.onclick = eventHandlerFunction;
// caso eventTarget seja clicado sera chamado a função eventHandlerFunction
//forma abreviada de AddEventListiner 
//escutando eventos






function abrir(){
    xibiu.style.backgroundColor=blue;
}
var xibiu = document.getElementById('google')

xibiu.onclick = abrir;

 



var str1 = "texto1"
var res = str1.concat(";texto2", ";texto3"); //metodo concat() junta caracteres
alert(res); // mostra "texto1;texto2;texto3"

var str1 = "JavaScript"
if(str1.endsWith("Script")) //verificar se as ultimas string terminam com Script
{
    alert ("ok");
}
        












let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here
function textChange(){
  view.innerHTML = 'Hello, World';
}

function textReturn(){
  view.innerHTML = 'View';
}

view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);






eventTarget.removeEventListener('click', eventHandlerFunction);



function minhaFuncao(objeto) {
    objeto.make = "Fiat";
}
var meucarro = { make: "Nissan", model: "Sentra", year: 2012 };
var x, y;
x = meucarro.make;   // x recebe o valor "Nissan" 
minhaFuncao(meucarro);
y = meucarro.make;  
// y recebe o valor "Fiat"
// (a propriedade make foi alterada pela função)
              	

function mapeamento(f, a) {
    var result = []; // Cria um novo Array
    var i;
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}
              	// As seguintes variáveis estão definidas no escopo global
var num1 = 2,
num2 = 3,
nome = "SENAC EAD";
// Esta função é definida no escopo global
function multiplica() {
return num1 * num2;
}
multiplica(); // Retorna 6 
// Um exemplo de função aninhada
function getScore() {
var num1 = 2,
    num2 = 5;
function add() {
    return nome + " scored " + (num1 + num2);
}
return add();
}
getScore(); // Retorna "SENAC EAD scored 7"
              


parseFloat()
É a função que analisa um argumento do tipo string e retorna um número de ponto flutuante.

parseInt()
É a função que faz a análise de um argumento do tipo string e retorna um inteiro da base especificada (base do sistema numérico).

getElementsByTagName(nomeTag)

<script>
    var vetorElementos = document.querySelectorAll(".hot");
    for(var i = 0; i< vetorElementos.length; i++)
    {
        vetorElementos[i].style.color = "red";
    }
</script>
              	
<script>
    var novoLi = document.createElement("li");
    var textoDoLi = document.createTextNode("Novo item de li");
</script>
              	





var str = "Senac EAD";
var res = str.substring(1, 4); //ena
              	tipo slice 


                  toUpperCase(), toLowerCase()
                  Retornam o texto em letras maiúsculas ou minúsculas, respectivamente.




                  trim()
                  Retorna a string removendo espaços no início e no fim do texto
                  
                                  
                  
                  var str = "  Senac EAD  ";
                  alert(str.trim()); //Senac EAD
                                    
A sintaxe geral para a associação de eventos no JS é:
elemento.onevent = nomeFuncao;
function desabilitar() // função desabilitar
{
    var formElem = document.getElementById("formPrincipal"); // aqui o elemento em ID e selecionado e colocado ao formElem
    for(var i = 0; i < formElem.elements.length; i++) //aqui e uma estrutura de loop que faz percorre todo elemento formElem
    {
        formElem.elements[i].disabled = true; // apos percorre todos valores acima, todos elementos do formElem são ligadas para true
    }// a função so e chamada quando o botão e clicado
}
function habilitar()
{
    var formElem = document.getElementById("formPrincipal");
    for(var i = 0; i < formElem.elements.length; i++)//aqui e uma estrutura de loop que faz percorre todo elemento formElem
    //mesma forma de seleciona todos elementos com o metodo elements
    {
        formElem.elements[i].disabled = false;
        // o comando acima ira pega todos elementos e coloca o metodo disabled para FALSE ou seja desligado
    }
}
function apagar()
{
    var formElem = document.getElementById("formPrincipal"); //selecção de ID
    formElem.style.display = "none"; //alterando para o display none
}
/*** Executa no carregamento da página */
var listaP = document.getElementsByTagName("p"); // selecao de todos elemtnos p
for(var i = 0; i< listaP.length; i++)//percorre todas tag p
{
    listaP[i].style.fontSize = "18px"; //todas tag p muda para o estilo de fonte tamanho de 18px
    listaP[i].style.fontFamily = "Helvetica, sans-serif"; // todas tag p muda para helvetica ou sans serif
    listaP[i].style.margin = "20px 10px 20px 10px"; // todas tag p muda para a o espacamento
}
/****/

element.innerHTML =  new html content	

element.attribute = new value	

element.style.property = new style	

element.setAttribute(attribute, value)	//mudando atributo e valor

document.createElement(element)	// criaçaão de um elemento html

document.getElementById(id).onclick = function(){code}

https://developer.mozilla.org/pt-BR/docs/Web/Events
// Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;

// Mostra o resultado
alert('Hoje é ' + str_data + ' às ' + str_hora);

let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}

let timeout;
function myFunction() {
  timeout = setTimeout(alertFunc, 3000);
  //definindo o tempo de 3 minutos para chamar tal função
}
function alertFunc() {
  alert("Hello!");
}

var butao = document.getElementById("butao");

function enviar(){
    
}
butao.onmouseover = enviar;
//onload = 


function validaTelefone (phone) {
  var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
  return regex.test(phone);
}

function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}




