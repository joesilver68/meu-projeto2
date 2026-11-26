const tarefas = [
  { id: 1, titulo: "Configurar repositório Git", concluida: true },
  { id: 2, titulo: "Criar estrutura do portfólio", concluida: true },
  { id: 3, titulo: "Fazer push para o GitHub", concluida: false }
];

function listarTarefas(lista) {
  console.log("=== Lista de Tarefas do Curso ===");
  lista.forEach(t => {
    const estado = t.concluida ? "[x]" : "[ ]";
    console.log(`${estado} ${t.id}. ${t.titulo}`);
  });
}

listarTarefas(tarefas);