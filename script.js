let number = 11;
let tempo;

function iniciar() {
  tempo = setInterval(alarmeAniversario, 10000); // a função executa de 10 em 10 segundos
}

function alarmeAniversario() {
  iniciar();

  const d2 = "2023-02-27"; // pode ser também window.prompt("Qual a data do seu aniversário?");

  const diffInMs = new Date(d2) - new Date();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  if (diffInDays == 0) {
    window.alert("Feliz Aniversário");
    clearInterval(tempo);
  } else {
    window.alert(`Faltam ${diffInDays} dia(s) para o seu aniversário`);
  }
}

alarmeAniversario();
