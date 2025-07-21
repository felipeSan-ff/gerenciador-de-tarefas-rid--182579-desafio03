document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-tarefa");
  const lista = document.getElementById("lista-tarefas");
  const contador = document.getElementById("contador");

  let tarefasConcluidas = 0;

  function atualizarContador() {
    contador.textContent = tarefasConcluidas;
  }

  
  function criarTarefa(nome, etiqueta) {
    const li = document.createElement("li");
    li.classList.add("tarefa");

    const info = document.createElement("div");
    info.classList.add("info");

    const nomeTarefa = document.createElement("strong");
    nomeTarefa.textContent = nome;

    const detalhes = document.createElement("div");
    detalhes.classList.add("detalhes");

    if (etiqueta.trim() !== "") {
      const spanEtiqueta = document.createElement("span");
      spanEtiqueta.classList.add("etiqueta");
      spanEtiqueta.textContent = etiqueta;
      detalhes.appendChild(spanEtiqueta);
    }

    info.appendChild(nomeTarefa);
    info.appendChild(detalhes);

    const botao = document.createElement("button");
    botao.classList.add("concluir");
    botao.textContent = "Concluir";

    
    botao.addEventListener("click", () => {
      if (!li.classList.contains("concluida")) {
        li.classList.add("concluida");
        tarefasConcluidas++;
        atualizarContador();
      }
    });

    li.appendChild(info);
    li.appendChild(botao);
    lista.appendChild(li);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeInput = document.getElementById("nome-tarefa");
    const etiquetaInput = document.getElementById("etiqueta");

    const nome = nomeInput.value.trim();
    const etiqueta = etiquetaInput.value.trim();

    if (nome !== "") {
      criarTarefa(nome, etiqueta);
      nomeInput.value = "";
      etiquetaInput.value = "";
    }
  });
});