
async function exibirAlunos(){
    let resultado = document.getElementById("container")
    const resposta = await fetch("dados.json")
    const dados = await resposta.json();

    dados.pessoas.forEach(element => {
        resultado.innerHTML += 
            `
            <div class="card">
                <p><strong>Nome: </strong>${element.nome}</p>
                <p><strong>RGM: </strong>${element.rgm}</p>
                <p><strong>Av.Parcial: </strong>${element.avParcial}</p>
                <p><strong>Exercicios: </strong>${element.exercicios}</p>
                <p><strong>Av.Regimental: </strong>${element.avRegimental}</p>
                <p><strong>Média: </strong>${element.media}</p>
                <p><strong>Status: </strong>${element.status}</p>
            </div>
            `
        

    
    });
}