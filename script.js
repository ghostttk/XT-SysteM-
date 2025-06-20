const sales = [
  { id: "001", prod: "Camisa", valor: 89.9, status: "Concluído" },
  { id: "002", prod: "Caneca", valor: 45.0, status: "Pendente" },
  { id: "003", prod: "Boné", valor: 59.9, status: "Enviado" },
];

const tbody = document.getElementById("sales-table");
sales.forEach(s => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${s.id}</td><td>${s.prod}</td><td>R$ ${s.valor.toFixed(2)}</td><td>${s.status}</td>`;
  tbody.appendChild(tr);
});
