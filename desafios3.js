// 1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// 2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
contador2 = 10;
while (contador2 >= 0) {
    console.log(contador2)
    contador2--;
}

// 3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contagemRegressiva = prompt('Informe um número para a contagem regressiva: ');
while (contagemRegressiva >= 0) {
    console.log(contagemRegressiva);
    contagemRegressiva--;
}

// 4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contagemProgressiva = prompt('Informe um número para a contagem progressiva: ');
let contador4 = 0;
while (contador4 <= contagemProgressiva) {
    console.log(contador4);
    contador4++;
}