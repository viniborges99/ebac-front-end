
var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7],
    [8, 8, 8, 8],
    [6, 6, 6, 6, 6]
]

var nota = 0;
for (var i = 0; i < alunos.length; i++) {

    nota = 0
    notasAluno = alunos[i]
    console.log("Aluno: " + parseInt(i + 1));
    console.log("Notas: " + notasAluno);

    for (c = 0; c < notasAluno.length; c++) {
        nota += notasAluno[c];
    }

    media = nota / 4;

    if (media >= 7) {
        resultado = "aprovado";
    } else {
        resultado = "reprovado";
    }

    console.log("Media: " + media + " - " + resultado);

}
function calcularMedia(notas) {

    let soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao(notas) {

    let media = calcularMedia(notas); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// console.log()

//console.log( "Média: " + calcularMedia([8, 8, 7]))
console.log(aprovacao([8, 8, 7]));


//console.log( "Média: " + calcularMedia([8, 8, 10, 6]))
console.log(aprovacao([8, 8, 10, 6]));


//console.log( "Média: " + calcularMedia([9, 6]))
console.log(aprovacao([9, 6]));






document.addEventListener("submit", function (evento) {
    evento.preventDefault();
    evento.stopPropagation();
    let formulario = document.getElementById('formulario-01');
    let dados = new FormData(formulario);
    let objeto = {};
    let notas = [];
    for (let key of dados.keys()) {
        objeto[key] = dados.get(key);

        notas.push(parseInt(dados.get(key)));

    }
    console.log(notas);
    console.log(objeto);
    texto = aprovacao(notas)
    document.getElementById('resultado').innerHTML = texto;

});

