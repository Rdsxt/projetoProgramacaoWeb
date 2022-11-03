function verificarStatus(media){
    let status;

    if(media >= 6){
        status = "Aprovado"
    }else if (media >= 2 && media <= 6){
        status = "Avaliação Final"
    }else{
        status = "Reprovado"
    }

    return status
}

async function exibirAlunos(){
    let resultado = document.getElementById("container")
    const resposta = await fetch("dados.json")
    const dados = await resposta.json();
    let quantidadeCards = document.getElementsByClassName("card").length
    let media;

    if (quantidadeCards < 25){
        dados.pessoas.forEach(element => {
            media = element.media
            resultado.innerHTML += 
            `
            <div class="card">
                <img src="${element.image}">
                <p><strong>Nome: </strong>${element.nome}</p>
                <p><strong>RGM: </strong>${element.rgm}</p>
                <p><strong>Av.Parcial: </strong>${element.avParcial}</p>
                <p><strong>Exercicios: </strong>${element.exercicios}</p>
                <p><strong>Av.Regimental: </strong>${element.avRegimental}</p>
                <p><strong>Média: </strong>${element.media}</p>
                <p><strong>Status: </strong>${verificarStatus(media)}</p>
            </div>
            `
        });
    }
}