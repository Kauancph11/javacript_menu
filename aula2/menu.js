import PromptSync from "prompt-sync";

const prompt = PromptSync

//menu para escolher qual exercicio o usuario escolher

let exercicio;
let continuar;

do {
    exercicio = parseInt(prompt("Digite um numero que represente um exercicio de 1 a 4 "))
    switch (exercicio) {
        case 1:
            //chamando função
            helloWorld("Ola mundo!")
            break;
        case 2:
            //chamando objeto
            let aluno = {
                nome: "rebeca",
                idade: 19,
                hardskills:["figma", "HTML", "CSS", "Web responsive"]

            }

            console.log(aluno.nome, aluno.idade, aluno.hardskills)
            console.log("objeto aluno", aluno)
            break;
            
        default:
            console.log("Digite um numero que represente um exercicio de 1 a 4")
            break;
    }
    continuar = prompt("deseja continuar ver outros exercicios? Digite s ou n ").toLocaleLowerCase()
    }

while (continuar === "s");

function helloWorld(frase) {
    console.log(frase)
}

