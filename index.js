function calculateSalary(salario, vendas) {
	let comissao;
	if (vendas <= 1200) {
		comissao = vendas * 3 / 100;
	} else {
		comissao = vendas * 5 / 100;
	};
	return (salario + comissao);
}
console.log("Salário: R$" + calculateSalary(1000, 1000).toFixed(2));
console.log("Salário: R$" + calculateSalary(1000, 1500).toFixed(2)); 
console.log("");

function cashMachine(valorSaque, salarioFixo, vendas) {
    let moedas =    [0  ,0  ,0 ,0 ,0 ,0,0];
    let valoresMoedas =  [200,100,50,20,10,5,2];
    let salario = calculateSalary(salarioFixo, vendas);
    let result = "";
    if(valorSaque <= salario) {
        salario = salario - saque;
        while (valorSaque > 1) {
            if(valorSaque >= 200) {
                valorSaque = valorSaque - 200;
                moedas[0]++;
            }
            else if(valorSaque >= 100) {
                valorSaque = valorSaque - 100;
                moedas[1]++;
            }
            else if(valorSaque >= 50) {
                valorSaque = valorSaque - 50;
                moedas[2]++;
            }
            else if(valorSaque >= 20) {
                valorSaque = valorSaque - 20;
                moedas[3]++;
            }
            else if(valorSaque >= 10) {
                valorSaque = valorSaque - 10;
                moedas[4]++;
            }
            else if(valorSaque >= 5) {
                valorSaque = valorSaque - 5;
                moedas[5]++;
            }
            else if(valorSaque >= 2) {
                valorSaque = valorSaque - 2;
                moedas[6]++;
            }
        }
        salario = salario + valorSaque;
        for (let i = 0; i < moedas.length; i++) {
            let totalMoedas = moedas[i];   
            let contMoeda = valoresMoedas[i];
            if (totalMoedas > 0) {
                if (totalMoedas == 1) {
                    result += `1 nota de R$`;
                }
                else {
                    result += `${totalMoedas} notas de R$`;
                }
                result += `${contMoeda}, `;
            }
        }
    }
    else {
        result += "Saldo infuficiente, ";
    }
    result += `Saldo Atual: R$${salario.toFixed(2)}`;
    return result;
}
console.log(cashMachine(1004, 1000, 100));
console.log(cashMachine(1002, 1000, 1500));
console.log("");


function calculateStock(quantEstoque, maxEstoque, minEstoque) {
    let mediaEstoque = (maxEstoque + minEstoque) / 2;

    if (quantEstoque >= mediaEstoque) {
        return 'Não efetuar compra';
    }
    else {
        return 'Efetuar compra';
    }
}
console.log( calculateStock(150, 200, 100) );
console.log( calculateStock(149, 200, 100) );
console.log("");    

function anoBissexto(ano) {
    if (ano % 4 == 0 && (!(ano % 100 == 0) || ano % 400 == 0)) {
        return true;
    }
    return false;
}
function calculateAge(nascAno, atualAno) {
    let anos = atualAno - nascAno;
    let meses = (atualAno - nascAno) * 12;
    let semanas = 0;
    let dias = 0;
    for (let ano = nascAno; ano <= atualAno; ano++) {
        if (anoBissexto(ano)){
            semanas += 52.28;
            dias += 366;
        }
        else {
            semanas += 52.14;
            dias += 365;
        }
    }    
    return `Idade em anos: ${anos}, idade em meses: ${meses}, idade em semanas: ${semanas.toFixed(2)}, idade em dias: ${dias}`;
}
console.log( calculateAge(1998, 2022) )
console.log("");

function getDiagonal( matriz ) {
    let diag = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++){
            if (i == j) {
                diag.push(matriz[i][j]);
            }
        }
    }
    return diag;
}
let matriz2x2 = [ [1, 2], [3, 4] ];
let matriz3x3 = [ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ];
let matriz4x4 = [ [1, 2, 3, 4] , [5, 6, 7, 8] , [9, 10, 11, 12] , [13, 14, 15, 16] ];
console.log(getDiagonal(matriz2x2));
console.log(getDiagonal(matriz3x3));
console.log(getDiagonal(matriz4x4));