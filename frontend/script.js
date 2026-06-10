const lista = document.getElementById("lista");

async function carregarColaboradores() {

    const resposta = await fetch(
        "http://localhost:3000/colaboradores"
    );

    const colaboradores = await resposta.json();

    lista.innerHTML = "";

    colaboradores.forEach(colaborador => {

        lista.innerHTML += `
        <div class="card">

            <h3>${colaborador.nome_completo}</h3>

            <p>Idade: ${colaborador.idade}</p>

            <p>Cargo: ${colaborador.cargo}</p>

            <p>Salário: R$ ${colaborador.salario}</p>

            <p>Setor: ${colaborador.setor}</p>

            <p>Status: ${colaborador.status}</p>

        </div>
        `;
    });
}

carregarColaboradores();

document
.getElementById("formColaborador")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const novoColaborador = {

        nome_completo:
        document.getElementById("nome").value,

        idade:
        Number(document.getElementById("idade").value),

        cargo:
        document.getElementById("cargo").value,

        salario:
        Number(document.getElementById("salario").value),

        tempo_empresa:
        Number(document.getElementById("tempoEmpresa").value),

        data_admissao:
        document.getElementById("dataAdmissao").value,

        setor:
        document.getElementById("setor").value,

        status:
        document.getElementById("status").value
    };

    await fetch(
        "http://localhost:3000/colaboradores",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(
                novoColaborador
            )
        }
    );

    alert("Colaborador cadastrado!");

    document
    .getElementById("formColaborador")
    .reset();

    carregarColaboradores();
});