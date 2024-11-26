// 01 - Use o F1 para inicar um novo terminal
// 02 - instale o babel usando o comando "npm install --save-dev @babel/core @babel/cli"
// 03 - após a instalação vá no arquivo package,json e adicione este código acima de devDependencies:
// "scripts": {
//     "build": "babel src -d dist"
// },
// 04 - Crie a pasta src para que o comando build possa funcionar
// 05 - Instale o plugin do babel preset com o comando "npm install --save-dev @babel/preset-env"
// 07 - crie o arquivo de configiração do babel com o nome de "babel.config.json", dentro dele adicione o código do plugin:
// {
//     "presets": ["@babel/preset-env"]
// }

// Criação de objeto com os dados dos alunos:
const alunosAvaliados = [
    { nome: 'Arthur', nota: 7 },
    { nome: 'Luffy', nota: 3 },
    { nome: 'Gabriela', nota: 8 },
    { nome: 'Enzo', nota: 5 },
    { nome: 'Marcos', nota: 10 },
    { nome: 'Manoel', nota: 2 },
    { nome: 'Felipe', nota: 1 },
    { nome: 'Elektra', nota: 9 },
    { nome: 'Moona', nota: 3 },
    { nome: 'Matheus', nota: 1 }
];

// Função para apresentação dos alunos aprovados:
const relatorioDosAlunosAprovados = (alunosAvaliados) =>
    alunosAvaliados.filter(alunosAvaliados => alunosAvaliados.nota >= 6);

const alunosQuePassaram = relatorioDosAlunosAprovados(alunosAvaliados);
console.log("Estes foram os alunos que PASSARAM !!! São incriveis");
console.log(alunosQuePassaram);

// Função para apresentação dos alunos reprovados:
const relatorioDosAlunosReprovados = (alunosAvaliados) =>
    alunosAvaliados.filter(alunosAvaliados => alunosAvaliados.nota <= 5);

const alunosQueReprovaram = relatorioDosAlunosReprovados(alunosAvaliados);
console.log("Estes foram os alunos que REPROVARAM em Frontend. Mais sorte na proxima :(");
console.log(alunosQueReprovaram);