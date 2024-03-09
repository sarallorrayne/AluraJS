// 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt('Que dia é hoje? ');

if (diaSemana == 'Sábado' || 'Domingo') {
    alert('Bom fim de semana!');
} else if( diaSemana == 'Segunda-Feira' || 'Terça-Feira' || 'Quarta-Feira' || 'Quinta-Feira' || 'Sexta-Feira') {
    alert('Boa semana!');
} else {
    alert('Entrada inválida.');
}

// 2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('Informe um número: ');

if (numero > 0) {
    alert('Esse número é positivo!')
} else {
    alert('Esse número é negativo!')
}

// 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
pontuacao = 105;

if (pontuacao >= 100) {
    alert('Parabéns, você venceu!')
} else {
    alert('Tente novamente para ganhar.')
}

// 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
saldoConta = 500;
alert(`Seu saldo é de R$${saldoConta}.`);

// 5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Informe seu nome: ');
alert(`Bem vindo(a), ${nome}!`);