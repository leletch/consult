interface Paciente {
    nome: string
    setor: string
    prioridade?: "emergência" | "urgente" | "preferencial" | "comum"
}

interface Ala {
    nome: string
    fila: Paciente[]
}

interface Consultorio {
    nome: string
    pacientes: Paciente[]
    alas: Ala[]
}
//interface é a estrutura esperada de cada função!!!!!!!!!
