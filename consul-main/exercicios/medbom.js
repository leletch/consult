// Importa a função de triagem
import { triagem } from './triagem.js';

// Array de pacientes
const pacientes = [
    {
        nome: 'Alan Turing',
        setor: 'Clínico Geral',
    },
    {
        nome: 'Ada Lovelace',
        setor: 'Ortopedista',
    },
    {
        nome: 'Grace Hopper',
        setor: 'Cardiologista',
    },
    {
        nome: 'Linus Torvalds',
        setor: 'Clínico Geral',
    },
    {
        nome: 'Margaret Hamilton',
        setor: 'Clínico Geral',
    },
    {
        nome: 'Tim Berners-Lee',
        setor: 'Cardiologista',
    },
];

// Filas de triagem para cada setor médico
const triagemClinicoGeral = [];
const triagemOrtopedista = [];
const triagemCardiologista = [];

// Função para encaminhar pacientes para triagem com prioridades
function encaminharParaTriagem(paciente) {
    switch (paciente.setor) {
        case 'Clínico Geral':
            triagemClinicoGeral.push(triagem(paciente));
            break;
        case 'Ortopedista':
            triagemOrtopedista.push(triagem(paciente));
            break;
        case 'Cardiologista':
            triagemCardiologista.push(triagem(paciente));
            break;
        default:
            console.log('Setor médico inválido');
    }
}

// Função para organizar a fila de triagem com base nas prioridades
function organizarFilaDeTriagem() {
    triagemClinicoGeral.sort((a, b) => prioridades.indexOf(a.prioridade) - prioridades.indexOf(b.prioridade));
    triagemOrtopedista.sort((a, b) => prioridades.indexOf(a.prioridade) - prioridades.indexOf(b.prioridade));
    triagemCardiologista.sort((a, b) => prioridades.indexOf(a.prioridade) - prioridades.indexOf(b.prioridade));
}

// Função para simular a consulta
function realizarConsulta(paciente) {
    console.log(`Paciente ${paciente.nome} está sendo atendido pelo médico ${paciente.setor}`);
    // Lógica da consulta e diagnóstico final
}

// Array de prioridades de atendimento
const prioridades = ['emergência', 'urgente', 'preferencial', 'comum'];

// Simulação do fluxo de pacientes
pacientes.forEach(paciente => {
    encaminharParaTriagem(paciente);
});

// Organizar filas de triagem com base nas prioridades
organizarFilaDeTriagem();

// Simulação da chamada para consulta
// Supondo que todos os pacientes da fila de triagem serão atendidos imediatamente
triagemClinicoGeral.forEach(realizarConsulta);
triagemOrtopedista.forEach(realizarConsulta);
triagemCardiologista.forEach(realizarConsulta);

//a expressão prioridades.indexOf(a.prioridade) - prioridades.indexOf(b.prioridade) 
//retorna um valor negativo se a prioridade de a for considerada menor que a de b, 
//um valor positivo se a prioridade de a for considerada maior que a de b, 
//e zero se as prioridades forem iguais.